# 🛡️ Security Validation and Distribution (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/SECURITY-VALIDATION.md) · 🇪🇸 [es](../../../es/docs/specs/SECURITY-VALIDATION.md) · 🇫🇷 [fr](../../../fr/docs/specs/SECURITY-VALIDATION.md) · 🇩🇪 [de](../../../de/docs/specs/SECURITY-VALIDATION.md) · 🇮🇹 [it](../../../it/docs/specs/SECURITY-VALIDATION.md) · 🇷🇺 [ru](../../../ru/docs/specs/SECURITY-VALIDATION.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/SECURITY-VALIDATION.md) · 🇯🇵 [ja](../../../ja/docs/specs/SECURITY-VALIDATION.md) · 🇰🇷 [ko](../../../ko/docs/specs/SECURITY-VALIDATION.md) · 🇸🇦 [ar](../../../ar/docs/specs/SECURITY-VALIDATION.md) · 🇮🇳 [in](../../../in/docs/specs/SECURITY-VALIDATION.md) · 🇹🇭 [th](../../../th/docs/specs/SECURITY-VALIDATION.md) · 🇻🇳 [vi](../../../vi/docs/specs/SECURITY-VALIDATION.md) · 🇮🇩 [id](../../../id/docs/specs/SECURITY-VALIDATION.md) · 🇲🇾 [ms](../../../ms/docs/specs/SECURITY-VALIDATION.md) · 🇳🇱 [nl](../../../nl/docs/specs/SECURITY-VALIDATION.md) · 🇵🇱 [pl](../../../pl/docs/specs/SECURITY-VALIDATION.md) · 🇸🇪 [sv](../../../sv/docs/specs/SECURITY-VALIDATION.md) · 🇳🇴 [no](../../../no/docs/specs/SECURITY-VALIDATION.md) · 🇩🇰 [da](../../../da/docs/specs/SECURITY-VALIDATION.md) · 🇫🇮 [fi](../../../fi/docs/specs/SECURITY-VALIDATION.md) · 🇵🇹 [pt](../../../pt/docs/specs/SECURITY-VALIDATION.md) · 🇷🇴 [ro](../../../ro/docs/specs/SECURITY-VALIDATION.md) · 🇭🇺 [hu](../../../hu/docs/specs/SECURITY-VALIDATION.md) · 🇧🇬 [bg](../../../bg/docs/specs/SECURITY-VALIDATION.md) · 🇸🇰 [sk](../../../sk/docs/specs/SECURITY-VALIDATION.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/SECURITY-VALIDATION.md) · 🇮🇱 [he](../../../he/docs/specs/SECURITY-VALIDATION.md) · 🇵🇭 [phi](../../../phi/docs/specs/SECURITY-VALIDATION.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/SECURITY-VALIDATION.md)

---


>**공개된 모든 기술에 대한 보안 검색, 아카이브 생성, 선택적 서명 및 배포 패키징.**---

## 📊 Status

| 기능 | 상태 |
|:---------|:------|
| ✅ 정적 보안 스캐너 | 항상 활성화됨 |
| ✅ 스킬별 메타데이터 분류 | 구현 |
| ✅ 스킬별 아카이브(zip/tar.gz) | 구현 |
| ✅ SHA-256 체크섬 매니페스트 | 구현 |
| ✅ 릴리스 태그의 CI 스캐너 게이트 | 구현 |
| ✅ 검증된 tarball의 npm 게시 작업 흐름 | 구현 |
| ⚙️ ClamAV 스캐닝 | 선택적 농축기 |
| ⚙️ VirusTotal 해시 조회 | 선택적 농축기 |
| ✅ 분리된 서명 | 구현 |
| ✅ CI 시행 서명 | 릴리스 태그에 구현됨 |---

## 🔍 Security Scanners

### 1️⃣ Static Scanner (Always Enabled)

검증 중에 모든 기술을 검사합니다.

| 대상 | 스캔 대상 |
|:-------|:----|
| 📝`SKILL.md` | 주요 스킬 내용 |
| 📄 마크다운/텍스트 파일 | 패키지된 참조 및 문서 |
| ⚙️ 스크립트 | 패키지된 자동화 스크립트 |

**규칙 계열:**

| 규칙 | 예 |
|:------|:---------|
| 🎭**즉시 주입**| 유출 패턴, 지침 재정의 |
| 💣**파괴적인 명령**| `rm -rf`, `format`, `del /s` |
| 🔑**권한 에스컬레이션**| `sudo`, `chmod 777`, setuid 패턴 |
| 📂**의심스러운 경로**| `/etc/shadow`, `~/.ssh`, 자격 증명 파일 |
| ⚠️**위험한 원시생물**| `shell=True`, `pickle.load`, `eval`, `extractall` |---

