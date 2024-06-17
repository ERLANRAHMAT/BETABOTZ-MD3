/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/

const fs = require('fs')
const chalk = require('chalk')

//Message
global.message = {
  error: "Internal Server Error x_x",
  botNotAdmin: "Maaf, bot ini hanya dapat digunakan ketika bot menjadi admin grup.",
  isAdmin: "Hanya admin yang dapat menggunakan perintah ini.",
  isOwn: "Anda tidak dapat melakukan tindakan ini karena anda bukan owner",
  isOwn2: "Anda tidak dapat melakukan tindakan ini terhadap owner sendiri.",
  isMe: "Anda tidak bisa melakukan tindakan ini terhadap diri Anda sendiri.",
  isGroup: "Anda hanya bisa melakukan tindakan ini didalam group.",
  isMyLink: "Link tersebut adalah link group anda sendiri."
};

//Apikey && Logic Ai

global.APIs = {
	btz: 'https://api.betabotz.eu.org' // JAN UBAH
}

global.APIKeys = {
	'https://https://api.betabotz.eu.org': '' // Isi key lu
}

global.logic = 'Kamu adalah BetaBotz Ai';
global.btz = '' //Register di https://api.betabotz.eu.org

//Data
global.grubbot = ''
global.namabot = "BETABOTZ-MD3" // UBAH JADI NAMA LU
global.namaowner = "Lann" // NAMA OWNER
global.footer_text = "© 2024" + namabot // NAMA BOT
global.pp_bot = "https://btch.pages.dev/file/2f8a45cd84b9877695664.jpg" // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6285842647866'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.fakelink = "https://api.betabotz.eu.org" // BEBAS ASAL JAN HAPUS

// NAME STICKER \\
global.packname = 'BETABOTZ'
global.author = 'API'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})