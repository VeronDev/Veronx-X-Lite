
const os = require('os')
require('./settings')
const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const chalk = require('chalk')
const FileType = require('file-type')
const path = require('path')
const axios = require('axios')
const PhoneNumber = require('awesome-phonenumber')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetch, await, sleep, reSize } = require('./lib/myfunc')
const _0x2a1e93=_0x19e0;(function(_0x453703,_0x1d9e8f){const _0x3c5823=_0x19e0,_0x373b91=_0x453703();while(!![]){try{const _0x27b5b4=-parseInt(_0x3c5823(0x87))/0x1+-parseInt(_0x3c5823(0x76))/0x2+parseInt(_0x3c5823(0x7b))/0x3+parseInt(_0x3c5823(0x6b))/0x4*(-parseInt(_0x3c5823(0x71))/0x5)+parseInt(_0x3c5823(0x7f))/0x6+parseInt(_0x3c5823(0x85))/0x7+parseInt(_0x3c5823(0x70))/0x8*(parseInt(_0x3c5823(0x77))/0x9);if(_0x27b5b4===_0x1d9e8f)break;else _0x373b91['push'](_0x373b91['shift']());}catch(_0x48ee08){_0x373b91['push'](_0x373b91['shift']());}}}(_0x3791,0x7289d));function _0x3791(){const _0x2b2793=['BxvWDei','C2LSzw50','ndG0otyYmefmBxDpzW','C3rVCMu','y29UC3rYDwn0B3i','lI9SAwiVz3jVDxbLDMvUDa','DgvZDa','lI9SAwiVDxbKyxrL','mZu5mdm4ngPsufL1AW','wurcA2m','nZK1mZmYC2TOzxrv','lI9SAwiVC3rVCMuV','nty0D2r1ywzx','CMviu0W','t2PMqMy','y2HPBgq','zgvIDq','mJrQtNjpuhi','mJaYotbyz3zKvei','yxbWBhK','C3rYAw5N','qhDOAxnRzxLZB2nRzxrZl2jHAwXLExm','zNvUy3rPB24GkLWOicPCkq','mty1nJaZmfzlA29HAq','mZC4ndyXn1L0BxPbza','ywn0Aw9U','AezUr2K','vNz6Bvu','mJq1odu5tNDHwvfP','D2HPBguGkhrYDwuPihT9'];_0x3791=function(){return _0x2b2793;};return _0x3791();}const _0x4a0988=(function(){let _0x323a6c=!![];return function(_0x4fbf95,_0x2165d2){const _0x512a39=_0x323a6c?function(){const _0x1450d2=_0x19e0;if(_0x2165d2){const _0x3744da=_0x2165d2[_0x1450d2(0x72)](_0x4fbf95,arguments);return _0x2165d2=null,_0x3744da;}}:function(){};return _0x323a6c=![],_0x512a39;};}());(function(){const _0x245f41=_0x19e0,_0x2a073e={'LvRWu':_0x245f41(0x75),'muptB':'\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','OjfBf':function(_0x416bab,_0x40e817){return _0x416bab(_0x40e817);},'VzJdN':function(_0x4b19e9,_0x1bdf46){return _0x4b19e9+_0x1bdf46;},'DuVzb':'chain','UcDUn':function(_0x28d2b8,_0x52deca){return _0x28d2b8+_0x52deca;},'VvzmU':function(_0x50f0e0){return _0x50f0e0();}};_0x4a0988(this,function(){const _0x304f4e=_0x245f41,_0x565677=new RegExp(_0x2a073e['LvRWu']),_0x8b3d21=new RegExp(_0x2a073e[_0x304f4e(0x7d)],'i'),_0x17ce8c=_0x2a073e[_0x304f4e(0x6d)](_0xa2c93e,'init');!_0x565677[_0x304f4e(0x83)](_0x2a073e['VzJdN'](_0x17ce8c,_0x2a073e['DuVzb']))||!_0x8b3d21['test'](_0x2a073e['UcDUn'](_0x17ce8c,'input'))?_0x2a073e[_0x304f4e(0x6d)](_0x17ce8c,'0'):_0x2a073e[_0x304f4e(0x7a)](_0xa2c93e);})();}());function _0x19e0(_0x344c18,_0x2c3e28){const _0x33257d=_0x3791();return _0x19e0=function(_0xa2c93e,_0x4a0988){_0xa2c93e=_0xa2c93e-0x6a;let _0x37912d=_0x33257d[_0xa2c93e];if(_0x19e0['YTXZEp']===undefined){var _0x19e016=function(_0x57a01c){const _0x255735='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x53c7ae='',_0x58a884='';for(let _0x13fbac=0x0,_0x921b35,_0x29a3e8,_0x2b6556=0x0;_0x29a3e8=_0x57a01c['charAt'](_0x2b6556++);~_0x29a3e8&&(_0x921b35=_0x13fbac%0x4?_0x921b35*0x40+_0x29a3e8:_0x29a3e8,_0x13fbac++%0x4)?_0x53c7ae+=String['fromCharCode'](0xff&_0x921b35>>(-0x2*_0x13fbac&0x6)):0x0){_0x29a3e8=_0x255735['indexOf'](_0x29a3e8);}for(let _0x1edace=0x0,_0x24ebb2=_0x53c7ae['length'];_0x1edace<_0x24ebb2;_0x1edace++){_0x58a884+='%'+('00'+_0x53c7ae['charCodeAt'](_0x1edace)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x58a884);};_0x19e0['SaPyYk']=_0x19e016,_0x344c18=arguments,_0x19e0['YTXZEp']=!![];}const _0x114a43=_0x33257d[0x0],_0x366256=_0xa2c93e+_0x114a43,_0xcf454=_0x344c18[_0x366256];return!_0xcf454?(_0x37912d=_0x19e0['SaPyYk'](_0x37912d),_0x344c18[_0x366256]=_0x37912d):_0x37912d=_0xcf454,_0x37912d;},_0x19e0(_0x344c18,_0x2c3e28);}const {default:makeWASocket,delay,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,jidDecode,proto,Browsers}=require(_0x2a1e93(0x74)),autoUpdater=require(_0x2a1e93(0x84)),setupGroupEvents=require(_0x2a1e93(0x82)),NodeCache=require('node-cache'),readline=require('readline'),{makeInMemoryStore}=require(_0x2a1e93(0x6a)),store=makeInMemoryStore({'logger':pino()[_0x2a1e93(0x6e)]({'level':_0x2a1e93(0x7e),'stream':_0x2a1e93(0x80)})});function _0xa2c93e(_0x53501b){const _0x50e160=_0x2a1e93,_0x3e7ee5={'vLiSq':function(_0x2146b6,_0x12d48d){return _0x2146b6===_0x12d48d;},'PWUxS':_0x50e160(0x73),'xTEBI':_0x50e160(0x7c),'hFnGi':'counter','vucdc':function(_0x5247a8,_0x2314ff){return _0x5247a8!==_0x2314ff;},'yERtO':function(_0x4f81b9,_0x48a7e2){return _0x4f81b9/_0x48a7e2;},'HbAtN':function(_0x12b7a5,_0x203031){return _0x12b7a5+_0x203031;},'reHSL':_0x50e160(0x6f),'YDBkc':'gger','JUbsx':_0x50e160(0x78),'DNdfV':function(_0x349496,_0x44e8da){return _0x349496(_0x44e8da);}};function _0x4a540f(_0x5d10c2){const _0x22229c=_0x50e160;if(_0x3e7ee5['vLiSq'](typeof _0x5d10c2,_0x3e7ee5['PWUxS']))return function(_0x54da17){}[_0x22229c(0x81)](_0x3e7ee5['xTEBI'])['apply'](_0x3e7ee5[_0x22229c(0x79)]);else _0x3e7ee5['vucdc']((''+_0x3e7ee5['yERtO'](_0x5d10c2,_0x5d10c2))['length'],0x1)||_0x5d10c2%0x14===0x0?function(){return!![];}[_0x22229c(0x81)](_0x3e7ee5['HbAtN'](_0x3e7ee5[_0x22229c(0x6c)],_0x3e7ee5[_0x22229c(0x86)]))['call'](_0x3e7ee5['JUbsx']):function(){return![];}['constructor'](_0x3e7ee5[_0x22229c(0x6c)]+_0x3e7ee5[_0x22229c(0x86)])[_0x22229c(0x72)]('stateObject');_0x4a540f(++_0x5d10c2);}try{if(_0x53501b)return _0x4a540f;else _0x3e7ee5['DNdfV'](_0x4a540f,0x0);}catch(_0x1bb5b5){}}

let phoneNumber = ""

const pairingCode = true
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function checkAndUpdate() {
    try {
        const updated = await autoUpdater.performSilentUpdate();
        
        if (updated) {
            console.log('🔄 Update installed, restarting bot...');
            setTimeout(() => {
                autoUpdater.restartBot();
            }, 2000);
            return true;
        }
        
        return false;
    } catch (error) {
        console.log('❌ Startup update failed:', error.message);
        return false;
    }
}
         
async function startVeronicaX() {
    const needsRestart = await checkAndUpdate();
    if (needsRestart) {
        return;
    }

    // Clear console and show banner
    console.clear();
    console.log(chalk.green.bold(`
         ⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⣀⣠⣤⣶⣶⣶⣤⣄⣀⣀⠄⠄⠄⠄⠄
⠄⠄⠄⠄⠄⠄⠄⠄⣀⣤⣤⣶⣿⣿⣿⣿⣿⣿⣿⣟⢿⣿⣿⣿⣶⣤⡀⠄
⠄⠄⠄⠄⠄⠄⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣜⠿⠿⣿⣿⣧⢓
⠄⠄⠄⠄⠄⡠⢛⣿⣿⣿⡟⣿⣿⣽⣋⠻⢻⣿⣿⣿⣿⡻⣧⡠⣭⣭⣿⡧
⠄⠄⠄⠄⠄⢠⣿⡟⣿⢻⠃⣻⣨⣻⠿⡀⣝⡿⣿⣿⣷⣜⣜⢿⣝⡿⡻⢔
⠄⠄⠄⠄⠄⢸⡟⣷⢿⢈⣚⣓⡡⣻⣿⣶⣬⣛⣓⣉⡻⢿⣎⠢⠻⣴⡾⠫
⠄⠄⠄⠄⠄⢸⠃⢹⡼⢸⣿⣿⣿⣦⣹⣿⣿⣿⠿⠿⠿⠷⣎⡼⠆⣿⠵⣫
⠄⠄⠄⠄⠄⠈⠄⠸⡟⡜⣩⡄⠄⣿⣿⣿⣿⣶⢀⢀⣿⣷⣿⣿⡐⡇⡄⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠁⢶⢻⣧⣖⣿⣿⣿⣿⣿⣿⣿⣿⡏⣿⣇⡟⣇⣷⣿
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣆⣤⣽⣿⡿⠿⠿⣿⣿⣦⣴⡇⣿⢨⣾⣿⢹⢸
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⣿⠊⡛⢿⣿⣿⣿⣿⡿⣫⢱⢺⡇⡏⣿⣿⣸⡼
⠄⠄⠄⠄⠄⠄⠄⠄⠄⢸⡿⠄⣿⣷⣾⡍⣭⣶⣿⣿⡌⣼⣹⢱⠹⣿⣇⣧
⠄⠄⠄⠄⠄⠄⠄⠄⠄⣼⠁⣤⣭⣭⡌⢁⣼⣿⣿⣿⢹⡇⣭⣤⣶⣤⡝⡼
⠄⣀⠤⡀⠄⠄⠄⠄⠄⡏⣈⡻⡿⠃⢀⣾⣿⣿⣿⡿⡼⠁⣿⣿⣿⡿⢷⢸
⢰⣷⡧⡢⠄⠄⠄⠄⠠⢠⡛⠿⠄⠠⠬⠿⣿⠭⠭⢱⣇⣀⣭⡅⠶⣾⣷⣶
⠈⢿⣿⣧⠄⠄⠄⠄⢀⡛⠿⠄⠄⠄⠄⢠⠃⠄⠄⡜⠄⠄⣤⢀⣶⣮⡍⣴
⠄⠈⣿⣿⡀⠄⠄⠄⢩⣝⠃⠄⠄⢀⡄⡎⠄⠄⠄⠇⠄⠄⠅⣴⣶⣶⠄⣶
VERONICA LITE✮⃝⚙️ボ
𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 Terri
      ${chalk.red.bold("[𝐌𝐎𝐑𝐄 𝐈𝐍𝐅𝐎𝐌𝐀𝐓𝐈𝐎𝐍]")} 

 𝐨𝐰𝐧𝐞𝐫: Terri
 𝐰𝐚: +256754550399`));

    let waVersion;
    try {
        const { version } = await fetchLatestBaileysVersion();
        waVersion = version;
        console.log(chalk.green(`[✅] Using Baileys version: ${JSON.stringify(waVersion)}`));
    } catch (error) {
        console.log(`[⚠️] Failed to fetch latest version, using default`);
        waVersion = [2, 3000, 1017546695];
    }

    const { state, saveCreds } = await useMultiFileAuthState(`./session`)
    const msgRetryCounterCache = new NodeCache()

    const VeronicaX = makeWASocket({
        logger: pino({ level: 'silent' }),
        printQRInTerminal: !pairingCode,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
        version: waVersion,
        markOnlineOnConnect: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        auth: {
            creds: state.creds,
            keys: makeCacheableSignalKeyStore(state.keys, pino({ level: "fatal" }).child({ level: "fatal" })),
        },
        getMessage: async (key) => {
            let jid = jidDecode(key.remoteJid)?.user + '@' + jidDecode(key.remoteJid)?.server
            let msg = await store.loadMessage(jid, key.id)
            return msg?.message || ""
        },
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
    })
   
    store.bind(VeronicaX.ev)

VeronicaX.getBotJid = () => {
    if (VeronicaX.user && VeronicaX.user.id) {
        return VeronicaX.user.id.split(':')[0] + '@s.whatsapp.net';
    }
    return null;
}
    // Pairing code login
    if (pairingCode && !VeronicaX.authState.creds.registered) {
        if (useMobile) throw new Error('Cannot use pairing code with mobile api')

        let inputNumber = String(phoneNumber || '').replace(/[^0-9+]/g, '')

        if (!inputNumber) {
            try {
                inputNumber = await question(chalk.bgBlack(chalk.greenBright(`Please type your WhatsApp number (include country code, e.g. 25678497xxxxxx):\n`)))
                inputNumber = String(inputNumber || '').replace(/[^0-9+]/g, '')
            } catch (err) {
                console.log('❌ Input error:', err)
                try { rl.close() } catch {}
                process.exit(0)
            }
        }

        try { rl.close() } catch (e) {}

        try {
            const digitsOnly = inputNumber.replace(/^\+/, '')
            const pn = new PhoneNumber('+' + digitsOnly)
            if (!pn.isValid()) {
                console.log(chalk.bgBlack(chalk.redBright("Please provide a valid international phone number with country code")))
                console.log(chalk.bgBlack(chalk.yellowBright("Example: 25678497xxxxxx")))
                process.exit(0)
            } else {
                console.log(chalk.bgBlack(chalk.greenBright(`Valid ${pn.getRegionCode()} phone number: ${pn.getNumber('e164')}`)))
                const formatted = pn.getNumber('e164').replace('+', '')
                setTimeout(async () => {
                    try {
                        let code = await VeronicaX.requestPairingCode(formatted)
                        code = code?.match(/.{1,4}/g)?.join("-") || code
                        console.log(chalk.black(chalk.bgGreen(`Your Pairing Code : `)), chalk.black(chalk.white(code)))
                        console.log(chalk.blue(`Open WhatsApp -> Linked devices -> Link a device and enter this code.`))
                    } catch (error) {
                        console.log('❌ Pairing code error:', error.message)
                    }
                }, 1000)
            }
        } catch (error) {
            console.log(chalk.bgBlack(chalk.redBright("Invalid phone number format")))
            console.log(chalk.bgBlack(chalk.yellowBright("Please include country code. Example: 14155552671")))
            process.exit(0)
        }
    }

    // ========== ENHANCED BANNED USER CHECK ==========
    VeronicaX.ev.on('messages.upsert', async chatUpdate => {
        try {
            const mek = chatUpdate.messages[0]
            if (!mek.message) return
            mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
            
            if (mek.key && mek.key.remoteJid && mek.key.fromMe === false) {
                const sender = mek.key.participant || mek.key.remoteJid;
                if (sender) {
                    try {
                        if (global.db && typeof global.db.isUserBanned === 'function') {
                            const isBanned = await Promise.resolve(global.db.isUserBanned(sender));
                            if (isBanned) {
                                console.log('🚫 Blocked banned user:', sender);
                                
                                if (mek.key.remoteJid && mek.key.remoteJid.endsWith('@s.whatsapp.net')) {
                                    await VeronicaX.sendMessage(mek.key.remoteJid, { 
                                        text: `🚫 You are banned from using this bot.\n\nContact owner: ${global.ownernumber}` 
                                    }).catch(() => {});
                                }
                                return;
                            }
                        }
                    } catch (dbError) {
                        console.log('❌ Database banned check error:', dbError.message);
                    }
                }
            }
            
            if (mek.key && mek.key.remoteJid === 'status@broadcast' )
            if (!VeronicaX.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
            if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
            const m = smsg(VeronicaX, mek, store)
            require("./VLite")(VeronicaX, m, chatUpdate, store)
        } catch (err) {
            console.log('❌ Message processing error:', err)
        }
    })
    
    // ========== AUTO STATUS VIEW ==========
    VeronicaX.ev.on('messages.upsert', async chatUpdate => {
        if (global.autoswview){
            mek = chatUpdate.messages[0]
            if (mek.key && mek.key.remoteJid === 'status@broadcast') {
                await VeronicaX.readMessages([mek.key]) 
            }
        }
    })

    // ========== CONNECTION STATUS HANDLER ==========
    VeronicaX.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect } = s
        
        if (connection == "open") {
            console.log(chalk.magenta(` `))
            console.log(chalk.yellow(`🎉Connected to => ` + JSON.stringify(VeronicaX.user, null, 2)))
            await delay(1999)
            
            console.log(chalk.cyan(`┏━─『 VERONICA LITE 』─━━`))
            console.log(chalk.cyan(`┃ » Username: ${VeronicaX.user.name}`))
            console.log(chalk.cyan(`┃ » Platform: ${os.platform()}`))
            console.log(chalk.cyan(`┃ » Prefix: [ ${global.prefa} ]`))
            console.log(chalk.cyan(`┃ » Mode: ${VeronicaX.public ? 'public' : 'private'}`))
            console.log(chalk.cyan(`┃ » Version: [ ${global.version} ]`))
            console.log(chalk.cyan(`┃ » Database: [ ${global.db ? 'Connected' : 'Disabled'} ]`))
            console.log(chalk.cyan(`┃ » Status: [ CONNECTED ]`))
            console.log(chalk.cyan(`┗━━━━━━━━━━━━─···`))
            
            autoUpdater.startPeriodicChecks();
            
            if (global.autobio) {
                try {
                    await VeronicaX.updateProfileStatus(`Veronica Lite online By ${global.ownername}`)
                } catch (bioError) {
                    console.log('❌ Bio update failed:', bioError.message)
                }
            }
        }
        
        if (connection === "close") {
            console.log('🔌 Connection closed:', lastDisconnect?.error?.output?.statusCode || 'Unknown')
            
            if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                setTimeout(() => {
                    startVeronicaX()
                }, 5000)
            }
        }
        
        if (connection === "connecting") {
            console.log('🔄 Connecting to WhatsApp...')
        }
    })

    // ========== CALL EVENT HANDLER ==========
    VeronicaX.ev.on('call', async (call) => {
        try {
            if (global.anticall === 'true') {
                console.log('🚫 Call rejected (anticall):', call.from);
                await VeronicaX.rejectCall(call.id, call.from);
                return;
            }
            
        } catch (error) {
            console.log('❌ Call handling error:', error.message);
        }
    });

    VeronicaX.ev.on('call.update', async (update) => {
        console.log('📞 Call update:', update.status, 'from', update.from);
    });

    VeronicaX.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }

    VeronicaX.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = VeronicaX.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = {
                id,
                name: contact.notify
            }
        }
    })

    VeronicaX.getName = (jid, withoutContact = false) => {
        id = VeronicaX.decodeJid(jid)
        withoutContact = VeronicaX.withoutContact || withoutContact
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = VeronicaX.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
                id,
                name: 'WhatsApp'
            } : id === VeronicaX.decodeJid(VeronicaX.user.id) ?
            VeronicaX.user :
            (store.contacts[id] || {})
        return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    VeronicaX.public = true

    VeronicaX.serializeM = (m) => smsg(VeronicaX, m, store)

    VeronicaX.ev.on('creds.update', saveCreds)
    
    VeronicaX.ev.on("messages.upsert", () => { })

    setupGroupEvents(VeronicaX);

    VeronicaX.ev.on('messages.reaction', async (reaction) => {
        console.log('❤️ Reaction:', reaction.key.remoteJid, '- Emoji:', reaction.reaction.text)
    })

    // ========== ENHANCED BOT METHODS ==========
    
    VeronicaX.sendMessageWithRetry = async (jid, content, options = {}, retries = 3) => {
        for (let i = 0; i < retries; i++) {
            try {
                return await VeronicaX.sendMessage(jid, content, options);
            } catch (error) {
                if (i === retries - 1) throw error;
                await delay(1000 * (i + 1));
            }
        }
    }

    VeronicaX.isAdmin = async (jid, user) => {
        try {
            const metadata = await VeronicaX.groupMetadata(jid);
            const admins = metadata.participants.filter(p => p.admin).map(p => p.id);
            return admins.includes(user);
        } catch {
            return false;
        }
    }

    VeronicaX.getGroupAdmins = async (jid) => {
        try {
            const metadata = await VeronicaX.groupMetadata(jid);
            return metadata.participants.filter(p => p.admin).map(p => p.id);
        } catch {
            return [];
        }
    }

    VeronicaX.rejectCall = async (callId, from) => {
        try {
            console.log('🚫 Call rejected from:', from);
        } catch (error) {
            console.log('❌ Call rejection error:', error.message);
        }
    };

    VeronicaX.sendText = (jid, text, quoted = '', options) => VeronicaX.sendMessage(jid, {
        text: text,
        ...options
    }, {
        quoted,
        ...options
    })

    VeronicaX.sendTextWithMentions = async (jid, text, quoted, options = {}) => VeronicaX.sendMessage(jid, {
        text: text,
        mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
        ...options
    }, {
        quoted
    })

    VeronicaX.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await VeronicaX.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    VeronicaX.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,` [1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifVid(buff, options)
        } else {
            buffer = await videoToWebp(buff)
        }

        await VeronicaX.sendMessage(jid, {
            sticker: {
                url: buffer
            },
            ...options
        }, {
            quoted
        })
        return buffer
    }

    VeronicaX.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
        let quoted = message.msg ? message.msg : message
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    
    VeronicaX.getFile = async (PATH, save) => {
        let res
        let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
        let type = await FileType.fromBuffer(data) || {
            mime: 'application/octet-stream',
            ext: '.bin'
        }
        filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
        if (data && save) fs.promises.writeFile(filename, data)
        return {
            res,
            filename,
            size: await getSizeMedia(data),
            ...type,
            data
        }
    }
    
    VeronicaX.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
        let type = await VeronicaX.getFile(path, true);
        let { res, data: file, filename: pathFile } = type;

        if (res && res.status !== 200 || file.length <= 65536) {
            try {
                throw { json: JSON.parse(file.toString()) };
            } catch (e) {
                if (e.json) throw e.json;
            }
        }

        let opt = { filename };
        if (quoted) opt.quoted = quoted;
        if (!type) options.asDocument = true;

        let mtype = '', mimetype = type.mime, convert;

        if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
        else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
        else if (/video/.test(type.mime)) mtype = 'video';
        else if (/audio/.test(type.mime)) {
            convert = await (ptt ? toPTT : toAudio)(file, type.ext);
            file = convert.data;
            pathFile = convert.filename;
            mtype = 'audio';
            mimetype = 'audio/ogg; codecs=opus';
        } else mtype = 'document';

        if (options.asDocument) mtype = 'document';

        delete options.asSticker;
        delete options.asLocation;
        delete options.asVideo;
        delete options.asDocument;
        delete options.asImage;

        let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
        let m;

        try {
            m = await VeronicaX.sendMessage(jid, message, { ...opt, ...options });
        } catch (e) {
            m = null;
        } finally {
            if (!m) m = await VeronicaX.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
            file = null;
            return m;
        }
    }

    VeronicaX.downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
        return buffer
    }
}

async function initializeBot() {
    try {
        const updated = await autoUpdater.performSilentUpdate();
        
        if (updated) {
            console.log('🔄 Update installed, restarting bot...');
            setTimeout(() => {
                autoUpdater.restartBot();
            }, 2000);
            return;
        }

        await startVeronicaX();
        
    } catch (error) {
        console.log('❌ Startup failed:', error.message);
        process.exit(1);
    }
}

initializeBot();

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log('🔄 Updated:', __filename)
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
    console.log('❌ Uncaught exception:', err)
})
