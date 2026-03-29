# 🧩 CLI Guided Installer Specification (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/specs/CLI-GUIDED-INSTALLER.md) · 🇪🇸 [es](../../../es/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇷 [fr](../../../fr/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇪 [de](../../../de/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇹 [it](../../../it/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇺 [ru](../../../ru/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇯🇵 [ja](../../../ja/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇰🇷 [ko](../../../ko/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇦 [ar](../../../ar/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇳 [in](../../../in/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇹🇭 [th](../../../th/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇻🇳 [vi](../../../vi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇩 [id](../../../id/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇲🇾 [ms](../../../ms/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇱 [nl](../../../nl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇱 [pl](../../../pl/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇪 [sv](../../../sv/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇳🇴 [no](../../../no/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇩🇰 [da](../../../da/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇫🇮 [fi](../../../fi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇹 [pt](../../../pt/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇷🇴 [ro](../../../ro/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇭🇺 [hu](../../../hu/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇬 [bg](../../../bg/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇸🇰 [sk](../../../sk/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇮🇱 [he](../../../he/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇵🇭 [phi](../../../phi/docs/specs/CLI-GUIDED-INSTALLER.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/specs/CLI-GUIDED-INSTALLER.md)

---


>**สัญญาเชิงพฤติกรรมสำหรับประสบการณ์การติดตั้งพร้อมคำแนะนำใน Omni Skills CLI**---

## 1. Scope

ข้อมูลจำเพาะนี้กำหนดลักษณะการติดตั้งที่แนะนำซึ่งอยู่ด้านบนของแบ็กเอนด์ตัวติดตั้งที่มีอยู่

มันไม่ได้แทนที่:

- `tools/bin/install.js`
- กระแสธงผู้เชี่ยวชาญในปัจจุบัน
- รายการการติดตั้งแบบเลือก

มันกำหนด:

- วิธีเข้าสู่โหมดแนะนำ
- วิธีการเลือกจุดหมายปลายทาง
- วิธีเลือกขอบเขตการติดตั้ง
- ข้อมูลพรีวิวอะไรที่ต้องแสดง
- การยืนยันและการดำเนินการทำงานอย่างไร---

## 2. Entry Rules

### 2.1 Automatic Guided Entry

CLI ควรเข้าสู่โหมดการติดตั้งที่แนะนำเมื่อ:

- ผู้ใช้รัน `ทักษะรอบด้าน' โดยไม่มี args ใน TTY
- ผู้ใช้รัน `omni-skills install` โดยไม่มีตัวเลือกใน TTY### 2.2 Forced Guided Entry

CLI ควรสนับสนุนโหมดนำทางที่ชัดเจนผ่านตัวเลือกเฉพาะ เช่น:

- `การติดตั้งทักษะรอบด้าน --ชี้แนะ`

โหมดนี้ควรใช้งานได้แม้ในขณะที่อินพุตถูกไปป์และไม่ได้ต่อกับ TTY ตราบใดที่อินพุตมาตรฐานยังใช้งานได้### 2.3 Non-Interactive Safety Rule

เมื่อถูกเรียกใช้โดยไม่มี TTY และไม่มีโหมดแนะนำอย่างชัดเจน:

- คงพฤติกรรมเริ่มต้นในปัจจุบันไว้
- อย่าปิดกั้นการรอข้อความแจ้ง---

## 3. Destination Model

การติดตั้งที่แนะนำต้องรองรับคลาสปลายทางสองคลาส:### 3.1 Known Client Target

แต่ละเป้าหมายที่รู้จักแก้ไขเป็น:

- ฉลากที่มนุษย์สามารถอ่านได้
- รหัสเครื่องมือภายใน
- ติดตั้งแฟล็ก
- เส้นทางที่ได้รับการแก้ไข

เป้าหมายที่ทราบที่จำเป็น:

- คล็อด โค้ด
- เคอร์เซอร์
- ราศีเมถุน CLI
- โคเด็กซ์ CLI
- คิโระ
- ต้านแรงโน้มถ่วง
- โอเพ่นโค้ด### 3.2 Custom Path Target

โหมดเส้นทางที่กำหนดเองต้อง:

- แจ้งเส้นทาง
- แก้ไข `~`
- ปรับให้เป็นเส้นทางที่แน่นอน
- แสดงเส้นทางที่ได้รับการแก้ไขในหน้าตัวอย่าง---

## 4. Install Scope Model

การติดตั้งที่แนะนำต้องรองรับ:### 4.1 Full Library

เทียบเท่ากับการติดตั้งปัจจุบันที่ไม่มี `--skill` หรือ `--bundle`### 4.2 Single Skill

อนุญาตให้ผู้ใช้เลือกหนึ่งทักษะที่เผยแพร่### 4.3 Single Bundle

อนุญาตให้ผู้ใช้เลือกบันเดิลที่ได้รับการดูแลจัดการหนึ่งรายการและแก้ไขสมาชิกที่เผยแพร่แล้ว### 4.4 Search Then Install

ให้ผู้ใช้:

- ป้อนคำค้นหา
- ตรวจสอบผลลัพธ์
- เลือกทักษะหรือชุดรวม
- เข้าสู่หน้าตัวอย่างการติดตั้งต่อไป---

## 5. Preview Contract

ก่อนดำเนินการ การติดตั้งที่แนะนำต้องแสดง:

-ป้ายปลายทาง
- เส้นทางปลายทาง
- ติดตั้งขอบเขต
- ทักษะหรือชุดที่เลือกถ้ามี
- คำสั่ง CLI ที่เทียบเท่า

ไม่บังคับแต่แนะนำ:

- สรุปข้อมูลเมตาของทักษะที่เลือก
- สรุปความพร้อมของชุดรวม---

## 6. Execution Contract

หลังจากการยืนยัน:

- แนะนำผู้ได้รับมอบหมายการติดตั้งไปยังแบ็กเอนด์ตัวติดตั้งที่มีอยู่
- มันไม่ได้ปรับใช้ไฟล์ที่เขียนเองอีกครั้ง

การแสดงตัวอย่างคำสั่งและอาร์กิวเมนต์ตัวติดตั้งที่ได้รับมอบสิทธิ์จริงจะต้องตรงกันทุกประการ---

## 7. Result Contract

หลังจากดำเนินการสำเร็จ ผลลัพธ์การติดตั้งที่แนะนำควรแสดง:

- ตัวบ่งชี้ความสำเร็จ
- เส้นทางปลายทางสุดท้าย
- คำสั่งที่ถูกดำเนินการ
- การดำเนินการที่แนะนำถัดไป

ตัวอย่างการดำเนินการถัดไป:

- ใช้ทักษะในไคลเอนต์ที่เลือก
- เรียกใช้ 'หมอ'
- เรียกใช้ `mcp stream --local`---

## 8. Compatibility Contract

สิ่งต่อไปนี้ยังคงใช้ได้และไม่เปลี่ยนแปลง:

- `ทักษะรอบด้าน --เคอร์เซอร์ --ทักษะ omni-figma`
- `ทักษะรอบด้าน --รวมกลุ่มเต็มสแต็ค`
- `ทักษะรอบด้าน --path ./skills`
- `ทักษะรอบด้าน ค้นหาฟิกม่า --เคอร์เซอร์เครื่องมือ --ติดตั้ง --ใช่`

โหมดแนะนำจะเพิ่มพฤติกรรม มันไม่ได้ลบพฤติกรรมที่มีอยู่