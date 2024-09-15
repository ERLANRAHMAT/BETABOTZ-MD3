require('./settings')
const {
   default: WADefault,
   useMultiFileAuthState,
   DisconnectReason,
   generateForwardMessageContent,
   prepareWAMessageMedia,
   generateWAMessageFromContent,
   generateMessageID,
   downloadContentFromMessage,
   proto,
   makeInMemoryStore,
   jidDecode,
   fetchLatestBaileysVersion,
   makeCacheableSignalKeyStore,
   jidNormalizedUser,
   delay
} = require("@whiskeysockets/baileys")

const pino = require('pino')
const { Boom } = require('@hapi/boom')
const fs = require('fs')
const yargs = require('yargs/yargs')
const axios = require('axios')
const fetch = require('node-fetch')
const FileType = require('file-type')
const PhoneNumber = require('awesome-phonenumber')
const moment = require('moment-timezone')
const chalk = require("chalk");
const usePairingCode = true
const readline = require("readline");
const { smsg, getBuffer, fetchJson } = require('./lib/simple')
const figlet = require("figlet");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const NodeCache = require("node-cache")
const path = require('path')

const sleep = async (ms) => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

const color = (text, color) => {
	return !color ? chalk.green(text) : chalk.keyword(color)(text);
};

const {
	writeExif
} = require('./lib/exif')

const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};

let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let _left = JSON.parse(fs.readFileSync('./database/welcome.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let antilink2 = JSON.parse(fs.readFileSync('./database/antilink2.json'));
let antiwame2 = JSON.parse(fs.readFileSync('./database/antiwame2.json'));

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
	...query,
	...(apikeyqueryname ? {
		[apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name]
		} : {})
		})) : '')
		
