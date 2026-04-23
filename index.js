// 3. PDF yaratish funksiyasi (Professional, Imzoli va Pechatli)
function generatePDF(name, phone) {
    const element = document.createElement('div');
    element.innerHTML = `
        <div style="width: 794px; height: 1123px; padding: 60px; border: 20px solid #1a73e8; font-family: 'Times New Roman', serif; position: relative; box-sizing: border-box; background: white url('https://i.imgur.com/G5gE38O.png') center/contain no-repeat; /* O'rta fonda ANTI.V logotipi (Watermark) */">
            
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #1a73e8; padding-bottom: 20px; margin-bottom: 40px;">
                <div style="font-weight: bold; font-size: 30px; color: #1a73e8; text-transform: uppercase;">ANTI.V INC.</div>
                <div style="text-align: right; font-size: 12px; color: #5f6368;">
                    ANTI.V Global Security HQ<br>
                    Silicon Valley, CA 94025, USA<br>
                    www.antiv.security
                </div>
            </div>

            <div style="text-align: center; margin-bottom: 50px;">
                <h1 style="color: #1a73e8; font-size: 40px; margin: 0; text-transform: uppercase;">SECURITY CERTIFICATE</h1>
                <p style="font-size: 16px; color: #5f6368; margin: 5px 0;">Official Verification of Device Protection</p>
                <div style="width: 100px; height: 3px; background-color: #1a73e8; margin: 20px auto;"></div>
            </div>

            <div style="font-size: 18px; line-height: 1.6; text-align: left; color: #202124;">
                <p>This document officially confirms that the security of the device registered under the user account of **${name}** has been verified and is now under the comprehensive protection of ANTI.V Advanced Threat Defense systems.</p>
                
                <p>The device associated with the verified phone number **${phone}** has passed all security checks, including AI-driven behavioral analysis and known miner signature database scans. All vulnerabilities have been patched, and an encrypted tunnel (VPN) is actively securing external network traffic.</p>
                
                <p>The user, ${name}, is hereby granted a temporary license to utilize the full ANTI.V Security Suite for a duration of one (1) calendar year from the date of this certificate.</p>
            </div>

            <div style="background-color: #f1f3f4; padding: 20px; border-radius: 8px; margin: 40px 0; font-size: 14px; text-align: left; border-left: 5px solid #1a73e8;">
                <b>Certificate Details:</b><br>
                Status: Active & Protected<br>
                Protection Level: Advanced (AI Module Active)<br>
                Date & Time of Issue: ${new Date().toLocaleString('en-US')}<br>
                Certificate ID: <b>AV${Math.floor(100000 + Math.random() * 900000)}</b>
            </div>

            <div style="position: absolute; bottom: 80px; left: 60px; right: 60px; display: flex; justify-content: space-between; align-items: flex-end;">
                <div style="text-align: left; width: 300px;">
                    <img src="https://i.imgur.com/gK96v73.png" alt="Signature" style="max-width: 150px; display: block; margin-bottom: 10px;"> <div style="border-top: 2px solid #5f6368; width: 100%; margin-bottom: 5px;"></div>
                    <div style="font-size: 14px; color: #202124;">Dr. Evelyn Reed</div>
                    <div style="font-size: 12px; color: #5f6368;">Chief Security Officer, ANTI.V Inc.</div>
                </div>

                <div style="position: relative; width: 150px; height: 150px;">
                    <img src="https://i.imgur.com/KzXoA9y.png" alt="Official Seal" style="max-width: 100%; display: block; transform: rotate(-15deg); opacity: 0.9; position: absolute; top: 0; left: 0;"> </div>
            </div>

            <div style="position: absolute; bottom: 20px; left: 60px; right: 60px; text-align: center; font-size: 10px; color: #dadce0;">
                ANTI.V Security Suite | Verification Document v3.1 | Authorized Use Only
            </div>
        </div>
    `;
    
    // PDF format va sifatini sozlash (html2pdf.js uchun)
    const options = {
        margin: [0, 0, 0, 0],
        filename: `ANTI-V_Certificate_${name}.pdf`,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { scale: 3, useCORS: true }, // Yuqori sifat va rasmlarni internetdan yuklash
        jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' } // A4 o'lchami pxda
    };

    html2pdf().from(element).set(options).save();
}
