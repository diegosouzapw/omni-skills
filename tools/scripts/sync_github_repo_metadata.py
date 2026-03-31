#!/usr/bin/env python3
"""Check or apply GitHub repository metadata from data/project_identity.json."""

from __future__ import annotations

import argparse
import json
import os
import subprocess
import urllib.request
from pathlib import Path
from typing import Any


REPO_ROOT = Path(__file__).resolve().parents[2]
API_ACCEPT = "application/vnd.github+json"


def load_json(path: Path) -> dict[str, Any]:
    return json.loads(path.read_text(encoding="utf-8"))


def gh_auth_available() -> bool:
    if os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN"):
        return True
    try:
        subprocess.run(
            ["gh", "auth", "status"],
            check=True,
            capture_output=True,
            text=True,
        )
        return True
    except (OSError, subprocess.CalledProcessError):
        return False


def build_desired_metadata(repo_root: Path) -> dict[str, Any]:
    identity = load_json(repo_root / "data" / "project_identity.json")
    return {
        "owner": identity["github_owner"],
        "repo": identity["repo_slug"],
        "description": identity["github_description"],
        "homepage": identity["homepage_url"],
        "topics": [topic.strip().lower() for topic in identity.get("github_topics", [])],
    }


def fetch_json(url: str) -> dict[str, Any]:
    gh_endpoint = url.removeprefix("https://api.github.com/")
    if gh_endpoint != url and gh_auth_available():
        result = subprocess.run(
            ["gh", "api", gh_endpoint, "-H", f"Accept: {API_ACCEPT}"],
            check=True,
            capture_output=True,
            text=True,
        )
        return json.loads(result.stdout)

    token = os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN")
    request = urllib.request.Request(
        url,
        headers={
            "Accept": API_ACCEPT,
            "User-Agent": "awesome-omni-skills-repo-metadata-sync",
            **({"Authorization": f"Bearer {token}"} if token else {}),
        },
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def fetch_current_metadata(desired: dict[str, Any]) -> dict[str, Any]:
    owner = desired["owner"]
    repo = desired["repo"]
    repo_data = fetch_json(f"https://api.github.com/repos/{owner}/{repo}")
    topics_data = fetch_json(f"https://api.github.com/repos/{owner}/{repo}/topics")
    return {
        "owner": owner,
        "repo": repo,
        "description": str(repo_data.get("description") or ""),
        "homepage": str(repo_data.get("homepage") or ""),
        "topics": sorted(str(topic).lower() for topic in topics_data.get("names", [])),
        "url": str(repo_data.get("html_url") or ""),
    }


def build_diff(desired: dict[str, Any], current: dict[str, Any]) -> dict[str, dict[str, Any]]:
    diff: dict[str, dict[str, Any]] = {}
    for key in ("description", "homepage", "topics"):
        desired_value = desired[key]
        current_value = current[key]
        if key == "topics":
            desired_value = sorted(desired_value)
            current_value = sorted(current_value)
        if desired_value != current_value:
            diff[key] = {"desired": desired_value, "current": current_value}
    return diff


def require_gh_auth() -> None:
    if os.environ.get("GH_TOKEN") or os.environ.get("GITHUB_TOKEN"):
        return
    try:
        subprocess.run(
            ["gh", "auth", "status"],
            check=True,
            capture_output=True,
            text=True,
        )
    except (OSError, subprocess.CalledProcessError) as error:
        raise RuntimeError(
            "GitHub CLI authentication is required for apply. "
            "Set GH_TOKEN or run gh auth login first."
        ) from error


def gh_api(*args: str, input_json: dict[str, Any] | None = None) -> None:
    command = ["gh", *args]
    kwargs: dict[str, Any] = {
        "check": True,
        "capture_output": True,
        "text": True,
    }
    if input_json is not None:
        kwargs["input"] = json.dumps(input_json)
    try:
        subprocess.run(command, **kwargs)
    except OSError as error:
        raise RuntimeError("GitHub CLI is required for apply mode.") from error
    except subprocess.CalledProcessError as error:
        raise RuntimeError(error.stderr.strip() or error.stdout.strip() or "gh command failed") from error


def apply_metadata(desired: dict[str, Any]) -> None:
    require_gh_auth()
    owner = desired["owner"]
    repo = desired["repo"]
    repo_ref = f"repos/{owner}/{repo}"
    gh_api(
        "api",
        "-X",
        "PATCH",
        repo_ref,
        "-H",
        f"Accept: {API_ACCEPT}",
        "-f",
        f"description={desired['description']}",
        "-f",
        f"homepage={desired['homepage']}",
    )
    gh_api(
        "api",
        "-X",
        "PUT",
        f"{repo_ref}/topics",
        "-H",
        f"Accept: {API_ACCEPT}",
        "--input",
        "-",
        input_json={"names": desired["topics"]},
    )


def main() -> int:
    parser = argparse.ArgumentParser(description="Check or apply GitHub repo metadata from project_identity.json.")
    parser.add_argument("command", choices=["print", "check", "apply"], help="Operation to run")
    parser.add_argument("--repo-root", default=str(REPO_ROOT), help="Repository root")
    args = parser.parse_args()

    repo_root = Path(args.repo_root).resolve()
    desired = build_desired_metadata(repo_root)
    if args.command == "print":
        print(json.dumps({"desired": desired}, indent=2))
        return 0

    current = fetch_current_metadata(desired)
    diff = build_diff(desired, current)
    if args.command == "check":
        report = {"desired": desired, "current": current, "diff": diff, "ok": not diff}
        print(json.dumps(report, indent=2))
        return 0 if not diff else 1

    apply_metadata(desired)
    refreshed = fetch_current_metadata(desired)
    refreshed_diff = build_diff(desired, refreshed)
    report = {
        "desired": desired,
        "current": refreshed,
        "diff": refreshed_diff,
        "ok": not refreshed_diff,
    }
    print(json.dumps(report, indent=2))
    return 0 if not refreshed_diff else 1


if __name__ == "__main__":
    raise SystemExit(main())
