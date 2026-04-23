function generatePDF(name, phone) {
    const element = document.createElement('div');
    
    // 1x1 Rasmiy hujjat dizayni
    element.innerHTML = `
        <div style="width: 794px; height: 1123px; padding: 80px 70px; font-family: 'Times New Roman', serif; background: white; position: relative; box-sizing: border-box; color: #000; line-height: 1.5; border: 1px solid #eee;">
            
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #000; padding-bottom: 10px;">
                <div style="font-size: 18pt; font-weight: bold; text-transform: uppercase;">ANTI.V Global Security Systems</div>
                <div style="font-size: 9pt; margin-top: 5px;">Cybersecurity Compliance & Advanced Threat Protection Division</div>
            </div>

            <div style="display: flex; justify-content: space-between; font-size: 11pt; margin-bottom: 40px;">
                <div>Hujjat №: <b>AV/${Math.floor(1000 + Math.random() * 9000)}-${new Date().getFullYear()}</b></div>
                <div>Sana: <b>${new Date().toLocaleDateString()}</b></div>
            </div>

            <div style="text-align: center; margin-bottom: 35px;">
                <h2 style="font-size: 16pt; font-weight: bold; text-transform: uppercase; text-decoration: underline;">Xavfsizlik Sertifikati va Bildirishnomasi</h2>
            </div>

            <div style="font-size: 12pt; text-align: justify; text-indent: 50px;">
                <p style="margin-bottom: 15px;">
                    Ushbu rasmiy hujjat orqali ANTI.V texnik qo'mitasi shuni tasdiqlaydi-ki, foydalanuvchi <b>${name}</b> (telefon: <b>${phone}</b>) 
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

            <table style="width: 100%; border-collapse: collapse; margin-top: 30px; font-size: 10pt;">
                <tr style="background: #f5f5f5;">
                    <th style="border: 1px solid #000; padding: 8px; text-align: left;">Tekshiruv bosqichi</th>
                    <th style="border: 1px solid #000; padding: 8px; text-align: center;">Holat</th>
                </tr>
                <tr>
                    <td style="border: 1px solid #000; padding: 8px;">Tizim fayllari yaxlitligi</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align: center; color: green; font-weight: bold;">OK</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000; padding: 8px;">AI-asosli tahdidlar tahlili</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align: center; color: green; font-weight: bold;">CLEAN</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #000; padding: 8px;">Tarmoq shifrlanish darajasi</td>
                    <td style="border: 1px solid #000; padding: 8px; text-align: center; font-weight: bold;">AES-256 Bit</td>
                </tr>
            </table>

            <div style="margin-top: 80px; display: flex; justify-content: space-between; align-items: center;">
                <div style="position: relative; width: 300px;">
                    <p style="margin-bottom: 40px;">Xavfsizlik bo'yicha bosh inspektor:</p>
                    
                    <div style="position: absolute; top: 15px; left: 50px; font-family: 'Cursive', sans-serif; font-size: 24pt; color: #1a237e; opacity: 0.7; transform: rotate(-3deg);">
                        A.Jasur
                    </div>
                    
                    <div style="border-top: 1px solid #000; width: 100%; font-size: 10pt; padding-top: 5px;">
                        (Imzo) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A. Jasur
                    </div>
                </div>

                <div style="position: relative; width: 150px; height: 150px; border: 3px solid #1a237e; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-12deg); opacity: 0.8;">
                    <div style="border: 1px solid #1a237e; border-radius: 50%; width: 130px; height: 130px; display: flex; align-items: center; justify-content: center; text-align: center; color: #1a237e; font-size: 8pt; font-weight: bold; border-style: dashed;">
                        ANTI.V GLOBAL<br>OFFICIAL SEAL<br>* 2026 *<br>SECURED
                    </div>
                </div>
            </div>

            <div style="position: absolute; bottom: 50px; left: 70px; right: 70px; text-align: center; font-size: 7.5pt; color: #999;">
                Ushbu sertifikat avtomatik ravishda ANTI.V Cloud tizimi orqali shakllantirilgan. <br>
                Ma'lumotlarning haqiqiyligini tekshirish uchun: verification.antiv.security
            </div>
        </div>
    `;

    const options = {
        margin: [0, 0, 0, 0],
        filename: `ANTI-V_Official_Notice.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3, letterRendering: true, useCORS: true },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
}
