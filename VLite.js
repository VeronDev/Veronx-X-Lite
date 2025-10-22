const { default: makeWASocket, fetchLatestBaileysVersion, downloadContentFromMessage, useMultiFileAuthState, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const FormData = require('form-data')
const cheerio = require('cheerio')
const os = require('os')
const fs = require('fs') 
const fsx = require('fs-extra')
const path = require('path')
const util = require('util')
const chalk = require('chalk')
const moment = require('moment-timezone')
const lolcatjs = require('lolcatjs')
const speed = require('performance-now')
const ms = toMs = require('ms')
const axios = require('axios')
const fetch = require('node-fetch')
const pino = require('pino')
const readline = require("readline");
const { exec, spawn, execSync } = require("child_process")
const { performance } = require('perf_hooks')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/uploader')
const { toAudio, toPTT, toVideo, ffmpeg, addExifAvatar } = require('./lib/converter')
const { smsg, getGroupAdmins, formatp, jam, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, json, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, reSize } = require('./lib/myfunc')
const { fetchBuffer, buffergif } = require("./lib/myfunc2")
const NodeCache = require('node-cache');
const ownerList = [String(global.ownernumber || '').replace(/[^0-9]/g, '')].filter(Boolean)

//time
const xtime = moment.tz('Africa/Kampala').format('HH:mm:ss')
const xdate = moment.tz('Africa/Kampala').format('DD/MM/YYYY')
const time2 = moment().tz('Africa/Kampala').format('HH:mm:ss')  
let Veronxtimewisher = `Good Night 🌌`
if (time2 < "17:00:00") Veronxtimewisher = `Good Evening 🌃`
if (time2 < "13:00:00") Veronxtimewisher = `Good Afternoon 🌅`
if (time2 < "10:00:00") Veronxtimewisher = `Good Morning 🌄`
if (time2 < "05:00:00") Veronxtimewisher = `Good Morning 🌄`

module.exports = async (VeronicaX, m, chatUpdate, store) => {
    try {
        const {
            type,
            quotedMsg,
            mentioned,
            now,
            fromMe
        } = m || {}

        var body = (m.mtype === 'conversation') ? m.message.conversation
            : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption
            : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption
            : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text
            : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId
            : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreplyglobal.selectedRowId
            : (m.mtype == 'templateButtonreplyglobalMessage') ? m.message.templateButtonreplyglobalMessage.selectedId
            : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreplyglobal.selectedRowId || m.text)
            : ''

        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body && prefix && body.startsWith(prefix)
        const command = isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const full_args = body.replace(command, '').slice(1).trim()
        const pushname = m.pushName || "☠️unknown"
        const botJid = VeronicaX.user && VeronicaX.user.id 
            ? VeronicaX.user.id.split(':')[0] + '@s.whatsapp.net' 
            : ''

        const itsMe = m.sender == botJid ? true : false
        const sender = m.sender
        const text = q = args.join(" ")
        const from = m?.key?.remoteJid || m?.chat || ''
        const fatkuns = (m.quoted || m)
        const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const isMedia = /image|video|sticker|audio/.test(mime)
        const isImage = (type == 'imageMessage')
        const isVideo = (type == 'videoMessage')
        const isAudio = (type == 'audioMessage')
        const isText = (type == 'textMessage')
        const isSticker = (type == 'stickerMessage')
        const isQuotedText = type === 'extendexTextMessage' && content && content.includes && content.includes('textMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content && content.includes && content.includes('imageMessage')
        const isQuotedLocation = type === 'extendedTextMessage' && content && content.includes && content.includes('locationMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content && content.includes && content.includes('videoMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content && content.includes && content.includes('stickerMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content && content.includes && content.includes('audioMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content && content.includes && content.includes('contactMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content && content.includes && content.includes('documentMessage')
        const sticker = []
        
        const isGroup = (m.key && m.key.remoteJid) ? m.key.remoteJid.endsWith('@g.us') : false
        const groupMetadata = isGroup ? await VeronicaX.groupMetadata(m.chat).catch(e => ({})) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        const participants = isGroup ? (groupMetadata.participants || []) : []
        const groupAdmins = isGroup ? await getGroupAdmins(participants) : []
        
        const isBotAdmins = isGroup && botJid ? groupAdmins.includes(botJid) : false
        const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false
        const groupOwner = isGroup ? (groupMetadata.owner || '') : ''
        const isGroupOwner = isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false
        
        const ownerJid = `${String(global.ownernumber || '').replace(/[^0-9]/g, '')}@s.whatsapp.net`
        const isCreator = m.sender === ownerJid

        const currentMode = VeronicaX.public ? 'Public' : 'Private'
        const isPremium = true
        const clientId = VeronicaX.user.id.split(':')[0];
        
        const senderbot = m.key?.fromMe ? VeronicaX.user.id.split(':')[0] + "@s.whatsapp.net" || VeronicaX.user.id : (m.key?.participant || m.key?.remoteJid || m.chat || '')
        const senderId = senderbot.split('@')[0];
        const isBot = clientId.includes(senderId);
        
        // Track user stats in database
        if (global.db && command) {
            try {
                global.db.updateUserStats(sender, true);
                global.db.updateChatAnalytics(from, true);
            } catch (dbError) {
                console.log('Database stats error:', dbError);
            }
        }

        // Add this with your other templates
const NoPushkontak = String(global.ownernumber || '')

const fkontak = {
    key: {
        participants: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "Halo"
    },
    message: {
        contactMessage: {
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
        }
    },
    participant: "0@s.whatsapp.net"
};

const fverif = {
    key: {
      remoteJid: "0@s.whatsapp.net",
      participant: "0@s.whatsapp.net",
      fromMe: false,
      id: "",
    },
    message: {
      conversation: `*𑜿ًًًًًًًًًًࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧя𑲭𑲭𑲭𑲭𑲭𑲭𑲭𖠘𖠦𖠥𖠢𖠛𖠨𖠫𖠱𖠸𖠸𓃱𓃰𓃠𓃥𓆦𓆉𖨆𖨆𓆏𓃯𓃭𓃵𓃙𓃟𓃝𓀴𓀲𓀱𓀧𓀨𓀬𓀫𓀪𓀧𓀦𓀞𓀩𓀫𓀤𓀣𓀡𓀞*`,
    },
};

const fgclink = {
    key: {
      participant: "0@s.whatsapp.net",
      remoteJid: "0@s.whatsapp.net",
    },
    message: {
      groupInviteMessage: {
        groupJid: "120363402052133400@g.us",
        inviteCode: "CfgxOknmbWz6M0QJANSaMl",
        groupName: `${global.botname}`,
        caption: `${pushname}`,
        jpegThumbnail: `https://files.catbox.moe/91n3vx.jpg`,
      },
    },
};

const qkontak = {
    key: {
        participant: `0@s.whatsapp.net`,
        ...(botJid ? { remoteJid: `status@broadcast` } : {})
    },
    message: {
        'contactMessage': {
            'displayName': `${global.ownername}`,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=${String(global.ownernumber || '')}:${NoPushkontak}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            sendEphemeral: true
        }
    }
};

const qlock = {
  key: {
    participant: '0@s.whatsapp.net',
    ...(m?.chat ? { remoteJid: 'status@broadcast' } : {})
  },
  message: {
    locationMessage: {
      name: `# ${global.ownername}.`,
      jpegThumbnail: ''
    }
  }
};

function _0x323f(_0x5e8aa5,_0x19e1a4){const _0x42305c=_0x89c4();return _0x323f=function(_0x1808fa,_0x46880d){_0x1808fa=_0x1808fa-0x12f;let _0x89c429=_0x42305c[_0x1808fa];if(_0x323f['TIYpDQ']===undefined){var _0x323fe1=function(_0xd8f0cb){const _0x127645='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x47545c='',_0x117263='';for(let _0x2d7f15=0x0,_0x2bfa8c,_0x2d84c5,_0x25cf91=0x0;_0x2d84c5=_0xd8f0cb['charAt'](_0x25cf91++);~_0x2d84c5&&(_0x2bfa8c=_0x2d7f15%0x4?_0x2bfa8c*0x40+_0x2d84c5:_0x2d84c5,_0x2d7f15++%0x4)?_0x47545c+=String['fromCharCode'](0xff&_0x2bfa8c>>(-0x2*_0x2d7f15&0x6)):0x0){_0x2d84c5=_0x127645['indexOf'](_0x2d84c5);}for(let _0x55a3c5=0x0,_0x30b56c=_0x47545c['length'];_0x55a3c5<_0x30b56c;_0x55a3c5++){_0x117263+='%'+('00'+_0x47545c['charCodeAt'](_0x55a3c5)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x117263);};_0x323f['tJMBXM']=_0x323fe1,_0x5e8aa5=arguments,_0x323f['TIYpDQ']=!![];}const _0x53908a=_0x42305c[0x0],_0x22df46=_0x1808fa+_0x53908a,_0x2546f7=_0x5e8aa5[_0x22df46];return!_0x2546f7?(_0x89c429=_0x323f['tJMBXM'](_0x89c429),_0x5e8aa5[_0x22df46]=_0x89c429):_0x89c429=_0x2546f7,_0x89c429;},_0x323f(_0x5e8aa5,_0x19e1a4);}(function(_0x4e6d34,_0xa1610c){const _0x1b1e49=_0x323f,_0x376120=_0x4e6d34();while(!![]){try{const _0x18f5a8=-parseInt(_0x1b1e49(0x146))/0x1+parseInt(_0x1b1e49(0x12f))/0x2*(parseInt(_0x1b1e49(0x14e))/0x3)+parseInt(_0x1b1e49(0x13e))/0x4+-parseInt(_0x1b1e49(0x134))/0x5+-parseInt(_0x1b1e49(0x130))/0x6+-parseInt(_0x1b1e49(0x133))/0x7+-parseInt(_0x1b1e49(0x13b))/0x8*(-parseInt(_0x1b1e49(0x13d))/0x9);if(_0x18f5a8===_0xa1610c)break;else _0x376120['push'](_0x376120['shift']());}catch(_0x9844a6){_0x376120['push'](_0x376120['shift']());}}}(_0x89c4,0x22060));const _0x46880d=(function(){let _0x1e6de5=!![];return function(_0xdec046,_0xf34433){const _0x44295c=_0x1e6de5?function(){if(_0xf34433){const _0x1afe07=_0xf34433['apply'](_0xdec046,arguments);return _0xf34433=null,_0x1afe07;}}:function(){};return _0x1e6de5=![],_0x44295c;};}());(function(){const _0x4cc4df=_0x323f,_0xed35e={'LgWlS':_0x4cc4df(0x14d),'sjgkM':_0x4cc4df(0x14a),'VkhpS':function(_0x4e2541,_0x473ad1){return _0x4e2541(_0x473ad1);},'XocfG':function(_0x4b408c,_0xb5bbc9){return _0x4b408c+_0xb5bbc9;},'ZVcEd':_0x4cc4df(0x138),'EIcXK':function(_0x4c4ad9,_0x33eeab){return _0x4c4ad9+_0x33eeab;},'GhwMr':_0x4cc4df(0x143),'yhWqX':function(_0x167584,_0x18cbd7){return _0x167584(_0x18cbd7);},'fxvOk':function(_0x11b733){return _0x11b733();},'uxqDs':function(_0x50d0fe,_0x489955,_0x2f02cd){return _0x50d0fe(_0x489955,_0x2f02cd);}};_0xed35e[_0x4cc4df(0x142)](_0x46880d,this,function(){const _0x15e63c=_0x4cc4df,_0x3699fe=new RegExp(_0xed35e[_0x15e63c(0x140)]),_0x4e2d4d=new RegExp(_0xed35e[_0x15e63c(0x131)],'i'),_0x51b57f=_0xed35e['VkhpS'](_0x1808fa,'init');!_0x3699fe[_0x15e63c(0x136)](_0xed35e[_0x15e63c(0x14f)](_0x51b57f,_0xed35e[_0x15e63c(0x141)]))||!_0x4e2d4d['test'](_0xed35e['EIcXK'](_0x51b57f,_0xed35e['GhwMr']))?_0xed35e['yhWqX'](_0x51b57f,'0'):_0xed35e[_0x15e63c(0x14c)](_0x1808fa);})();}());function _0x89c4(){const _0x59f9c6=['DgvZDa','zgvIDq','y2HHAw4','y29UC3rYDwn0B3i','uxHUtfe','ntzVzLvKzve','ywn0Aw9U','ndm0otK3AwvxveDW','mtmWnJqWs0XZwufo','z2DLCG','tgDxBfm','wLzJrwq','DxHXrhm','Aw5WDxq','BeDKthi','D2HPBguGkhrYDwuPihT9','mtmZodm4t2zLA29c','y291BNrLCG','Ahr0Chm6lY9MAwXLCY5JyxrIB3GUBw9Ll3HPDdu4Cc5QCgC','ver0DNC','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','DLHhzKC','zNH2t2S','zNvUy3rPB24GkLWOicPCkq','mJi4mJCZshbnA1no','wg9JzKC','CKrQzNq','nenhq0vSva','mti2nZe0nMDqqLr0Ba','C2PNA00','AM1tsxu','nZGWnJrlCK5zB2K','mtm4mtyWBKjdse9k','vMzeBhG'];_0x89c4=function(){return _0x59f9c6;};return _0x89c4();}const replyglobal=_0x265103=>{const _0xb11a6a=_0x323f,_0x4b7c31={'QxnLQ':'PHOTO'};VeronicaX['sendMessage'](m['chat'],{'text':_0x265103,'contextInfo':{'mentionedJid':[sender],'forwardingScore':0x98967f,'isForwarded':![],'externalAdReply':{'showAdAttribution':!![],'containsAutoReply':!![],'title':'\x20'+global['botname'],'body':''+global['ownername'],'previewType':_0x4b7c31[_0xb11a6a(0x13a)],'thumbnailUrl':'','thumbnail':_0xb11a6a(0x148),'sourceUrl':'https://www.instagram.com/terridev1'}}},{'quoted':m});};function _0x1808fa(_0x552f66){const _0x303c50=_0x323f,_0xa31030={'vXGfG':function(_0x289cee,_0x3aef01){return _0x289cee===_0x3aef01;},'uqxxg':_0x303c50(0x145),'QXVQX':function(_0x44d47d,_0x36e3e5){return _0x44d47d!==_0x36e3e5;},'TDtvw':function(_0x588279,_0x3f2a81){return _0x588279+_0x3f2a81;},'VfDlx':function(_0x10bd6f,_0x275cc5){return _0x10bd6f/_0x275cc5;},'zfYRj':'length','rDjft':function(_0x5777b2,_0x2fcafe){return _0x5777b2===_0x2fcafe;},'GBWMW':function(_0x3d785e,_0x3d2e3c){return _0x3d785e%_0x3d2e3c;},'Qoknn':_0x303c50(0x137),'nVJNq':function(_0xf15a58,_0x48d873){return _0xf15a58+_0x48d873;},'jmSIu':'stateObject','lGdLr':function(_0x562a71,_0x76abdc){return _0x562a71(_0x76abdc);}};function _0x2554af(_0x1ad341){const _0x7aec5a=_0x303c50;if(_0xa31030[_0x7aec5a(0x14b)](typeof _0x1ad341,'string'))return function(_0x138a27){}['constructor'](_0xa31030['uqxxg'])['apply'](_0x7aec5a(0x147));else _0xa31030['QXVQX'](_0xa31030['TDtvw']('',_0xa31030[_0x7aec5a(0x135)](_0x1ad341,_0x1ad341))[_0xa31030['zfYRj']],0x1)||_0xa31030[_0x7aec5a(0x150)](_0xa31030['GBWMW'](_0x1ad341,0x14),0x0)?function(){return!![];}[_0x7aec5a(0x139)](_0xa31030[_0x7aec5a(0x149)](_0xa31030['Qoknn'],'gger'))['call'](_0x7aec5a(0x13c)):function(){return![];}[_0x7aec5a(0x139)](_0xa31030['nVJNq'](_0xa31030['Qoknn'],_0x7aec5a(0x13f)))['apply'](_0xa31030[_0x7aec5a(0x132)]);_0xa31030['lGdLr'](_0x2554af,++_0x1ad341);}try{if(_0x552f66)return _0x2554af;else _0xa31030[_0x303c50(0x144)](_0x2554af,0x0);}catch(_0x31a7ca){}}

        async function Telesticker(url) {
            return new Promise(async (resolve, reject) => {
                if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return replyglobal('Enter your telegram sticker URL')
                packName = url.replace("https://t.me/addstickers/", "")
                data = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, {method: "GET",headers: {"User-Agent": "GoogleBot"}})
                const Veronxresult = []
                for (let i = 0; i < data.data.result.stickers.length; i++) {
                    fileId = data.data.result.stickers[i].thumb.file_id
                    data2 = await axios(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
                    result = {
                        status: 200,
                        author: 'Terri',
                        url: "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + data2.data.result.file_path
                    }
                    Veronxresult.push(result)
                }
                resolve(Veronxresult)
            })
        }

        async function loading () {
            var xeonlod = [
                "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
                "《 ████▒▒▒▒▒▒▒▒》30%",
                "《 ███████▒▒▒▒▒》50%",
                "《 ██████████▒▒》80%",
                "《 ████████████》100%",
                "𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳 ☣️....."
            ]
            let { key } = await VeronicaX.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

            for (let i = 0; i < xeonlod.length; i++) {
                await VeronicaX.sendMessage(from, {text: xeonlod[i], edit: key });
            }
        }

        if (!VeronicaX.public) {
            if (!isCreator && !m.key.fromMe) return
        }
        
        if (autoread) {
            VeronicaX.readMessages([m.key])
        }
        
        if (global.autoTyping) {
            VeronicaX.sendPresenceUpdate('composing', from)
        }

        if (global.autoRecording) {
            VeronicaX.sendPresenceUpdate('recording', from)
        }

        //bot number online status, available=online, unavailable=offline
        VeronicaX.sendPresenceUpdate('uavailable', from)
        
        if (global.autorecordtype) {
            let xeonrecordin = ['recording','composing']
            let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]
            VeronicaX.sendPresenceUpdate(xeonrecordinfinal, from)
        }
        
        if (autobio) {
            VeronicaX.updateProfileStatus(`Veronica Lite online By Terri`).catch(_ => _)
        }
     
        // Enhanced Antilink Detection with Database
        if (isGroup && !isAdmins && !m.key.fromMe) {
            try {
                const groupSettings = global.db?.getGroupSetting(m.chat);
                if (groupSettings?.antilink_enabled) {
                    const linkRegex = /(https?:\/\/[^\s]+)/g;
                    const whitelist = [
                        'api.github.com/repos/Terrizev/Vero-Lite',
                        'whatsapp.com/channel/0029Vb57ZHh7IUYcNttXEB3y'
                    ];
                    
                    if (linkRegex.test(body)) {
                        let isWhitelisted = false;
                        for (const link of whitelist) {
                            if (body.includes(link)) {
                                isWhitelisted = true;
                                break;
                            }
                        }
                        
                        if (!isWhitelisted) {
                            try {
                                await VeronicaX.sendMessage(m.chat, {
                                    delete: {
                                        remoteJid: m.chat,
                                        fromMe: false,
                                        id: m.key.id,
                                        participant: m.sender
                                    }
                                });
                               
                                if (isBotAdmins) {
                                    await VeronicaX.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
                                    replyglobal(`🚫 Kicked @${m.sender.split('@')[0]} for sharing links`)
                                } else {
                                    replyglobal(`🚫 Message deleted for sharing links. I couldn't kick because I'm not an admin.`)
                                }
                            } catch (error) {
                                console.log('Antilink error:', error)
                            }
                            return;
                        }
                    }
                }
            } catch (dbError) {
                console.log('Database antilink error:', dbError);
            }
        }

        let list = []
        // Build owner contact list using ownerList and global.ownernumber
        for (let i of ownerList) {
            list.push({
                displayName: await VeronicaX.getName(i + '@s.whatsapp.net'),
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await VeronicaX.getName(i + '@s.whatsapp.net')}\nFN:${await VeronicaX.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem4.ADR:;;${global.location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    })
}

        
        // ================== [ CONSOLE LOG ] ==================//
const dayz = moment(Date.now()).tz('Africa/Kampala').locale('en').format('dddd');
const timez = moment(Date.now()).tz('Africa/Kampala').locale('en').format('HH:mm:ss z');
const datez = moment(Date.now()).tz('Africa/Kampala').format("DD/MM/YYYY");

if (m.message) {
    if (isGroup) {
        lolcatjs.fromString(`┏━━━━━━━━━━━━━『 GROUP CHAT 』━━━━━━━━━━━━━─`);
    } else {
        lolcatjs.fromString(`┏━━━━━━━━━━━━━『 PRIVATE CHAT 』━━━━━━━━━━━━━─`);
    }
    lolcatjs.fromString(`» Sent Time: ${dayz}, ${timez}`);
    lolcatjs.fromString(`» Message Type: ${m.mtype}`);
    lolcatjs.fromString(`» Sender Name: ${pushname || 'N/A'}`);
    lolcatjs.fromString(`» Chat ID: ${m.chat || 'N/A'}`);
    lolcatjs.fromString(`» Message: ${budy || 'N/A'}`);
    if (isGroup) {
        lolcatjs.fromString(`» Group Name: ${groupName || 'N/A'}`);
    }
    lolcatjs.fromString('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━─ ⳹\n\n');
}

        //command list
        switch (command) {
        // Database Enhanced Antilink Command
        case 'antilink': {
            if (!isGroup) return replyglobal('Group only!')
            if (!isAdmins) return replyglobal(mess.admin)
            if (!isBotAdmins) return replyglobal(mess.botAdmin)

            if (args[0] === 'on') {
                global.db.updateGroupSetting(m.chat, { antilink: true });
                replyglobal('✅ Antilink ON - Links will be deleted & users kicked')
            } 
            else if (args[0] === 'off') {
                global.db.updateGroupSetting(m.chat, { antilink: false });
                replyglobal('❌ Antilink OFF')
            }
            else if (args[0] === 'status') {
                const groupSettings = global.db.getGroupSetting(m.chat);
                const status = groupSettings?.antilink_enabled ? 'ON' : 'OFF';
                replyglobal(`Antilink: ${status}`)
            }
            else {
                replyglobal(`Usage: ${prefix}antilink on/off/status`)
            }
        }
        break
        
        case 'savecontact':
        case 'vcf':
        case 'scontact':
        case 'savecontacts': {
            try {
                if (!isGroup) return replyglobal('This command is for groups only!')
                if (!isCreator) return replyglobal('*_This command is for the owner only_*')

                // Send reaction first
                await VeronicaX.sendMessage(m.chat, { react: { text: '📇', key: m.key } })

                let cmiggc = groupMetadata
                const { participants } = groupMetadata
                
                let orgiggc = participants.map(a => a.id)
                let vcard = ''
                let noPort = 0
                
                for (let a of cmiggc.participants) {
                    const number = a.id.split("@")[0]
                    const name = await VeronicaX.getName(a.id) || `User${noPort + 1}`
                    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] ${name}\nTEL;type=CELL;type=VOICE;waid=${number}:+${number}\nEND:VCARD\n`
                }

                let nmfilect = './VeroMedia/contacts.vcf'
                await replyglobal('Saving ' + cmiggc.participants.length + ' participants contact... 📥')

                fs.writeFileSync(nmfilect, vcard.trim())
                await sleep(2000)

                await VeronicaX.sendMessage(m.chat, {
                    document: fs.readFileSync(nmfilect), 
                    mimetype: 'text/vcard', 
                    fileName: `${groupName || 'Group'}_Contacts.vcf`, 
                    caption: `*📇 Group Contacts Saved Successfully*\n\n` +
                             `*👥 Group Name:* ${cmiggc.subject}\n` +
                             `*📞 Total Contacts:* ${cmiggc.participants.length}\n` + `> © ${global.botname} • ${global.ownername}`,
                    contextInfo: {
                        mentionedJid: [m.sender],
                        externalAdReply: {
                            title: `${global.botname} - Contact Saver`,
                            body: `Saved ${cmiggc.participants.length} contacts`,
                            thumbnail: `https://files.catbox.moe/r1e75b.png`,
                            sourceUrl: `https://www.instagram.com/terridev1`
                        }
                    }
                }, { quoted: m })

                // Cleanup the file after sending
                try {
                    fs.unlinkSync(nmfilect)
                } catch (cleanupError) {
                    console.log('Cleanup error:', cleanupError)
                }

            } catch (err) {
                console.error('Save contact error:', err)
                await replyglobal(`❌ Error: ${err.message || err}`)
            }
        }
        break
        
        case 'tourl':
case 'upload':
case 'imgtourl':
case 'imgurl':
case 'url':
case 'geturl': {
    const quotedMsg = m.quoted ? m.quoted : m;
    const mimeType = (quotedMsg.msg || quotedMsg).mimetype || '';
    
    if (!mimeType) return replyglobal('Reply to media!')

    await VeronicaX.sendMessage(m.chat, { react: { text: '🖇️', key: m.key } })

    try {
        const mediaBuffer = await VeronicaX.downloadMediaMessage(quotedMsg);
        
        if (!mediaBuffer || mediaBuffer.length === 0) {
            return replyglobal('Download failed!')
        }

        const tempFilePath = path.join(os.tmpdir(), `upload_${Date.now()}`);
        fs.writeFileSync(tempFilePath, mediaBuffer);

        const form = new FormData();
        form.append('fileToUpload', fs.createReadStream(tempFilePath), 'file');
        form.append('reqtype', 'fileupload');

        const response = await axios.post("https://catbox.moe/user/api.php", form, {
            headers: form.getHeaders()
        });

        if (!response.data) throw new Error("Upload failed");

        const mediaUrl = response.data;
        
        try {
            fs.unlinkSync(tempFilePath);
        } catch (cleanupError) {}

        await VeronicaX.sendMessage(m.chat, {
            text: `🔗 *URL:* ${mediaUrl}\n` +
                  `> © ${global.botname}`
        }, { quoted: m });

    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;
        
        case 'repo':
        case 'sc': {
            await VeronicaX.sendMessage(m.chat, { react: { text: '⭐', key: m.key } })
            
            const repoUrl = 'https://api.github.com/repos/VeronDev/Veronx-X-Lite';
            const response = await axios.get(repoUrl);
            const repoData = response.data;

            const stars = repoData.stargazers_count || 0;
            const forks = repoData.forks_count || 0;
            const watchers = repoData.watchers_count || 0;
            const license = repoData.license ? repoData.license.name : 'None';
            const description = repoData.description || 'No description available';

            const caption = `*💫 BOT REPOSITORY 💫*\n\n` +
                           `🧚‍♀️ *Name:* ${repoData.name}\n` +
                           `🧚‍♀️ *Description:* ${description}\n` +
                           `🧚‍♀️ *Stars:* ${stars} ⭐\n` +
                           `🧚‍♀️ *Forks:* ${forks} 🍴\n` +
                           `🧚‍♀️ *Watchers:* ${watchers} 👀\n` +
                           `🧚‍♀️ *Language:* JavaScript\n` +
                           `🧚‍♀️ *License:* ${license}\n` +
                           `🧚‍♀️ *GitHub Link:* ${repoData.html_url}\n\n` +
                           `👊 @${m.sender.split('@')[0]}, Don't forget to star and fork my repository!`;

            await VeronicaX.sendMessage(m.chat, { 
                text: caption,
                contextInfo: {
                    mentionedJid: [m.sender],
                    externalAdReply: {
                        title: `${repoData.name} • ${global.botname}`,
                        body: description.substring(0, 30) + '...',
                        mediaType: 1,
                        thumbnail: await getBuffer('https://files.catbox.moe/xit58p.jpg'),
                        sourceUrl: repoData.html_url
                    }
                }
            }, { quoted: m });
        }
        break;
        
        case 'owner':
        case 'creator': {
            await VeronicaX.sendMessage(m.chat, {
                contacts: {
                    displayName: `${list.length} Owner`,
                    contacts: list
                },
                contextInfo: {
                    externalAdReply: {
                        title: `${global.botname}`,
                        body: `Contact Owner`,
                        thumbnail: `https://files.catbox.moe/r1e75b.png`,
                        sourceUrl: `https://www.instagram.com/terridev1`
                    }
                }
            }, { quoted: m })
        }
        break
        
        case 'mode': {
            if (!isCreator) return replyglobal('Owner only!')
            const currentMode = VeronicaX.public ? 'Public' : 'Private'
            await replyglobal(`Mode: ${currentMode}\nUse ${prefix}public or ${prefix}private`)
        }
        break

        case 'public': {
            if (!isCreator) return replyglobal('Owner only!')
            VeronicaX.public = true
            await replyglobal('✅ Public mode ON')
        }
        break

        case 'private': {
            if (!isCreator) return replyglobal('Owner only!')
            VeronicaX.public = false
            await replyglobal('🔒 Private mode ON')
        }
        break
case 'play':
case 'song': {
    if (!text) return replyglobal('Need song name!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '😌', key: m.key } })
    
    const apiUrl = `https://terrisapi.vercel.app/dl/yt/play?query=${encodeURIComponent(text)}&apikey=terri`
    const response = await fetchJson(apiUrl)
    
    if (!response.status || !response.result?.mp3?.download) {
        return replyglobal('❌ Song not found!')
    }
    
    const songData = response.result.mp3
    const videoData = response.result.video
    
    const audioBuffer = await getBuffer(songData.download)
    
    if (!audioBuffer || audioBuffer.length === 0) {
        return replyglobal('❌ Download failed!')
    }
    
    const fileName = `${videoData.title.replace(/[^\w\s]/gi, '')}.mp3`
    
    await VeronicaX.sendMessage(m.chat, {
        document: audioBuffer,
        fileName: fileName,
        mimetype: 'audio/mpeg',
        caption: `🎵 ${global.botname}`
    }, { quoted: fverif })
}
break;
        
        case 'ping':
        case 'speed':
            {
                // Send reaction first
                await VeronicaX.sendMessage(m.chat, { react: { text: '🧚‍♀️', key: m.key } })
                
                const timestamp = speed()
                const latensi = speed() - timestamp
                await VeronicaX.sendMessage(m.chat, {
                    text: `*•Lite Speed:* ${latensi.toFixed(4)} _ms_`
                }, { quoted: qkontak })
            }
            break
            
        case 'menu':
case 'veronica': {
   
    await VeronicaX.sendMessage(m.chat, { react: { text: '👻', key: m.key } })
    
    const menuText = `
\`\`\`╭═══ Vᴇʀᴏɴɪᴄᴀ Lɪᴛᴇ ═══⊷
┃   ╭───────────
┃々│ ᴘʀᴇғɪx   : ${prefix}
┃々│ ᴍᴏᴅᴇ     : ${currentMode}
┃々│ ᴜsᴇʀ     : ${pushname}
┃々│ ᴛɪᴍᴇ     : ${moment().tz('Africa/Kampala').format('hh:mm A')}
┃々│ ᴅᴀʏ      : ${moment().tz('Africa/Kampala').format('dddd')}
┃々│ ᴠᴇʀsɪᴏɴ  : ${global.version || '1.0.0'}
┃々│ ʀᴀᴍ      : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
┃々│ ᴘʟᴀᴛғᴏʀᴍ : ${os.platform()}
┃    ╰───────────
╰═══════════════⊷\`\`\`${readmore}
┏━━《ᴏᴡɴᴇʀ ᴍᴇɴᴜ》━━
┃${global.simbol} mode
┃${global.simbol} Areact
┃${global.simbol} Setbio
┃${global.simbol} Restart
┃${global.simbol} Advertise 
┃${global.simbol} Delete
┃${global.simbol} Join
┃${global.simbol} Leave
┃${global.simbol} Getsession
┃${global.simbol} Logout
┃${global.simbol} Unblock
┃${global.simbol} Block
┃${global.simbol} Setsudo
┃${global.simbol} Delsudo
┃${global.simbol} Getsudo
┃${global.simbol} Listblock
┃${global.simbol} listgroup
┃${global.simbol} Clearchat
┃${global.simbol} Joinch
┃${global.simbol} Ban
┃${global.simbol} Unban
┃${global.simbol} save
┗━━━━━━━━━━━━━━━━━

┏━━《ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ》━━
┃${global.simbol} Play <query>
┃${global.simbol} Video <query>
┃${global.simbol} igdl <link>
┃${global.simbol} Fb <link>
┃${global.simbol} Tiktok <link>
┃${global.simbol} tiktokmp3 <link>
┃${global.simbol} Mediafire <link>
┃${global.simbol} Gitclone <link>
┃${global.simbol} Ytmp4 <link>
┃${global.simbol} Ytmp3 <link>
┃${global.simbol} Yts <query>
┃${global.simbol} Xvideodl <link>
┃${global.simbol} Shortlink-dl <link>
┃${global.simbol} twitter <link>
┗━━━━━━━━━━━━━━━━━

┏━━《ғᴀᴋᴇ ᴍᴇɴᴜ》━━
┃${global.simbol} autostatus
┃${global.simbol} online
┃${global.simbol} autotyping 
┃${global.simbol} autorecording 
┃${global.simbol} autoread
┃${global.simbol} unavailable 
┃${global.simbol} autobio
┗━━━━━━━━━━━━━━━━━

┏━━《ʙᴏᴛ ᴍᴇɴᴜ》━━
┃${global.simbol} Ping
┃${global.simbol} Runtime
┃${global.simbol} Ai
┃${global.simbol} Test
┃${global.simbol} Alive
┗━━━━━━━━━━━━━━━━━

┏━━《ɢʀᴏᴜᴘ ᴍᴇɴᴜ》━━
┃${global.simbol} Hidetag
┃${global.simbol} Tagall
┃${global.simbol} Tagadmin
┃${global.simbol} Grouplink
┃${global.simbol} Revoke
┃${global.simbol} Add
┃${global.simbol} Kick
┃${global.simbol} Promote
┃${global.simbol} Demote
┃${global.simbol} Mute
┃${global.simbol} Antilink
┃${global.simbol} Unmute
┃${global.simbol} Closetime
┃${global.simbol} Opentime
┃${global.simbol} Stoptime
┃${global.simbol} Welcome
┃${global.simbol} Goodbye
┃${global.simbol} Approve
┃${global.simbol} Reject
┃${global.simbol} Request
┃${global.simbol} warn
┃${global.simbol} resetwarn
┃${global.simbol} idgc
┃${global.simbol} Antitag
┃${global.simbol} antidelete
┃${global.simbol} banchat
┃${global.simbol} unbanchat
┗━━━━━━━━━━━━━━━━━

┏━━《ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ》━━
┃${global.simbol} sticker
┃${global.simbol} qc
┃${global.simbol} toimg
┃${global.simbol} tomp3
┃${global.simbol} tovn
┃${global.simbol} tovv
┃${global.simbol} Write
┃${global.simbol} shortlink
┃${global.simbol} Ssweb
┗━━━━━━━━━━━━━━━━━

┏━━《sᴇᴀʀᴄʜ ᴍᴇɴᴜ》━━
┃${global.simbol} stickersearch <query>
┃${global.simbol} xnxxsearch <query>
┃${global.simbol} xvideosearch <query>
┃${global.simbol} npmsearch <query>
┃${global.simbol} githubsearch <query>
┃${global.simbol} tiktoksearch <query>
┗━━━━━━━━━━━━━━━━━

┏━━《ʟᴏɢᴏ ᴍᴇɴᴜ》━━
┃
┗━━━━━━━━━━━━━━━━━

┏━━《ᴏᴛʜᴇʀ ᴍᴇɴᴜ》━━
┃${global.simbol} getdevice
┃${global.simbol} Owner
┃${global.simbol} Say
┃${global.simbol} Trackip
┃${global.simbol} readmore
┃${global.simbol} Vv
┃${global.simbol} Vv2
┃${global.simbol} Fancy
┃${global.simbol} Take
┃${global.simbol} Getpp
┃${global.simbol} Weather
┃${global.simbol} Translate
┃${global.simbol} Test
┃${global.simbol} cekidch
┃${global.simbol} Get
┃${global.simbol} Repo
┗━━━━━━━━━━━━━━━━━
`;

    // Determine which menu style to use
    const menuStyle = global.stylemenu || '1';
    
    switch (menuStyle) {
        case '1':
            // Your original default menu style
            await VeronicaX.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 9999999,
                    isForwarded: true
                }
            }, { quoted: qlock });
            break;
            
        case '2':
            // Newsletter style (your existing style 2)
            await VeronicaX.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    mentionedJid: [sender],
                    isForwarded: true,
                    forwardingScore: 999,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363397100406773@newsletter',
                        newsletterName: "Vᴇʀᴏ Lɪᴛᴇ",
                        serverMessageId: -1,
                    },
                    externalAdReply: {
                        title: `${global.botname}`,
                        body: pushname,
                        thumbnailUrl: 'https://files.catbox.moe/xit58p.jpg',
                        sourceUrl: 'https://www.instagram.com/terridev1',
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    }
                }
            }, { quoted: qkontak });
            break;
            
        case '3':
            // GIF style with fkontak - SIMPLIFIED
            try {
                await VeronicaX.sendMessage(m.chat, {
                    video: { 
                        url: 'https://files.catbox.moe/r0vpck.mp4' 
                    },
                    caption: menuText,
                    gifPlayback: true,
                    contextInfo: {
                        mentionedJid: [sender],
                        externalAdReply: {
                            title: `${global.botname}`,
                            body: `Menu for ${pushname}`,
                            thumbnailUrl: 'https://files.catbox.moe/xit58p.jpg',
                            sourceUrl: 'https://www.instagram.com/terridev1',
                            mediaType: 1,
                            renderLargerThumbnail: true,
                        }
                    }
                }, { quoted: fkontak });
            } catch (error) {
                console.error('GIF menu error:', error);
                // Fallback to simple text
                await VeronicaX.sendMessage(m.chat, { 
                    text: menuText 
                }, { quoted: fkontak });
            }
            break;
        case '4':
            // Document style from other bot
            await VeronicaX.sendMessage(m.chat, {
                document: {
                    url: "https://i.ibb.co/2W0H9Jq/avatar-contact.png",
                },
                caption: menuText,
                mimetype: "application/zip",
                fileName: `${global.botname}`,
                fileLength: "9999999",
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: `${global.botname}`,
                        body: `${global.ownername}`,
                        thumbnail: `https://files.catbox.moe/r1e75b.png`,
                        sourceUrl: `https://www.instagram.com/terridev1`,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            }, { quoted: fkontak });
            break;

        case '5':
            // Simple text reply from other bot
            await VeronicaX.sendMessage(m.chat, { 
                text: menuText 
            }, { quoted: m });
            break;

        case '6':
            // Text with external ad from other bot
            await VeronicaX.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: global.botname,
                        body: global.ownername,
                        thumbnail: `https://files.catbox.moe/r1e75b.png`,
                        sourceUrl: `https://www.instagram.com/terridev1`,
                        mediaType: 1,
                        renderLargerThumbnail: true,
                    },
                },
            }, { quoted: m });
            break;

        case '7':
            // Image with caption from other bot
            await VeronicaX.sendMessage(m.chat, {
                image: `https://files.catbox.moe/r1e75b.png`,
                caption: menuText,
            }, { quoted: m });
            break;

        case '8':
            // View once interactive from other bot
            try {
                let massage = generateWAMessageFromContent(m.chat, {
                    viewOnceMessage: {
                        message: {
                            interactiveMessage: {
                                body: { text: null },
                                footer: { text: menuText },
                                nativeFlowMessage: { buttons: [{ text: null }] },
                            },
                        },
                    },
                }, { quoted: m });
                await VeronicaX.relayMessage(m.chat, massage.message, { messageId: massage.key.id });
            } catch (e) {
                console.error("View once menu error:", e);
                await VeronicaX.sendMessage(m.chat, { text: menuText }, { quoted: m });
            }
            break;

        case '9':
            // Request payment style from other bot
            try {
                await VeronicaX.relayMessage(m.chat, {
                    requestPaymentMessage: {
                        currencyCodeIso4217: 'USD',
                        requestFrom: '0@s.whatsapp.net',
                        amount1000: '1',
                        noteMessage: {
                            extendedTextMessage: {
                                text: menuText,
                                contextInfo: {
                                    mentionedJid: [m.sender],
                                    externalAdReply: { showAdAttribution: true },
                                },
                            },
                        },
                    },
                }, {});
            } catch (e) {
                console.error("Payment style menu error:", e);
                await VeronicaX.sendMessage(m.chat, { text: menuText }, { quoted: m });
            }
            break;
            
        default:
            // Fallback to your original style 1
            await VeronicaX.sendMessage(m.chat, {
                text: menuText,
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 9999999,
                    isForwarded: true
                }
            }, { quoted: qlock });
    }
}
break;
        
