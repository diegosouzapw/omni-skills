# Skill PR Workflow (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/contributors/SKILL-PR-WORKFLOW.md) · 🇪🇸 [es](../../../es/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇷 [fr](../../../fr/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇪 [de](../../../de/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇹 [it](../../../it/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇺 [ru](../../../ru/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇯🇵 [ja](../../../ja/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇰🇷 [ko](../../../ko/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇦 [ar](../../../ar/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇳 [in](../../../in/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇹🇭 [th](../../../th/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇻🇳 [vi](../../../vi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇩 [id](../../../id/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇲🇾 [ms](../../../ms/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇱 [nl](../../../nl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇱 [pl](../../../pl/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇪 [sv](../../../sv/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇳🇴 [no](../../../no/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇩🇰 [da](../../../da/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇫🇮 [fi](../../../fi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇹 [pt](../../../pt/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇷🇴 [ro](../../../ro/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇭🇺 [hu](../../../hu/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇬 [bg](../../../bg/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇸🇰 [sk](../../../sk/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇮🇱 [he](../../../he/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇵🇭 [phi](../../../phi/docs/contributors/SKILL-PR-WORKFLOW.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/contributors/SKILL-PR-WORKFLOW.md)

---


Tämä on kanoninen arkistokulku vetopyyntöille, jotka lisäävät tai päivittävät olennaisesti yhtä tai useampaa alkuperäistä osaamista.

Käytä sitä, kun:

- uuden taidon lisääminen kohtaan "taidot/".
- syventää nippua uusilla domain-taitoja
- suuremman tukipaketin laajennuksen toimittaminen
- haaran vahvistaminen yksityisellä tehostajalla ennen kuin ylläpitäjät yhdistävät sen## Target Outcome

Vahva natiivi PR-taito laskee:

- alkuperäinen taito kohdassa "taidot/".
- tarpeeksi sisältöä, jotta julkinen validaattori voi luokitella ja indeksoida sen
- julkisen validoinnin ja testien läpäiseminen
- automaattinen tehostimen käsittely PR:n aikana
- seuranta "skills_omni/" PR, kun parannettuja johdannaisia julkaistaan
- syntyperäinen saanti säilytetään tarvittaessa alkuperäisellä kielellään
- kuratoitu parannettu tuloste kirjoitettu uudelleen englanniksi
- yksisuuntainen alkuperäisestä kuratoituun virtaus, joka ei syötä "skills_omni/"-arvoa takaisin alkuperäisten tehostajien saantiin## Enhancer Outcome States

Julkinen PR-tehostin raportoi nyt neljä ylläpitäjän näkyvää tilaa:

- "valmis".
  Parannettu johdannainen luotiin selkeästi, ja se on kelvollinen lisäjulkaisuun "skills_omni/".
- "alentunut".
  Tehostaja valmistui, mutta se käytti varapolkua tai tuotti varoituksia. Ylläpitäjän tarkastusta odotetaan edelleen ennen kuin johdannainen käsitellään terveenä.
- "estetty".
  Ajon keskeyttivät infrastruktuuri- tai vahvistusongelmat, kuten isännöidyn OmniRoute-preflight-virhe tai ehdokasvahvistusvirhe, jonka pitäisi estää julkaiseminen.
- "epäonnistui".
  Tehostaja osui odottamattomaan ajonaikaiseen virheeseen ja vaatii ylläpitäjän tutkimuksen.## Recommended Branch Shape

Luo kohdistettu haara:```bash
git checkout -b feat/<short-skill-theme>
```

Esimerkkejä:

- "feat/incident-observability-evals".
- "feat/devops-skill-pack".
- "feat/security-skill-pack".## Native Intake Rules

Julkinen sisääntulopinta on tarkoituksella salliva.

Minimi:```text
skills/<skill>/
└── SKILL.md
```

Suositeltava, mutta ei enää pakollinen nauttimiseen:```text
skills/<skill>/
├── SKILL.md
├── agents/openai.yaml
├── references/checklist.md
├── references/<support-file>.md
├── examples/<worked-example>.md
└── scripts/render_<artifact>.py
```

Alkuperäinen panos voi olla karkea, epätäydellinen tai normaalin tukipaketin standardin ulkopuolella. Se on tahallista. "taidot/" on natiivi saantipinta, ei kuratoitu johdannaispinta.

Kielipolitiikka:

- native intake kohdassa "taidot/" voidaan kirjoittaa millä tahansa kielellä
- tehostaja säilyttää alkuperäisen tilannekuvan alkuperää varten toimitetussa muodossa
- Skills_omni/-kohdan kuratoitu johdannainen on aina kirjoitettava englanniksi

Tiukempi toimituksellinen palkki koskee nyt:

- luodut metatiedot ja turvatarkistukset
- yksityisen tehostajan arvostelu
- seurantaan kuroitu johdannainen kohdassa "skills_omni/".## Authoring Sequence

