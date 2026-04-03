#!/usr/bin/env python3
"""Print a compact set of official platform and compliance reference links for UGC ad operations."""

LINKS = {
    "TikTok": [
        ("About Spark Ads", "https://ads.tiktok.com/help/article/about-spark-ads"),
        ("Spark Ads authorization code", "https://ads.tiktok.com/help/article/how-to-get-authorization-code"),
        ("Ad creative specifications", "https://ads.tiktok.com/help/article/ad-creative-specifications"),
    ],
    "Meta": [
        ("About Partnership Ads", "https://www.facebook.com/business/help/341425252616329?id=2211789479060861"),
        ("Create a Partnership Ad", "https://www.facebook.com/business/help/3164740753690718"),
        ("Advertising Standards", "https://www.facebook.com/business/help/488043719226449"),
    ],
    "YouTube and Google": [
        ("Video ad requirements", "https://support.google.com/google-ads/answer/6366843"),
        ("Create a Short", "https://support.google.com/youtube/answer/10059070"),
    ],
    "FTC": [
        ("Disclosures 101 for Social Media Influencers", "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers"),
        (".com Disclosures", "https://www.ftc.gov/business-guidance/resources/com-disclosures-how-make-effective-disclosures-digital-advertising"),
        ("Health Products Compliance Guidance", "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance"),
    ],
}


def main() -> None:
    for section, entries in LINKS.items():
        print(f"\n{section}")
        print("-" * len(section))
        for label, url in entries:
            print(f"- {label}: {url}")


if __name__ == "__main__":
    main()