case 'getpp':
case 'profilepic':
case 'getpic': {
    try {
        await VeronicaX.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
        
        let userJid = quoted?.sender || 
                     m.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || 
                     sender;

        const [user] = await VeronicaX.onWhatsApp(userJid).catch(() => []);
        if (!user?.exists) return replyglobal("❌ User not found");

        let ppUrl;
        try {
            ppUrl = await VeronicaX.profilePictureUrl(userJid, 'image');
        } catch {
            return replyglobal("❌ No profile picture");
        }

        await VeronicaX.sendMessage(m.chat, {
            image: { url: ppUrl },
            caption: `🖼️ *Profile Picture*\n> © ${global.botname}`
        }, { quoted: m });

    } catch (e) {
        replyglobal(`❌ Error: ${e.message}`)
    }
}
break;

case 'readmore':
case 'rm': {
    if (!text) return replyglobal('Need text!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📖', key: m.key } })
    
    const parts = text.split(' ')
    const firstPart = parts.slice(0, Math.ceil(parts.length / 2)).join(' ')
    const secondPart = parts.slice(Math.ceil(parts.length / 2)).join(' ')
    
    const readmoreText = `${firstPart}${readmore}${secondPart}`
    
    await VeronicaX.sendMessage(m.chat, { 
        text: readmoreText
    }, { quoted: m })
}
break;
        
        case 'take':
        case 'wm': {
            if (!quoted || !isMedia) return replyglobal('Reply to an image/video!')    
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
            
            let ahuh = args.join(' ').split('|')
            let packname = ahuh[0] !== '' ? ahuh[0] : `${global.botname}`
            let author = typeof ahuh[1] !== 'undefined' ? ahuh[1] : `${global.ownername}`
            
            let media = await VeronicaX.downloadMediaMessage(quoted)
            
            await VeronicaX.sendImageAsSticker(m.chat, media, m, {
                packname: packname,
                author: author
            })
        }
        break
        
