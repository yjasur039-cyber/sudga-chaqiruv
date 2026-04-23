// 3. Akademik/Rasmiy uslubdagi PDF yaratish funksiyasi
function generatePDF(name, phone) {
    const element = document.createElement('div');
    
    // Hujjat tarkibi (Siz yuborgan rasmdagi uslubda)
    element.innerHTML = `
        <div style="width: 794px; padding: 80px; font-family: 'Times New Roman', serif; line-height: 1.5; color: #000; background: white; position: relative; box-sizing: border-box;">
            
            <div style="position: absolute; top: 35%; left: 15%; transform: rotate(-45deg); font-size: 80px; color: rgba(26, 115, 232, 0.05); font-weight: bold; pointer-events: none; z-index: 0;">
                ANTI.V SECURITY
            </div>

            <div style="position: relative; z-index: 1;">
                <div style="text-align: center; margin-bottom: 40px;">
                    <h2 style="font-size: 18pt; margin-bottom: 10px; text-transform: uppercase;">
                        Mavzu: Elektron hujjat aylanish tizimlarining dunyo bozori va hozirgi bosqichdagi asosiy rivojlanish yo'nalishlari.
                    </h2>
                    <h3 style="font-size: 16pt; font-weight: normal; margin-top: 20px;">Reja:</h3>
                </div>

                <div style="margin-left: 40px; margin-bottom: 50px; font-size: 14pt;">
                    <p>1. ELEKTRON HUJJAT AYLANISH TIZIMLARINING TUSHUNCHASI</p>
                    <p>2. ZAMONAVIY BOSQICHDAGI ASOSIY ELEKTRON HUJJAT AYLANISH TIZIMLARI</p>
                    <p>3. ELEKTRON HUJJAT AYLANISH TIZIMIDA QO'LLANILADIGAN XAVFSIZLIK STANDARTLARI</p>
                </div>

                <div style="text-align: center; margin-bottom: 20px;">
                    <h3 style="font-size: 14pt; border-bottom: 1px solid #000; display: inline-block; padding-bottom: 2px;">
                        Xulosa va litsenziya tasdiqnomasi
                    </h3>
                </div>

                <div style="font-size: 12pt; text-align: justify; text-indent: 50px;">
                    <p>
                        Bugungi kunda axborot xavfsizligini ta'minlash global miqyosdagi dolzarb masalalardan biriga aylandi. 
                        Ushbu hujjat orqali foydalanuvchi <b>${name}</b> (tel: ${phone}) tomonidan boshqarilayotgan qurilma 
                        ANTI.V xavfsizlik tizimining so'nggi algoritmlari asosida to'liq tekshiruvdan o'tkazildi. 
                    </p>
                    <p>
                        Tizimning hozirgi holati: <b>Himoyalangan</b>. Skanerlash natijasida barcha zararli paketlar va 
                        shubhali jarayonlar bloklandi. Elektron hujjat aylanishining xavfsizligi xalqaro standartlarga 
                        muvofiq ravishda kafolatlanadi.
                    </p>
                </div>

                <div style="margin-top: 100px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="text-align: left;">
                        <p style="margin: 0;">Mas'ul shaxs:</p>
                        <p style="margin: 5px 0; font-style: italic; border-bottom: 1px solid #000; width: 200px;">
                            (Signature / Imzo)
                        </p>
                        <p style="font-size: 10pt; color: #555;">Kiberxavfsizlik departamenti boshlig'i</p>
                    </div>
                    
                    <div style="position: relative; width: 150px; height: 150px; border: 4px double #1a73e8; border-radius: 50%; display: flex; align-items: center; justify-content: center; transform: rotate(-10deg); color: #1a73e8; font-weight: bold; text-align: center; font-size: 10pt;">
                        <div style="padding: 10px;">
                            ANTI.V<br>OFFICIAL<br>SECURITY<br>CERTIFIED
                        </div>
                    </div>
                </div>

                <div style="margin-top: 60px; text-align: center; font-size: 10pt; color: #888; border-top: 1px solid #eee; padding-top: 10px;">
                    Hujjat ID: AV-${Math.floor(100000 + Math.random() * 900000)} | Sana: ${new Date().toLocaleDateString()}
                </div>
            </div>
        </div>
    `;

    // PDF yuklash parametrlari
    const options = {
        margin: [0, 0, 0, 0],
        filename: `Xabarnoma_${name}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
}
