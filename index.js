/**
 * ANTI.V Security Suite - Professional PDF Generation Module
 * Version: 3.1 (Official Build)
 * Description: 1x1 Real-world document replication
 */

function generatePDF(name, phone) {
    const element = document.createElement('div');
    
    // Tasodifiy hujjat raqami va joriy sana
    const docID = `AV/${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}`;
    const currentDate = new Date().toLocaleDateString('uz-UZ');

    // Haqiqiy 1x1 rasmiy hujjat dizayni (HTML/CSS)
    element.innerHTML = `
        <div style="width: 794px; height: 1123px; padding: 80px 70px; font-family: 'Times New Roman', serif; background: white; position: relative; box-sizing: border-box; color: #000; line-height: 1.5; border: 1px solid #ffffff;">
            
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 10px;">
                <div style="font-size: 18pt; font-weight: bold; text-transform: uppercase; letter-spacing: 1px;">ANTI.V Global Security Systems</div>
                <div style="font-size: 9pt; margin-top: 5px; font-style: italic;">Cybersecurity Compliance & Advanced Threat Protection Division</div>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 11pt; margin-bottom: 40px; font-weight: bold;">
                <div>Hujjat №: ${docID}</div>
                <div>Sana: ${currentDate} yil</div>
            </div>

            <div style="text-align: center; margin-bottom: 35px;">
                <h2 style="font-size: 16pt; font-weight: bold; text-transform: uppercase; text-decoration: underline;">Xavfsizlik Sertifikati va Bildirishnomasi</h2>
            </div>

            <div style="font-size: 12pt; text-align: justify; text-indent: 50px;">
                <p style="margin-bottom: 15px;">
                    Ushbu rasmiy hujjat orqali ANTI.V texnik qo'mitasi shuni tasdiqlaydi-ki, foydalanuvchi <b>${name}</b> (aloqa telefoni: <b>${phone}</b>) 
                    tasarrufidagi raqamli qurilma global xavfsizlik auditidan muvaffaqiyatli o'tkazildi.
                </p>

                <p style="margin-bottom: 15px;">
                    Audit natijasida tizimda aniqlangan barcha yashirin tahdidlar, jumladan ma'lumotlarni o'g'irlashga qaratilgan 
                    josuslik dasturlari va noqonuniy kripto-minerlar to'liq bartaraf etildi. Hozirgi kunda qurilmaning tarmoq trafigi 
                    <b>256-bitli shifrlash</b> tizimi bilan himoyalangan va xalqaro <i>ISO/IEC 27001</i> standartlariga muvofiqlashtirilgan.
                </p>

                <p style="margin-bottom: 15px;">
                    Mazkur sertifikat foydalanuvchining shaxsiy ma'lumotlari daxlsizligini kafolatlaydi hamda unga 12 oy muddatga 
                    ANTI.V premium litsenziyasini taqdim etadi.
                </p>
            </div>

            <table style="width: 100%; border-collapse: collapse; margin-top: 30px; font-size: 10pt; border: 1px solid #000;">
                <thead>
                    <tr style="background: #f2f2f2;">
                        <th style="border: 1px solid #000; padding: 10px; text-align: left;">Tekshiruv bosqichi</th>
                        <th style="border: 1px solid #000; padding: 10px; text-align: center;">Holati</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="border: 1px solid #000; padding: 8px;">Tizim fayllari yaxlitligini nazorat qilish</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align: center; color: #000; font-weight: bold;">Muvaffaqiyatli</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 8px;">AI-asosli zararli paketlar tahlili</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align: center; color: #000; font-weight: bold;">Tozalangan</td>
                    </tr>
                    <tr>
                        <td style="border: 1px solid #000; padding: 8px;">Shifrlangan tunnel (VPN) faolligi</td>
                        <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;">AES-256 Faol</td>
                    </tr>
                </tbody>
            </table>

            <div style="margin-top: 90px; display: flex; justify-content: space-between; align-items: center; position: relative;">
                <div style="position: relative; width: 300px;">
                    <p style="margin-bottom: 45px; font-weight: bold;">Xavfsizlik bo'yicha bosh mutaxassis:</p>
                    
                    <div style="position: absolute; top: 25px; left: 60px; font-family: 'Brush Script MT', cursive; font-size: 26pt; color: #1a237e; opacity: 0.8; transform: rotate(-4deg); z-index: 2;">
                        A.Jasur
                    </div>
                    
                    <div style="border-top: 1px solid #000; width: 100%; font-size: 11pt; padding-top: 5px;">
                        (Imzo) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A. Jasur
                    </div>
                </div>

                <div style="position: relative; width: 160px; height: 160px; border: 4px double #1a237e; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-15deg); opacity: 0.85; z-index: 1;">
                    <div style="border: 1.5px solid #1a237e; border-radius: 50%; width: 140px; height: 140px; display: flex; align-items: center; justify-content: center; text-align: center; color: #1a237e; font-size: 8.5pt; font-weight: bold; border-style: dashed;">
                        <div style="padding: 5px;">
                            ANTI.V GLOBAL<br>
                            * OFFICIAL SEAL *<br>
                            SECURED & CERTIFIED<br>
                            2026
                        </div>
                    </div>
                </div>
            </div>

            <div style="position: absolute; bottom: 60px; left: 70px; right: 70px; text-align: center; font-size: 8pt; color: #666; border-top: 1px solid #eee; padding-top: 15px;">
                Ushbu hujjat elektron raqamli imzo bilan tasdiqlangan va qog'oz nusxasi bilan bir xil yuridik kuchga ega. <br>
                Haqiqiyligini tekshirish kodi: https://verify.antiv.security/check?id=${Math.random().toString(36).substr(2, 9)}
            </div>
        </div>
    `;

    // html2pdf.js uchun yuqori sifatli sozlamalar
    const options = {
        margin: [0, 0, 0, 0],
        filename: `ANTI-V_Official_Document_${name}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 4, // Tasvir aniqligi (4x)
            letterRendering: true, 
            useCORS: true,
            logging: false
        },
        jsPDF: { 
            unit: 'px', 
            format: [794, 1123], // A4 o'lchami pxda
            orientation: 'portrait',
            compress: true
        }
    };

    // PDF ni generatsiya qilish va yuklash
    html2pdf().from(element).set(options).save();
}
