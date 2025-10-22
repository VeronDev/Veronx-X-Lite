const fs = require('fs')
const chalk = require('chalk')
const veronicaDB = require('./lib/verolitedb')
const packageJson = require('./package.json')




global.ownername = "Terri"
global.ownernumber = '256752792178'
global.prefa = ['.']
global.stylemenu = '8' // Default menu style: 1-9

//false=disable and true=enable
global.autoRecording = true
global.autoTyping = true
global.autorecordtype = true
global.autoread = false
global.autobio = true 
global.autoswview = true
// Call blocking settings
global.anticall = 'false'
global.location = "Kampala/Uganda"
global.botname = "Veronica Lite"
global.simbol = "⌘"
global.version = packageJson.version
global.packname = "Vero_lite"
global.author = packageJson.author
global.api ="https://terrisapi.vercel.app/"
global.db = veronicaDB;
global.mess = {
    done: "`Done..!`",
    admin: "*Only Admins can use this 😩*",
    botAdmin: "*🤖 I'm not an admin here 🚶*",
    owner: "`You are not my owner 😡`",
    group: "`This is only for groups idiot?🤔`",
    private: "`Use this in my Dm 😡`",
    wait: "`Wait i 'm on it ...`",
    error: "`Error!`",
}

global.thumb = "https://files.catbox.moe/r1e75b.png"
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})