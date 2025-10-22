// ====== [ BOT INFORMATION ] ====//
/*
🤖 *VERONICA LITE BOT* 🤖

✨ *FREE & OPEN SOURCE* ✨
This bot is completely FREE to use! 
No payments, no subscriptions, no hidden fees.

📱 *Owner Contact*:
• WhatsApp: https://wa.me/256752792178
• Owner: Terri

🌐 *Official Channels*:
• GitHub: https://github.com/VeronDev/Veronx-X-Lite
• Instagram: https://www.instagram.com/terridev1
• Channel: https://whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y

💫 *Features*:
✅ 200+ Commands
✅ Media Downloader
✅ Group Management  
✅ Sticker Maker
✅ AI Chat
✅ And much more!

🛠️ *Technical*:
• Built with Node.js & Baileys
• SQLite Database
• Auto-Update System
• Cross-Platform

⭐ *Support Us*:
- Star our GitHub repo
- Share with friends
- Report bugs & suggest features
*/
const {
   spawn
} = require('child_process')
const path = require('path')

function start() {
   let args = [path.join(__dirname, 'vero.js'), ...process.argv.slice(2)]
   console.log([process.argv[0], ...args].join('\n'))
   let p = spawn(process.argv[0], args, {
         stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      })
      .on('message', data => {
         if (data == 'reset') {
            console.log('Restarting Bot...')
            p.kill()
            start()
            delete p
         }
      })
      .on('exit', code => {
         console.error('Exited with code:', code)
         if (code == '.' || code == 1 || code == 0) start()
      })
}
start()
