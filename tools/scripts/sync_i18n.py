#!/usr/bin/env python3
"""
i18n Sync Script — Omni Skills
================================================
Updates specific translated docs when English source changes.
Usage: python3 tools/scripts/sync_i18n.py
"""
import os
import sys

# ─── CONFIGURE ───────────────────────────────────────────────────────────────
BASE = "/home/diegosouzapw/dev/ai/omni-skills"

# List the files that were updated here (relative to BASE)
CHANGED_FILES = [
    # "README.md",
    # "docs/users/USAGE.md",
]

# (Load the same translation dictionary and logic as generate_i18n.py)
sys.path.append(os.path.join(BASE, "tools/scripts"))
try:
    import generate_i18n
except ImportError:
    print("❌ Could not import tools/scripts/generate_i18n.py. Run from project root.")
    sys.exit(1)

# ─── MAIN ────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    if not CHANGED_FILES:
        print("⚠️ No CHANGED_FILES configured in sync_i18n.py.")
        print("Edit this script to add paths like 'docs/users/USAGE.md' and run again.")
        sys.exit(0)

    print(f"🔄 Syncing updates for {len(CHANGED_FILES)} files across {len(generate_i18n.LANGS)} languages...")
    
    total = 0
    for code, flag, native in generate_i18n.LANGS:
        lang_dir = f"{generate_i18n.I18N}/{code}"
        
        for fpath in CHANGED_FILES:
            target_path = f"{lang_dir}/{fpath}"
            
            # Re-generate the translation
            content = generate_i18n.generate_translated_doc(code, flag, native, fpath)
            if content:
                # If target directory doesn't exist for some reason, create it
                os.makedirs(os.path.dirname(target_path), exist_ok=True)
                with open(target_path, "w", encoding="utf-8") as f:
                    f.write(content)
                total += 1

    print(f"✅ Synced {total} localized files.")