case 'tomp4':
case 'tovideo': {
    if (!quoted || !/webp/.test(mime)) return replyglobal('Reply to a sticker!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
    
    try {
        let media = await VeronicaX.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await VeronicaX.sendMessage(m.chat, { 
            video: { url: webpToMp4.result }, 
            caption: `*Sticker to Video* | ${global.botname}`
        }, { quoted: m })
        await fs.unlinkSync(media)
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;

        case 'toaud':
case 'toaudio': {
    if (!/video|audio/.test(mime)) return replyglobal('Reply to video/audio!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎵', key: m.key } })
    
    try {
        let media = await (m.quoted ? m.quoted.download() : m.download())
        let audio = await toAudio(media, 'mp4')
        await VeronicaX.sendMessage(m.chat, { 
            audio: audio, 
            mimetype: 'audio/mpeg'
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;

 case 'tovn':
case 'toptt': {
    if (!quoted || !/video|audio/.test(mime)) return replyglobal('Reply to video/audio!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎤', key: m.key } })
    
    try {
        let media = await quoted.download()
        let audio = await toPTT(media, 'mp4')
        await VeronicaX.sendMessage(m.chat, {
            audio: audio, 
            mimetype: 'audio/mpeg', 
            ptt: true
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;

        case 'togif': {
    if (!quoted) return replyglobal('Reply to a sticker!')
    if (!/webp/.test(mime)) return replyglobal('Reply to a sticker!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔄', key: m.key } })
    
    try {
        let media = await VeronicaX.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await VeronicaX.sendMessage(m.chat, { 
            video: { url: webpToMp4.result }, 
            caption: `*Sticker to GIF* | ${global.botname}`,
            gifPlayback: true
        }, { quoted: m })
        await fs.unlinkSync(media)
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;

        case 'toqr': {
    if (!q) return replyglobal('Need link/text!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📱', key: m.key } })
    
    try {
        const qrcode = require('qrcode')
        let qrData = await qrcode.toDataURL(q, { scale: 35 })
        let data = Buffer.from(qrData.replace('data:image/png;base64,', ''), 'base64')
        
        await VeronicaX.sendMessage(m.chat, { 
            image: data, 
            caption: `*QR Code* | ${global.botname}\nContent: ${q}`
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break;
        
        case 'ban': {
            if (!isCreator) return replyglobal('Owner only!')
            
            if (!text) return replyglobal('Please mention user!')
            let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
            
            if (user === ownerJid) return replyglobal('Cannot ban owner!')
            
            // Use database instead of global Set
            global.db.banUser(user, ownerJid, args.slice(1).join(' ') || 'No reason provided');
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '🔨', key: m.key } })
            await replyglobal(`✅ Banned @${user.split('@')[0]}`)
        }
        break

        case 'unban': {
            if (!isCreator) return replyglobal('Owner only!')
            
            if (!text) return replyglobal('Please mention user!')
            let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
            
            global.db.unbanUser(user);
            await VeronicaX.sendMessage(m.chat, { react: { text: '🔓', key: m.key } })
            await replyglobal(`✅ Unbanned @${user.split('@')[0]}`)
        }
        break

        case 'banlist': {
            if (!isCreator) return replyglobal('Owner only!')
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '📋', key: m.key } })
            
            const bannedUsers = global.db.getBannedUsers();
            if (!bannedUsers || bannedUsers.length === 0) {
                return replyglobal('📭 No banned users found')
            }
            
            let banListText = `*🚫 Banned Users List*\n\n`
            bannedUsers.forEach((user, index) => {
                banListText += `${index + 1}. @${user.user_jid.split('@')[0]}\n`
                banListText += `   Reason: ${user.reason}\n`
                banListText += `   Banned by: @${user.banned_by.split('@')[0]}\n`
                banListText += `   Date: ${moment(user.created_at).format('DD/MM/YYYY')}\n\n`
            })
            banListText += `Total: ${bannedUsers.length} users`
            
            await VeronicaX.sendMessage(m.chat, {
                text: banListText,
                mentions: bannedUsers.map(u => u.user_jid)
            }, { quoted: m })
        }
        break

        case 'setsudo': {
            if (!isCreator) return replyglobal('Owner only!')
            
            if (!text) return replyglobal('Please mention user!')
            let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
            
            if (user === ownerJid) return replyglobal('Owner is already sudo!')
            
            global.db.addSudoUser(user, ownerJid);
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '⭐', key: m.key } })
            await replyglobal(`✅ Added @${user.split('@')[0]} to sudo users`)
        }
        break

        case 'delsudo': {
            if (!isCreator) return replyglobal('Owner only!')
            
            if (!text) return replyglobal('Please mention user!')
            let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
            
            global.db.removeSudoUser(user);
            await VeronicaX.sendMessage(m.chat, { react: { text: '🗑️', key: m.key } })
            await replyglobal(`✅ Removed @${user.split('@')[0]} from sudo users`)
        }
        break

        case 'listsudo': {
            if (!isCreator) return replyglobal('Owner only!')
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '📝', key: m.key } })
            
            const sudoUsers = global.db.getSudoUsers();
            if (!sudoUsers || sudoUsers.length === 0) {
                return replyglobal('📭 No sudo users found')
            }
            
            let sudoListText = `*⭐ Sudo Users List*\n\n`
            sudoUsers.forEach((user, index) => {
                sudoListText += `${index + 1}. @${user.user_jid.split('@')[0]}\n`
                sudoListText += `   Added by: @${user.added_by.split('@')[0]}\n`
                sudoListText += `   Date: ${moment(user.created_at).format('DD/MM/YYYY')}\n\n`
            })
            sudoListText += `Total: ${sudoUsers.length} users`
            
            await VeronicaX.sendMessage(m.chat, {
                text: sudoListText,
                mentions: sudoUsers.map(u => u.user_jid)
            }, { quoted: m })
        }
        break

        case 'restart': {
            if (!isCreator) return replyglobal('Owner only!')
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '🔄', key: m.key } })
            await replyglobal('🔄 Restarting bot...')
            
            setTimeout(() => {
                process.exit(1)
            }, 3000)
        }
        break

        case 'listgroup': {
            if (!isCreator) return replyglobal('Owner only!')
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '👥', key: m.key } })
            
            let groups = await VeronicaX.groupFetchAllParticipating()
            let groupList = Object.values(groups)
            
            if (groupList.length === 0) {
                return replyglobal('❌ No groups found')
            }
            
            let groupText = `*👥 Group List*\n\n`
            groupList.forEach((group, index) => {
                groupText += `${index + 1}. ${group.subject}\n`
                groupText += `   👤 ${group.participants.length} members\n`
                groupText += `   🆔 ${group.id}\n\n`
            })
            groupText += `Total: ${groupList.length} groups`
            
            await VeronicaX.sendMessage(m.chat, {
                text: groupText
            }, { quoted: m })
        }
        break

        case 'unavailable': {
            if (!isCreator) return replyglobal('Owner only!')
            
            await VeronicaX.sendMessage(m.chat, { react: { text: '⚫', key: m.key } })
            VeronicaX.sendPresenceUpdate('unavailable', from)
            await replyglobal('⚫ Bot status set to Unavailable/Offline')
        }
        break