1. Luo `skills/<taito>/SKILL.md`.
2. Lisää frontmatteria, jos voit, mutta puuttuva tai epätäydellinen frontmatter ei enää estä alkuperäistä ottamista itsestään.
3. Lisää "agents/", "references/", "examples/" ja "scripts/", kun sinulla on ne jo.
4. Päivitä data/bundles.json, jos taito syventää olemassa olevaa nippua.
5. Avaa PR. Repo-automaatio hoitaa nyt loput.## Validation Sequence

Osallistujat voivat suorittaa tämän tarkan sekvenssin ennen PR:n avaamista:```bash
npm run validate
npm run build
npm test
git diff --check
```

Jos muutos vaikuttaa myös suoritusaikaan tai pakkauskäyttäytymiseen, suorita myös:```bash
npm run smoke
```

## What Happens Automatically During the PR

Kun PR avautuu tai synkronoituu ja se koskettaa vain natiivia taitojen keruuta koskevia tiedostoja kohdassa "skills/" plus valinnainen "data/bundles.json", julkinen repo käynnistää nyt yksityisen tehostimen automaattisesti.

Nykyinen automaattinen kulku:

1. Julkinen "Validate Skills" -työnkulku suorittaa PR:n ja tarkistaa validoinnin, koontiversion, luodut artefaktit ja testit.
2. Julkinen "Enhance PR Skills" -työnkulku käynnistyy rinnakkain ja käsittelee muuttuneet alkuperäiset taidot yksitellen "live"-tilassa.
3. Tehostaja lukee alkuperäisen taidon kohdasta "skills/", tutkii nykyisiä parhaita käytäntöjä ja kirjoittaa tarkistetun parannetun ehdokkaan yksityiseen työtilaan.
4. Tehostin säilyttää alkupään otoksen tilannekuvan tarvittaessa alkuperäisellä kielellään, mutta kirjoittaa kuratoidun tulosteen uudelleen englanniksi.
5. Tehostajan viestit etenevät takaisin lähde PR:hen.
6. Tehostaja päivittää PR-tilakommentin jokaisen käsitellyn taidon jälkeen eräsummalla ja uusimmalla tilalla.
7. Kun se on valmis, se materialisoi parannetun johdannaisen "skills_omni/"-arvoksi ja avaa tai päivittää täydentävän PR:n julkisessa repossa vain "valmistuneiden" ja "degraded" tulosteiden osalta.
8. Kun PR on yhdistetty "main":ksi, yksityinen repo-tietoinen poller käsittelee uudelleen kaikki muuttuneet alkuperäiset taidot, päivittää "workspace/enhanced/skills/<skill>/" ja pitää yksityisen parannetun perustason linjassa uusimman julkisen alkuperäisen lähteen kanssa.
9. Yhdistyksen jälkeen julkisen julkaisun työnkulku lyö npm-pakettiversion, luo luettelon artefaktit uudelleen, julkaisee julkaisun ja merkitsee uuden version automaattisesti.

Hintarajoitus:

- PR-tehostin käsittelee tällä hetkellä**1 taidon minuutissa**
- PR, jolla on 40 alkuperäistä uutta taitoa, voi siis pysyä tehostajajonossa noin 40 minuuttia
- PR osoittaa, että työ on keskeneräinen CI-ajo sekä edistymiskommentti, joka edistää taitoa taidolta

Osallistujan ei tarvitse ajaa tehostajaa manuaalisesti.## No-Loop Rule For `skills_omni/`

Kuroitu pinta on tarkoituksella yksisuuntainen:

- natiivi syöttö tulee "skills/":n kautta
- yksityinen tehostaja arvioi alkuperäisen syötteen
- kuratoitu tulos ehdotetaan kohtaan "skills_omni/".
- "skills_omni/" ei enää koskaan pidetä alkuperäisenä ottona
- myöhemmät alkuperäiset päivitykset tulevat silti uudelleen "skills/"-komennolla ja korvaavat yksityisen parannetun perustason uudelleenkäsittelyn jälkeen

Arkisto panee nyt täytäntöön tämän rajan:

- suorat julkiset PR:t, jotka muokkaavat `skills_omni/`-arvoa, hylätään
- siellä hyväksytään vain automaation laatimat kumppani-PR:t `skills-omni/pr-*` haaraperheestä
- Sekalaiset PR:t, jotka yrittävät muuttaa sekä "skills/"- että "skills_omni/" kerralla, hylätään## Automatic Versioning After Merge

Taitoa tukevat yhdistämiset "main" -sovellukseen käynnistävät nyt arkiston julkaisun työnkulun automaattisesti.

Nykyisen paketin versiokäytäntö:

- korjauspäivitys kasvaa +1:llä jokaista kelvollista yhdistämistä kohti
- "0.0.1" → "0.0.2" → ... → "0.0.10"
- .10:n jälkeen paketti siirtyy seuraavaan sivuun ja nollaa korjaustiedoston
- "0.0.10" → "0.1.0".
- "0.1.10" → "0.2.0".

Nykyiset julkaisun käynnistyspolut:

- "taidot/**".
- "skills_omni/**".
- "data/bundles.json".

Tuo automaattinen vapautustyö:

