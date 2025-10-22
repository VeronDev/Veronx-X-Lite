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
const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

function ffmpeg(buffer, args = [], ext = '', ext2 = '') {
  return new Promise(async (resolve, reject) => {
    try {
      let tmp = path.join(__dirname, '../database', + new Date + '.' + ext)
      let out = tmp + '.' + ext2
      await fs.promises.writeFile(tmp, buffer)
      spawn('ffmpeg', [
        '-y',
        '-i', tmp,
        ...args,
        out
      ])
        .on('error', reject)
        .on('close', async (code) => {
          try {
            await fs.promises.unlink(tmp)
            if (code !== 0) return reject(code)
            resolve(await fs.promises.readFile(out))
            await fs.promises.unlink(out)
          } catch (e) {
            reject(e)
          }
        })
    } catch (e) {
      reject(e)
    }
  })
}

/**
 * Convert Audio to Playable WhatsApp Audio
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toAudio(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-ac', '2',
    '-b:a', '128k',
    '-ar', '44100',
    '-f', 'mp3'
  ], ext, 'mp3')
}

/**
 * Convert Audio to Playable WhatsApp PTT
 * @param {Buffer} buffer Audio Buffer
 * @param {String} ext File Extension 
 */
function toPTT(buffer, ext) {
  return ffmpeg(buffer, [
    '-vn',
    '-c:a', 'libopus',
    '-b:a', '128k',
    '-vbr', 'on',
    '-compression_level', '10'
  ], ext, 'opus')
}

/**
 * Convert Audio to Playable WhatsApp Video
 * @param {Buffer} buffer Video Buffer
 * @param {String} ext File Extension 
 */
function toVideo(buffer, ext) {
  return ffmpeg(buffer, [
    '-c:v', 'libx264',
    '-c:a', 'aac',
    '-ab', '128k',
    '-ar', '44100',
    '-crf', '32',
    '-preset', 'slow'
  ], ext, 'mp4')
}

module.exports = {
  toAudio,
  toPTT,
  toVideo,
  ffmpeg,
}