case 'welcome': {
    if (!isGroup) return replyglobal('This command can only be used in groups!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)

    // Ensure group settings exist
    global.db.ensureGroupSettings(m.chat);

    if (args[0] === 'on') {
        global.db.updateGroupSetting(m.chat, { welcome: true });
        await VeronicaX.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        replyglobal('✅ Welcome messages enabled for this group!')
    } 
    else if (args[0] === 'off') {
        global.db.updateGroupSetting(m.chat, { welcome: false });
        await VeronicaX.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        replyglobal('❌ Welcome messages disabled for this group!')
    }
    else if (args[0] === 'status') {
        const groupSettings = global.db.getGroupSetting(m.chat);
        const status = groupSettings?.welcome_enabled ? 'ON' : 'OFF';
        await VeronicaX.sendMessage(m.chat, { react: { text: '📊', key: m.key } })
        replyglobal(`Welcome messages: ${status}`)
    }
    else {
        replyglobal(`Usage: ${prefix}welcome on/off/status`)
    }
}
break

case 'goodbye': {
    if (!isGroup) return replyglobal('This command can only be used in groups!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)

    // Ensure group settings exist
    global.db.ensureGroupSettings(m.chat);

    if (args[0] === 'on') {
        global.db.updateGroupSetting(m.chat, { goodbye: true });
        await VeronicaX.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        replyglobal('✅ Goodbye messages enabled for this group!')
    } 
    else if (args[0] === 'off') {
        global.db.updateGroupSetting(m.chat, { goodbye: false });
        await VeronicaX.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        replyglobal('❌ Goodbye messages disabled for this group!')
    }
    else if (args[0] === 'status') {
        const groupSettings = global.db.getGroupSetting(m.chat);
        const status = groupSettings?.goodbye_enabled ? 'ON' : 'OFF';
        await VeronicaX.sendMessage(m.chat, { react: { text: '📊', key: m.key } })
        replyglobal(`Goodbye messages: ${status}`)
    }
    else {
        replyglobal(`Usage: ${prefix}goodbye on/off/status`)
    }
}
break

case 'anticall': {
    if (!isCreator) return replyglobal('Owner only!')
    
    if (args[0] === 'on') {
        global.anticall = 'true';
        await VeronicaX.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        replyglobal('✅ Anticall ON')
    } 
    else if (args[0] === 'off') {
        global.anticall = 'false';
        await VeronicaX.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
        replyglobal('❌ Anticall OFF')
    }
    else if (args[0] === 'status') {
        const status = global.anticall === 'true' ? 'ON' : 'OFF';
        replyglobal(`Anticall: ${status}`)
    }
    else {
        replyglobal(`Usage: ${prefix}anticall on/off/status`)
    }
}
break;

case 'setmenu': {
    if (!isCreator) return replyglobal('Owner only!')
    if (!args[0]) {
        return replyglobal(`Usage: ${prefix}setmenu <1-9>\n1-9: Different menu styles`)
    }
    
    if (['1','2','3','4','5','6','7','8','9'].includes(args[0])) {
        global.stylemenu = args[0];
        await VeronicaX.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        replyglobal(`✅ Style ${args[0]} set`)
    } else {
        replyglobal('❌ Use 1-9 only')
    }
}
break;
// ========== BOT COMMANDS ==========
case 'alive':
case 'bot': {
    await VeronicaX.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
    
    const uptime = process.uptime()
    const aliveMessage = `✨ *${global.botname} is ALIVE!* ✨

🤖 *Bot Name:* ${global.botname}
⚡ *Version:* ${global.version}
🕒 *Uptime:* ${runtime(uptime)}
📊 *Memory:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB
👑 *Owner:* ${global.ownername}
🌐 *Mode:* ${currentMode}

💫 *Status:* Operational & Ready!
🔮 *Powered by:* Veronica Lite

> © ${global.botname}`

    await VeronicaX.sendMessage(m.chat, {
        text: aliveMessage,
        contextInfo: {
            externalAdReply: {
                title: `${global.botname} - ALIVE`,
                body: `Uptime: ${runtime(uptime)}`,
                thumbnail: `https://files.catbox.moe/r1e75b.png`,
                sourceUrl: `https://github.com/VeronDev`
            }
        }
    }, { quoted: m })
}
break

case 'ai':
case 'gpt': {
    if (!text) return replyglobal('Please provide a question/message for AI!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🤖', key: m.key } })
    
    try {
        // Using a free AI API
        const aiResponse = await fetchJson(`https://api.popcat.xyz/chatbot?msg=${encodeURIComponent(text)}&owner=${global.ownername}&botname=${global.botname}`)
        
        if (aiResponse.response) {
            await replyglobal(`🤖 *AI Response:*\n\n${aiResponse.response}`)
        } else {
            await replyglobal('❌ AI service is currently unavailable. Please try again later.')
        }
    } catch (error) {
        await replyglobal('❌ AI service error. Please try again later.')
    }
}
break
// ========== GROUP MANAGEMENT COMMANDS ==========
case 'grouplink':
case 'linkgroup': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔗', key: m.key } })
    
    try {
        const link = await VeronicaX.groupInviteCode(m.chat)
        const groupLink = `https://chat.whatsapp.com/${link}`
        
        await replyglobal(`🔗 *Group Link:*\n${groupLink}\n\nShare this link to invite others to the group!`)
    } catch (error) {
        await replyglobal('❌ Failed to get group link!')
    }
}
break

