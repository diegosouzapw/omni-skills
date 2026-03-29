# ✅ Quality Bar (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/QUALITY-BAR.md) · 🇪🇸 [es](../../../es/docs/contributors/QUALITY-BAR.md) · 🇫🇷 [fr](../../../fr/docs/contributors/QUALITY-BAR.md) · 🇩🇪 [de](../../../de/docs/contributors/QUALITY-BAR.md) · 🇮🇹 [it](../../../it/docs/contributors/QUALITY-BAR.md) · 🇷🇺 [ru](../../../ru/docs/contributors/QUALITY-BAR.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/QUALITY-BAR.md) · 🇯🇵 [ja](../../../ja/docs/contributors/QUALITY-BAR.md) · 🇰🇷 [ko](../../../ko/docs/contributors/QUALITY-BAR.md) · 🇸🇦 [ar](../../../ar/docs/contributors/QUALITY-BAR.md) · 🇮🇳 [in](../../../in/docs/contributors/QUALITY-BAR.md) · 🇹🇭 [th](../../../th/docs/contributors/QUALITY-BAR.md) · 🇻🇳 [vi](../../../vi/docs/contributors/QUALITY-BAR.md) · 🇮🇩 [id](../../../id/docs/contributors/QUALITY-BAR.md) · 🇲🇾 [ms](../../../ms/docs/contributors/QUALITY-BAR.md) · 🇳🇱 [nl](../../../nl/docs/contributors/QUALITY-BAR.md) · 🇵🇱 [pl](../../../pl/docs/contributors/QUALITY-BAR.md) · 🇸🇪 [sv](../../../sv/docs/contributors/QUALITY-BAR.md) · 🇳🇴 [no](../../../no/docs/contributors/QUALITY-BAR.md) · 🇩🇰 [da](../../../da/docs/contributors/QUALITY-BAR.md) · 🇫🇮 [fi](../../../fi/docs/contributors/QUALITY-BAR.md) · 🇵🇹 [pt](../../../pt/docs/contributors/QUALITY-BAR.md) · 🇷🇴 [ro](../../../ro/docs/contributors/QUALITY-BAR.md) · 🇭🇺 [hu](../../../hu/docs/contributors/QUALITY-BAR.md) · 🇧🇬 [bg](../../../bg/docs/contributors/QUALITY-BAR.md) · 🇸🇰 [sk](../../../sk/docs/contributors/QUALITY-BAR.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/QUALITY-BAR.md) · 🇮🇱 [he](../../../he/docs/contributors/QUALITY-BAR.md) · 🇵🇭 [phi](../../../phi/docs/contributors/QUALITY-BAR.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/QUALITY-BAR.md)

---


>**Mga minimum na kinakailangan at rekomendasyon para sa isang kasanayang tatanggapin sa repositoryo ng Omni Skills.**

Para sa paggabay sa pag-akda na partikular na naglalayong sa mga marka ng nangungunang banda, tingnan ang [High-Score Playbook](HIGH-SCORE-PLAYBOOK.md).

Kasalukuyang benchmark para sa na-publish na catalog:

- 32 nai-publish na mga kasanayan
- average na marka ng kalidad `96.3`
- average na marka ng pinakamahusay na kasanayan `98.7`
- average na marka ng seguridad `95.0`---

## 🔒 Required (Must Pass)

| # | Kinakailangan | Paano I-verify |
|:--|:------------|:--------------|
| 1️⃣ |**May bisang frontmatter**| `python3 tools/scripts/validate_skills.py` |
| 2️⃣ |**Malinaw na paglalarawan**| Dapat ipaliwanag ng one-liner kung ano ang nagagawa ng kasanayan (10+ character) |
| 3️⃣ |**Direktoryo na tumutugma sa pangalan**| Ang field na `name:` ​​ay eksaktong tumutugma sa pangalan ng folder |
| 4️⃣ |**Seksyon ng Pangkalahatang-ideya**| Maikling paliwanag ng layunin sa markdown body |
| 5️⃣ |**Kailan Gamitin ang seksyon**| Hindi bababa sa 2 partikular na sitwasyon sa paggamit |
| 6️⃣ |**Mga naaaksyong tagubilin**| Step-by-step na content na maaaring isagawa ng isang ahente ng AI |
| 7️⃣ |**Nabuo na metadata**| Ang Validator ay matagumpay na naglalabas ng `kasanayan/<kasanayan>/metadata.json` |---

## ⭐ Recommended (Improves Score)