1. laskee seuraavan paketin version paketista "package.json".
2. bumps "package.json" ja "package-lock.json".
3. luo uudelleen "metadata.json", "skills_index.json", "dist/" ja "docs/CATALOG.md"
4. suorittaa tiukan julkaisun varmistusputken
5. sitoo version bumpin takaisin `main`
6. luo Git-tunnisteen uudelle versiolle
7. julkaisee npm- ja GitHub Release -artefaktteja

Tärkeä käyttöönottohuomautus:

- GitHub rekisteröi uuden työnkulkutiedoston aktiiviseksi arkiston työnkuluksi vasta sen jälkeen, kun tiedosto saavuttaa oletushaaran.
- Ennen kuin "Enhance PR Skills" saapuu "main" -sivulle, osallistujat voivat lukea dokumentoidun prosessin, mutta GitHub ei vielä suorita tätä työnkulkua automaattisesti julkisissa PR:issä.
- Kun työnkulku on yhdistetty "main"-muotoon, yllä kuvatusta käytöksestä tulee oletusarvoinen sisäänottopolku tuleville alkuperäisille taitojen PR:ille.## Native vs Enhanced

Tällä repolla on nyt kaksi erillistä pintaa:

- "taidot/".
  Alkuperäinen saanti. Tämä säilyttää alkuperäisen panoksen sellaisena kuin se on lähetetty.
- "skills_omni/".
  Automaation ehdottama ja Omni Skills Teamin ylläpitämä monipuolinen johdannainen.

Attribuutiosäännöt `skills_omni/`:lle:

- parannetusta johdannaisesta tulee Omni-ylläpidetty
- Alkuperäinen kirjoittaja ja alkupään natiivitaito säilyvät hyvityksenä
- jokainen parannettu hakemisto säilyttää ATTRIBUTION.md-tiedoston, jossa on alkupään polku, PR, tekijä ja lähdekonteksti
- jokainen parannettu hakemisto on vain kuratoitu tulos, eikä sitä saa lähettää uudelleen alkuperäisen tehostimen sisääntulopolulle
- Jokaisen parannetun hakemiston odotetaan olevan englanninkielinen tulos, vaikka ylävirran natiivilähde ei olisi ollut## Manual Maintainer Commands

Automaatio kattaa normaalin PR-syötön, mutta ylläpitäjät voivat silti suorittaa yksityisen tehostimen tarvittaessa manuaalisesti.

Erä haaran erotusta vastaan:```bash
python3 /path/to/omni-skills-private/scripts/enhance_repo_changes.py \
  --repo-root /path/to/omni-skills \
  --base-ref main \
  --head-ref HEAD \
  --mode live \
  --min-skill-interval-seconds 60 \
  --no-update-state
```

Yhden taidon arvostelu:```bash
python3 /path/to/omni-skills-private/scripts/run_enhancer.py \
  --skill <skill-id> \
  --mode live \
  --source-reason pr-review \
  --source-ref HEAD
```

Odotetut tehostajatulokset taitoa kohti:

- `työtila/saapuva/alkuperäinen/<run-id>/<taito>/`
- `työtila/enhanced-candidates/<run-id>/<taito>/`
- "workspace/reports/<run-id>/research.json".
- `työtila/raportit/<run-id>/rewrite.json`
- `työtila/raportit/<run-id>/validation.json`
- `työtila/raportit/<run-id>/score-delta.json`
- `työtila/raportit/<run-id>/review.md`
- `työtila/raportit/<run-id>/research-prompt.md`
- `työtila/raportit/<run-id>/rewrite-prompt.md`## PR Body Expectations

PR-elimen tulee ilmoittaa:

- mitä taitoja lisättiin tai päivitettiin
- mitä nippuja tai työnkulkuja ne syventävät
- mikä vahvistus suoritettiin
- suoritettiinko automaattinen tehostin
- onko se avannut tai päivittänyt `skills_omni/`-kumppanin PR:n
- kaikki poikkeukselliset ylläpitäjän huomautukset nimeämisestä tai jatkopuhdistuksesta## Reviewer Checklist

- natiivi saanti on laillista ja ei-haitallista
- luodut metatiedot ja luettelot päivitettiin
- pakettipäivitykset ovat tahallisia
- Julkinen validointi ja rakentamisen tulokset ovat vihreitä
- tehostajatilan kommentti vastaa todellista muuttunutta osaamista ja lopputuloksen tilaa
- mikä tahansa `skills_omni/`-pari PR säilyttää nimeämisen oikein## Example PR Scope

Vahva esimerkki PR voi lisätä temaattisen joukon, kuten:

- yksi havaittavuus tai DevOps-taito
- yksi tapaus tai turvallisuustaito
- yksi AI-arviointi tai kehotustaito

Se on riittävän suuri, jotta voit käyttää maalintekijää, automaattista tehostajaa, "skills_omni/"-julkaisukulkua, nippuja ja attribuutiomallia muuttamatta PR:tä täydelliseksi luettelon uudelleenkirjoitukseksi.