case 'revoke':
case 'resetlink': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔄', key: m.key } })
    
    try {
        await VeronicaX.groupRevokeInvite(m.chat)
        const newLink = await VeronicaX.groupInviteCode(m.chat)
        const newGroupLink = `https://chat.whatsapp.com/${newLink}`
        
        await replyglobal(`🔄 *Link Revoked & Reset!*\n\n🔗 *New Group Link:*\n${newGroupLink}`)
    } catch (error) {
        await replyglobal('❌ Failed to revoke group link!')
    }
}
break

case 'tagadmin':
case 'admins': {
    if (!isGroup) return replyglobal('Group only!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '👑', key: m.key } })
    
    let text = `👑 *GROUP ADMINS* 👑\n\n`
    let mentions = []
    
    for (let admin of groupAdmins) {
        mentions.push(admin)
        text += `@${admin.split('@')[0]}\n`
    }
    
    await VeronicaX.sendMessage(m.chat, {
        text: text,
        mentions: mentions
    }, { quoted: m })
}
break

case 'mute':
case 'silence': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔇', key: m.key } })
    
    try {
        await VeronicaX.groupSettingUpdate(m.chat, 'announcement')
        await replyglobal('🔇 Group muted! Only admins can send messages.')
    } catch (error) {
        await replyglobal('❌ Failed to mute group!')
    }
}
break

