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










const _0xbc116f=_0x501e;(function(_0x359570,_0x4e0252){const _0x46003b=_0x501e,_0x3b53b1=_0x359570();while(!![]){try{const _0x3cad18=parseInt(_0x46003b(0x111,'\x25\x32\x4c\x48'))/0x1*(-parseInt(_0x46003b(0x12a,'\x69\x76\x59\x6e'))/0x2)+parseInt(_0x46003b(0xf3,'\x69\x76\x59\x6e'))/0x3+-parseInt(_0x46003b(0x100,'\x6b\x4b\x44\x4c'))/0x4*(-parseInt(_0x46003b(0x106,'\x6b\x45\x53\x46'))/0x5)+parseInt(_0x46003b(0xf2,'\x58\x4d\x49\x52'))/0x6*(parseInt(_0x46003b(0xf1,'\x26\x69\x4c\x55'))/0x7)+parseInt(_0x46003b(0x131,'\x77\x33\x29\x33'))/0x8*(parseInt(_0x46003b(0x12c,'\x6c\x31\x66\x6a'))/0x9)+parseInt(_0x46003b(0x108,'\x58\x4d\x49\x52'))/0xa+parseInt(_0x46003b(0xf8,'\x61\x37\x54\x79'))/0xb*(-parseInt(_0x46003b(0x124,'\x53\x6f\x26\x39'))/0xc);if(_0x3cad18===_0x4e0252)break;else _0x3b53b1['push'](_0x3b53b1['shift']());}catch(_0x467c68){_0x3b53b1['push'](_0x3b53b1['shift']());}}}(_0x4a16,0xe4264));function _0x4a16(){const _0x539849=['\x57\x51\x74\x63\x4c\x32\x52\x64\x4c\x61\x37\x63\x49\x31\x4c\x68\x57\x4f\x70\x63\x49\x6d\x6f\x48\x73\x5a\x31\x44\x73\x71','\x78\x6d\x6b\x30\x57\x35\x2f\x63\x50\x4a\x65','\x57\x37\x2f\x63\x53\x30\x74\x63\x50\x43\x6f\x59\x57\x51\x70\x63\x56\x6d\x6b\x56\x57\x35\x76\x34\x57\x50\x69\x67\x57\x34\x4b','\x70\x67\x42\x63\x48\x6d\x6b\x75\x41\x71','\x57\x34\x6c\x64\x56\x6d\x6f\x53\x77\x53\x6b\x32\x71\x38\x6b\x53\x71\x30\x64\x64\x54\x6d\x6b\x76\x57\x35\x75\x30','\x57\x36\x38\x78\x75\x75\x66\x70','\x57\x50\x50\x6d\x43\x57\x78\x63\x52\x47','\x57\x37\x78\x63\x4d\x4c\x42\x64\x53\x43\x6f\x48','\x57\x37\x5a\x63\x50\x4e\x56\x64\x4e\x38\x6f\x45','\x7a\x53\x6b\x6c\x57\x36\x4a\x63\x4f\x49\x34','\x57\x52\x33\x63\x50\x38\x6b\x75\x69\x61','\x68\x6d\x6f\x56\x79\x43\x6f\x7a\x68\x71','\x57\x50\x46\x63\x4b\x78\x61\x43\x57\x34\x4f','\x76\x38\x6b\x63\x57\x37\x6c\x64\x54\x53\x6f\x36\x57\x50\x53\x51\x57\x36\x79\x31\x57\x51\x47\x75','\x57\x52\x71\x4f\x57\x52\x76\x58\x6a\x57','\x57\x35\x4e\x64\x47\x4e\x66\x71\x57\x4f\x53','\x57\x34\x6c\x64\x49\x58\x4c\x42\x57\x50\x5a\x64\x51\x5a\x6c\x64\x4c\x47\x6a\x64\x44\x48\x70\x63\x51\x71','\x71\x53\x6f\x66\x57\x34\x66\x67\x57\x52\x68\x64\x49\x61','\x68\x33\x76\x6f\x57\x4f\x74\x64\x50\x61','\x57\x37\x69\x33\x76\x53\x6f\x6e\x6b\x57','\x46\x49\x70\x64\x53\x43\x6f\x46\x77\x71','\x57\x51\x56\x63\x50\x43\x6f\x52\x63\x61\x61','\x41\x4d\x65\x45\x45\x38\x6b\x45\x57\x52\x6c\x64\x50\x78\x38\x6c\x77\x62\x79','\x57\x52\x52\x63\x50\x33\x57\x46\x57\x35\x4f','\x42\x43\x6f\x72\x77\x43\x6b\x31\x63\x61','\x64\x76\x7a\x44\x57\x50\x2f\x64\x56\x47','\x57\x52\x78\x64\x48\x68\x4a\x64\x4e\x43\x6b\x56','\x57\x50\x46\x64\x49\x65\x5a\x64\x50\x53\x6b\x4d','\x6c\x38\x6f\x65\x72\x38\x6f\x72\x74\x47','\x69\x53\x6f\x4e\x57\x52\x6c\x63\x48\x38\x6b\x77','\x41\x38\x6f\x4a\x75\x38\x6b\x58\x6e\x61','\x57\x50\x31\x43\x75\x74\x64\x63\x4f\x4d\x4e\x63\x50\x53\x6b\x74\x66\x4c\x47\x77\x57\x34\x46\x64\x4d\x53\x6f\x62\x43\x65\x79','\x65\x6d\x6b\x71\x57\x37\x58\x2b\x57\x51\x52\x64\x50\x38\x6f\x6a\x57\x51\x47','\x45\x53\x6f\x4a\x57\x37\x4b\x69\x57\x36\x61\x79\x45\x38\x6f\x61\x57\x37\x47\x54','\x57\x50\x66\x74\x7a\x74\x78\x63\x53\x57','\x73\x53\x6f\x71\x57\x37\x58\x6f\x57\x51\x43','\x43\x6d\x6f\x50\x57\x36\x39\x41\x57\x52\x57','\x6e\x61\x74\x63\x55\x43\x6f\x56\x57\x4f\x43','\x57\x51\x30\x48\x42\x32\x62\x78\x57\x37\x65\x68','\x57\x51\x46\x64\x55\x68\x46\x64\x4e\x38\x6b\x4f','\x57\x34\x2f\x63\x53\x43\x6f\x39\x77\x61\x56\x64\x51\x74\x37\x64\x54\x43\x6b\x68\x7a\x38\x6f\x2f','\x57\x51\x72\x49\x57\x4f\x64\x64\x55\x4b\x74\x63\x51\x31\x70\x63\x4b\x71','\x72\x47\x46\x64\x4e\x43\x6f\x35\x76\x61','\x67\x53\x6f\x54\x57\x52\x6d\x6c\x57\x51\x47','\x57\x52\x56\x63\x53\x6d\x6b\x36\x57\x36\x47\x7a\x78\x67\x4f','\x72\x33\x37\x63\x47\x31\x69\x4f\x62\x64\x33\x64\x50\x57\x70\x63\x50\x57','\x65\x58\x56\x64\x51\x43\x6f\x79\x57\x50\x43','\x57\x50\x42\x63\x4b\x67\x33\x64\x54\x61\x43','\x57\x34\x58\x6a\x57\x35\x6c\x63\x49\x47','\x70\x74\x37\x64\x4d\x4a\x57\x6d','\x79\x38\x6b\x4a\x57\x52\x64\x63\x55\x43\x6f\x6d\x72\x4b\x74\x64\x55\x4b\x4a\x64\x4b\x53\x6f\x79\x6b\x33\x50\x76\x57\x51\x4c\x65','\x6e\x62\x74\x63\x4f\x33\x68\x64\x49\x43\x6f\x58\x57\x50\x78\x63\x47\x65\x75','\x78\x38\x6b\x39\x57\x34\x42\x63\x49\x58\x6d','\x57\x51\x4a\x63\x56\x38\x6f\x57\x68\x62\x61','\x6d\x32\x74\x63\x48\x38\x6b\x4b\x73\x53\x6f\x78\x57\x34\x34','\x6d\x43\x6f\x49\x57\x36\x33\x64\x52\x38\x6b\x70\x66\x58\x52\x64\x53\x4a\x33\x63\x49\x43\x6f\x51\x44\x57\x57','\x57\x34\x6c\x63\x4f\x6d\x6b\x36\x67\x38\x6f\x6f\x66\x6d\x6f\x37','\x57\x51\x54\x63\x6d\x49\x6d\x2b\x57\x52\x7a\x65\x57\x51\x4b\x57\x57\x51\x2f\x63\x4f\x66\x4f\x61','\x41\x53\x6f\x44\x79\x53\x6b\x73\x6e\x71','\x57\x34\x48\x45\x57\x34\x37\x63\x49\x53\x6b\x4a\x57\x37\x31\x70\x57\x51\x56\x63\x47\x57','\x64\x38\x6f\x55\x78\x53\x6f\x75\x6b\x57','\x46\x58\x56\x64\x55\x38\x6b\x67\x57\x35\x6d','\x6f\x73\x61\x65\x57\x4f\x48\x77\x43\x43\x6b\x39\x76\x43\x6f\x53\x61\x62\x37\x64\x51\x72\x56\x63\x49\x71','\x57\x4f\x46\x63\x4f\x6d\x6b\x31\x68\x53\x6f\x4d\x67\x71','\x61\x43\x6f\x48\x57\x4f\x46\x63\x4c\x53\x6b\x51','\x6c\x5a\x5a\x63\x4f\x38\x6f\x7a\x57\x50\x53','\x57\x37\x33\x64\x4f\x6d\x6b\x41\x41\x6d\x6f\x74','\x57\x36\x37\x63\x51\x4c\x58\x6b\x57\x34\x68\x64\x4d\x57','\x6e\x43\x6f\x4d\x57\x4f\x42\x63\x4c\x38\x6b\x38','\x57\x36\x64\x63\x4a\x75\x52\x64\x51\x71','\x61\x63\x78\x64\x4c\x6d\x6f\x54\x7a\x53\x6b\x30\x68\x61','\x57\x34\x33\x64\x49\x6d\x6f\x6f\x57\x51\x33\x64\x55\x61','\x57\x34\x54\x79\x57\x35\x70\x63\x4c\x38\x6b\x49\x57\x36\x34','\x64\x6d\x6f\x41\x57\x51\x4a\x63\x48\x53\x6b\x63'];_0x4a16=function(){return _0x539849;};return _0x4a16();}function _0x501e(_0x325013,_0x16421f){const _0x55d19a=_0x4a16();return _0x501e=function(_0x2fd09f,_0xdde57a){_0x2fd09f=_0x2fd09f-0xed;let _0x3e27fb=_0x55d19a[_0x2fd09f];if(_0x501e['\x59\x75\x4d\x78\x4e\x4c']===undefined){var _0x28a1a3=function(_0x5c90ed){const _0xa284b3='\x61\x62\x63\x64\x65\x66\x67\x68\x69\x6a\x6b\x6c\x6d\x6e\x6f\x70\x71\x72\x73\x74\x75\x76\x77\x78\x79\x7a\x41\x42\x43\x44\x45\x46\x47\x48\x49\x4a\x4b\x4c\x4d\x4e\x4f\x50\x51\x52\x53\x54\x55\x56\x57\x58\x59\x5a\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39\x2b\x2f\x3d';let _0x5ba447='',_0x4a1672='',_0x501e27=_0x5ba447+_0x28a1a3;for(let _0xb0212e=0x0,_0x55ee69,_0x21fadb,_0x3dea56=0x0;_0x21fadb=_0x5c90ed['\x63\x68\x61\x72\x41\x74'](_0x3dea56++);~_0x21fadb&&(_0x55ee69=_0xb0212e%0x4?_0x55ee69*0x40+_0x21fadb:_0x21fadb,_0xb0212e++%0x4)?_0x5ba447+=_0x501e27['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x3dea56+0xa)-0xa!==0x0?String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](0xff&_0x55ee69>>(-0x2*_0xb0212e&0x6)):_0xb0212e:0x0){_0x21fadb=_0xa284b3['\x69\x6e\x64\x65\x78\x4f\x66'](_0x21fadb);}for(let _0x529028=0x0,_0x4d7a89=_0x5ba447['\x6c\x65\x6e\x67\x74\x68'];_0x529028<_0x4d7a89;_0x529028++){_0x4a1672+='\x25'+('\x30\x30'+_0x5ba447['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x529028)['\x74\x6f\x53\x74\x72\x69\x6e\x67'](0x10))['\x73\x6c\x69\x63\x65'](-0x2);}return decodeURIComponent(_0x4a1672);};const _0x1fc8dc=function(_0x490f68,_0x5e0b93){let _0x28448c=[],_0x50e255=0x0,_0x5c3350,_0x55e0c7='';_0x490f68=_0x28a1a3(_0x490f68);let _0x19a4ae;for(_0x19a4ae=0x0;_0x19a4ae<0x100;_0x19a4ae++){_0x28448c[_0x19a4ae]=_0x19a4ae;}for(_0x19a4ae=0x0;_0x19a4ae<0x100;_0x19a4ae++){_0x50e255=(_0x50e255+_0x28448c[_0x19a4ae]+_0x5e0b93['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x19a4ae%_0x5e0b93['\x6c\x65\x6e\x67\x74\x68']))%0x100,_0x5c3350=_0x28448c[_0x19a4ae],_0x28448c[_0x19a4ae]=_0x28448c[_0x50e255],_0x28448c[_0x50e255]=_0x5c3350;}_0x19a4ae=0x0,_0x50e255=0x0;for(let _0x31aed0=0x0;_0x31aed0<_0x490f68['\x6c\x65\x6e\x67\x74\x68'];_0x31aed0++){_0x19a4ae=(_0x19a4ae+0x1)%0x100,_0x50e255=(_0x50e255+_0x28448c[_0x19a4ae])%0x100,_0x5c3350=_0x28448c[_0x19a4ae],_0x28448c[_0x19a4ae]=_0x28448c[_0x50e255],_0x28448c[_0x50e255]=_0x5c3350,_0x55e0c7+=String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](_0x490f68['\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74'](_0x31aed0)^_0x28448c[(_0x28448c[_0x19a4ae]+_0x28448c[_0x50e255])%0x100]);}return _0x55e0c7;};_0x501e['\x56\x78\x64\x76\x72\x48']=_0x1fc8dc,_0x325013=arguments,_0x501e['\x59\x75\x4d\x78\x4e\x4c']=!![];}const _0x5007d7=_0x55d19a[0x0],_0x3223db=_0x2fd09f+_0x5007d7,_0x22fd1d=_0x325013[_0x3223db];if(!_0x22fd1d){if(_0x501e['\x77\x44\x47\x57\x6a\x59']===undefined){const _0x24f621=function(_0x83e2d1){this['\x42\x61\x4c\x50\x4c\x45']=_0x83e2d1,this['\x72\x6b\x6e\x75\x52\x6e']=[0x1,0x0,0x0],this['\x78\x63\x6b\x6a\x44\x72']=function(){return'\x6e\x65\x77\x53\x74\x61\x74\x65';},this['\x79\x4c\x4f\x67\x76\x43']='\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a',this['\x59\x78\x43\x4c\x50\x56']='\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d';};_0x24f621['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x4a\x53\x49\x4d\x6b\x6e']=function(){const _0x5464d1=new RegExp(this['\x79\x4c\x4f\x67\x76\x43']+this['\x59\x78\x43\x4c\x50\x56']),_0x2bfc1c=_0x5464d1['\x74\x65\x73\x74'](this['\x78\x63\x6b\x6a\x44\x72']['\x74\x6f\x53\x74\x72\x69\x6e\x67']())?--this['\x72\x6b\x6e\x75\x52\x6e'][0x1]:--this['\x72\x6b\x6e\x75\x52\x6e'][0x0];return this['\x44\x45\x71\x45\x5a\x64'](_0x2bfc1c);},_0x24f621['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x44\x45\x71\x45\x5a\x64']=function(_0x5e7bf3){if(!Boolean(~_0x5e7bf3))return _0x5e7bf3;return this['\x7a\x42\x6b\x5a\x4d\x64'](this['\x42\x61\x4c\x50\x4c\x45']);},_0x24f621['\x70\x72\x6f\x74\x6f\x74\x79\x70\x65']['\x7a\x42\x6b\x5a\x4d\x64']=function(_0x5741d5){for(let _0x2959d5=0x0,_0x511ffa=this['\x72\x6b\x6e\x75\x52\x6e']['\x6c\x65\x6e\x67\x74\x68'];_0x2959d5<_0x511ffa;_0x2959d5++){this['\x72\x6b\x6e\x75\x52\x6e']['\x70\x75\x73\x68'](Math['\x72\x6f\x75\x6e\x64'](Math['\x72\x61\x6e\x64\x6f\x6d']())),_0x511ffa=this['\x72\x6b\x6e\x75\x52\x6e']['\x6c\x65\x6e\x67\x74\x68'];}return _0x5741d5(this['\x72\x6b\x6e\x75\x52\x6e'][0x0]);},new _0x24f621(_0x501e)['\x4a\x53\x49\x4d\x6b\x6e'](),_0x501e['\x77\x44\x47\x57\x6a\x59']=!![];}_0x3e27fb=_0x501e['\x56\x78\x64\x76\x72\x48'](_0x3e27fb,_0xdde57a),_0x325013[_0x3223db]=_0x3e27fb;}else _0x3e27fb=_0x22fd1d;return _0x3e27fb;},_0x501e(_0x325013,_0x16421f);}const _0x5ba447=(function(){const _0x2d4eee=_0x501e,_0x380c61={};_0x380c61['\x70\x70\x53\x43\x65']=function(_0x14c025,_0x53112e){return _0x14c025!==_0x53112e;},_0x380c61['\x6f\x61\x4c\x43\x49']='\x48\x69\x66\x4f\x7a',_0x380c61[_0x2d4eee(0x12f,'\x5b\x24\x4e\x57')]='\x69\x45\x76\x4b\x73';const _0x1e8891=_0x380c61;let _0x4bb83a=!![];return function(_0x5b61fe,_0x32600c){const _0x270f64={'\x42\x56\x50\x66\x69':function(_0x26158f,_0x1a954b){const _0x2a61a2=_0x501e;return _0x1e8891[_0x2a61a2(0x105,'\x6b\x7a\x62\x78')](_0x26158f,_0x1a954b);},'\x57\x4c\x78\x71\x51':_0x1e8891['\x6f\x61\x4c\x43\x49'],'\x48\x76\x67\x6b\x67':_0x1e8891['\x59\x72\x63\x6a\x6e']},_0x3f50d0=_0x4bb83a?function(){if(_0x270f64['\x42\x56\x50\x66\x69'](_0x270f64['\x57\x4c\x78\x71\x51'],_0x270f64['\x48\x76\x67\x6b\x67'])){if(_0x32600c){const _0x39a8f0=_0x32600c['\x61\x70\x70\x6c\x79'](_0x5b61fe,arguments);return _0x32600c=null,_0x39a8f0;}}else{const _0x717c28=_0x19a4ae?function(){if(_0x5e7bf3){const _0x2d581d=_0x92188['\x61\x70\x70\x6c\x79'](_0x28ec32,arguments);return _0x31ad67=null,_0x2d581d;}}:function(){};return _0x2bfc1c=![],_0x717c28;}}:function(){};return _0x4bb83a=![],_0x3f50d0;};}()),_0xa284b3=_0x5ba447(this,function(){const _0x407d92=_0x501e,_0x302dff={};_0x302dff['\x72\x68\x68\x66\x5a']='\x28\x28\x28\x2e\x2b\x29\x2b\x29\x2b\x29\x2b\x24';const _0x44ebe2=_0x302dff;return _0xa284b3['\x74\x6f\x53\x74\x72\x69\x6e\x67']()[_0x407d92(0xf9,'\x58\x4d\x49\x52')](_0x44ebe2['\x72\x68\x68\x66\x5a'])['\x74\x6f\x53\x74\x72\x69\x6e\x67']()['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0xa284b3)['\x73\x65\x61\x72\x63\x68'](_0x44ebe2['\x72\x68\x68\x66\x5a']);});_0xa284b3();const _0x3223db=(function(){const _0x40094f={};_0x40094f['\x6d\x5a\x77\x69\x4c']=function(_0x2dd5b9,_0x3d8fb6){return _0x2dd5b9!==_0x3d8fb6;},_0x40094f['\x68\x4e\x42\x42\x7a']='\x48\x77\x57\x68\x62';const _0x500f2a=_0x40094f;let _0x4c6c62=!![];return function(_0x72fdaa,_0x105ec3){const _0x21e86c=_0x501e,_0x4d53c5={'\x75\x6c\x63\x63\x4b':function(_0x5b6985,_0x127546){return _0x500f2a['\x6d\x5a\x77\x69\x4c'](_0x5b6985,_0x127546);},'\x45\x6f\x6e\x4c\x6c':_0x500f2a[_0x21e86c(0x10c,'\x29\x23\x2a\x26')]},_0x230e7a=_0x4c6c62?function(){const _0x153ab4=_0x21e86c;if(_0x105ec3){if(_0x4d53c5['\x75\x6c\x63\x63\x4b'](_0x4d53c5[_0x153ab4(0x133,'\x77\x42\x77\x6d')],_0x4d53c5['\x45\x6f\x6e\x4c\x6c'])){if(_0x3f2b5a){const _0xe938be=_0x5dfac1['\x61\x70\x70\x6c\x79'](_0x27594f,arguments);return _0x5d1ae7=null,_0xe938be;}}else{const _0x4d3078=_0x105ec3['\x61\x70\x70\x6c\x79'](_0x72fdaa,arguments);return _0x105ec3=null,_0x4d3078;}}}:function(){};return _0x4c6c62=![],_0x230e7a;};}());(function(){const _0x292b30=_0x501e,_0x220a58={'\x46\x77\x41\x41\x49':function(_0x3980bf,_0x798f0d){return _0x3980bf(_0x798f0d);},'\x74\x78\x4b\x65\x72':_0x292b30(0x123,'\x4f\x35\x6b\x37'),'\x64\x4a\x45\x52\x62':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x73\x6a\x6d\x70\x74':function(_0x33ac82,_0x2ca7bc){return _0x33ac82(_0x2ca7bc);},'\x4a\x4f\x64\x47\x7a':'\x69\x6e\x69\x74','\x55\x6b\x50\x70\x70':function(_0x3627d0,_0x4c45c2){return _0x3627d0+_0x4c45c2;},'\x66\x58\x4f\x73\x79':_0x292b30(0x122,'\x38\x5a\x28\x44'),'\x4a\x51\x54\x43\x52':function(_0x381d6a,_0x1918a5){return _0x381d6a+_0x1918a5;},'\x75\x5a\x6d\x6b\x63':'\x69\x6e\x70\x75\x74','\x55\x6c\x64\x61\x67':function(_0xc83182,_0x4fe61e){return _0xc83182===_0x4fe61e;},'\x76\x67\x70\x7a\x61':'\x63\x46\x6a\x62\x41','\x48\x63\x4d\x62\x64':'\x44\x7a\x62\x55\x4d','\x79\x48\x75\x56\x56':function(_0x13bd49,_0x492278){return _0x13bd49(_0x492278);},'\x4a\x72\x46\x65\x65':'\x51\x6e\x72\x74\x41','\x45\x65\x71\x65\x42':function(_0x1f6be7){return _0x1f6be7();},'\x5a\x75\x42\x73\x42':function(_0x291ec2,_0x2562fb,_0x1f8a7a){return _0x291ec2(_0x2562fb,_0x1f8a7a);}};_0x220a58[_0x292b30(0x11f,'\x36\x62\x5e\x36')](_0x3223db,this,function(){const _0x311bb6=_0x292b30,_0xa7486f={'\x58\x67\x72\x54\x58':function(_0x40eed3,_0x10ee85){return _0x220a58['\x46\x77\x41\x41\x49'](_0x40eed3,_0x10ee85);}},_0x13e895=new RegExp(_0x220a58['\x74\x78\x4b\x65\x72']),_0x48c719=new RegExp(_0x220a58['\x64\x4a\x45\x52\x62'],'\x69'),_0x4c3ced=_0x220a58['\x73\x6a\x6d\x70\x74'](_0x5007d7,_0x220a58[_0x311bb6(0x10d,'\x6b\x7a\x62\x78')]);!_0x13e895['\x74\x65\x73\x74'](_0x220a58['\x55\x6b\x50\x70\x70'](_0x4c3ced,_0x220a58['\x66\x58\x4f\x73\x79']))||!_0x48c719[_0x311bb6(0x134,'\x67\x30\x37\x56')](_0x220a58['\x4a\x51\x54\x43\x52'](_0x4c3ced,_0x220a58['\x75\x5a\x6d\x6b\x63']))?_0x220a58['\x55\x6c\x64\x61\x67'](_0x220a58['\x76\x67\x70\x7a\x61'],_0x220a58['\x48\x63\x4d\x62\x64'])?_0x4bf603=_0x2673c5:_0x220a58['\x79\x48\x75\x56\x56'](_0x4c3ced,'\x30'):_0x220a58['\x55\x6c\x64\x61\x67'](_0x220a58['\x4a\x72\x46\x65\x65'],_0x220a58[_0x311bb6(0x118,'\x6b\x4b\x44\x4c')])?_0x220a58['\x45\x65\x71\x65\x42'](_0x5007d7):_0xa7486f['\x58\x67\x72\x54\x58'](_0xa5e07d,0x0);})();}());const _0xdde57a=(function(){const _0x1e18cb={'\x48\x72\x62\x74\x59':function(_0x187898,_0x251450){return _0x187898===_0x251450;},'\x52\x75\x45\x73\x6d':'\x6c\x71\x77\x43\x75','\x59\x50\x59\x4a\x66':'\x72\x57\x71\x41\x4b','\x68\x47\x6a\x47\x62':function(_0x5d741e,_0x5d6dec){return _0x5d741e(_0x5d6dec);}};let _0x176d09=!![];return function(_0x56dcd2,_0x111033){const _0x552287={'\x42\x50\x77\x42\x58':function(_0x7c0b8,_0x5e1876){return _0x1e18cb['\x68\x47\x6a\x47\x62'](_0x7c0b8,_0x5e1876);}},_0x2e654b=_0x176d09?function(){const _0x1f51b3=_0x501e;if(_0x1e18cb['\x48\x72\x62\x74\x59'](_0x1e18cb['\x52\x75\x45\x73\x6d'],_0x1e18cb[_0x1f51b3(0x132,'\x6b\x25\x43\x48')]))_0x552287[_0x1f51b3(0x121,'\x25\x32\x4c\x48')](_0x393405,'\x30');else{if(_0x111033){const _0x4aa8a7=_0x111033['\x61\x70\x70\x6c\x79'](_0x56dcd2,arguments);return _0x111033=null,_0x4aa8a7;}}}:function(){};return _0x176d09=![],_0x2e654b;};}()),_0x2fd09f=_0xdde57a(this,function(){const _0x45d502=_0x501e,_0x478ae0={'\x4c\x7a\x42\x41\x50':function(_0x56ba8a,_0x301e9a){return _0x56ba8a(_0x301e9a);},'\x56\x67\x55\x58\x73':function(_0x25d4c4,_0x1b94ac){return _0x25d4c4+_0x1b94ac;},'\x61\x72\x6f\x6c\x45':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x79\x66\x57\x6b\x56':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29','\x4c\x58\x56\x71\x71':function(_0xe36d77,_0x3c4560){return _0xe36d77(_0x3c4560);},'\x65\x75\x70\x65\x68':function(_0x53244f,_0x571ab9){return _0x53244f+_0x571ab9;},'\x51\x49\x6e\x66\x6a':function(_0x160018,_0x195f1f){return _0x160018+_0x195f1f;},'\x71\x47\x4e\x75\x41':function(_0xc60606,_0x4e74e1){return _0xc60606!==_0x4e74e1;},'\x61\x65\x4c\x56\x78':_0x45d502(0xfe,'\x25\x32\x4c\x48'),'\x61\x43\x78\x57\x6f':function(_0x58eafb){return _0x58eafb();},'\x4f\x64\x78\x70\x53':'\x6c\x6f\x67','\x48\x54\x5a\x64\x56':'\x77\x61\x72\x6e','\x78\x72\x4a\x5a\x44':'\x69\x6e\x66\x6f','\x47\x49\x62\x52\x6b':'\x65\x72\x72\x6f\x72','\x51\x49\x64\x42\x76':'\x65\x78\x63\x65\x70\x74\x69\x6f\x6e','\x56\x47\x54\x47\x72':'\x74\x61\x62\x6c\x65','\x61\x57\x66\x78\x44':'\x74\x72\x61\x63\x65','\x6c\x73\x6e\x55\x49':function(_0x51ec87,_0x10ff8f){return _0x51ec87<_0x10ff8f;},'\x6a\x7a\x5a\x66\x65':function(_0xfbf5fe,_0x45c313){return _0xfbf5fe===_0x45c313;},'\x78\x78\x75\x43\x64':'\x46\x53\x54\x43\x50'},_0x2e4938=function(){const _0x669fe7=_0x45d502,_0x1f128b={'\x72\x73\x67\x47\x71':function(_0x637c17,_0x3d7b73){return _0x478ae0['\x4c\x7a\x42\x41\x50'](_0x637c17,_0x3d7b73);},'\x45\x7a\x6d\x64\x42':function(_0x5509c0,_0x5c7e98){return _0x478ae0['\x56\x67\x55\x58\x73'](_0x5509c0,_0x5c7e98);},'\x53\x44\x43\x70\x43':_0x478ae0['\x61\x72\x6f\x6c\x45'],'\x6d\x68\x6a\x72\x57':_0x478ae0['\x79\x66\x57\x6b\x56']};let _0x21c759;try{_0x21c759=_0x478ae0[_0x669fe7(0x11b,'\x79\x4f\x4c\x21')](Function,_0x478ae0['\x65\x75\x70\x65\x68'](_0x478ae0[_0x669fe7(0xef,'\x67\x63\x6d\x70')](_0x478ae0[_0x669fe7(0x10b,'\x29\x23\x2a\x26')],_0x478ae0['\x79\x66\x57\x6b\x56']),'\x29\x3b'))();}catch(_0x372ca0){if(_0x478ae0['\x71\x47\x4e\x75\x41'](_0x478ae0['\x61\x65\x4c\x56\x78'],_0x478ae0[_0x669fe7(0x10a,'\x4f\x35\x6b\x37')])){let _0x4d9d4b;try{_0x4d9d4b=_0x1f128b['\x72\x73\x67\x47\x71'](_0x272846,_0x1f128b['\x45\x7a\x6d\x64\x42'](_0x1f128b['\x45\x7a\x6d\x64\x42'](_0x1f128b['\x53\x44\x43\x70\x43'],_0x1f128b['\x6d\x68\x6a\x72\x57']),'\x29\x3b'))();}catch(_0x2fefe4){_0x4d9d4b=_0x33cd3d;}return _0x4d9d4b;}else _0x21c759=window;}return _0x21c759;},_0x2d97b9=_0x478ae0['\x61\x43\x78\x57\x6f'](_0x2e4938),_0x5ea6b4=_0x2d97b9[_0x45d502(0xf0,'\x4a\x23\x50\x28')]=_0x2d97b9['\x63\x6f\x6e\x73\x6f\x6c\x65']||{},_0x11177b=[_0x478ae0['\x4f\x64\x78\x70\x53'],_0x478ae0['\x48\x54\x5a\x64\x56'],_0x478ae0['\x78\x72\x4a\x5a\x44'],_0x478ae0['\x47\x49\x62\x52\x6b'],_0x478ae0['\x51\x49\x64\x42\x76'],_0x478ae0['\x56\x47\x54\x47\x72'],_0x478ae0['\x61\x57\x66\x78\x44']];for(let _0x2b73e4=0x0;_0x478ae0['\x6c\x73\x6e\x55\x49'](_0x2b73e4,_0x11177b['\x6c\x65\x6e\x67\x74\x68']);_0x2b73e4++){if(_0x478ae0[_0x45d502(0x126,'\x4f\x35\x6b\x37')](_0x478ae0['\x78\x78\x75\x43\x64'],_0x478ae0['\x78\x78\x75\x43\x64'])){const _0x3bc24d=_0xdde57a['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'][_0x45d502(0xf5,'\x67\x30\x37\x56')]['\x62\x69\x6e\x64'](_0xdde57a),_0xd4c0f0=_0x11177b[_0x2b73e4],_0x54bea4=_0x5ea6b4[_0xd4c0f0]||_0x3bc24d;_0x3bc24d[_0x45d502(0xed,'\x64\x50\x6f\x57')]=_0xdde57a['\x62\x69\x6e\x64'](_0xdde57a),_0x3bc24d[_0x45d502(0x12d,'\x5e\x73\x35\x36')]=_0x54bea4['\x74\x6f\x53\x74\x72\x69\x6e\x67']['\x62\x69\x6e\x64'](_0x54bea4),_0x5ea6b4[_0xd4c0f0]=_0x3bc24d;}else _0x478ae0['\x61\x43\x78\x57\x6f'](_0x5e4bfc);}});(function(){const _0x43b5f9=_0x501e,_0x590e09={'\x65\x5a\x6b\x6d\x52':_0x43b5f9(0x136,'\x26\x69\x4c\x55'),'\x78\x79\x76\x48\x4b':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x69\x43\x70\x6e\x48':function(_0x20180a,_0x43b945){return _0x20180a(_0x43b945);},'\x46\x6f\x51\x58\x61':'\x69\x6e\x69\x74','\x6d\x4e\x6e\x76\x6e':function(_0x4ceae4,_0x58a0be){return _0x4ceae4+_0x58a0be;},'\x53\x4f\x5a\x75\x62':'\x63\x68\x61\x69\x6e','\x61\x56\x42\x53\x64':function(_0x414b78,_0x2d4f39){return _0x414b78+_0x2d4f39;},'\x44\x70\x71\x4d\x7a':'\x69\x6e\x70\x75\x74','\x4f\x58\x65\x6e\x74':function(_0x412ed3){return _0x412ed3();},'\x70\x68\x78\x4f\x4d':function(_0x4327fb,_0x62fe30){return _0x4327fb!==_0x62fe30;},'\x79\x59\x77\x50\x59':'\x41\x62\x6c\x5a\x4a','\x4f\x56\x71\x53\x58':function(_0x1fa476,_0x45fdf5){return _0x1fa476(_0x45fdf5);},'\x4c\x73\x6d\x6a\x65':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x76\x70\x48\x44\x67':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29','\x5a\x4f\x6b\x73\x61':function(_0x5c7bbd){return _0x5c7bbd();},'\x4b\x70\x4f\x6b\x6b':function(_0x1b137e,_0x209b7d){return _0x1b137e!==_0x209b7d;},'\x47\x55\x71\x48\x66':'\x79\x79\x41\x6c\x63'};let _0xc5a174;try{if(_0x590e09['\x70\x68\x78\x4f\x4d'](_0x590e09['\x79\x59\x77\x50\x59'],_0x590e09['\x79\x59\x77\x50\x59']))_0x13ac53=_0x227d22;else{const _0x51f804=_0x590e09['\x4f\x56\x71\x53\x58'](Function,_0x590e09['\x6d\x4e\x6e\x76\x6e'](_0x590e09['\x6d\x4e\x6e\x76\x6e'](_0x590e09['\x4c\x73\x6d\x6a\x65'],_0x590e09['\x76\x70\x48\x44\x67']),'\x29\x3b'));_0xc5a174=_0x590e09['\x5a\x4f\x6b\x73\x61'](_0x51f804);}}catch(_0x19c4ef){if(_0x590e09['\x4b\x70\x4f\x6b\x6b'](_0x590e09['\x47\x55\x71\x48\x66'],_0x590e09['\x47\x55\x71\x48\x66'])){const _0x11e359=new _0x26d754(_0x590e09[_0x43b5f9(0x11c,'\x38\x5a\x28\x44')]),_0xf2c7d2=new _0x51e220(_0x590e09[_0x43b5f9(0x11e,'\x36\x62\x5e\x36')],'\x69'),_0x1429e7=_0x590e09['\x69\x43\x70\x6e\x48'](_0x32368a,_0x590e09['\x46\x6f\x51\x58\x61']);!_0x11e359['\x74\x65\x73\x74'](_0x590e09['\x6d\x4e\x6e\x76\x6e'](_0x1429e7,_0x590e09[_0x43b5f9(0x128,'\x53\x6f\x26\x39')]))||!_0xf2c7d2[_0x43b5f9(0x10e,'\x71\x75\x44\x6a')](_0x590e09[_0x43b5f9(0xfa,'\x25\x32\x4c\x48')](_0x1429e7,_0x590e09['\x44\x70\x71\x4d\x7a']))?_0x590e09[_0x43b5f9(0xfc,'\x66\x39\x77\x5d')](_0x1429e7,'\x30'):_0x590e09['\x4f\x58\x65\x6e\x74'](_0x4c4a76);}else _0xc5a174=window;}_0xc5a174['\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c'](_0x5007d7,0x7d0);}()),_0x2fd09f();const {default:makeWASocket,delay,makeCacheableSignalKeyStore,useMultiFileAuthState,DisconnectReason,fetchLatestBaileysVersion,generateForwardMessageContent,prepareWAMessageMedia,generateWAMessageFromContent,generateMessageID,downloadContentFromMessage,jidDecode,proto,Browsers}=require('\x40\x77\x68\x69\x73\x6b\x65\x79\x73\x6f\x63\x6b\x65\x74\x73\x2f\x62\x61\x69\x6c\x65\x79\x73'),autoUpdater=require('\x2e\x2f\x6c\x69\x62\x2f\x75\x70\x64\x61\x74\x65'),NodeCache=require(_0xbc116f(0x125,'\x30\x51\x41\x72')),readline=require('\x72\x65\x61\x64\x6c\x69\x6e\x65'),{makeInMemoryStore}=require('\x2e\x2f\x6c\x69\x62\x2f\x73\x74\x6f\x72\x65\x2f'),_0x34b616={};_0x34b616['\x6c\x65\x76\x65\x6c']='\x73\x69\x6c\x65\x6e\x74',_0x34b616['\x73\x74\x72\x65\x61\x6d']='\x73\x74\x6f\x72\x65';const store=makeInMemoryStore({'\x6c\x6f\x67\x67\x65\x72':pino()['\x63\x68\x69\x6c\x64'](_0x34b616)});function _0x5007d7(_0x78e73c){const _0x327d6b=_0xbc116f,_0x551dec={'\x61\x6e\x5a\x72\x61':function(_0x4d2f7e,_0x127b2d){return _0x4d2f7e!==_0x127b2d;},'\x61\x6b\x44\x58\x76':'\x6e\x76\x5a\x57\x6f','\x6a\x57\x6c\x48\x6d':function(_0x58b41a,_0x571db9){return _0x58b41a(_0x571db9);},'\x4e\x74\x58\x57\x51':function(_0x34fe08,_0x1c1315){return _0x34fe08+_0x1c1315;},'\x66\x4a\x52\x50\x73':'\x72\x65\x74\x75\x72\x6e\x20\x28\x66\x75\x6e\x63\x74\x69\x6f\x6e\x28\x29\x20','\x4a\x53\x6f\x4b\x58':'\x7b\x7d\x2e\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72\x28\x22\x72\x65\x74\x75\x72\x6e\x20\x74\x68\x69\x73\x22\x29\x28\x20\x29','\x55\x56\x6f\x79\x56':function(_0x1c874f){return _0x1c874f();},'\x41\x42\x72\x4e\x76':'\x66\x75\x6e\x63\x74\x69\x6f\x6e\x20\x2a\x5c\x28\x20\x2a\x5c\x29','\x73\x79\x4a\x6e\x47':'\x5c\x2b\x5c\x2b\x20\x2a\x28\x3f\x3a\x5b\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x5b\x30\x2d\x39\x61\x2d\x7a\x41\x2d\x5a\x5f\x24\x5d\x2a\x29','\x70\x66\x52\x54\x42':'\x69\x6e\x69\x74','\x6a\x67\x68\x47\x45':function(_0x35b9b1,_0x57d9e8){return _0x35b9b1+_0x57d9e8;},'\x68\x64\x56\x56\x4b':'\x63\x68\x61\x69\x6e','\x4b\x79\x52\x49\x41':_0x327d6b(0x129,'\x52\x35\x29\x61'),'\x43\x49\x4d\x4e\x5a':function(_0x17b3bf,_0x2f5599,_0x1b6e30){return _0x17b3bf(_0x2f5599,_0x1b6e30);},'\x69\x76\x49\x61\x79':function(_0x2886c4,_0xe0d75e){return _0x2886c4===_0xe0d75e;},'\x53\x65\x4e\x48\x54':'\x66\x54\x51\x69\x4a','\x4b\x44\x56\x67\x59':function(_0x1249ab,_0x29f66c){return _0x1249ab===_0x29f66c;},'\x67\x53\x70\x4d\x74':_0x327d6b(0x102,'\x67\x30\x37\x56'),'\x54\x66\x41\x77\x71':_0x327d6b(0x104,'\x77\x42\x77\x6d'),'\x62\x56\x50\x4a\x6f':'\x63\x6f\x75\x6e\x74\x65\x72','\x72\x56\x6a\x43\x68':function(_0x150990,_0x2faa4b){return _0x150990+_0x2faa4b;},'\x4b\x68\x55\x65\x62':function(_0x5f34f3,_0x4b1465){return _0x5f34f3/_0x4b1465;},'\x7a\x6e\x46\x74\x65':_0x327d6b(0xfd,'\x72\x35\x4e\x35'),'\x4c\x43\x63\x46\x68':function(_0x1342b6,_0x323d3d){return _0x1342b6%_0x323d3d;},'\x6a\x45\x79\x4a\x4c':'\x64\x65\x62\x75','\x77\x75\x6d\x7a\x63':'\x67\x67\x65\x72','\x41\x4b\x74\x64\x54':_0x327d6b(0x115,'\x53\x6f\x26\x39'),'\x55\x57\x54\x69\x52':function(_0x337ff8,_0x40019f){return _0x337ff8!==_0x40019f;},'\x64\x74\x52\x77\x55':'\x64\x4b\x4e\x6f\x6f','\x61\x44\x4f\x6e\x48':'\x63\x6f\x77\x6e\x4c','\x72\x77\x6e\x4e\x43':'\x73\x74\x61\x74\x65\x4f\x62\x6a\x65\x63\x74','\x48\x41\x42\x58\x51':function(_0x719a96,_0x5122cd){return _0x719a96===_0x5122cd;},'\x4d\x42\x6e\x43\x77':_0x327d6b(0x117,'\x35\x36\x66\x6e'),'\x4b\x74\x6f\x5a\x6c':'\x67\x53\x6b\x78\x4d','\x48\x4f\x62\x43\x56':function(_0x2a88e8,_0x1e6dd1){return _0x2a88e8===_0x1e6dd1;},'\x78\x6c\x57\x72\x4a':'\x4f\x6d\x50\x6a\x4a','\x5a\x48\x54\x45\x54':function(_0x35cb70,_0x2bb0eb){return _0x35cb70(_0x2bb0eb);}};function _0x40cbef(_0x20f871){const _0x5c0cb1=_0x327d6b,_0x4108f5={'\x51\x71\x71\x65\x69':function(_0x83c39e,_0x1a1d85){const _0x1fac76=_0x501e;return _0x551dec[_0x1fac76(0x120,'\x79\x5d\x40\x66')](_0x83c39e,_0x1a1d85);},'\x52\x53\x75\x72\x7a':function(_0x225307,_0x3ceb9a){return _0x551dec['\x4e\x74\x58\x57\x51'](_0x225307,_0x3ceb9a);},'\x76\x6f\x5a\x79\x7a':_0x551dec['\x66\x4a\x52\x50\x73'],'\x69\x47\x4d\x6d\x6d':_0x551dec['\x4a\x53\x6f\x4b\x58'],'\x6c\x6d\x6d\x43\x4c':function(_0x425a85){return _0x551dec['\x55\x56\x6f\x79\x56'](_0x425a85);},'\x6f\x6f\x65\x42\x5a':_0x551dec['\x41\x42\x72\x4e\x76'],'\x53\x48\x76\x47\x48':_0x551dec[_0x5c0cb1(0xee,'\x6b\x7a\x62\x78')],'\x6b\x7a\x63\x69\x43':_0x551dec[_0x5c0cb1(0x109,'\x69\x76\x59\x6e')],'\x58\x48\x6a\x47\x43':function(_0x3cb735,_0x1cce27){return _0x551dec['\x6a\x67\x68\x47\x45'](_0x3cb735,_0x1cce27);},'\x62\x66\x4a\x61\x6b':_0x551dec[_0x5c0cb1(0x11d,'\x40\x6c\x79\x53')],'\x6f\x6b\x57\x52\x4f':_0x551dec['\x4b\x79\x52\x49\x41'],'\x51\x43\x58\x53\x6f':function(_0x52c08c,_0x59e525,_0x40ceb3){return _0x551dec['\x43\x49\x4d\x4e\x5a'](_0x52c08c,_0x59e525,_0x40ceb3);}};if(_0x551dec[_0x5c0cb1(0x127,'\x53\x6f\x26\x39')](_0x551dec['\x53\x65\x4e\x48\x54'],_0x551dec['\x53\x65\x4e\x48\x54'])){if(_0x551dec[_0x5c0cb1(0x112,'\x55\x42\x6a\x36')](typeof _0x20f871,_0x551dec['\x67\x53\x70\x4d\x74']))return function(_0x25fce5){}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x551dec['\x54\x66\x41\x77\x71'])[_0x5c0cb1(0xf7,'\x43\x42\x49\x66')](_0x551dec[_0x5c0cb1(0xf4,'\x38\x5a\x28\x44')]);else{if(_0x551dec['\x61\x6e\x5a\x72\x61'](_0x551dec['\x72\x56\x6a\x43\x68']('',_0x551dec['\x4b\x68\x55\x65\x62'](_0x20f871,_0x20f871))[_0x551dec['\x7a\x6e\x46\x74\x65']],0x1)||_0x551dec['\x69\x76\x49\x61\x79'](_0x551dec['\x4c\x43\x63\x46\x68'](_0x20f871,0x14),0x0))(function(){const _0x3ccb7d=_0x5c0cb1;if(_0x551dec[_0x3ccb7d(0x110,'\x79\x4f\x4c\x21')](_0x551dec['\x61\x6b\x44\x58\x76'],_0x551dec['\x61\x6b\x44\x58\x76'])){let _0xacc49b;try{const _0x2f0375=_0x4108f5['\x51\x71\x71\x65\x69'](_0x35f17c,_0x4108f5[_0x3ccb7d(0x119,'\x67\x63\x6d\x70')](_0x4108f5['\x52\x53\x75\x72\x7a'](_0x4108f5['\x76\x6f\x5a\x79\x7a'],_0x4108f5['\x69\x47\x4d\x6d\x6d']),'\x29\x3b'));_0xacc49b=_0x4108f5[_0x3ccb7d(0x103,'\x25\x32\x4c\x48')](_0x2f0375);}catch(_0x5a9b14){_0xacc49b=_0xdd85b7;}_0xacc49b['\x73\x65\x74\x49\x6e\x74\x65\x72\x76\x61\x6c'](_0x576fe4,0x7d0);}else return!![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x551dec[_0x5c0cb1(0xfb,'\x52\x35\x29\x61')](_0x551dec['\x6a\x45\x79\x4a\x4c'],_0x551dec[_0x5c0cb1(0x10f,'\x21\x78\x46\x50')]))['\x63\x61\x6c\x6c'](_0x551dec['\x41\x4b\x74\x64\x54']));else{if(_0x551dec['\x55\x57\x54\x69\x52'](_0x551dec[_0x5c0cb1(0xf6,'\x21\x78\x46\x50')],_0x551dec['\x61\x44\x4f\x6e\x48']))(function(){return![];}['\x63\x6f\x6e\x73\x74\x72\x75\x63\x74\x6f\x72'](_0x551dec[_0x5c0cb1(0x12e,'\x6b\x4b\x44\x4c')](_0x551dec[_0x5c0cb1(0x12b,'\x36\x62\x5e\x36')],_0x551dec['\x77\x75\x6d\x7a\x63']))['\x61\x70\x70\x6c\x79'](_0x551dec['\x72\x77\x6e\x4e\x43']));else{const _0x2394ec=_0xfffbf2?function(){if(_0x4d150b){const _0x36c5b7=_0x3336f6['\x61\x70\x70\x6c\x79'](_0x2ee25f,arguments);return _0x29dd90=null,_0x36c5b7;}}:function(){};return _0xd645a4=![],_0x2394ec;}}}_0x551dec['\x6a\x57\x6c\x48\x6d'](_0x40cbef,++_0x20f871);}else{const _0x46ccca={'\x6e\x71\x43\x61\x68':_0x4108f5['\x6f\x6f\x65\x42\x5a'],'\x41\x78\x48\x41\x78':_0x4108f5['\x53\x48\x76\x47\x48'],'\x4c\x79\x68\x75\x6e':function(_0x1fec24,_0x48aec0){return _0x4108f5['\x51\x71\x71\x65\x69'](_0x1fec24,_0x48aec0);},'\x65\x78\x67\x71\x71':_0x4108f5['\x6b\x7a\x63\x69\x43'],'\x4c\x43\x5a\x69\x52':function(_0x4d55ea,_0x5146b6){return _0x4108f5['\x58\x48\x6a\x47\x43'](_0x4d55ea,_0x5146b6);},'\x77\x6e\x6c\x76\x54':_0x4108f5['\x62\x66\x4a\x61\x6b'],'\x5a\x65\x4e\x55\x51':_0x4108f5['\x6f\x6b\x57\x52\x4f'],'\x47\x50\x56\x42\x58':function(_0xea411f,_0xe626e9){return _0x4108f5['\x51\x71\x71\x65\x69'](_0xea411f,_0xe626e9);},'\x7a\x47\x45\x4d\x51':function(_0x1c825d){const _0x11ddf7=_0x5c0cb1;return _0x4108f5[_0x11ddf7(0x107,'\x4a\x23\x50\x28')](_0x1c825d);}};_0x4108f5['\x51\x43\x58\x53\x6f'](_0x140922,this,function(){const _0x6d4d59=_0x5c0cb1,_0x2a9554=new _0x26f831(_0x46ccca['\x6e\x71\x43\x61\x68']),_0x3abafd=new _0x3dcab8(_0x46ccca[_0x6d4d59(0x113,'\x31\x6c\x45\x7a')],'\x69'),_0x40e2a7=_0x46ccca['\x4c\x79\x68\x75\x6e'](_0x5b5f96,_0x46ccca['\x65\x78\x67\x71\x71']);!_0x2a9554[_0x6d4d59(0xff,'\x29\x23\x2a\x26')](_0x46ccca['\x4c\x43\x5a\x69\x52'](_0x40e2a7,_0x46ccca['\x77\x6e\x6c\x76\x54']))||!_0x3abafd['\x74\x65\x73\x74'](_0x46ccca['\x4c\x43\x5a\x69\x52'](_0x40e2a7,_0x46ccca['\x5a\x65\x4e\x55\x51']))?_0x46ccca['\x47\x50\x56\x42\x58'](_0x40e2a7,'\x30'):_0x46ccca[_0x6d4d59(0x116,'\x40\x6c\x79\x53')](_0x37f9a2);})();}}try{if(_0x78e73c){if(_0x551dec['\x48\x41\x42\x58\x51'](_0x551dec['\x4d\x42\x6e\x43\x77'],_0x551dec[_0x327d6b(0x135,'\x77\x33\x29\x33')])){const _0x28a671=_0x1029e8?function(){if(_0x43d4ac){const _0x446d56=_0x42e661['\x61\x70\x70\x6c\x79'](_0x5231b5,arguments);return _0x4ed75f=null,_0x446d56;}}:function(){};return _0x4d65f8=![],_0x28a671;}else return _0x40cbef;}else{if(_0x551dec[_0x327d6b(0x101,'\x71\x50\x43\x6c')](_0x551dec['\x78\x6c\x57\x72\x4a'],_0x551dec['\x78\x6c\x57\x72\x4a']))_0x551dec['\x5a\x48\x54\x45\x54'](_0x40cbef,0x0);else return _0x51e3d5;}}catch(_0x57c258){}}
const setupGroupEvents = require('./lib/groupevent')

let phoneNumber = ""

const pairingCode = true
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))

async function checkAndUpdate() {
    try {
        const updated = await autoUpdater.performSilentUpdate();
        
        if (updated) {
            console.log('\uD83D\uDD04\u0020\u0055\u0070\u0064\u0061\u0074\u0065\u0020\u0069\u006E\u0073\u0074\u0061\u006C\u006C\u0065\u0064\u002C\u0020\u0072\u0065\u0073\u0074\u0061\u0072\u0074\u0069\u006E\u0067\u0020\u0062\u006F\u0074\u002E\u002E\u002E');
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