| # | Rekomendasyon | Epekto ng Kalidad |
|:--|:-----------------|:-------------|
| 8️⃣ |**Mga Halimbawa**— kahit isang kongkretong halimbawa na may inaasahang output | 📈 Kalidad +10-15 |
| 9️⃣ |**Pinakamahuhusay na kagawian**— ✅ Gawin / ❌ Huwag gabayan | 📈 Pinakamahuhusay na Kasanayan +5 |
| 🔟 |**Sinubukan gamit ang isang tool**— na-verify gamit ang kahit isang AI coding assistant | 📈 Kalidad +5 |
| 1️⃣1️⃣ |**Tags**— may-katuturang mahahanap na mga tag para sa pagtuklas | 📈 Pinakamahuhusay na Kasanayan +10 |
| 1️⃣2️⃣ |**Kategorya**— itinalaga sa isang kanonikal na kategorya | 📈 Pinakamahuhusay na Kasanayan +10 |
| 1️⃣3️⃣ |**Pag-troubleshoot**— kongkretong gabay na `Mga Sintomas` at `Solusyon` | 📈 Pinakamahuhusay na Kasanayan +5-10 |
| 1️⃣4️⃣ |**Mga asset ng lokal na suporta**— `mga sanggunian/`, `mga script/`, at pinakamainam na `mga halimbawa/` na naka-link mula sa kasanayan | 📈 Pinakamahuhusay na Kasanayan +10 |
| 1️⃣5️⃣ |**Healthy classification**— maturity L3, kalidad 85+, pinakamahusay na kagawian 90+ | 📈 Pangkalahatang tier |
| 1️⃣6️⃣ |**Walang kritikal na natuklasan sa seguridad**— static scanner pass clean | 🛡️ Seguridad 100 |---

## ❌ Reasons for Rejection

| Isyu | Bakit |
|:------|:----|
| ❌ Nawawala o di-wastong frontmatter | Sinisira ang pipeline ng pagpapatunay |
| ❌ Hindi tumutugma ang pangalan sa direktoryo | Breaks catalog generation |
| ❌ Walang laman o walang kuwentang maikling paglalarawan | Hindi matuklasan ng mga user ang kasanayan |
| ❌ Walang naaaksyunan na content (mga link o stub lang) | Walang maipatupad ang mga ahente |
| ❌ Doblehin nang walang malinaw na pagpapabuti | Magdagdag ng halaga, huwag i-clone |
| ❌ Nakakasakit na content na walang `risk: offensive` tag | Kaligtasan at pagsunod |
| ❌ Mga kritikal na natuklasan sa seguridad | Maagap na exfiltration, mapanirang utos, atbp. |---

## 🧪 Verify Locally

```bash
# Run validation
npm run validate

# Check your scores
cat skills/<your-skill>/metadata.json | jq '.quality, .best_practices, .security'

# Full build + smoke check
npm run build
npm run smoke
```

---

## 📊 Score Reference

| Dimensyon | Mahusay | Mabuti | Nangangailangan ng Trabaho |
|:----------|:----------|:-----|:-----------|
| ⭐**Kalidad**| 80+ (platinum) | 60-79 (ginto/pilak) | <60 (bronze/starter) |
| 📋**Pinakamahuhusay na Kasanayan**| 90+ (mahusay) | 70-89 (mabuti) | <70 (patas/kailangan-trabaho) |
| 🛡️**Seguridad**| 95+ (pinatigas) | 80-94 (secure) | <80 (kailangan ng pagsusuri) |
| 🎯**Maturity**| L3 (mga script+pagsusulit) | L2 (mga tagubilin) ​​| L1 (metadata lang) |---

## 🧭 What High Scores Require

Para tuloy-tuloy na maabot ang nangungunang banda, dapat kasama sa isang kasanayan ang:

- isang malakas na paglalarawan ng frontmatter na nagpapaliwanag sa parehong**kung ano**ang ginagawa ng kasanayan at**kailan**ito dapat gamitin
- mga tahasang seksyon para sa `Kailan Gagamitin`, `Trabaho`, `Mga Halimbawa`, `Pinakamahuhusay na Kagawian`, `Pag-troubleshoot`, at `Mga Karagdagang Mapagkukunan`
- lokal na materyal sa suporta sa ilalim ng `references/`, `scripts/`, at ideal na `examples/`, direktang naka-link mula sa `SKILL.md`
- metadata ng ahente sa ilalim ng `agents/openai.yaml` kapag ang kasanayan ay sinadya na direktang gamitin sa mga kliyente ng ahente
- isang maliit na talahanayan ng pagpapatakbo o katumbas na mapa ng pagpapatupad kapag ang daloy ng trabaho ay nakikinabang mula dito
- kahit isang runnable na halimbawa na tumuturo sa isang lokal na helper script o repeatable command
- pag-troubleshoot na nakasulat bilang `Mga Sintomas` at `Solusyon`, hindi mga generic na babala
- sapat na depth para maging `L3`, hindi lang well-formatted na prosa
- mas malakas na lalim ng daloy ng trabaho, mga asset ng desisyon, at pagkakaiba-iba ng support-pack kung gusto mo ng top-band na kalidad
- isang support pack na sapat na malalim para pakiramdam na magagamit muli, hindi lamang naroroon para sa saklaw ng checkbox
- hindi bababa sa 4 na makabuluhang pamilya ng suporta o ang katumbas na lalim sa mga reusable na file kung gusto mo ang nangungunang banda nang tuluy-tuloy