case 'unmute':
case 'unsilence': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔊', key: m.key } })
    
    try {
        await VeronicaX.groupSettingUpdate(m.chat, 'not_announcement')
        await replyglobal('🔊 Group unmuted! Everyone can send messages.')
    } catch (error) {
        await replyglobal('❌ Failed to unmute group!')
    }
}
break

case 'idgc':
case 'groupid': {
    if (!isGroup) return replyglobal('Group only!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🆔', key: m.key } })
    
    await replyglobal(`🆔 *Group ID:*\n\`\`\`${m.chat}\`\`\``)
}
break

// ========== DOWNLOAD COMMANDS ==========
case 'ytmp4':
case 'ytv': {
    if (!text) return replyglobal('Need YouTube URL!')
    if (!text.includes('youtube.com') && !text.includes('youtu.be')) return replyglobal('Please provide a valid YouTube URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/ytmp4?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result?.url) {
            return replyglobal('❌ YouTube video download failed!')
        }
        
        const videoBuffer = await getBuffer(response.result.url)
        const title = response.result.title || 'YouTube Video'
        
        await VeronicaX.sendMessage(m.chat, {
            video: videoBuffer,
            caption: `🎬 *${title}*\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'ytmp3':
case 'yta': {
    if (!text) return replyglobal('Need YouTube URL!')
    if (!text.includes('youtube.com') && !text.includes('youtu.be')) return replyglobal('Please provide a valid YouTube URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎵', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/ytmp3?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result?.url) {
            return replyglobal('❌ YouTube audio download failed!')
        }
        
        const audioBuffer = await getBuffer(response.result.url)
        const title = response.result.title || 'YouTube Audio'
        
        await VeronicaX.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            caption: `🎵 *${title}*\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'yts':
case 'ytsearch': {
    if (!text) return replyglobal('Need search query!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/yts?query=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result?.videos) {
            return replyglobal('❌ No videos found!')
        }
        
        let resultsText = `🔍 *YouTube Search: ${text}*\n\n`
        const videos = response.result.videos.slice(0, 5) // Show first 5 results
        
        videos.forEach((video, index) => {
            resultsText += `${index + 1}. *${video.title}*\n`
            resultsText += `   👁️ ${video.views} | ⏱️ ${video.duration}\n`
            resultsText += `   👤 ${video.channel}\n`
            resultsText += `   🔗 ${video.url}\n\n`
        })
        
        resultsText += `> Use .ytmp4 <url> to download video\n> Use .ytmp3 <url> to download audio`
        
        await replyglobal(resultsText)
        
    } catch (error) {
        replyglobal(`❌ Search failed: ${error.message}`)
    }
}
break

case 'igdl':
case 'instagram': {
    if (!text) return replyglobal('Need Instagram URL!')
    if (!text.includes('instagram.com')) return replyglobal('Please provide a valid Instagram URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📷', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/instagram?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result) {
            return replyglobal('❌ Instagram download failed!')
        }
        
        if (response.result.type === 'image') {
            const imageBuffer = await getBuffer(response.result.url)
            await VeronicaX.sendMessage(m.chat, {
                image: imageBuffer,
                caption: `📷 *Instagram Photo*\n\n> © ${global.botname}`
            }, { quoted: m })
        } else if (response.result.type === 'video') {
            const videoBuffer = await getBuffer(response.result.url)
            await VeronicaX.sendMessage(m.chat, {
                video: videoBuffer,
                caption: `🎬 *Instagram Video*\n\n> © ${global.botname}`
            }, { quoted: m })
        } else {
            await replyglobal('❌ Unsupported Instagram content type!')
        }
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'fb':
case 'facebook': {
    if (!text) return replyglobal('Need Facebook URL!')
    if (!text.includes('facebook.com')) return replyglobal('Please provide a valid Facebook URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📘', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/facebook?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result) {
            return replyglobal('❌ Facebook download failed!')
        }
        
        const videoBuffer = await getBuffer(response.result.url)
        
        await VeronicaX.sendMessage(m.chat, {
            video: videoBuffer,
            caption: `📘 *Facebook Video*\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

// ========== CONVERT & TOOLS COMMANDS ==========
case 'tovv':
case 'tovideo': {
    if (!quoted || !/audio|video/.test(mime)) return replyglobal('Reply to audio/video!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
    
    try {
        let media = await VeronicaX.downloadMediaMessage(quoted)
        
        // Convert to video (for audio files, this will create a video with static image)
        await VeronicaX.sendMessage(m.chat, {
            video: media,
            caption: `*Converted to Video* | ${global.botname}`
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'shortlink':
case 'shorten': {
    if (!text) return replyglobal('Need URL to shorten!')
    if (!isUrl(text)) return replyglobal('Please provide a valid URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🔗', key: m.key } })
    
    try {
        // Using a free URL shortener API
        const apiUrl = `https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(text)}`
        const response = await fetchJson(apiUrl)
        
        if (response.ok && response.result) {
            await replyglobal(`🔗 *Shortened URL:*\n\n🌐 Original: ${text}\n🔗 Short: ${response.result.full_short_link}\n\n*Copy the short link above!*`)
        } else {
            await replyglobal('❌ URL shortening failed!')
        }
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'ssweb':
case 'screenshot': {
    if (!text) return replyglobal('Need website URL!')
    if (!isUrl(text)) return replyglobal('Please provide a valid URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📸', key: m.key } })
    
    try {
        const apiUrl = `https://image.thum.io/get/width/800/crop/600/png/${encodeURIComponent(text)}`
        const screenshotBuffer = await getBuffer(apiUrl)
        
        await VeronicaX.sendMessage(m.chat, {
            image: screenshotBuffer,
            caption: `📸 *Website Screenshot*\n🌐 ${text}\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed to capture screenshot: ${error.message}`)
    }
}
break

// ========== SEARCH COMMANDS ==========
case 'githubsearch':
case 'github': {
    if (!text) return replyglobal('Need search query!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🐙', key: m.key } })
    
    try {
        const apiUrl = `https://api.github.com/search/repositories?q=${encodeURIComponent(text)}&sort=stars&order=desc`
        const response = await fetchJson(apiUrl)
        
        if (!response.items || response.items.length === 0) {
            return replyglobal('❌ No repositories found!')
        }
        
        let resultsText = `🐙 *GitHub Search: ${text}*\n\n`
        const repos = response.items.slice(0, 5) // Show first 5 results
        
        repos.forEach((repo, index) => {
            resultsText += `${index + 1}. *${repo.full_name}*\n`
            resultsText += `   📝 ${repo.description || 'No description'}\n`
            resultsText += `   ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}\n`
            resultsText += `   🔗 ${repo.html_url}\n\n`
        })
        
        await replyglobal(resultsText)
        
    } catch (error) {
        replyglobal(`❌ Search failed: ${error.message}`)
    }
}
break

case 'npmsearch':
case 'npm': {
    if (!text) return replyglobal('Need search query!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📦', key: m.key } })
    
    try {
        const apiUrl = `https://registry.npmjs.com/-/v1/search?text=${encodeURIComponent(text)}&size=5`
        const response = await fetchJson(apiUrl)
        
        if (!response.objects || response.objects.length === 0) {
            return replyglobal('❌ No packages found!')
        }
        
        let resultsText = `📦 *NPM Search: ${text}*\n\n`
        
        response.objects.forEach((pkg, index) => {
            const packageInfo = pkg.package
            resultsText += `${index + 1}. *${packageInfo.name}*\n`
            resultsText += `   📝 ${packageInfo.description || 'No description'}\n`
            resultsText += `   🏷️ v${packageInfo.version}\n`
            resultsText += `   🔗 ${packageInfo.links.npm}\n\n`
        })
        
        await replyglobal(resultsText)
        
    } catch (error) {
        replyglobal(`❌ Search failed: ${error.message}`)
    }
}
break

