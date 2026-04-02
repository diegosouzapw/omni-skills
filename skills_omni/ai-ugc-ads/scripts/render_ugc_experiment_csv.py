#!/usr/bin/env python3
from pathlib import Path
import csv

ROOT = Path(__file__).resolve().parent.parent
assets_dir = ROOT / "assets"
assets_dir.mkdir(parents=True, exist_ok=True)
outfile = assets_dir / "ugc-experiment-tracker.csv"

headers = [
    "experiment_id",
    "date_range",
    "platform",
    "placement",
    "objective",
    "creator_type",
    "creator_name_or_avatar",
    "content_format",
    "hook_type",
    "body_type",
    "cta_type",
    "rights_status",
    "amplification_path",
    "spend",
    "impressions",
    "views_or_watch_metric",
    "clicks",
    "conversions",
    "approval_status",
    "decision",
    "next_action",
    "notes",
]

sample_rows = [
    {
        "experiment_id": "EXP-001",
        "date_range": "2026-03-27 to 2026-03-31",
        "platform": "TikTok",
        "placement": "In-Feed",
        "objective": "Conversion",
        "creator_type": "hybrid",
        "creator_name_or_avatar": "Creator A",
        "content_format": "Problem-Solution",
        "hook_type": "Pain point",
        "body_type": "Demo",
        "cta_type": "Direct",
        "rights_status": "approved",
        "amplification_path": "Spark Ads planned",
        "spend": "",
        "impressions": "",
        "views_or_watch_metric": "",
        "clicks": "",
        "conversions": "",
        "approval_status": "pending review",
        "decision": "",
        "next_action": "",
        "notes": "",
    }
]

with outfile.open("w", newline="", encoding="utf-8") as f:
    writer = csv.DictWriter(f, fieldnames=headers)
    writer.writeheader()
    writer.writerows(sample_rows)

print(outfile)
