#!/usr/bin/env python3
import argparse
import json
import sys
import urllib.parse
import urllib.request

API_ENDPOINT = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"


def fetch_report(url: str, strategy: str):
    params = urllib.parse.urlencode({"url": url, "strategy": strategy})
    request_url = f"{API_ENDPOINT}?{params}"
    with urllib.request.urlopen(request_url, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def summarize(report):
    loading = report.get("loadingExperience", {})
    origin = report.get("originLoadingExperience", {})
    lighthouse = report.get("lighthouseResult", {})
    audits = lighthouse.get("audits", {})

    return {
        "final_url": lighthouse.get("finalDisplayedUrl"),
        "categories": {
            "performance_score": lighthouse.get("categories", {})
            .get("performance", {})
            .get("score")
        },
        "field": {
            "url_scope": loading.get("metrics", {}),
            "origin_scope": origin.get("metrics", {}),
            "overall_category": loading.get("overall_category"),
        },
        "lab": {
            "largest_contentful_paint_ms": audits.get("largest-contentful-paint", {}).get("numericValue"),
            "cumulative_layout_shift": audits.get("cumulative-layout-shift", {}).get("numericValue"),
            "interactive_metric_ms": audits.get("interactive", {}).get("numericValue"),
        },
    }


def main():
    parser = argparse.ArgumentParser(description="Collect narrow PageSpeed Insights evidence for one URL.")
    parser.add_argument("--url", required=True, help="Absolute URL to inspect")
    parser.add_argument(
        "--strategy",
        choices=["mobile", "desktop"],
        default="mobile",
        help="PageSpeed strategy to use",
    )
    args = parser.parse_args()

    try:
        report = fetch_report(args.url, args.strategy)
    except Exception as exc:  # pragma: no cover
        print(json.dumps({"error": str(exc)}))
        sys.exit(1)

    print(json.dumps(summarize(report), indent=2, sort_keys=True))


if __name__ == "__main__":
    main()