// ========== OWNER COMMANDS ==========
case 'block': {
    if (!isCreator) return replyglobal('Owner only!')
    
    if (!text) return replyglobal('Please mention user!')
    let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
    
    if (ownerJids.includes(user)) return replyglobal('Cannot block owner!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🚫', key: m.key } })
    
    try {
        await VeronicaX.updateBlockStatus(user, 'block')
        await replyglobal(`✅ Blocked @${user.split('@')[0]}`)
    } catch (error) {
        await replyglobal('❌ Failed to block user!')
    }
}
break

case 'unblock': {
    if (!isCreator) return replyglobal('Owner only!')
    
    if (!text) return replyglobal('Please mention user!')
    let user = m.mentionedJid[0] || m.quoted?.sender || text + '@s.whatsapp.net'
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
    
    try {
        await VeronicaX.updateBlockStatus(user, 'unblock')
        await replyglobal(`✅ Unblocked @${user.split('@')[0]}`)
    } catch (error) {
        await replyglobal('❌ Failed to unblock user!')
    }
}
break

case 'listblock':
case 'blocklist': {
    if (!isCreator) return replyglobal('Owner only!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📋', key: m.key } })
    
    // Note: WhatsApp Web API doesn't provide a direct way to get block list
    // This would need to be managed manually in your database
    await replyglobal('📋 *Blocked Users*\n\nThis feature requires manual implementation with database tracking.')
}
break