async function Botstarted() {
const {
        state,
        saveCreds
} = await useMultiFileAuthState(`./${sessionName}`)
    const { version, isLatest } = await fetchLatestBaileysVersion();
    console.log(`using WA v${version.join(".")}, isLatest: ${isLatest}`);
    const msgRetryCounterCache = new NodeCache() // for retry message, "waiting message"
    console.log(
    color(
    figlet.textSync("BETABOTZ-MD3", {
    	font: "Standard",
    horizontalLayout: "default",
    vertivalLayout: "default",
    whitespaceBreak: false,
    }),
    console.log(color('Wait for bot connected...', 'yellow'))
    )
    );
    
const beta = WADefault({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
version: [2, 3000, 1015901307],
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
getMessage: async key => {
    const messageData = await store.loadMessage(key.remoteJid, key.id);
    return messageData?.message || undefined;
},
      msgRetryCounterCache, // Resolve waiting messages
      defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
    })
    if (usePairingCode && !beta.authState.creds.registered) {
    	if (useMobile) throw new Error('Cannot use pairing code with mobile api')
    let phoneNumber
    if (!!pairingNumber) {
    	phoneNumber = pairingNumber.replace(/[^0-9]/g, '')
    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
    	console.log("Start with your country's WhatsApp code, Example : 62xxx")
    process.exit(0)
    }
    } else {
    	phoneNumber = await question(`Please type your WhatsApp number : `)
    	phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    if (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
    	console.log("Start with your country's WhatsApp code, Example : 62xxx")
    phoneNumber = await question(`Please type your WhatsApp number : `)
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '')
    rl.close()
    }
    }
    console.log(chalk.bgWhite(chalk.blue('Generating code...')))
    console.log(chalk.bgWhite(chalk.red('Please Wait 3 Seconds')))
    setTimeout(async () => {
    	let code = await beta.requestPairingCode(phoneNumber)
    code = code?.match(/.{1,4}/g)?.join("-") || code
    console.log(`Your Pairing Code : `, code)
    }, 3000)
    }
    
    store.bind(beta.ev)
    
    beta.ev.on('messages.upsert', async chatUpdate => {
        //console.log(JSON.stringify(chatUpdate, undefined, 2))
        try {
        mek = chatUpdate.messages[0]
        if (!mek.message) return
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        if (mek.key && mek.key.remoteJid === 'status@broadcast') return
        if (!beta.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
        if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
        m = smsg(beta, mek, store)
        require("./beta")(beta, m, chatUpdate, store, antilink, antiwame, antilink2, antiwame2, sewa, _welcome, _left)
        } catch (err) {
            console.log(err)
        }
    })
    
    beta.ev.on('groups.update', async anu => {
    try {
    for(let x of anu) {
       try {
       ppgc = await beta.profilePictureUrl(x.id, 'image')
       } catch {
       ppgc = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
       }
       let wm_fatih = { url : ppgc }
       if (x.announce == true) {
       beta.sendMessage(x.id, {image: {url: ppgc}, caption: `*「 Group Update Detected 」*\n\nGroup telah ditutup, sekarangg hanya admin yang dapat mengirim pesan !`})
       } else if (x.announce == false) {
       beta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nGroup telah dibuka, sekarangg peserta dapat mengirim pesan !`})
       } else if (x.restrict == true) {
       beta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfo group telah dibatasi, sekarangg hanya admin yang dapat mengedit info group !`})
       } else if (x.restrict == false) {
       beta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nInfogroup telah dibuka, sekarangg peserta dapat mengedit info group !`})
       } else {
       beta.sendMessage(x.id, {image: {url: ppgc}, caption:`*「 Group Update Detected 」*\n\nNama Group telah diganti menjadi *${x.subject}*`})
     }
    }
    } catch (err){
    console.log(err)
    }
    })
    
    store.bind(beta.ev)
    beta.ev.on('call', async (celled) => {
    	if (global.anticall) {
    	console.log(celled)
    for (let kopel of celled) {
    	if (kopel.isGroup == false) {
    	if (kopel.status == "offer") {
    	let nomer = await beta.sendTextWithMentions(kopel.from, `*${beta.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
    beta.sendContact(kopel.from, owner, nomer)
    await sleep(5000)
    beta.updateBlockStatus(kopel.from, "block")
    }
    }
    }
    }
    })
    
    beta.ev.on('group-participants.update', async (anu) => {
        const isWelcome = _welcome.includes(anu.id)
        const isLeft = _left.includes(anu.id)
        try {
            let metadata = await beta.groupMetadata(anu.id)
            let participants = anu.participants
            const groupName = metadata.subject
  		      const groupDesc = metadata.desc
            for (let num of participants) {
                try {
                    ppuser = await beta.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }

                try {
                    ppgroup = await beta.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                }
                const groupDesc = metadata.desc
                if (anu.action == 'add' && (isWelcome || global.welcome)) {
                	console.log(anu)
                if (isSetWelcome(anu.id, set_welcome_db)) {               	
                var get_teks_welcome = await getTextSetWelcome(anu.id, set_welcome_db)
                var replace_pesan = (get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`))
                var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                beta.sendMessage(anu.id, { text: `${full_pesan}`})
                } else {
               beta.sendMessage(anu.id, {text: `Halo Kak @${num.split("@")[0]} Selamat Bergabung Di Group ${metadata.subject},\n\n${metadata.desc}`}, {quoted: m}) 
                }
                } else if (anu.action == 'remove' && (isLeft || global.left)) {
                	console.log(anu)
                  if (isSetLeft(anu.id, set_left_db)) {            	
                        var get_teks_left = await getTextSetLeft(anu.id, set_left_db)
                        var replace_pesan = (get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`))
                        var full_pesan = (replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc))
                      beta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `${full_pesan}` })
                       } else {
const buttonMessage = {
	image: { url: ppuser },
    caption: `Bye Kak @${num.split('@')[0]} 👋
                       	
*"Karna Setiap Ucapan Selamat Datang Akan Selalu Diakhiri Dengan Ucapan Selamat Tinggal"*

Terima Kasih Kak @${num.split("@")[0]} Sampai Bertemu Kembali Di Group ${metadata.subject}`,
    footer: `${namabot} © 2024`,
    mentions: [],
    headerType: 3
}
beta.sendMessage(anu.id, buttonMessage)
                        }
                        } else if (anu.action == 'promote') {
                    beta.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} sekarang menjadi admin grup ${metadata.subject}` })
                } else if (anu.action == 'demote') {
                    beta.sendMessage(anu.id, { text: `@${num.split('@')[0]} bukan admin grup ${metadata.subject} lagi` })
              }
            }
        } catch (err) {
            console.log(err)
        }
    })
	
    // Setting
    beta.decodeJid = (jid) => {
        if (!jid) return jid
        if (/:\d+@/gi.test(jid)) {
            let decode = jidDecode(jid) || {}
            return decode.user && decode.server && decode.user + '@' + decode.server || jid
        } else return jid
    }
    
    beta.ev.on('contacts.update', update => {
        for (let contact of update) {
            let id = beta.decodeJid(contact.id)
            if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
        }
    })

    beta.getName = (jid, withoutContact  = false) => {
        id = beta.decodeJid(jid)
        withoutContact = beta.withoutContact || withoutContact 
        let v
        if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
            v = store.contacts[id] || {}
            if (!(v.name || v.subject)) v = beta.groupMetadata(id) || {}
            resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
        })
        else v = id === '0@s.whatsapp.net' ? {
            id,
            name: 'WhatsApp'
        } : id === beta.decodeJid(beta.user.id) ?
            beta.user :
            (store.contacts[id] || {})
            return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
    }
    
    beta.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await beta.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await beta.getName(i + '@s.whatsapp.net')}\nFN:${await beta.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
	    })
	}
	beta.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
    
    beta.public = true

    beta.serializeM = (m) => smsg(beta, m, store)

    beta.ev.on('connection.update', async (update) => {
        const { connection, lastDisconnect } = update    
        try {
		if (connection === 'close') {
			const shouldReconnect = new Boom(lastDisconnect?.error)?.output?.statusCode !== DisconnectReason.loggedOut
			console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect)
				if(shouldReconnect) {
					console.log('Recconect')
				Botstarted();
			}
		}
        if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
        	console.log(color("Bot Sukses Connect To Server", "red"));
        console.log(color("Developer Number: +6285842647866", "red"));
        console.log(color("Untuk Melihat Tampilan Bot Silahkan Ketik .menu", "yellow"));
        console.log(color("By Lann, Jangan Lupa Beli Apikey Nya!", "yellow"));
        }
        if (update.connection == "open" || update.receivedPendingNotifications == "true") {
         console.log(`Connected to = ` + JSON.stringify(beta.user, null, 2))
         console.log(`\n[ CONNECTED ]\n\n⚠️ WARNING\n\n> DILARANG MENJUAL SCRIPT INI !`)
         }
		} catch (err) {
	  console.log('Error in Connection.update '+err)
	  Botstarted();
	}
})

    beta.ev.on('creds.update', saveCreds)

  beta.sendText = (jid, text, quoted = '', options) => beta.sendMessage(jid, { text: text, ...options }, { quoted, ...options })

beta.downloadMediaMessage = async (message) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
         buffer = Buffer.concat([buffer, chunk])
      }

      return buffer
   }
   
beta.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {

        let quoted = message.msg ? message.msg : message

        let mime = (message.msg || message).mimetype || ''
        let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
        const stream = await downloadContentFromMessage(quoted, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
        }
	let type = await FileType.fromBuffer(buffer)
        trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
        // save to file
        await fs.writeFileSync(trueFileName, buffer)
        return trueFileName
    }
    beta.sendImage = async (jid, path, caption = '', quoted = '', options) => {
    	let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    return await beta.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
    }
    beta.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
    	let types = await beta.getFile(path, true)
    let { mime, ext, res, data, filename } = types
    if (res && res.status !== 200 || file.length <= 65536) {
    	try { throw { json: JSON.parse(file.toString()) } }
    catch (e) { if (e.json) throw e.json }
    }
    let type = '', mimetype = mime, pathFile = filename
    if (options.asDocument) type = 'document'
    if (options.asSticker || /webp/.test(mime)) {
    	let { writeExif } = require('./lib/exif')
    let media = { mimetype: mime, data }
    pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
    await fs.promises.unlink(filename)
    type = 'sticker'
    mimetype = 'image/webp'
    }
    else if (/image/.test(mime)) type = 'image'
    else if (/video/.test(mime)) type = 'video'
    else if (/audio/.test(mime)) type = 'audio'
    else type = 'document'
    await beta.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
    return fs.promises.unlink(pathFile)
    }
    
    beta.sendButton2 = async (jid, text = '', footer = '', buffer, buttons, copy, urls, quoted, options = {}) => {
        let img, video
        if (/^https?:\/\//i.test(buffer)) {
            try {
                // Dapatkan jenis URL MIME
                let response = await fetch(buffer)
                let contentType = response.headers.get('content-type')
                if (/^image\//i.test(contentType)) {
                    img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: beta.waUploadToServer })
                } else if (/^video\//i.test(contentType)) {
                    video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: beta.waUploadToServer })
                } else {
                    console.error("Jenis MIME tidak didukung:", contentType)
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mendapatkan tipe MIME:", error)
            }
        } else {
            try {
                const type = await beta.getFile(buffer)
               if (/^image\//i.test(type.mime)) {
                    img = await prepareWAMessageMedia({ image: { url: buffer } }, { upload: beta.waUploadToServer })
                } else if (/^video\//i.test(type.mime)) {
                    video = await prepareWAMessageMedia({ video: { url: buffer } }, { upload: beta.waUploadToServer })
                }
            } catch (error) {
                console.error("Terjadi kesalahan saat mendapatkan jenis file", error);
            }
        }

        const dynamicButtons = buttons.map(btn => ({
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
                display_text: btn[0],
                id: btn[1]
            }),
        }));

       
        if (copy && (typeof copy === 'string' || typeof copy === 'number')) {
            // Tambahkan tombol salin
            dynamicButtons.push({
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copy',
                    copy_code: copy
                })
            });
        }

        // Tambahkan tombol URL
        if (urls && Array.isArray(urls)) {
            urls.forEach(url => {
                dynamicButtons.push({
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: url[0],
                        url: url[1],
                        merchant_url: url[1]
                    })
                })
            })
        }


        const interactiveMessage = {
            body: { text: text },
            footer: { text: footer },
            header: {
                hasMediaAttachment: true,
                imageMessage: img ? img.imageMessage : null,
                videoMessage: video ? video.videoMessage : null
            },
            nativeFlowMessage: {
                buttons: dynamicButtons,
                messageParamsJson: ''
            }
        };

        beta.relayMessage(jid, {
            viewOnceMessage: {
                message: {
                    interactiveMessage
                }
            }
        }, {})
    }
    
    beta.sendList = async (jid, title, text, buttonText, listSections, quoted, options = {}) => {
        const sections = [...listSections];
        const message = {
            interactiveMessage: {
                header: { title: title } ,
                body: { text: text }, 
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: 'single_select',
                            buttonParamsJson: JSON.stringify({
                                title: buttonText,
                                sections
                            })
                        }
                    ],
                    messageParamsJson: ''
                }
            }
        };
        await beta.relayMessage(jid, { viewOnceMessage: { message } }, {});
    }
    
    beta.getFile = async (PATH, returnAsFilename) => {
      let res, filename
      const data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,` [1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
      if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
      const type = await FileType.fromBuffer(data) || {
         mime: 'application/octet-stream',
         ext: '.bin'
      }
      if (data && returnAsFilename && !filename)(filename = path.join(__dirname, './media/' + new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
      return {
         res,
         filename,
         ...type,
         data,
         deleteFile() {
            return filename && fs.promises.unlink(filename)
         }
     }
     }
     
    beta.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    	let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    	buffer = await writeExifVid(buff, options)
    } else {
    	buffer = await videoToWebp(buff)
    }
    
    await beta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }
    beta.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    	let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
    let buffer
    if (options && (options.packname || options.author)) {
    	buffer = await writeExifImg(buff, options)
    } else {
    	buffer = await imageToWebp(buff)
    }
    
    await beta.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
    return buffer
    }
    
    beta.sendMediaAsSticker = async (jid, path, quoted, options = {}) => {
    	let {
    	ext,
    mime,
    data
    } = await beta.getFile(path)
    let media = {}
    let buffer
    media.data = data
    media.mimetype = mime
    if (options && (options.packname || options.author)) {
    	buffer = await writeExif(media, options)
    } else {
    	buffer = /image/.test(mime) ? await imageToWebp(data) : /video/.test(mime) ? await videoToWebp(data) : ""
    }
    await beta.sendMessage(jid, {
    	sticker: {
    	url: buffer
    },
    ...options
    }, {
    	quoted
    })
    return buffer
    }
    
    beta.sendFakeLink = (jid, text, salam, pushname, quoted) => beta.sendMessage(jid, {
    	text: text,
    contextInfo: {
    	
    forwardingScore: 999999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
    	newsletterName : "BETABOTZ" + " - API",
    	newsletterJid: "120363185476698770@newsletter"
    },
    
    	"externalAdReply": {
    	"title": `Selamat ${salam} ${pushname}`,
    "body": `© ${namaowner}`,
    "previewType": "PHOTO",
    "thumbnailUrl": pp_bot,
    "thumbnail": '',
    "sourceUrl": fakelink
    }
    }
    }, {
    quoted : quoted
    })
    
    beta.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
    	let type = await beta.getFile(path, true)
    let {
    	res,
    data: file,
    filename: pathFile
    } = type
    if (res && res.status !== 200 || file.length <= 65536) {
    	try {
    	throw {
    	json: JSON.parse(file.toString())
    }
    }
    catch (e) {
    	if (e.json) throw e.json
    }
    }
    let opt = {
    	filename
    }
    if (quoted) opt.quoted = quoted
    if (!type) options.asDocument = true
    let mtype = '',
    mimetype = type.mime,
    convert
    if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
    else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
    else if (/video/.test(type.mime)) mtype = 'video'
    else if (/audio/.test(type.mime))(
    convert = await (ptt ? toPTT : toAudio)(file, type.ext),
    file = convert.data,
    pathFile = convert.filename,
    mtype = 'audio',
    mimetype = 'audio/ogg; codecs=opus'
    )
    else mtype = 'document'
    if (options.asDocument) mtype = 'document'
    
    delete options.asSticker
    delete options.asLocation
    delete options.asVideo
    delete options.asDocument
    delete options.asImage
    
    let message = {
    	...options,
    caption,
    ptt,
    [mtype]: {
    	url: pathFile
    },
    mimetype
    }
    let m
    try {
    	m = await beta.sendMessage(jid, message, {
    	...opt,
    ...options
    })
    }
    catch (e) {
    	//console.error(e)
    m = null
    }
    finally {
    	if (!m) m = await beta.sendMessage(jid, {
    	...message,
    [mtype]: file
    }, {
    	...opt,
    ...options
    })
    file = null
    return m
    }
    }
    
    beta.sendImgList = async (jid, buffer, head, body, footer, title, description, json, urls, quoted, copy, options = {}) => {
        	
               const template = { "header": "S_HEAD", "title": "S_TIT", "description": "S_DES", "id": "S_ID" };
               const buttons = [];
               const rop = (target, replacement) => {
                        if (target === false || target === null) {
                            return '';
                        } else {
                            return replacement;
                         }
                      }

           if (Array.isArray(json[0])) {
               json.forEach(item => {
                    const newObj = JSON.parse(JSON.stringify(template));
                          newObj.header = rop(item[0],newObj.header.replace("S_HEAD", item[0]));
                          newObj.title = rop(item[1],newObj.title.replace("S_TIT", item[1]));
                          newObj.description = rop(item[2],newObj.description.replace("S_DES", item[2]));
                          newObj.id = rop(item[3],newObj.id.replace("S_ID", item[3]));
                  buttons.push(newObj);
              });
            } else {
                    const newObj = JSON.parse(JSON.stringify(template));
                          newObj.header = rop(json[0],newObj.header.replace("S_HEAD", json[0]));
                          newObj.title = rop(json[1],newObj.title.replace("S_TIT", json[1]));
                          newObj.description = rop(json[2],newObj.description.replace("S_DES", json[2]));
                          newObj.id = rop(json[3],newObj.id.replace("S_ID", json[3]));
                  buttons.push(newObj);
               }
                const messageButtons = {"name": "single_select","buttonParamsJson": JSON.stringify({"title": title, "sections": [{ "title": description, "rows": buttons }] })}
  
				let msg = generateWAMessageFromContent(jid, {
				    viewOnceMessage: {
				        message: {
				            "messageContextInfo": {
				                "deviceListMetadata": {},
				                "deviceListMetadataVersion": 2
				            },
				            interactiveMessage: proto.Message.InteractiveMessage.create({
				                body: proto.Message.InteractiveMessage.Body.create({
				                    text: body
				                }),
				                footer: proto.Message.InteractiveMessage.Footer.create({
				                    text: footer
				                }),
				                header: proto.Message.InteractiveMessage.Header.create({
				                    ...(await prepareWAMessageMedia({ image: { url: buffer } }, { upload: beta.waUploadToServer })),
				                    title: head,
				                    subtitle: head,
				                    hasMediaAttachment: false
				                }),
				                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
				                    buttons: [messageButtons]
				                })
				            })
				          }
				        }
				    }, {})
				
				const dynamicButtons = buttons.map(btn => ({
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
                display_text: btn[0],
                id: btn[1]
            }),
        }));

       
        if (copy && (typeof copy === 'string' || typeof copy === 'number')) {
            // Tambahkan tombol salin
            dynamicButtons.push({
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copy',
                    copy_code: copy
                })
            });
        }

        // Tambahkan tombol URL
        if (urls && Array.isArray(urls)) {
            urls.forEach(url => {
                dynamicButtons.push({
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: url[0],
                        url: url[1],
                        merchant_url: url[1]
                    })
                })
            })
        }
				return beta.relayMessage(msg.key.remoteJid, msg.message, {
				  messageId: msg.key.id
             })
          }
          
          beta.sendButton = async (jid, text = '', footer = '', buffer, buttons, copy, urls, quoted, options = {}) => {
    	
        const dynamicButtons = buttons.map(btn => ({
            name: 'quick_reply',
            buttonParamsJson: JSON.stringify({
                display_text: btn[0],
                id: btn[1]
            }),
        }));

       
        if (copy && (typeof copy === 'string' || typeof copy === 'number')) {
            // Tambahkan tombol salin
            dynamicButtons.push({
                name: 'cta_copy',
                buttonParamsJson: JSON.stringify({
                    display_text: 'Copy',
                    copy_code: copy
                })
            });
        }

        // Tambahkan tombol URL
        if (urls && Array.isArray(urls)) {
            urls.forEach(url => {
                dynamicButtons.push({
                    name: 'cta_url',
                    buttonParamsJson: JSON.stringify({
                        display_text: url[0],
                        url: url[1],
                        merchant_url: url[1]
                    })
                })
            })
        }


        const interactiveMessage = {
            body: { text: text },
            footer: { text: footer },
            header: {
                hasMediaAttachment: false,
            },
            nativeFlowMessage: {
                buttons: dynamicButtons,
                messageParamsJson: ''
            }
        };

        beta.relayMessage(jid, {
            viewOnceMessage: {
                message: {
                    interactiveMessage
                }
            }
        }, {})
    }
    
    beta.copyNForward = async (jid, message, forceForward = false, options = {}) => {
  let vtype
	if (options.readViewOnce) {
		message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
		vtype = Object.keys(message.message.viewOnceMessage.message)[0]
		delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
		delete message.message.viewOnceMessage.message[vtype].viewOnce
		message.message = {
			...message.message.viewOnceMessage.message
	}}

	let mtype = Object.keys(message.message)[0]
	let content = await generateForwardMessageContent(message, forceForward)
	let ctype = Object.keys(content)[0]
	let context = {}
	if (mtype != "conversation") context = message.message[mtype].contextInfo
	content[ctype].contextInfo = {
				...context,
				...content[ctype].contextInfo
	}
	const waMessage = await generateWAMessageFromContent(jid, content, options ? {
		...content[ctype],
		...options,
		...(options.contextInfo ? {
		contextInfo: {
				...content[ctype].contextInfo,
				...options.contextInfo
				}
		} : {})
	} : {})
	await beta.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
	return waMessage
}
    
beta.sendTextWithMentions = async (jid, text, quoted, options = {}) => beta.sendMessage(jid, {
      text: text,
      mentions: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net'),
      ...options
   }, {
      quoted
   })

    return beta
}

Botstarted()

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