### 2️⃣ ClamAV (Optional)

```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 npm run validate
```

- `PATH`에 `clamscan`이 필요합니다.
- 알려진 악성 코드가 있는지 패키지 파일을 검사합니다.
- 스킬 메타데이터에 기록된 결과---

### 3️⃣ VirusTotal (Optional)

```bash
VT_API_KEY=your-key npm run validate
```

-**해시 조회만**— 일반 검증 중에는 파일을 업로드하지 않습니다.
- 알 수 없는 파일은 로컬에만 남아 있습니다.
- 빌드를**결정적**및 CI 독립적으로 유지합니다.### 4️⃣ Scanner Coverage Verification

```bash
npm run verify:scanners
```

엄격한 릴리스 게이트:```bash
OMNI_SKILLS_ENABLE_CLAMAV=1 \
VT_API_KEY=your-key \
npm run verify:scanners:strict
```

이 단계는 생성된 `skills/*/metadata.json`을 읽고 필요한 스캐너가 감지를 실행하지 않거나 보고하지 않은 경우 실패합니다.---

## 📊 Security Output Shape

보안 데이터는 모든 기술의 메타데이터에서 내보내집니다.```json
{
  "security": {
    "score": 100,
    "tier": "hardened",
    "status": "passed",
    "findings_count": 0,
    "findings": [],
    "signals": {
      "scanned_files": 3,
      "script_files": 0,
      "binary_like_files": 0
    },
    "scanners": {
      "static": { "enabled": true, "status": "completed" },
      "clamav": { "enabled": false, "status": "disabled" },
      "virustotal": { "enabled": false, "status": "disabled" }
    }
  }
}
```

> 이 블록은 매니페스트 및 카탈로그 보기로 전파되어 CLI, API 및 MCP가**보안 점수별로 필터링하고 순위를 매길 수 있습니다**.---

## 📦 Archive Outputs

게시된 각 기술은 다음을 생성합니다.

| 파일 | 형식 |
|:------|:---------|
| `dist/archives/<skill>.zip` | ZIP 아카이브 |
| `dist/archives/<skill>.tar.gz` | 타르볼 아카이브 |
| `dist/archives/<skill>.checksums.txt` | SHA-256 체크섬 매니페스트 |### ✅ Verify Archives

```bash
npm run verify:archives
```

### 🚢 Release Publishing

이제 GitHub Actions 릴리스 태그(`v*`)가 제공됩니다.

1. git 태그가 `package.json`과 일치하는지 확인하세요.
2. ClamAV 설치 및 새로 고침
3. GitHub 비밀에서 릴리스 서명 키를 디코딩합니다.
4. `npm run release:verify`를 실행하세요.
5. `npm pack`으로 타르볼을 패키징합니다.
6. 출처와 함께 정확한 tarball을 npm에 게시합니다.
7. 사용자 정의 메모와 첨부된 검증 자산을 사용하여 GitHub 릴리스를 생성합니다.---

## ✍️ Optional Signing

### 🔑 Enable Detached Signatures

```bash
OMNI_SKILLS_SIGN_PRIVATE_KEY_PATH=/path/to/private.pem npm run index
```

### 🔓 Optional Public Key Override

```bash
OMNI_SKILLS_SIGN_PUBLIC_KEY_PATH=/path/to/public.pem npm run index
```

> 공개 키가 제공되지 않으면 빌드는 `openssl`을 사용하여 공개 키를 파생시켜 `dist/signing/`에 배치합니다.

활성화되면 '.sig' 파일이 아카이브 및 체크섬 매니페스트 옆에 표시됩니다.

CI에서는 이제 릴리스 태그에 다음을 통한 서명이 필요합니다.

- `OMNI_SKILLS_SIGN_PRIVATE_KEY_B64` 또는 `OMNI_SKILLS_SIGN_PRIVATE_KEY`
- 선택사항 `OMNI_SKILLS_SIGN_PUBLIC_KEY_B64` 또는 `OMNI_SKILLS_SIGN_PUBLIC_KEY`---

## ⚠️ Current Limitations

| 제한사항 | 상태 |
|:------------|:-------|
| VirusTotal 업로드 제출 | 기본 유효성 검사에서 의도적으로 제외됨 |
| 서명 시행 | 릴리스 태그에 적용됩니다. 로컬 빌드는 여전히 서명되지 않은 상태로 실행될 수 있습니다 |
| 호스팅된 거버넌스 | 내장된 인증, 관리 런타임, CORS/IP 허용 목록, 유지 관리 모드 및 감사 로깅이 마련되어 있습니다. 외부 게이트웨이는 선택 사항으로 남아 있습니다 |