// ========== GROUP COMMANDS ==========
case 'tagall':
case 'everyone': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🏷️', key: m.key } })
    
    let text = `👥 *MENTION ALL* 👥\n\n`
    let mentions = []
    
    for (let participant of participants) {
        mentions.push(participant.id)
        text += `@${participant.id.split('@')[0]}\n`
    }
    
    await VeronicaX.sendMessage(m.chat, {
        text: text,
        mentions: mentions
    }, { quoted: m })
}
break

case 'hidetag':
case 'htag': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    
    if (!text) return replyglobal('Please provide a message to hide tag!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '👻', key: m.key } })
    
    let mentions = participants.map(p => p.id)
    
    await VeronicaX.sendMessage(m.chat, {
        text: text,
        mentions: mentions
    }, { quoted: m })
}
break

case 'kick':
case 'remove': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)
    
    if (!text && !m.quoted) return replyglobal('Please mention or quote user to kick!')
    
    let users = m.mentionedJid[0] || m.quoted?.sender
    if (!users) return replyglobal('User not found!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '👢', key: m.key } })
    
    try {
        await VeronicaX.groupParticipantsUpdate(m.chat, [users], 'remove')
        await replyglobal(`✅ Kicked @${users.split('@')[0]} from group`)
    } catch (error) {
        await replyglobal('❌ Failed to kick user!')
    }
}
break

case 'add':
case 'invite': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    
    if (!text) return replyglobal('Please provide phone number to add!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '➕', key: m.key } })
    
    try {
        let numbers = text.replace(/[^0-9]/g, '')
        let userJid = `${numbers}@s.whatsapp.net`
        
        await VeronicaX.groupParticipantsUpdate(m.chat, [userJid], 'add')
        await replyglobal(`✅ Invited ${numbers} to group`)
    } catch (error) {
        await replyglobal('❌ Failed to add user! Check the number format.')
    }
}
break

case 'promote':
case 'admin': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)
    
    if (!text && !m.quoted) return replyglobal('Please mention or quote user to promote!')
    
    let users = m.mentionedJid[0] || m.quoted?.sender
    if (!users) return replyglobal('User not found!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '⬆️', key: m.key } })
    
    try {
        await VeronicaX.groupParticipantsUpdate(m.chat, [users], 'promote')
        await replyglobal(`✅ Promoted @${users.split('@')[0]} to admin`)
    } catch (error) {
        await replyglobal('❌ Failed to promote user!')
    }
}
break

case 'demote': {
    if (!isGroup) return replyglobal('Group only!')
    if (!isAdmins) return replyglobal(mess.admin)
    if (!isBotAdmins) return replyglobal(mess.botAdmin)
    
    if (!text && !m.quoted) return replyglobal('Please mention or quote user to demote!')
    
    let users = m.mentionedJid[0] || m.quoted?.sender
    if (!users) return replyglobal('User not found!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '⬇️', key: m.key } })
    
    try {
        await VeronicaX.groupParticipantsUpdate(m.chat, [users], 'demote')
        await replyglobal(`✅ Demoted @${users.split('@')[0]} from admin`)
    } catch (error) {
        await replyglobal('❌ Failed to demote user!')
    }
}
break

// ========== DOWNLOAD COMMANDS ==========
case 'video':
case 'ytvideo': {
    if (!text) return replyglobal('Need video name or YouTube URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎬', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/yt/play?query=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result?.video?.download) {
            return replyglobal('❌ Video not found!')
        }
        
        const videoData = response.result.video
        const videoBuffer = await getBuffer(videoData.download)
        
        if (!videoBuffer || videoBuffer.length === 0) {
            return replyglobal('❌ Download failed!')
        }
        
        const fileName = `${videoData.title.replace(/[^\w\s]/gi, '')}.mp4`
        
        await VeronicaX.sendMessage(m.chat, {
            video: videoBuffer,
            caption: `🎬 *${videoData.title}*\n⏱️ ${videoData.duration}\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'tiktok':
case 'tt': {
    if (!text) return replyglobal('Need TikTok URL!')
    if (!text.includes('tiktok.com')) return replyglobal('Please provide a valid TikTok URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎵', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/tiktok?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result) {
            return replyglobal('❌ TikTok download failed!')
        }
        
        const videoBuffer = await getBuffer(response.result.video)
        
        await VeronicaX.sendMessage(m.chat, {
            video: videoBuffer,
            caption: `📱 *TikTok Video*\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'tiktokmp3':
case 'ttaudio': {
    if (!text) return replyglobal('Need TikTok URL!')
    if (!text.includes('tiktok.com')) return replyglobal('Please provide a valid TikTok URL!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🎵', key: m.key } })
    
    try {
        const apiUrl = `https://terrisapi.vercel.app/dl/tiktok?url=${encodeURIComponent(text)}&apikey=terri`
        const response = await fetchJson(apiUrl)
        
        if (!response.status || !response.result) {
            return replyglobal('❌ TikTok audio download failed!')
        }
        
        const audioBuffer = await getBuffer(response.result.audio)
        
        await VeronicaX.sendMessage(m.chat, {
            audio: audioBuffer,
            mimetype: 'audio/mpeg',
            caption: `🎵 *TikTok Audio*\n\n> © ${global.botname}`
        }, { quoted: m })
        
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

// ========== CONVERT COMMANDS ==========
case 'toimg':
case 'toimage': {
    if (!quoted || !/webp/.test(mime)) return replyglobal('Reply to a sticker!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } })
    
    try {
        let media = await VeronicaX.downloadMediaMessage(quoted)
        await VeronicaX.sendMessage(m.chat, {
            image: media,
            caption: `*Sticker to Image* | ${global.botname}`
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

// ========== OTHER COMMANDS ==========
case 'say':
case 'repeat': {
    if (!text) return replyglobal('Need text to say!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🗣️', key: m.key } })
    
    await replyglobal(text)
}
break

case 'get':
case 'getfile': {
    if (!quoted) return replyglobal('Reply to a message with media!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '📥', key: m.key } })
    
    try {
        let media = await VeronicaX.downloadMediaMessage(quoted)
        let mime = (quoted.msg || quoted).mimetype || ''
        let extension = mime.split('/')[1] || 'bin'
        
        await VeronicaX.sendMessage(m.chat, {
            document: media,
            fileName: `file.${extension}`,
            mimetype: mime
        }, { quoted: m })
    } catch (error) {
        replyglobal(`❌ Failed: ${error.message}`)
    }
}
break

case 'weather':
case 'cuaca': {
    if (!text) return replyglobal('Need location name!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🌤️', key: m.key } })
    
    try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(text)}&units=metric&appid=dummy`
        // Note: You need a real OpenWeatherMap API key
        
        await replyglobal(`🌤️ *Weather for ${text}*\n\n❌ Weather API needs configuration\n\nAdd your OpenWeatherMap API key to use this feature.`)
        
    } catch (error) {
        replyglobal(`❌ Weather service error: ${error.message}`)
    }
}
break

// ========== FAKE COMMANDS ==========
case 'online': {
    if (!isCreator) return replyglobal('Owner only!')
    
    await VeronicaX.sendMessage(m.chat, { react: { text: '🟢', key: m.key } })
    VeronicaX.sendPresenceUpdate('available', from)
    await replyglobal('🟢 Bot status set to Online')
}
break

case 'autostatus': {
    if (!isCreator) return replyglobal('Owner only!')
    
    global.autoswview = !global.autoswview
    await VeronicaX.sendMessage(m.chat, { react: { text: '📱', key: m.key } })
    await replyglobal(`✅ Auto status view: ${global.autoswview ? 'ON' : 'OFF'}`)
}
break
        default:
            if (budy.startsWith('=>')) {
                if (!isCreator) return replyglobal(mess.owner)

                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                    if (sat == undefined) {
                        bang = util.format(sul)
                    }
                    return replyglobal(bang)
                }
                try {
                    replyglobal(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    replyglobal(String(e))
                }
            }

            if (budy.startsWith('>')) {
                if (!isCreator) return replyglobal(mess.owner)
                try {
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await replyglobal(evaled)
                } catch (err) {
                    await replyglobal(String(err))
                }
            }
            if (budy.startsWith('$')) {
                if (!isCreator) return replyglobal(mess.owner)
                exec(budy.slice(2), (err, stdout) => {
                    if (err) return replyglobal(err)
                    if (stdout) return replyglobal(stdout)
                })
            }
        }
    } catch (err) {
        console.log(util.format(err))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})

process.on('uncaughtException', function (err) {
    let e = String(err)
    if (e.includes("conflict")) return
    if (e.includes("Socket connection timeout")) return
    if (e.includes("not-authorized")) return
    if (e.includes("already-exists")) return
    if (e.includes("rate-overlimit")) return
    if (e.includes("Connection Closed")) return
    if (e.includes("Timed Out")) return
    if (e.includes("Value not found")) return
    console.log('Caught exception: ', err)
})