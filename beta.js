/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/
//============ [ Module ] ============\\
require('./settings')
require('./menu/ui-menu')
require('./menu/list-menu')

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

const fs = require('fs');
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const fetch = require('node-fetch')

const {
	makeid
} = require('./lib/myfunc')

const {
getGroupAdmins,
    pickRandom,
    hitungmundur,
    msToDate,
    isUrl,
    sleep,
    getRandom,
    runtime,
    jsonformat
} = require('./lib/bot/botFunc.js')

const dateAndtime = require('./lib/bot/dateAndtime.js');    
let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
const afk = require("./lib/afk");
const { smsg, fetchJson, getBuffer } = require('./lib/simple')
const uploadImage = require('./lib/uploadImage');
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))

//============ [ Function ] ============\\

module.exports = beta = async (beta, m, chatUpdate, store, antilink, antiwame, antilink2, antiwame2, sewa, _welcome, _left) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') && m.message.buttonsResponseMessage.selectedButtonId ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') && m.message.listResponseMessage.singleSelectReply.selectedRowId ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'interactiveResponseMessage') && JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi.test(body) ? body.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢+âœ“_=|~!?@#$%^&.Â©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await beta.decodeJid(beta.user.id)
        const isCreator = ["6283136394680@s.whatsapp.net",botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await beta.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const from = mek.key.remoteJid
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
      	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
      	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiLink = antilink.includes(m.chat) ? true : false
        const isAntiWame = antiwame.includes(m.chat) ? true : false  
        const isAntiLink2 = antilink2.includes(m.chat) ? true : false
        const isAntiWame2 = antiwame2.includes(m.chat) ? true : false  
        const sender = m.sender;
        const isWelcome = _welcome.includes(m.chat)
        const isLeft = _left.includes(m.chat)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const Antinsfw = ntnsfw.includes(m.chat) ? true : false  
        
        const reply = async (text) =>{
	    return await beta.sendFakeLink(m.chat, text, salam, pushname, m)
        }
        
        function parseMention(text = '') {
        	return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }        
        if (m.message) {
        	console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', m.chat))
       }	                
        //autotyper all
        if (global.autoTyping) { if (m.chat) { beta.sendPresenceUpdate('composing', m.chat) }
        }
        
        try {
        	ppuser = await beta.profilePictureUrl(num, 'image')
        } catch {
        	ppuser = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
        }
        
        betappuser = await getBuffer(ppuser)
        
        if (command) {
        if (!m.isGroup && !isCreator && global.onlygrub) {
       	return await beta.sendContact(m.chat, global.owner, m)
          }
        } 
        
      if (isAntiLink) {
        if (budy.match(`chat.whatsapp.com`)) {
        reply(`*「 ANTI LINK 」*\n\nLink grup detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await beta.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return reply(global.message.isMyLink)
        if (isAdmins) return reply(global.message.isAdmin)
        if (isCreator) return reply(global.message.isOwn2)
        if (m.key.fromMe) return reply(global.message.isMe)
        await beta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        beta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiLink2) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        let gclink = (`https://chat.whatsapp.com/`+await beta.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return //reply(`Upsss... gak jadi, untung link gc sendiri`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        await beta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })
        }
        }
      if (isAntiWame) {
        if (budy.match(`wa.me/`)) {
        reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(global.message.botNotAdmin)
        if (isAdmins) return reply(global.message.isAdmin)
        if (isCreator) return reply(global.message.isOwn2)
        if (m.key.fromMe) return reply(global.message.isMe)
        await beta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        beta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
      if (isAntiWame2) {
        if (budy.match(`wa.me/`)) {
        if (!isBotAdmins) return //reply(`Upsss... gajadi, bot bukan admin`)
        if (isAdmins) return //reply(`Upsss... gak jadi, kasian adminnya klo di kick`)
        if (isCreator) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        if (m.key.fromMe) return //reply(`Upsss... gak jadi, kasian owner ku klo di kick`)
        await beta.sendMessage(m.chat, {
               delete: {
                  remoteJid: m.chat,

                  fromMe: false,
                  id: m.key.id,
                  participant: m.key.participant
               }
            })        
        }
        }
      if (isAntiWame) {
        if (budy.includes((`Wa.me/`) || (`Wa.me/`))) {
        reply(`*「 ANTI WA ME 」*\n\nWa Me detected, maaf kamu akan di kick !`)
        if (!isBotAdmins) return reply(global.message.botNotAdmin)
        if (isAdmins) return reply(global.message.isAdmin)
        if (isCreator) return reply(global.message.isOwn)
        if (m.key.fromMe) return reply(global.message.isMe)
        beta.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        			
         // Auto Read & Presence Online
		if (!m.key.fromMe && global.autoread){
        const readkey = {
                remoteJid: m.chat,
                id: m.key.id, 
                participant: m.isGroup ? m.key.participant : undefined 
            }            
            await beta.readMessages([readkey]);
          }            
        beta.sendPresenceUpdate('available', m.chat)

        if (m.isGroup && !m.key.fromMe) {
        let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
        for (let ment of mentionUser) {
        if (afk.checkAfkUser(ment, _afk)) {
        let getId2 = afk.getAfkId(ment, _afk)
        let getReason2 = afk.getAfkReason(getId2, _afk)
        let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
        let heheh2 = ms(getTimee)
        reply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}\n*Sejak :* ${heheh2.hours} jam, ${heheh2.minutes} menit, ${heheh2.seconds} detik yg lalu\n`)
        }
        }
        if (afk.checkAfkUser(m.sender, _afk)) {
        let getId = afk.getAfkId(m.sender, _afk)
        let getReason = afk.getAfkReason(getId, _afk)
        let getTime = Date.now() - afk.getAfkTime(getId, _afk)
        let heheh = ms(getTime)
        _afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
        fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
        beta.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk\n\n*Reason :* ${getReason}\n*Selama :* ${heheh.hours} jam ${heheh.minutes} menit ${heheh.seconds} detik\n`, m)
        }
        }

    async function loading() {
	reply(`Mohon Tunggu Perintah ${prefix + command} Sedang Di Proses`)
    }
    
    //============ [ Feature ] ============\\       
switch (command) {
    /*
    Non Api Feature 
    */
    //Group Menu
    case 'antiwame':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (args[0] === "on") {
                if (isAntiWame) return reply(`Udah aktif`)
                antiwame.push(m.chat)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Activate Antiwame In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame) return reply(`Udah nonaktif`)
                let anu = antiwame.indexOf(m.chat)
                antiwame.splice(anu, 1)
                fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame, null, 2))
                reply('Successfully Disabling Antiwame In This Group')
            } else {
                beta.sendMessage(m.chat, {
                    text: `Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`
                }, {
                    quoted: m
                })
            }
        }
        break
    case 'antilink':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (args[0] === "on") {
                if (isAntiLink) return reply(`Udah aktif`)
                antilink.push(m.chat)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Activate Antilink In This Group')
            } else if (args[0] === "off") {
                if (!isAntiLink) return reply(`Udah nonaktif`)
                let anu = antilink.indexOf(m.chat)
                antilink.splice(anu, 1)
                fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink, null, 2))
                reply('Successfully Disabling Antilink In This Group')
            } else {
                beta.sendMessage(m.chat, {
                    text: `Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`
                }, {
                    quoted: m
                })
            }

        }
        break
    case 'h':
    case 'hidetag':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            let tek = m.quoted ? quoted.text : (text ? text : "")
            beta.sendMessage(m.chat, {
                text: tek,
                mentions: participants.map(a => a.id)
            }, {
                quoted: m // BIAR SUPPORT IP BANG 😂
            })
        }
        break    
    case 'kik':
    case 'kick':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (!text) return reply('Tag/Kirim Nomor yang akan di kick!')
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await beta.groupParticipantsUpdate(m.chat, [users], 'remove')
                .then((res) => reply(jsonformat()))
                .
            catch ((err) => reply(jsonformat)())
        }
        break
    case 'add':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if(!text) return reply('Mana Nomornya?')
            let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await beta.groupParticipantsUpdate(m.chat, [users], 'add')
                .then((res) => reply(jsonformat(res)))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
    case 'promote':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await beta.groupParticipantsUpdate(m.chat, [users], 'promote')
                .then((res) => reply(jsonformat(res)))
                .
            catch ((err) => reply(jsonformat(err)))
        }
    case 'demote':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
            await beta.groupParticipantsUpdate(m.chat, [users], 'demote')
                .then((res) => reply(jsonformat(res)))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
    
    case 'linkgroup':
    case 'linkgc':
    case 'gclink':
    case 'grouplink':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            beta.sendMessage(m.chat, {
                text: "Sedang Di Proses"
            }, {
                quoted: m
            })
            let response = await beta.groupInviteCode(m.chat)
            beta.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, {
                detectLink: true
            })
        }
        break
    case 'revoke':
    case 'resetlink':
    case 'resetlinkgrup':
    case 'resetlinkgroup':
    case 'resetlinkgc':
        {
            if (!m.isGroup) throw reply(`Fitur Ini Khusus Group`)
            if (!isBotAdmins) throw reply(`Bot Bukan Admin`)
            if (!isAdmins && !isCreator) return reply(`Fitur Ini Khusus Admin !`)
            beta.sendMessage(m.chat, {
                text: "Sedang Di Proses"
            }, {
                quoted: m
            })
            beta.groupRevokeInvite(m.chat)
            reply(`Done Reset Link Gc Nya Kak`)
        }
        break
    
    case 'setnamegc':
    case 'setnamagc':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (!text) throw 'Text Nya ?'
            await beta.groupUpdateSubject(m.chat, text)
                .then((res) => reply(mess.success))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
    case 'setdesc':
    case 'setdesk':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (!text) throw 'Text Nya ?'
            await beta.groupUpdateDescription(m.chat, text)
                .then((res) => reply(mess.success))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
    case 'antiwame2':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (args[0] === "on") {
                if (isAntiWame2) return reply(`Udah aktif`)
                antiwame2.push(m.chat)
                fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                reply('Successfully Activate antiwame2 In This Group')
            } else if (args[0] === "off") {
                if (!isAntiWame2) return reply(`Udah nonaktif`)
                let anu = antiwame2.indexOf(m.chat)
                antiwame2.splice(anu, 1)
                fs.writeFileSync('./database/antiwame2.json', JSON.stringify(antiwame2, null, 2))
                reply('Successfully Disabling antiwame2 In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
    case 'antilink2':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (args[0] === "on") {
                if (isAntiLink2) return reply(`Udah aktif`)
                antilink2.push(m.chat)
                fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                reply('Successfully Activate antilink2 In This Group')
            } else if (args[0] === "off") {
                if (!isAntiLink2) return reply(`Udah nonaktif`)
                let anu = antilink2.indexOf(m.chat)
                antilink2.splice(anu, 1)
                fs.writeFileSync('./database/antilink2.json', JSON.stringify(antilink2, null, 2))
                reply('Successfully Disabling antilink2 In This Group')
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
        case 'sendlinkgc':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (!args[0]) return reply(`Penggunaan ${prefix+command} nomor\nContoh ${prefix+command} 6283136394680`)
            bnnd = text.split("|")[0] + '@s.whatsapp.net'
            let response = await beta.groupInviteCode(from)
            beta.sendText(bnnd, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
                detectLink: true
            })
            beta.sendMessage(m.chat, {
                text: "Sukses Sendlinkgc Ke Nomor Itu"
            }, {
                quoted: m
            })
        }
        break
    case 'tagall':
        {
        if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            let teks = `╚» Tag All «╝ 
	
            🌿 *Message : ${q ? q : 'empty'}*\n\n`
            for (let mem of participants) {
                teks += `@${mem.id.split('@')[0]}\n`
            }
            beta.sendMessage(m.chat, {
                text: teks,
                mentions: participants.map(a => a.id)
            }, {
                quoted: m
            })
        }
        break
    case 'group': case 'grup':
        {
            if (!m.isGroup) return reply(global.message.isGroup)
            if (!isAdmins) return reply(global.message.isAdmin)
            if (!isBotAdmins) return reply(global.message.botNotAdmin)
            if (args[0] === 'close') {
                await beta.groupSettingUpdate(m.chat, 'announcement')
                    .then((res) => m.reply(`*Successfully Closed The Group*`))
                    .
                catch ((err) => m.reply(jsonformat(err)))
            } else if (args[0] === 'open') {
                await beta.groupSettingUpdate(m.chat, 'not_announcement')
                    .then((res) => m.reply(`*Successfully Opened The Group*`))
                    .
                catch ((err) => m.reply(jsonformat(err)))
            } else {
                reply(`Kirim perintah ${prefix + command} open/close\n\nContoh: ${prefix + command} open`)
            }
        }
        break
        case 'nsfw': {
                if (!isCreator) return reply('Fitur Ini Khusus Owner !')
                if (!m.isGroup) return reply(global.message.isGroup)
                if (!isBotAdmins) return reply(global.message.botNotAdmin)
                if (args[0] === "on") {
                    if (Antinsfw) return reply('Already activated')
                    ntnsfw.push(from)
                    fs.writeFileSync('./database/NSFW.json', JSON.stringify(ntnsfw))
                    reply('Success in turning on NSFW in this group')
                    var groupe = await beta.groupMetadata(from)
                    var members = groupe['participants']
                    var mems = []
                    members.map(async adm => {
                        mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
                    })
                } else if (args[0] === "off") {
                    if (!Antinsfw) return reply('Already deactivated')
                    let off = ntnsfw.indexOf(from)
                    ntnsfw.splice(off, 1)
                    fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
                    reply('Success in turning off NSFW in this group')
                } else {
                    reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
                }
            }
                break
                
        //Info Menu
    case 'groupbot':
    case 'grubbot':
    case 'grupbot':
        {
            reply(grubbot)
        }
        break
        case 'sc':
        case 'script':
        case 'scbot':
        {
        let capt;
            capt = `乂 *S C R I P T  B O T*\n\n`;
            capt += `◦ *Source Code* : https://github.com/ERLANRAHMAT/BETABOTZ-MD3\n`;
            capt += `◦ *Source Api* : https://api.betabotz.eu.org\n`;
            capt += `◦ *Created At* : 17 June 2024\n`;
           capt += `\n`;      
        
        reply(capt);
        }
        break 
    case 'runtime':
    {
        reply(`Runtime : ${runtime(process.uptime())}`)
        }
        break
        case 'credits':
        case 'tqto':
    case 'thanksto':
        function _0x47f6(_0x19f817,_0x5c1671){const _0x527933=_0x390b();return _0x47f6=function(_0x37c948,_0x3a767f){_0x37c948=_0x37c948-(0x65*-0x59+-0x104d+-0xe*-0x3b7);let _0x38f358=_0x527933[_0x37c948];return _0x38f358;},_0x47f6(_0x19f817,_0x5c1671);}(function(_0x1ed1e7,_0x316954){const _0x49d6e3=_0x1ed1e7();function _0x20fff9(_0x33719f,_0x310eca,_0x714a12,_0x51fb3b,_0x43f0d3){return _0x47f6(_0x43f0d3-0x22c,_0x51fb3b);}function _0x2d10e9(_0x2378cd,_0x1a93da,_0xdc9e1a,_0x1c4837,_0x526372){return _0x47f6(_0x526372-0x3,_0x1a93da);}function _0x41e475(_0x128433,_0x56f888,_0x735af2,_0x3a7fe1,_0x4d2376){return _0x47f6(_0x4d2376- -0x230,_0x3a7fe1);}function _0x33e257(_0x69d442,_0x482bda,_0x80935b,_0x2b335c,_0x4ac3ec){return _0x47f6(_0x69d442-0x280,_0x80935b);}function _0x1796a3(_0x401d9a,_0x3fb337,_0x9e3597,_0x2f6573,_0x40baee){return _0x47f6(_0x2f6573- -0x2de,_0x401d9a);}while(!![]){try{const _0x2a83d7=parseInt(_0x41e475(-0x18e,-0x187,-0x18f,-0x17f,-0x186))/(-0x52*0x35+-0xb*0x243+-0x1*-0x29dc)+-parseInt(_0x41e475(-0x179,-0x17b,-0x17c,-0x187,-0x183))/(0x515*0x2+-0x16a6+-0xc7e*-0x1)*(-parseInt(_0x41e475(-0x19e,-0x1a1,-0x19b,-0x18f,-0x196))/(0x5b3*-0x2+-0x4f3+0x105c))+parseInt(_0x41e475(-0x177,-0x17a,-0x17f,-0x187,-0x182))/(-0x35*0x3+-0x14eb+0x158e)+-parseInt(_0x20fff9(0x2cd,0x2be,0x2ba,0x2ba,0x2c5))/(-0x1*-0x1abf+-0x2*-0x4e5+-0x1*0x2484)+-parseInt(_0x20fff9(0x2e1,0x2d1,0x2cf,0x2cd,0x2d8))/(0x1*-0x78+0x2002+-0x1f84)*(-parseInt(_0x41e475(-0x18f,-0x18c,-0x187,-0x18c,-0x192))/(0x1*-0x1d00+0x2092*-0x1+0x3d99))+-parseInt(_0x2d10e9(0xab,0xb3,0xaf,0xa9,0xaa))/(-0x1*-0x21f3+-0x1d2*-0xd+-0x1*0x3995)*(-parseInt(_0x1796a3(-0x23b,-0x23a,-0x240,-0x235,-0x231))/(-0x6b4+-0x1*0x128c+0x1949))+-parseInt(_0x1796a3(-0x241,-0x245,-0x242,-0x241,-0x24a))/(-0x673+-0xf89*-0x2+-0x1895);if(_0x2a83d7===_0x316954)break;else _0x49d6e3['push'](_0x49d6e3['shift']());}catch(_0x5b9c75){_0x49d6e3['push'](_0x49d6e3['shift']());}}}(_0x390b,-0x1*-0xccd1+0x5313e+-0x10*0x2cf8));function _0x4ff38d(_0x4b9d16,_0x45596e,_0x5c6819,_0x2e75b8,_0x18ce08){return _0x47f6(_0x4b9d16-0x3c4,_0x2e75b8);}function _0x390b(){const _0x3057b7=['◦\x20*ER','\x20T\x20O*','◦\x20*JE','2056iALQWd','LAN\x20R','4707NqPJli','355954DIJdIp','TABOT','6LMokQe','842JzIDua','1309968rLapnP','乂\x20*T\x20','1630505GuTijN','813ZVgyej','\x20K\x20S\x20','AHMAT','5397770LIPBNV','997199czRhNr','R\x20-\x20O','FC*\x0a','H\x20A\x20N','\x20/\x20BE','Z*\x0a'];_0x390b=function(){return _0x3057b7;};return _0x390b();}function _0x333259(_0x221ce9,_0x366ec0,_0x456ce9,_0x12f6af,_0xeb3b75){return _0x47f6(_0x12f6af- -0x1f2,_0x221ce9);}function _0x9b745b(_0x382cbd,_0x15ea74,_0x40d4ff,_0x187407,_0x2bd869){return _0x47f6(_0x382cbd-0x31,_0x40d4ff);}function _0x479729(_0x189495,_0x3c33b0,_0xfea9fb,_0x128bd5,_0x57e9da){return _0x47f6(_0x128bd5- -0x28,_0x3c33b0);}function _0x1c525d(_0x98790a,_0x24f679,_0x15c7e9,_0x37d9ad,_0x24752e){return _0x47f6(_0x24f679- -0x383,_0x98790a);}{let capt;capt=_0x479729(0x6d,0x71,0x74,0x70,0x77)+_0x479729(0x6d,0x73,0x75,0x79,0x6f)+_0x4ff38d(0x45f,0x461,0x466,0x459,0x46a)+_0x479729(0x72,0x73,0x74,0x7d,0x88)+'\x0a\x0a',capt+=_0x333259(-0x153,-0x14a,-0x156,-0x14e,-0x156)+_0x1c525d(-0x2df,-0x2db,-0x2e0,-0x2e5,-0x2e0)+_0x333259(-0x161,-0x153,-0x14b,-0x156,-0x14c)+_0x1c525d(-0x2df,-0x2e1,-0x2e0,-0x2df,-0x2eb)+_0x4ff38d(0x46f,0x467,0x474,0x46a,0x47b)+_0x1c525d(-0x2eb,-0x2e0,-0x2d9,-0x2ea,-0x2eb),capt+=_0x333259(-0x143,-0x148,-0x143,-0x14c,-0x141)+_0x479729(0x81,0x71,0x81,0x77,0x77)+_0x333259(-0x14e,-0x157,-0x14a,-0x152,-0x157),capt+='\x0a',reply(capt);}
        break    
        case 'owner':
       case 'creator':
        {
            beta.sendContact(m.chat, global.owner, m)
        }
        break
     // Owner Menu
     case 'join':
        {
            if (!isCreator) return reply(global.message.isOwn)
            if (!text) return reply(`Masukan Link Group !`)
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(`Link Eror !`)
            beta.sendMessage(m.chat, {
                text: "Sedang Di Proses"
            }, {
                quoted: m
            })
            let result = args[0].split('https://chat.whatsapp.com/')[1]
            await beta.groupAcceptInvite(result)
                .then((res) => reply(jsonformat(res)))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
     case 'delete':
    case 'del':
        {
            if (!m.quoted) throw false
            let {
                chat, fromMe, id, isBaileys
            } = m.quoted
            if (!isBaileys) return 'Pesan Itu Bukan Di kirim Oleh Bot'
            beta.sendMessage(m.chat, {
                delete: {
                    remoteJid: m.chat,
                    fromMe: true,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
            })
        }
        break
    case 'out':
        {
            if (!m.isGroup) throw reply(global.message.isGroup)
            if (!isCreator) return reply(global.message.isOwn)
            await beta.groupLeave(m.chat)
                .then((res) => reply(jsonformat(res)))
                .
            catch ((err) => reply(jsonformat(err)))
        }
        break
    case 'public':
        {
            if (!isCreator) return (global.message.isOwn)
            beta.public = true
            reply('*Sukses Ganti Bot Ke Mode Public*')
        }
        break
    case 'self':
        {
            if (!isCreator) return (global.message.isOwn)
            beta.public = false
            reply('*Sukses Ganti Bot Ke mode Self, Jika Mau Ganti Bot  Ke Mode Public Silahkan Ke Nomor Bot Ketik .public*')
        }
        break
        case 'autoread': {
                if (!isCreator) return (global.message.isOwn)
                if (args[0] === "on") {
                    if (global.autoread === true) return reply("Udh on")
                    global.autoread = true
                    reply("Autoread berhasil diaktifkan")
                } else if (args[0] === "off") {
                    if (global.autoread === false) return reply("Udh off")
                    global.autoread = false
                    reply("Autoread berhasil dinonaktifkan")
                } else {
                    reply(`${prefix + command} on -- _mengaktifkan_\n${prefix + command} off -- _Menonaktifkan_`)
                }
            }
                break
    case 'anticall':
        {
            if (!m.key.fromMe && !isCreator) return reply(global.message.isOwn)
            if (args[0] === "on") {
                if (global.anticall === true) return reply(`Sudah Di Aktifkan Sebelumnya`)
                global.anticall = true
                reply(`Berhasil Mengaktifkan Anticall`)
            } else if (args[0] === "off") {
                if (global.anticall === false) return reply(`Sudah Di Nonaktifkan Sebelumnya`)
                global.anticall = false
                reply(`Sukses Nonaktifkan Anticall`)
            } else {
                reply(`Kirim perintah ${prefix + command} on/off\n\nContoh: ${prefix + command} on`)
            }
        }
        break
        /*
        Feature From Api
        */
        
        //Ai
        case 'ai':
        case 'openai':
        case 'chatgpt':
        {
        if(!text) return reply('Mau Nanya Apa Sayang?');                
        try {
        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${btz}`);
        reply(aii.message);
        } catch ( err ) {
        console.error(err);
        reply(message.error);
        }
        }
        break
        
        case 'ai':
        case 'openai':
        case 'chatgpt':
        {
        if(!text) return reply('Mau Nanya Apa Sayang?');                
        try {
        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${btz}`);
        reply(aii.message);
        } catch ( err ) {
        console.error(err);
        reply(message.error);
        }
        }
        break
        
        case 'ailogic':
        case 'openailogic':
        case 'chatgptlogic':
        {
        if(!text) return reply('Mau Nanya Apa Sayang?');                
        try {
        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${btz}`);
        reply(aii.message);
        } catch ( err ) {
        console.error(err);
        reply(message.error);
        }
        }
        break
        
        case 'aiimg':
        case 'diff':
        case 'txt2img':
        {
        if(!text) return reply('Mau Buat Gambar Apa Sayang?');                
        try {
        let aii = await getBuffer(`https://api.betabotz.eu.org/api/search/openai-image?text=${text}&logic=${logic}&apikey=${btz}`);
        beta.sendMessage(m.chat, { image : aii }, { quoted: m });;
        } catch ( err ) {
        console.error(err);
        reply(message.error);
        }
        }
        break
        
        case 'bard':
        case 'bardai':
        case 'gemini':
        {
        if(!text) return reply('Mau Nanya Apa Sayang?');                
        try {
        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/bard-ai?text=${text}&apikey=${btz}`);
        reply(aii.message);
        } catch ( err ) {
        console.error(err);
        reply(message.error);
        }
        }
        break
         
      case 'bardimg':
      case 'geminiimg':
      {
       let q = m.quoted ? m.quoted : m
      let mime = (q.msg || q).mimetype || q.mediaType || '' 
      if (/image/g.test(mime) && !/webp/g.test(mime)) {
        let buffer = await q.download()
        await loading();
        try {
          let media = await uploadImage(buffer)
          let json = await fetchJson(`https://api.betabotz.eu.org/api/search/bard-img?url=${media}&text=${text}&apikey=${btz}`);  
         reply(json.result);
        } catch (err) {
          reply(message.error);
        }
      } else {
        reply(`Reply image with command ${prefix + command} pertanyaan`);
      }
    }
    break
        
        // Anime
        case 'umaru':
        case 'kaneki':
        case 'megumin':
        case 'yotsuba':
        case 'shinomiya':
        case 'yumeko':
        case 'tejina':
        case 'chiho':
        case 'toukachan':
        case 'akira':
        case 'itori':
        case 'kurumi':
        case 'sagiri':
        case 'eba':
        case 'deidara':
        case 'itachi':
        case 'madara':
        case 'asuna':
        case 'ayuzawa':
        case 'chitoge':
        case 'emilia':
        case 'hestia':
        case 'inori':
        case 'ana':
        case 'miku':
        case 'kaori':
        case 'shizuka':
        case 'doraemon':
        case 'kaga':
        case 'kotori':
        case 'mikasa':
        case 'akiyama':
        case 'gremory':
        case 'isuzu':
        case 'shina':
        case 'kagura':
        case 'shinka':
        case 'tsunade':
        case 'sasuke':
        case 'sakura':
        case 'rize':
        case 'nezuko':
        case 'boruto':
        case 'naruto':
        case 'erza':
        case 'minato':
        case 'elaina':
        case 'yuri':
        case 'shota':
        case 'waifu':
        case 'loli':
        case 'hinata':
        {
        loading();
        try {
        let url = `https://api.betabotz.eu.org/api/anime/${command}?apikey=${btz}`;
        let response = await axios.get(url, { responseType: 'arraybuffer' });
        beta.sendMessage(m.chat, { image : response.data }, { quoted: m });
        } catch (err) {
        reply(global.message.error);
        }
        }
        break
        
        //Asupan
        case 'asupan':
        {
         loading();
        const asupan = [
    `https://api.betabotz.eu.org/api/asupan/rikagusriani?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/santuy?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/ukhty?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/bocil?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/gheayubi?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/natajadeh?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/euni?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/asupan/douyin?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/api/asupan/cecan?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/api/asupan/hijaber?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/api/asupan/asupan?apikey=${btz}`,
    `https://api.betabotz.eu.org/api/api/asupan/anony?apikey=${btz}`   
      ]      
      try {
        const url = pickRandom(asupan);
        let response = await axios.get(url, { responseType: 'arraybuffer' });        
        beta.sendMessage(m.chat, { video : response.data }, { quoted: m });       
      } catch (e) {
        console.log(e);
        reply(global.message.error);
      }
        }
        break
        
        //Cecan
        case 'china':
        case 'vietnam':
        case 'thailand':
        case 'indonesia':
        case 'korea':
        case 'japan':
        case 'malaysia':
        case 'justinaxie':
        case 'jeni':
        case 'jiso':
        case 'ryujin':
        case 'rose':
        case 'hijaber':
        {
        loading();
        try {
        let url = `https://api.betabotz.eu.org/api/cecan/${command}?apikey=${btz}`;
        let response = await axios.get(url, { responseType: 'arraybuffer' });
        beta.sendMessage(m.chat, { image : response.data }, { quoted: m });     
        } catch (err) {
        reply(global.message.error);
        }
        }
        break
        
        // Download
        case 'capcut':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        try {
        let api = await fetch(`https://api.betabotz.eu.org/api/download/capcut?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        title,
        description,
        digunakan,
        video_ori,
        cover
        } = betaku.result
        
        beta.sendMessage(m.chat, {
        video: {
        	url: video_ori
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        } catch (e) {
        	console.log(e)
        reply(message.error);
        }
        }
        break
        case 'pindl':
        case 'pinterestdl':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/pinterest?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        media_type,
        pin_url,
        image,
        title
        } = betaku.result.data
        
        beta.sendMessage(m.chat, {
        image: {
        	url: image
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'threads':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/threads?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        try {
        	for (let i of betaku.result.video_urls) {
        	beta.sendFile(m.chat, i.download_url, null, 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
        }
        } catch (e) {
        	console.log(e)
        }
        try {
        	for (let i of betaku.result.image_urls) {
        	beta.sendFile(m.chat, i, null, 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
        }
        } catch (e) {
        	console.log(e)
        }
        }
        break
        case 'douyin':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/douyin?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        for (let i of betaku.result.video) {
        	beta.sendMessage(m.chat, {
        video: {
        	url: i
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted : m
        })
        }
        beta.sendMessage(m.chat, {
        audio: {
        	url: betaku.result.audio
        },
        caption: null
        }, {
        	quoted: m
        })
        }
        break
        case 'douyinslide':
        case 'douyinimg':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/douyin-slide?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        for (let i of betaku.result.images) {
        beta.sendMessage(m.chat, {
        image: {
        	url: i
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        }
        break 
        case 'gdrive':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/gdrive?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        data,
        fileName,
        fileSize,
        mimetype
        } = betaku.result
        
        beta.sendMessage(m.chat, {
        document: { 
        	url: data
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org',
        fileName: fileName,
        mimetype: mimetype
        }, {
        	quoted: m
        })
        }
        break
        case 'spotify':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/spotify?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        thumbnail,
        title,
        href,
        name,
        duration,
        preview,
        url
        } = betaku.result.data
        
        beta.sendMessage(m.chat, {
        image: {
        	url: thumbnail
        },
        caption: `*[ SPOTIFY DL ]*\n\n> TITLE : ${title}\n> NAME : ${name}\n> DURASI : ${duration}\n> URL : ${url}`
        }, {
        	quoted: m
        })
        
        beta.sendMessage(m.chat, {
        audio: {
        	url: url
        },
        caption: null
        }, {
        	quoted: m
        })
        }
        break
        case 'ytmp4':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/ytmp4?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        title,
        desc,
        thum,
        view,
        channel,
        uploadDate
        } = betaku.result
        
        const {
        result,
        size,
        quality
        } = betaku.result.mp4
        
        beta.sendMessage(m.chat, {
        video: {
        	url: result
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'ytmp3':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/ytmp4?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        title,
        desc,
        thum,
        view,
        channel,
        uploadDate
        } = betaku.result
        
        const {
        result,
        size
        } = betaku.result.mp3
        
        beta.sendMessage(m.chat, {
        audio: {
        	url: result
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'fbvid':
        case 'fbvideo':
        case 'facebook':
        case 'fb':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/fbdown?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        title,
        thumbnail,
        Normal_video,
        HD
        } = betaku.result
        
        beta.sendMessage(m.chat, {
        video: {
        	url: Normal_video
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'tt':
        case 'tiktok':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/tiktok?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        for (let i of betaku.result.video) {
        	beta.sendMessage(m.chat, {
        video: {
        	url: i
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted : m
        })
        }
        await beta.sendMessage(m.chat, {
        audio: {
        	url: betaku.result.audio
        },
        caption: null
        }, {
        	quoted: m
        })
        }
        break
        case 'tiktokslide':
        case 'tiktokimg':
        {
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/download/ttslide?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        for (let i of betaku.result.images) {
        beta.sendMessage(m.chat, {
        image: {
        	url: i
        },
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        }
        break
        case 'igdl':
        case 'ig':
        case 'igvideo':
        case 'igreels':
        case 'igstory':
        case 'instagram':
        case 'igvideo':{
        	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
        await loading();
       let api = await fetch(`https://api.betabotz.eu.org/api/download/igdowloader?url=${args[0]}&apikey=${btz}`)
       let betaku = await api.json();
       for (let i of betaku.message) {
       	beta.sendFile(m.chat, i._url, 'beta.mp4', 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
       }
       }
       break
       case 'mediafire':{
       	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
       await loading();
      let api = await fetch(`https://api.betabotz.eu.org/api/download/mediafire?url=${args[0]}&apikey=${btz}`)
      let betaku = await api.json();
      
      const {
      url,
      url2,
      filename,
      filetype,
      ext,
      upload_date,
      filesizeH,
      filesize
      } = betaku.result
      
      beta.sendMessage(m.chat, {
      document: {
      	url: url
      },
      caption: 'SUCCES : RESULT FROM api.betabotz.eu.org',
      fileName: filename,
      mimetype: ext
      }, {
      	quoted: m
      })
      }
      break
      case 'soundcloud':{
      	if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
      await loading();
      let api = await fetch(`https://api.betabotz.eu.org/api/download/soundcloud?url=${args[0]}&apikey=${btz}`)
      let betaku = await api.json();
      
      const {
      title,
      thumbnail,
      url
      } = betaku.result
      
      beta.sendMessage(m.chat, {
      audio: {
      	url: url
      },
      caption: null
      }, {
      quoted: m
      })
      }
      break
      
        //Emoji
        case 'stikapple':
        case 'stikkddi':
        case 'stikgoogle':
        case 'stikdocomo':
        case 'stiksoftbank':
        case 'stikhtc':
        case 'stikmozilla':
        case 'stiklg':
        case 'stikopenmoji':
        case 'stikemojipedia':
        case 'stikjoypixels':
        case 'stikfacebook':
        case 'stikskype':
        case 'stikwhatsapp':
        case 'stiktwitter':
        case 'stiksamsung':
        case 'stikmicrosoft':
        {
        if (!args[0]) return reply('Emojinya Mana?');
       await loading();
        try {
        let res = await fetch(global.api('btz', '/api/emoji/' + command, {
                    emoji: args[0]
                }, 'apikey'))
                let img = await res.buffer()
                let savestik = await beta.sendImageAsSticker(m.chat, img, m, {
                    packname: packname,
                    author: author
                })
                await fs.unlinkSync(savestik)
        } catch (err) {
        console.log(err);
        reply(global.message.error);
        }
        }
        break
        
        //Ephoto
        case 'ytgold': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/ytgoldbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'ytsilver': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann2 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/ytsilverbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann2, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'iggold': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann1 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/iggoldbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann1, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'igsilver': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann3 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/igsilverbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann3, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'fbgold': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann12 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/fbgoldbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann12, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'fbsilver': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann31 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/fbsilverbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann31, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'twtgold': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann121 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/twtgoldbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann121, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break
        
        case 'twtsilver': 
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let lann312 = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/twtsilverbutton?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: lann312, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        break      
          
        case 'televisi': 
        case 'glasses': 
        case 'blackpink': 
        case 'blackpink2':
        case 'coverpubg': 
        case 'greenbrush': 
        case 'eraser': 
        case 'dragonfire': 
        case 'incandescent': 
        case 'typography': 
        case 'typography2': 
        case 'cloth': 
        case 'grafitti':
        case 'galaxy': 
        case 'blueneon': 
        case 'nightstars': 
        case 'cloud': 
        case 'papercut':
        case 'horor':
        case 'sunlight': 
        case 'pig': 
        {
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`) 
        loading();
        let ephoto = await getBuffer(`https://api.betabotz.eu.org/api/ephoto/${command}?text=${text}&apikey=${btz}`)
        beta.sendMessage(m.chat, { image: ephoto, caption: `Source Code https://api.betabotz.eu.org/ephoto` }, { quoted: m })
        }
        break
        
        //Maker
            case 'carbon':
            if (!text) return reply('masukan text')                      
            {
             let text;
            if (args.length >= 1) {
                text = args.slice(0).join(" ")
            } else if (m.quoted && m.quoted.text) {
                text = m.quoted.text
            } else reply("Input teks atau reply teks yang ingin di jadikan carbon!");
           try {
           loading();
           let img = await fetchJson(`https://api.betabotz.eu.org/api/maker/carbon?text=${text}&apikey=${btz}`);
            await beta.sendMessage(m.chat, { image : { url: img.result }}, { quoted: m });          
           } catch (e) {
           reply (message.error);
           }
           }
           break
           
        case 'ttp': 
        {
        try {
        if(!text) return reply('Textnya Mana?');                                
        loading();
        let res = await fetch(`https://api.betabotz.eu.org/api/maker/ttp?text=${text}&apikey=${btz}`);
        if (!res.ok) throw await res.text();
        let img = await res.buffer();
        let encmedia = await beta.sendMediaAsSticker(m.chat, img, m, {
        packname: global.packname,
        author: author
        })
        await fs.unlinkSync(encmedia)
        } catch (err) {
        console.log(err);
        reply(global.message.error);
        }      
        }
        break
        case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': {
        	if (!quoted) return reply(`*Reply Video/Image With Caption* ${prefix + command}`)
        if (/image/.test(mime)) {
        	await loading();
        let media = await quoted.download()
        let encmedia = await beta.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
        	if ((quoted.msg || quoted).seconds > 11) return reply('*Maximum 10 seconds!*')
        let media = await quoted.download()
        let encmedia = await beta.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(encmedia)
        } else {
        	reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
        }
        }
        break
        case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme':
        if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
        if (/image/.test(mime)) {
        	try {
        	await loading()
        mee = await beta.downloadAndSaveMediaMessage(quoted)
        mem = await uptotelegra(mee)
        meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
        beta.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
        } catch (e) {
        	console.log(e)
        reply(`${e}\n\nKIRIM FOTO / STICKER DENGAN COMMAND ${prefix + command}`)
        }
        }
        break
        
        case 'toanime': 
        case 'jadianime':
        {
    var q = m.quoted ? m.quoted : m
	var mimes = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mimes) && !/webp/g.test(mimes)) {
		try {
	       await loading();
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let convert = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadianime?url=${out}&apikey=${btz}`);
			let buff = await getBuffer(convert.result.img_crop_single)
			await beta.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
	}
        }
        break
        
        case 'tozombie': 
        case 'jadizombie':
        {
    var q = m.quoted ? m.quoted : m
	var mimes = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mimes) && !/webp/g.test(mimes)) {
		try {
	       await loading();
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let convert = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadizombie?url=${out}&apikey=${btz}`);
			let buff = await getBuffer(convert.result)
			await beta.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
	}
        }
        break
        
        case 'togta': 
        case 'jadigta':
        {
    var q = m.quoted ? m.quoted : m
	var mimes = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mimes) && !/webp/g.test(mimes)) {
		try {
	       await loading();
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let convert = await fetchJson(`https://api.betabotz.eu.org/api/maker/jadigta?url=${out}&apikey=${btz}`);
			let buff = await getBuffer(convert.result)
			await beta.sendMessage(m.chat, { image: buff, caption: `🍟 *Fetching* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			reply(`[ ! ] Identifikasi Gagal.`)
		}
	} else {
		reply(`Kirim gambar dengan caption *${prefix + command}* atau tag gambar yang sudah dikirim`)
	}
        }
        break
        
        case 'qc':
    {
        let text;
        if (args.length >= 1) {
            text = args.slice(0)
                .join(" ")
        } else if (m.quoted && m.quoted.text) {
            text = m.quoted.text
        } else reply("Input teks atau reply teks yang ingin di jadikan quote!");
        if (text.length > 100) return reply('Maksimal 100 Teks!')

        let randomColor = ['#ef1a11', '#89cff0', '#660000', '#87a96b', '#e9f6ff', '#ffe7f7', '#ca86b0', '#83a3ee', '#abcc88', '#80bd76', '#6a84bd', '#5d8d7f', '#530101', '#863434', '#013337', '#133700', '#2f3641', '#cc4291', '#7c4848', '#8a496b', '#722f37', '#0fc163', '#2f3641', '#e7a6cb', '#64c987', '#e6e6fa', '#ffa500'];

        const apiColor = randomColor[Math.floor(Math.random() * randomColor.length)];

        let pp = await beta.profilePictureUrl(m.sender, 'image')
            .
        catch (_ => 'https://telegra.ph/file/320b066dc81928b782c7b.png')

        const obj = {
            "type": "quote",
            "format": "png",
            "backgroundColor": apiColor,
            "width": 512,
            "height": 768,
            "scale": 2,
            "messages": [{
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": m.name,
                    "photo": {
                        "url": pp
                    }
                },
                "text": text,
                "replyMessage": {}
            }]
        }
        const json = await axios.post('https://qc.botcahx.eu.org/generate', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const buffer = Buffer.from(json.data.result.image, 'base64')
        await beta.sendImageAsSticker(m.chat, buffer, m, {
        packname: global.packname,
        author: global.author
        })
    }
    break
    
    //Nsfw
    case 'gay':
    case 'ahegao':
    case 'ass':
    case 'bdsm':
    case 'blowjob':
    case 'cuckold':
    case 'cum':
    case 'ero':
    case 'femdom':
    case 'foot':
    case 'gangbang':
    case 'glasses':
    case 'hentai':
    case 'gifs':
    case 'jahy':
    case 'manga':
    case 'masturbation':
    case 'neko':
    case 'neko2':
    case 'orgy':
    case 'panties':
    case 'pussy':
    case 'tentacles':
    case 'yuri':
    case 'thighs':
    case 'zettai':
    {
    	if (!Antinsfw) return reply('Fitur Nsfw Belum Di Aktifkan')
        await loading();
        try {
            if (command == 'gay') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/gay?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                    
                }, {
                    quoted: m
                });

            }
            if (command == 'ahegao') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/ahegao?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'ass') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/ass?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'bdsm') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/bdsm?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'blowjob') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/blowjob?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'cuckold') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/cuckold?apikey=ct${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'cum') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/cum?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'ero') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/ero?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'femdom') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/femdom?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'foot') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/foot?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'gangbang') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/gangbang?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'glasses') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/glasses?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'hentai') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/hentai?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'gifs') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/gifs?apikey=${btz}`);
                await conn.sendFile(m.chat, res, 'nsfw.jpg', '', m);

            }
            if (command == 'jahy') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/jahy?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'manga') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/manga?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'masturbation') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/masturbation?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'neko') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/neko?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'neko2') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/neko2?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'orgy') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/orgy?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'panties') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/panties?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'pussy') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/pussy?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'tentacles') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/tentacles?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'yuri') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/yuri?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'thighs') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/thighs?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
            if (command == 'zettai') {
                const res = await getBuffer(`https://api.betabotz.eu.org/api/nsfw/zettai?apikey=${btz}`);
                await beta.sendMessage(m.chat, {
                    image: res
                }, {
                    quoted: m
                });

            }
        } catch (err) {
            console.error(err)
            reply("🚩 Terjadi kesalahan");
        }
    }
    break      
    
    //Photooxy
        case 'bevel-text':
        case 'luxury':
        case 'flaming':
        case 'underwater':
        case 'shadow-sky':
        case 'wolf-metal':
        case 'metallic':
        case 'metallic2':
        case 'burn-paper':
        case 'naruto':
        case '3d-summer':
        case 'under-grass':
        case 'smoke':
        case 'flower-typography':
        case 'picture-of-love':
        case 'hello-kitty':
        case 'coffe-cup':
        case 'butterfly':
        case 'night-sky':
        case 'carved-wood':
        case 'sweet-candy':
    {
       try {
        if (!text) return reply(`Example : ${prefix + command} BetaBotz`)                             
        loading();
        let photooxy = await getBuffer(`https://api.betabotz.eu.org/api/photooxy/${command}?text1=${text}&apikey=${global.btz}`)
        beta.sendMessage(m.chat, {
            image: photooxy,
            caption: `Source Code https://api.betabotz.eu.org/photooxy`
        }, {
            quoted: m
        })
        } catch ( err ) {
        console.log(err);
        reply(message.error);
        }
    }
    break
     
     //search
        // case 'pinterest':
        // {
        // if (text) return m.reply(`Ex: ${prefix + command} kucing`);
        // beta.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
               // // if (!args[0]) return reply(`Example : ${prefix + command} BetaBotz`)                                           
                // let data = await fetchJson(`https://api.betabotz.eu.org/api/search/pinterest?text1=${args[0]}&apikey=${btz}`);
                // try {
                // let limit = Math.min(5, data.result.length);
                // //await loading();
                // for (let i = 1; i < limit; i++) {
                // const imgs = data.result[i];
               // beta.sendMessage(m.chat, { image : { url: imgs }}, { quoted: m });                  
                // }
            // } catch (e) {
                // console.log(e);
                // reply(message.error);
            // }
        // }
        // break
           case 'jarak':
           {
           	let [dari, tujuan] = text.split`-`
           	if (!(dari && tujuan)) return reply(`Contoh pemakaian: ${prefix + command} Tanggerang-Jakarta`)
           let apiku = await fetchJson(`https://api.betabotz.eu.org/api/search/jarak?from=${dari}&to=${tujuan}&apikey=${btz}`)
           beta.sendMessage(m.chat, {
           	image: {
           	url: apiku.message.data
           },
           caption: apiku.message.desc
           }, {
           	quoted: m
           })
           }
           break
           case 'ttsearch':
           case 'tiktoksearch':{
           	if (!args[0]) return reply(`Input Pencarian\n\nExample : ${prefix + command} Meme Tiktok`)
           await loading();
           let api = await fetch(`https://api.betabotz.eu.org/api/search/tiktoks?query=${args[0]}&apikey=${btz}`)
           let betaku = await api.json();
           let no = 1;
           for (let i of betaku.result.data) {
           	await sleep(2000) // 2 SECONDS 
           	beta.sendMessage(m.chat, {
           video: {
           	url: i.play
           },
           caption: 'SUCCES : RESULT FROM api.betabotz.eu.org : ' + `${no++}`
           }, {
           	quoted: m
           }) // KASIH DELAY BIAR ANGKA RESULT TIDAK NGACAK
           }
           }
           break
           
           // STALK
           case 'ytstalk':
        case 'stalkyt':
        {
        	if (!args[0]) return reply(`Masukan Username Yang Terdaftar Di Youtube\n\nexample : ${prefix + command} jerofc`)
        let response = await fetchJson(`https://api.betabotz.eu.org/api/stalk/yt?username=${args[0]}&apikey=${btz}`);
        let { channelId, url, channelName, avatar, isVerified, subscriberH, subscriber, description } = response.result.data[0];
            let capt;
            capt = `乂 *Y O U T U B E  C H A N N E L*\n\n`;
            capt += `◦ *Channel ID* : ${channelId}\n`;
            capt += `◦ *URL* : ${url}\n`;
            capt += `◦ *Channel Name* : ${channelName}\n`;
            capt += `◦ *Avatar* : ${avatar}\n`;
            capt += `◦ *Verified* : ${isVerified}\n`;
            capt += `◦ *Subscribers* : ${subscriberH}\n`;
            capt += `◦ *Subscriber Count* : ${subscriber}\n`;
            capt += `◦ *Description* : ${description}\n`;
            capt += `\n`; 
        beta.sendMessage(m.chat, {
        image: {
        	url: avatar
        },
        caption: capt,
        mentions: [m.sender]
        }, {
        	quoted: m
        })
        }
        break
           case 'igstalk':
           case 'stalkig':
           {
           	if (!args[0]) return reply(`Input Username Yang Terdaftar Di Instagram\n\nExample: ${prefix + command} erlanrahmat_14`)
           let data = await fetchJson(`https://api.betabotz.eu.org/api/stalk/ig?username=${args[0]}&apikey=${btz}`)
           await loading();
           let { photoUrl, postsCount, followers, following, bio, fullName, username } = data.result;
            let capt;
            capt = `乂 *I G S T A L K E R*\n\n`;
            capt += `◦ *Username* : ${username}\n`;
            capt += `◦ *Full Name* : ${fullName}\n`;
            capt += `◦ *Bio* : ${bio}\n`;
            capt += `◦ *Followers* : ${followers}\n`;           
            capt += `◦ *Following* : ${following}\n`;            
            capt += `◦ *Total Post* : ${postsCount}\n`;
           capt += `\n`;      
           try {
           beta.sendMessage(m.chat, { 
           	image: {
           	url: photoUrl
           }, 
           caption: capt,
           mentions: [m.sender]
           }, {
           	quoted: m
           })
           } catch (e)
           {
           	console.log(e)
           reply(message.error);
           }
           }
           break
           
           case 'ttstalk':
           case 'stalktt':
           {
           	if (!args[0]) return reply(`Input Username Yang Terdaftar Di Tiktok\n\nExample: ${prefix + command} betabotzz`)
           let json = await fetchJson(`https://api.betabotz.eu.org/api/stalk/tt?username=${args[0]}&apikey=${btz}`)
           await loading();
           let caption = `⦿  *T I K T O K - S T A L K*\n\n`
        caption += `	◦  *Username* : ${json.result.username}\n`
        caption += `	◦  *Description* : ${json.result.description}\n`
        caption += `	◦  *Likes* : ${json.result.likes}\n`
        caption += `	◦  *Followers* : ${json.result.followers}\n`
        caption += `	◦  *Following* : ${json.result.following}\n`
        caption += `	◦  *Totalposts* : ${json.result.totalPosts}\n\n`               
           try {
           beta.relayMessage(m.chat, {
            extendedTextMessage: {
                text: caption,
                contextInfo: {
                    externalAdReply: {
                        title: '⦿  T I K T O K - S T A L K',
                        mediaType: 1,
                        previewType: 0,
                        renderLargerThumbnail: true,
                        thumbnailUrl: json.result.profile,
                        sourceUrl: ''
                    }
                }, mentions: [m.sender]
            }
        }, {})
           } catch (e)
           {
           	console.log(e)
           reply(message.error);
           }
           }
           break
           case 'mlstalk':
           case 'stalkml':{
           	if (!args[0]) return reply(`Input Id Game,Server${command}\n\nExample : ${prefix + command} 12383839,2828`)
           let [idgame, serverlu] = text.split`,`
           if (!idgame) return reply(`Id Game Kamu Wajib Di Isi`)
           if (!serverlu) return reply(`Zone Id Game Kamu Wajib Di Isi`)
           await loading();
           let url = `https://api.betabotz.eu.org/api/stalk/ml?id=${idgame}&server=${serverlu}&apikey=${btz}`
           let response = await axios(url)
           let data = response.data.result.userName
           beta.sendMessage(m.chat, {
           	text: `*[ STALK ML ]*\n\n> NICKNAME : ${data}\n> ID : ${idgame}\n> SERVER : ${serverlu}`,
           mentions: [m.sender]
           },{
           	quoted: m
           })
           }
           break
           case 'ffstalk':
           case 'stalkff':
           case 'cekidff':{
           	if (!args[0]) return reply(`Input Id Game Free Fire\n\nExample : ${prefix + command} 1090537872`)
           await loading();
           let url = `https://api.betabotz.eu.org/api/stalk/ff?id=${args[0]}&apikey=${btz}`
           let response = await axios(url);
           let res = response.data.result.userNameGame;
           beta.sendMessage(m.chat, {
           	text: `*[ STALK FF ]*\n\n> NICKNAME : ${res}\n> ID : ${args[0]}`,
           mentions: [m.sender]
           }, {
           	quoted: m
           })
           }
           break
           
           // TOOLS HD © JERO 🗿
           case 'hd':
           case 'hdr':
        case 'remini':
        {
        	if (!quoted) return reply(`Fotonya Mana?`)
        if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
        let media = await quoted.download()
        let img = await uploadImage(media)
        await loading();
        let proses = await fetch(`https://api.betabotz.eu.org/api/tools/remini?url=${img}&apikey=${btz}`)
        let api = await proses.json();
        let buffer = await getBuffer(api.url)
        beta.sendMessage(m.chat, {
        	image: buffer,
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'hd2':
        case 'hdr2':
        case 'remini2':
        {
        	if (!quoted) return reply(`Fotonya Mana?`)
        if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
        let media = await quoted.download()
        let img = await uploadImage(media)
        await loading();
        let proses = await fetch(`https://api.betabotz.eu.org/api/tools/remini-v2?url=${img}&apikey=${btz}`)
        let api = await proses.json();
        let buffer = await getBuffer(api.url)
        beta.sendMessage(m.chat, {
        	image: buffer,
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'hd3':
        case 'hdr3':
        case 'remini3':
        {
        	if (!quoted) return reply(`Fotonya Mana?`)
        if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
        let media = await quoted.download()
        let img = await uploadImage(media)
        await loading();
        let proses = await fetch(`https://api.betabotz.eu.org/api/tools/remini-v3?url=${img}&apikey=${btz}`)
        let api = await proses.json();
        let buffer = await getBuffer(api.url)
        beta.sendMessage(m.chat, {
        	image: buffer,
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        
        // TOOLS
        case 'whatmusic':
        case 'whatmusik':{
        	if (!args[0]) return reply(`Input Parameter Url Yang Ingin Di Tanyakan\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/tools/whatmusic?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        reply(betaku.result);
        }
        break
        case 'removebg':
        case 'snobg':{
        	if (!quoted) return reply(`Fotonya Mana?`)
        if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
        let media = await quoted.download()
        let img = await uploadImage(media)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/tools/removebg?url=${img}&apikey=${btz}`)
        let betaku = await api.json();
        let buffer = await getBuffer(betaku.url.result)
        beta.sendMessage(m.chat, {
        	image: buffer,
        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
        }, {
        	quoted: m
        })
        }
        break
        case 'tinyurl':{
        	if (!args[0]) return reply(`Input Parameter Url\n\nExample : ${prefix + command} Url`)
        await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/tools/tinyurl?url=${args[0]}&apikey=${btz}`)
        let betaku = await api.json();
        beta.sendMessage(m.chat, {
        	text: 'SUCCES RESULT : ' + betaku.result,
        mentions: [m.sender]
        }, {
        	quoted: m
        })
        }
        break
        
        // INFORMATION 
        case 'gempa':{
        	await loading();
        let api = await fetch(`https://api.betabotz.eu.org/api/search/gempa?apikey=${btz}`)
        let betaku = await api.json();
        
        const {
        Waktu,
        Lintang,
        Bujur,
        Magnitudo,
        Kedalaman,
        Wilayah,
        Map
        } = betaku.result;
        
        beta.sendMessage(m.chat, {
        image: {
        	url: Map
        },
        caption: `TURUT BERDUKA CITA, ATAS TERJADINYA GEMPA DI WILAYAH ${Wilayah} PADA WAKTU ${Waktu} DENGAN KEDALAMAN ${Kedalaman}, DENGAN KEKUATAN GEMPA ${Magnitudo} Magnitudo\n\n> SEMOGA SAUDARA” KAMI YANG BERADA DI WILAYAH TERSEBUT SEMUA SELAMAT ATAS KEJADIAN GEMPA TERSEBUT .`
        }, {
        	quoted: m
        })
        }
        break 
        
        // ISLAMIC
        case 'surah':{
        	if (!args[0]) return reply(`Input Surah\n\nExample : ${prefix + command} 6`)
        await loading();
        let url = `https://api.betabotz.eu.org/api/muslim/surah?no=${args[0]}&apikey=${btz}`
        let response = await axios(url)
        	for (let res in response.data.result) {
        let txt = ''
        txt+=`> ARAB : ${res.arab}\n`
        txt+=`> RUMI : ${res.rumi}\n`
        txt+=`> LATIN : ${res.latin}\n`
        beta.sendMessage(m.chat, {
        text: txt,
        mentions: [m.sender]
        }, {
        	quoted: m
        })
        }
        }
        
        break
        // CEK KEY API
        case 'cekapi':{
        	if (!text) return reply(`Silahkan Input Kode Apikey Kamu, Yang Terdaftar Di Website Api https://betabotz.eu.org`)
        await loading()
        try {
        	let api = await fetch(`https://api.betabotz.eu.org/api/checkkey?apikey=${text}`)
        let body = await api.text()
        m.reply(body)  
        } catch (e) {
        	console.log(e) 
        reply('Apikey tidak terdaftar!')
        }
        }
        break
        
        // TRANSLATE
        case 'translate': case 'tr': {
                if (!text) return reply(`Contoh :
1. Kirim perintah ${prefix + command} *kode bahasa* *teks*
	Contoh : ${prefix + command} id KONTOL
2. Reply chat dengan caption ${prefix + command} *kode bahasa*
	Contoh : ${prefix + command} id KONTOL
Daftar bahasa yang di dukung : https://cloud.google.com/translate/docs/languages`)
const { translate } = require("@vitalets/google-translate-api");
                let teks = m.quoted ? quoted.text : quoted.text.split(args[0])[1]
                translate(teks, { to:
                args[0]
                })
                .then((res) => {
                    beta.sendMessage(m.chat, {
                    	text: `${res.text}`,
                    mentions: [m.sender]
                    }, {
                    	quoted: m
                    })
                })
            }
                break
        
        // Menu
        case 'menu': 
        case 'help': {
        const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
        let listSections = [];
        listSections.push({
        		title: `List Menu Non Api`,
            rows: [
            {
                    title: "「 × 」Menu",
                    description: "Menampilkan Menu Yang Tersedia ",
                    id: `${prefix} menu`
                },
                {
                    title: "「 × 」Group Menu",
                    description: "Menampilkan Semua Fitur Group Menu",
                    id: `${prefix} groupmenu`
                },
                {
                    title: "「 × 」Info Menu",
                    description: "Menampilkan Semua Fitur Info Menu",
                    id: `${prefix} infomenu`
                },
                {
                    title: "「 × 」Owner Menu",
                    description: "Menampilkan Semua Fitur Owner Menu",
                    id: `${prefix} ownermenu`
                }
                
            ]
        },
        {
            title: `List Menu From Api`,
            rows: [
                {
                    title: "「 × 」Menu Ai",
                    description: "Menampilkan Menu Ai",
                    id: `${prefix} ai-menu`
                },
                {
                    title: "「 × 」Menu Anime",
                    description: "Menampilkan Menu Asupan",
                    id: `${prefix} anime-menu`
                },
                {
                    title: "「 × 」Menu Asupan",
                    description: "Menampilkan Menu Asupan",
                    id: `${prefix} asupan-menu`
                },
                {
                    title: "「 × 」Menu Cecan",
                    description: "Menampilkan Menu Cecan",
                    id: `${prefix} cecan-menu`
                },
                {
                    title: "「 × 」Menu Download",
                    description: "Menampilkan Menu Download",
                    id: `${prefix} download-menu`
                },
                {
                    title: "「 × 」Menu Emoji",
                    description: "Menampilkan Menu Emoji To Sticker",
                    id: `${prefix} emoji-menu`
                },
                {
                    title: "「 × 」Menu Ephoto",
                    description: "Menampilkan Menu Image Creator Ephoto",
                    id: `${prefix} ephoto-menu`
                },
                {
                    title: "「 × 」Menu Maker",
                    description: "Menampilkan Menu Maker",
                    id: `${prefix} maker-menu`
                },
                {
                    title: "「 × 」Menu Nsfw",
                    description: "Menampilkan Menu Nsfw Images",
                    id: `${prefix} nsfw-menu`
                },
                {
                    title: "「 × 」Menu Photooxy",
                    description: "Menampilkan Menu Image Creator Photooxy",
                    id: `${prefix} photooxy-menu`
                },
                {
                    title: "「 × 」Menu Search",
                    description: "Menampilkan Menu Search",
                    id: `${prefix} search-menu`
                },
                {
                    title: "「 × 」Menu Stalk",
                    description: "Menampilkan Menu Stalk",
                    id: `${prefix} stalk-menu`
                },
                {
                    title: "「 × 」Menu Tools",
                    description: "Menampilkan Menu Tools",
                    id: `${prefix} tools-menu`
                }
                ]
        })
        beta.sendList(m.chat, null, `${menu(run, mode, jam, tanggal)}`, `CLICK HERE`, listSections, m);
        }
        break
        // Group Menu
           case 'groupmenu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${groupmenu(run, mode, jam, tanggal, listgroup(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m})
           }
           break
        // Info Menu
           case 'infomenu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${infomenu(run, mode, jam, tanggal, listinfo(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m})
           }
           break
        // Owner Menu
           case 'ownermenu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${ownermenu(run, mode, jam, tanggal, listowner(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break

           // From Api                 
           case 'ai-menu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${aimenu(run, mode, jam, tanggal, listai(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break
                              
           case 'anime-menu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${animemenu(run, mode, jam, tanggal, listanime(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break
           
           case 'asupan-menu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${asupanmenu(run, mode, jam, tanggal, listasupan(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break
           
           case 'cecan-menu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${cecanmenu(run, mode, jam, tanggal, listcecan(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break
           
           case 'download-menu':
           {
           const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
           await beta.sendMessage(m.chat, {
            text: `${downloadmenu(run, mode, jam, tanggal, listdownload(prefix))}`,
            contextInfo: {
            externalAdReply: { showAdAttribution: true, 
            title: 'BetaBotz-Md3 🚀',
            body: '',
            thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
            sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
            mediaType: 1,
            renderLargerThumbnail: true
            }}}, { quoted: m })
           }
           break
           
           case 'emoji-menu':
    {
        const run = runtime(process.uptime());
        const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
        const { jam, tanggal } = await dateAndtime();
        await beta.sendMessage(m.chat, {
            text: `${emojimenu(run, mode, jam, tanggal, listemoji(prefix))}`,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    title: 'BetaBotz-Md3 🚀',
                    body: '',
                    thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                    sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: m });
    }
    break;

    case 'ephoto-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${ephotomenu(run, mode, jam, tanggal, listephoto(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'maker-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${makermenu(run, mode, jam, tanggal, listmaker(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'nsfw-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${nsfwmenu(run, mode, jam, tanggal, listnsfw(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'photooxy-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${photooxymenu(run, mode, jam, tanggal, listphotooxy(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'search-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${searchmenu(run, mode, jam, tanggal, listsearch(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'stalk-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${stalkmenu(run, mode, jam, tanggal, liststalk(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
    
    case 'tools-menu':
        {
            const run = runtime(process.uptime());
            const mode = beta.public ? 'Mode Publik' : 'Mode Pribadi';
            const { jam, tanggal } = await dateAndtime();
            await beta.sendMessage(m.chat, {
                text: `${toolsmenu(run, mode, jam, tanggal, listtools(prefix))}`,
                contextInfo: {
                    externalAdReply: {
                        showAdAttribution: true,
                        title: 'BetaBotz-Md3 🚀',
                        body: '',
                        thumbnailUrl: 'https://telegra.ph/file/ec75e8bd53238f11603d9.jpg',
                        sourceUrl: "https://whatsapp.com/channel/0029VaApYsQ5Ui2c2rKbpP0S/150",
                        mediaType: 1,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m });
        }
        break;
                
            default: if (budy.startsWith('>')) {
    if (!isCreator) return reply(global.message.isOwn)
    try {
        let evaled = await eval(budy.slice(2))
        if (typeof evaled !== 'string') evaled = require('util')
            .inspect(evaled)
        await reply(evaled)
    } catch (err) {
        await reply(util.format(err))
    }
}
}

// CEK BOT ACTIVE OR NO
if ((budy) && ["bot", "Bot"].includes(budy) && !isCmd && !m.key.fromMe) {
	reply(`Bot Activated " ${m.pushName} "`)
}

} catch (err) {
    	console.log(util.format(err))
    let e = String(err)
        if (e.includes("conflict")) return
        if (e.includes("not-authorized")) return
        if (e.includes("already-exists")) return
        if (e.includes("rate-overlimit")) return
        if (e.includes("Connection Closed")) return
        if (e.includes("Timed Out")) return
        if (e.includes("Value not found")) return
        if (e.includes("Socket connection timeout")) return
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
