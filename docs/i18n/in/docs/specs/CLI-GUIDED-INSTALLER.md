# 🧩 CLI Guided Installer Specification (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**ओमनी स्किल्स सीएलआई में निर्देशित स्थापना अनुभव के लिए व्यवहार अनुबंध।**---

## 1. Scope

यह विनिर्देश निर्देशित इंस्टॉल व्यवहार को परिभाषित करता है जो मौजूदा इंस्टॉलर बैकएंड के शीर्ष पर बैठता है।

यह प्रतिस्थापित नहीं करता:

- `टूल्स/बिन/इंस्टॉल.जेएस`
- वर्तमान विशेषज्ञ ध्वज प्रवाहित होता है
- चयनात्मक इंस्टाल मैनिफ़ेस्ट

यह परिभाषित करता है:

- निर्देशित मोड कैसे दर्ज किया जाता है
- गंतव्यों का चयन कैसे किया जाता है
- इंस्टाल स्कोप कैसे चुना जाता है
- कौन सी पूर्वावलोकन जानकारी प्रदर्शित की जानी चाहिए
- पुष्टिकरण और निष्पादन कैसे कार्य करते हैं---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

सीएलआई को निर्देशित इंस्टाल मोड में प्रवेश करना चाहिए जब:

- उपयोगकर्ता TTY में बिना किसी तर्क के `omni-skills` चलाता है
- उपयोगकर्ता TTY में बिना किसी चयनकर्ता के `omni-skills install` चलाता है### 2.2 Forced Guided Entry

सीएलआई को एक समर्पित विकल्प के माध्यम से स्पष्ट निर्देशित मोड का भी समर्थन करना चाहिए, जैसे:

- `ओम्नी-स्किल्स इंस्टाल--गाइडेड`

यह मोड तब भी काम करना चाहिए जब इनपुट पाइप किया गया हो और टीटीवाई से जुड़ा न हो, जब तक मानक इनपुट उपलब्ध है।### 2.3 Non-Interactive Safety Rule

जब टीटीवाई के बिना और निर्देशित मोड के बिना स्पष्ट रूप से अनुरोध किया जाता है:

- वर्तमान डिफ़ॉल्ट व्यवहार को सुरक्षित रखें
- संकेतों की प्रतीक्षा को अवरुद्ध न करें---

## 3. Destination Model

निर्देशित इंस्टाल को दो गंतव्य वर्गों का समर्थन करना चाहिए:### 3.1 Known Client Target

प्रत्येक ज्ञात लक्ष्य इसका समाधान करता है:

- मानव-पठनीय लेबल
- आंतरिक उपकरण आईडी
- ध्वज स्थापित करें
- सुलझा हुआ रास्ता

आवश्यक ज्ञात लक्ष्य:

- क्लाउड कोड
- कर्सर
- जेमिनी सीएलआई
- कोडेक्स सीएलआई
- किरो
- एंटीग्रेविटी
- ओपनकोड### 3.2 Custom Path Target

कस्टम पथ मोड अवश्य होना चाहिए:

- पथ के लिए संकेत
- `~` का समाधान करें
- पूर्ण पथ पर सामान्यीकृत करें
- पूर्वावलोकन में हल किया गया पथ दिखाएं---

## 4. Install Scope Model

निर्देशित स्थापना का समर्थन करना चाहिए:### 4.1 Full Library

बिना `--skill` या `--bundle` के वर्तमान इंस्टालेशन के समतुल्य।### 4.2 Single Skill

उपयोगकर्ता को एक प्रकाशित कौशल का चयन करने देता है।### 4.3 Single Bundle

उपयोगकर्ता को एक क्यूरेटेड बंडल का चयन करने देता है और प्रकाशित सदस्यों को हल करने देता है।### 4.4 Search Then Install

उपयोगकर्ता को देता है:

- एक खोज क्वेरी दर्ज करें
- परिणामों का निरीक्षण करें
- एक कौशल या बंडल चुनें
- इंस्टॉल पूर्वावलोकन जारी रखें---

## 5. Preview Contract

निष्पादन से पहले, निर्देशित इंस्टॉल को प्रदर्शित करना होगा:

- गंतव्य लेबल
- गंतव्य पथ
- दायरा स्थापित करें
- यदि लागू हो तो चयनित कौशल या बंडल
- समतुल्य सीएलआई कमांड

वैकल्पिक लेकिन अनुशंसित:

- चयनित कौशल मेटाडेटा सारांश
- बंडल उपलब्धता सारांश---

## 6. Execution Contract

पुष्टि के बाद:

- मौजूदा इंस्टॉलर बैकएंड पर इंस्टॉल प्रतिनिधियों को निर्देशित करें
- यह फ़ाइल को पुन: कार्यान्वित नहीं करता है, स्वयं लिखता है

कमांड पूर्वावलोकन और वास्तविक प्रत्यायोजित इंस्टॉलर तर्क बिल्कुल मेल खाने चाहिए।---

## 7. Result Contract

सफल निष्पादन के बाद, निर्देशित इंस्टॉल परिणाम दिखाना चाहिए:

- सफलता सूचक
- अंतिम गंतव्य पथ
- आदेश जो निष्पादित किया गया था
- अगली अनुशंसित कार्रवाई

अगली कार्रवाइयों का उदाहरण:

- चयनित ग्राहक में कौशल का उपयोग करें
- `डॉक्टर` चलाएँ
- `एमसीपी स्ट्रीम --लोकल` चलाएँ---

## 8. Compatibility Contract

निम्नलिखित वैध और अपरिवर्तित रहते हैं:

- `ओमनी-स्किल्स --कर्सर --स्किल ओम्नी-फिग्मा`
- `ओमनी-स्किल्स--बंडल फुल-स्टैक`
- `omni-skills --path ./skills`
- `ओमनी-स्किल्स फाइंड फिग्मा --टूल कर्सर --इंस्टॉल --यस`

निर्देशित मोड व्यवहार जोड़ता है। यह मौजूदा व्यवहार को नहीं हटाता है.