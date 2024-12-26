/*
   Created By Lann && JerOfc && PasyaGanz
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/
//============ [ Module ] ============\\
require('./settings')
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

const sharp = require('sharp');
const fs = require('fs');
const os = require('os')
const util = require('util');
const chalk = require('chalk');
const axios = require('axios');
const moment = require('moment-timezone');
const ms = toMs = require('ms');
const fetch = require('node-fetch')
const { createSticker } = require('wa-sticker-formatter')

const { writeExifImg, writeExifVid } = require("./lib/exif");
const { imageToWebp, videoToWebp } = require("./lib/convert");

const {
    exec,
    spawn,
    execSync
} = require("child_process")

const {
    makeid
} = require('./lib/myfunc')

const {
    getBannedData,
    saveBannedData,
    getRemainingTime,
    isUserBanned,
    banUser
} = require('./lib/banned')

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
        const isCmd = /^[ï¿½ï¿½ï¿½×¶ï¿½ï¿½ï¿½ï¿½ï¿½ï¿½_=|~!?#/$%^&.+-,\\\ï¿½^]/.test(body)
        const prefix = isCmd ? budy[0] : ''
        const command = isCmd ? body.slice(1).trim().split(' ').shift().toLowerCase() : ''
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await beta.decodeJid(beta.user.id)
        const isCreator = ["6283136394680@s.whatsapp.net", botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const text = q = args.join(" ")
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const groupMetadata = m.isGroup ? await beta.groupMetadata(m.chat).catch(e => { }) : ''
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
        
        
//JANGAN DI HAPUS KALAU GK MAU ERROR
//© MAKE BY PASYAGANZ
const miningSystem = require('./rpgdata/mining.js');
const adventureSystem = require('./rpgdata/adventure.js');
const inventorySystem = require('./rpgdata/inventory.js');
const { getLimit, decreaseLimit, checkAndResetLimits, checkLimit } = require('./lib/limit');
setInterval(checkAndResetLimits, 60000);
//Di Bawah Ini Total konsumsi limit ©By PasyaGanz
const limitCost = 1;
const limitCost2 = 2;
const limitCost3 = 3;
const limitCost4 = 4;
const limitCost5 = 5;
const limitCost6 = 6;
const limitCost7 = 7;
const limitCost8 = 8;
const limitCost9 = 9;
const limitCost10 = 10;
//============================\\

        const reply = async (text) => {
            return await beta.sendFakeLink(m.chat, text, salam, pushname, m)
        }

        function parseMention(text = '') {
            return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
        }

        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Chat Pribadi', m.chat))
        }
        //autotyper all
        if (global.autoTyping) {
            if (m.chat) { beta.sendPresenceUpdate('composing', m.chat) }
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
                let gclink = (`https://chat.whatsapp.com/` + await beta.groupInviteCode(m.chat))
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
                let gclink = (`https://chat.whatsapp.com/` + await beta.groupInviteCode(m.chat))
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
        if (!m.key.fromMe && global.autoread) {
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


        function _0x372d78(_0x146f63, _0x4ed8dd, _0x2ffa7a, _0x237d1d, _0x5e5951) { return _0xc7ea(_0x2ffa7a - -0x1ca, _0x4ed8dd); } function _0x3f3e31(_0x2c2534, _0x401f08, _0x268454, _0x63375c, _0x26c7e8) { return _0xc7ea(_0x268454 - -0x2cd, _0x26c7e8); } function _0x2ad129(_0x5ea838, _0xdc255d, _0x2ccf93, _0x503534, _0x5411ce) { return _0xc7ea(_0x5ea838 - 0x12, _0x5411ce); } (function (_0x21e77e, _0x1d1191) { function _0xfaa532(_0x17085b, _0x5ada1f, _0x11272a, _0xf00a80, _0x5a799f) { return _0xc7ea(_0x5a799f - 0x12e, _0x11272a); } function _0x3660ad(_0xb62789, _0x10cdcf, _0x112c8a, _0x3de9d1, _0x2751e9) { return _0xc7ea(_0xb62789 - -0x1cc, _0x10cdcf); } function _0x1c6e1a(_0x3a200a, _0x2d4bc4, _0x1aff1d, _0xc0bf4e, _0x33e55d) { return _0xc7ea(_0x1aff1d - -0x171, _0x3a200a); } function _0x58c856(_0x12c52c, _0x470ede, _0x3be3b1, _0x52c17c, _0x419ccd) { return _0xc7ea(_0x3be3b1 - -0x215, _0x12c52c); } function _0x296524(_0x5acc06, _0x3b5651, _0x265ca8, _0x4f8695, _0x18b8cd) { return _0xc7ea(_0x18b8cd - 0x1d0, _0x265ca8); } const _0x536590 = _0x21e77e(); while (!![]) { try { const _0x2e0a83 = -parseInt(_0x296524(0x30d, 0x318, 0x310, 0x325, 0x330)) / (0x2 * -0x4f2 + -0x1 * -0x17c5 + -0xde0) * (-parseInt(_0x1c6e1a(-0x2a, 0x11, -0x4, 0x27, 0x1d)) / (-0x5 * 0x133 + 0x1388 + -0xd87)) + -parseInt(_0xfaa532(0x289, 0x298, 0x286, 0x27d, 0x2a2)) / (-0x1e05 + -0x34a + -0x1 * -0x2152) * (-parseInt(_0x296524(0x2df, 0x31d, 0x2ff, 0x303, 0x2f7)) / (0x1c21 * 0x1 + -0x1 * -0x10fd + -0xfb * 0x2e)) + -parseInt(_0x1c6e1a(-0x3c, 0x1f, -0xd, -0x13, 0x1f)) / (0x1 * 0x1f64 + 0x1627 + -0xd * 0x41e) + parseInt(_0x3660ad(-0x67, -0x58, -0x45, -0x65, -0x92)) / (0x1aed * -0x1 + 0x5 * -0x38b + -0x1 * -0x2caa) * (parseInt(_0x58c856(-0xa8, -0x82, -0x9a, -0x91, -0x71)) / (0x124 * -0x13 + 0x16f * 0xb + -0xfd * -0x6)) + -parseInt(_0x296524(0x327, 0x336, 0x333, 0x31d, 0x33e)) / (-0x1c2 + -0x1da0 + 0x1f6a * 0x1) * (-parseInt(_0x58c856(-0xf5, -0xdf, -0xe0, -0xb9, -0xfe)) / (0x1 * -0x2363 + 0xcb6 + -0xb5b * -0x2)) + parseInt(_0x296524(0x2f5, 0x30f, 0x334, 0x302, 0x320)) / (-0x77 * -0x2e + -0x22a7 * 0x1 + 0xd4f) * (-parseInt(_0x1c6e1a(-0x4, 0x3, -0x19, -0x33, -0x26)) / (0xe46 + -0x1e50 + -0xb3 * -0x17)) + -parseInt(_0x3660ad(-0x60, -0x7b, -0x63, -0x4b, -0x43)) / (-0x88d * 0x3 + 0x1d11 + -0x35e) * (parseInt(_0x296524(0x2df, 0x314, 0x2e2, 0x322, 0x303)) / (-0x1 * 0xda6 + -0x1feb + -0x1 * -0x2d9e)); if (_0x2e0a83 === _0x1d1191) break; else _0x536590['push'](_0x536590['shift']()); } catch (_0x590084) { _0x536590['push'](_0x536590['shift']()); } } }(_0xf620, -0x14ae8 * -0x1 + 0x1a332 + 0x3 * 0xa625)); function _0x368533(_0x48b60d, _0x374865, _0x31caad, _0x5c685c, _0x150c95) { return _0xc7ea(_0x5c685c - -0x24a, _0x48b60d); } function _0xf620() { const _0x51dcf9 = ['mengg', 'angga', 'AM\x20TE', 'di-ba', '*\x0a\x0aMo', 'unaka', '4WAaIRa', 'ali\x20d', 'alam\x20', 'n\x20bot', 'find', '\x20kemb', 'ilara', 'k\x20Lag', 'count', 'entua', 'nned\x20', 'sende', '13qbKdNL', '\x20Spam', '1146249wexEWk', 'angan', 'ima\x20k', 'asih\x20', 'JvKDl', 'ah\x20*d', 'data', 'nya.', '\x20Guna', 'users', '\x0a\x0aAnd', 'elah\x20', 'ot\x20da', 'SS\x20]*', '*[\x20SP', 'antis', 'r\x20ket', 'a\x20mel', 'm\x20ber', '*[\x20BA', 'penge', 'hon\x20J', 'waktu', 'spam', 'berla', '*[\x20ðŸ', 'NNED\x20', '544870HoDOJG', 'ng*\x20o', 'karen', 'istem', 'anan\x20', '\x20ACCE', 'now', 'rtian', '11ipbtIr', 'a\x20spa', 'RDETE', '\x20bot\x20', 'pam', 'lam\x20', 'KSI\x20]', ']*\x0a\x0aA', '3HpZydm', 'n\x20lay', 'Anda\x20', 'š«\x20NO', '3130260kbBAGX', '61026yYKekL', 'leh\x20s', 'atas\x20', 'lasts', 'banne', '\x0a\x0aTer', 'kan\x20B', '1247664BUMKFM', '130354FWbrHz', '40HvGVVF', 'lebih', 'dAt', 'a\x20tel', 'yang\x20', 'nda\x20t', '296679AgxYIQ', 'bisa\x20', 'VcdON', 'ceil', 'ku.\x0a\x0a', 'an.', 'wpRXm', '119qLebUH', '\x20Deti', '\x20atau']; _0xf620 = function () { return _0x51dcf9; }; return _0xf620(); } function _0xc7ea(_0x411bde, _0x355e8b) { const _0x2bf8a5 = _0xf620(); return _0xc7ea = function (_0x1884b5, _0x95541b) { _0x1884b5 = _0x1884b5 - (0xa47 + -0x24dc + 0x1bb8); let _0x42df77 = _0x2bf8a5[_0x1884b5]; return _0x42df77; }, _0xc7ea(_0x411bde, _0x355e8b); } async function txtBan() { const _0x4b9b7e = { 'JvKDl': function (_0x8b2b6f) { return _0x8b2b6f(); }, 'VcdON': function (_0xb9b781, _0x4826a2) { return _0xb9b781(_0x4826a2); }, 'wpRXm': function (_0x587265, _0x20d4de) { return _0x587265(_0x20d4de); } }; function _0x7e2839(_0x2f303a, _0x466cac, _0x2d4bf4, _0x28f710, _0x192461) { return _0xc7ea(_0x2d4bf4 - -0x29, _0x2f303a); } function _0x32dd32(_0xa00c30, _0x21a6f2, _0xa491f4, _0x173904, _0xfd14a6) { return _0xc7ea(_0xfd14a6 - 0x171, _0x21a6f2); } const _0x220f02 = await _0x4b9b7e[_0x32dd32(0x2a4, 0x2b4, 0x283, 0x290, 0x2aa)](getBannedData); function _0x442780(_0x40ddf5, _0x4ae911, _0x7ccf2b, _0x49778d, _0x21dd8f) { return _0xc7ea(_0x21dd8f - 0x35e, _0x7ccf2b); } const _0x1cd3ed = _0x220f02[_0x32dd32(0x2ba, 0x2aa, 0x2a2, 0x298, 0x29c)](_0x440fc6 => _0x440fc6['id'] === m[_0x32dd32(0x292, 0x29a, 0x2ce, 0x28c, 0x2a3) + 'r']); function _0x567fb6(_0xe79acb, _0x1f3207, _0x54614b, _0x180467, _0x5a66e9) { return _0xc7ea(_0x5a66e9 - -0x295, _0x180467); } function _0x26d159(_0x4c4309, _0x9b4c4, _0x4c2863, _0x501a4d, _0x5e638c) { return _0xc7ea(_0x4c2863 - -0x23f, _0x9b4c4); } const _0x10b611 = _0x4b9b7e[_0x7e2839(0x16c, 0x139, 0x14d, 0x145, 0x163)](getRemainingTime, _0x1cd3ed[_0x7e2839(0x11a, 0x129, 0x140, 0x164, 0x145) + _0x32dd32(0x2fd, 0x2c0, 0x306, 0x2d9, 0x2e1)]); return _0x4b9b7e[_0x442780(0x4d1, 0x4f4, 0x4f9, 0x4e7, 0x4d8)](reply, _0x7e2839(0x11f, 0x11d, 0x125, 0x14c, 0x128) + _0x442780(0x4da, 0x4b4, 0x4d7, 0x4a3, 0x4c1) + _0x567fb6(-0x16d, -0x122, -0x149, -0x141, -0x140) + _0x7e2839(0x101, 0x100, 0x119, 0x12b, 0x11b) + _0x7e2839(0x113, 0x135, 0x116, 0x13e, 0x128) + _0x567fb6(-0xfa, -0x152, -0xfb, -0x123, -0x124) + _0x26d159(-0x10b, -0x121, -0x105, -0xfb, -0x103) + _0x7e2839(0xe3, 0xf2, 0x104, 0x10b, 0xec) + _0x26d159(-0xde, -0xde, -0xee, -0xf6, -0xce) + _0x442780(0x4d2, 0x4c5, 0x4d4, 0x4a3, 0x4c4) + _0x567fb6(-0x130, -0x141, -0x14f, -0x12e, -0x142) + _0x7e2839(0x157, 0x155, 0x132, 0x135, 0x121) + _0x26d159(-0x10e, -0xe1, -0xed, -0xe3, -0xf6) + _0x7e2839(0x11b, 0x14c, 0x11d, 0x140, 0x13f) + _0x7e2839(0x164, 0x166, 0x156, 0x178, 0x170) + _0x567fb6(-0x163, -0x138, -0x160, -0x165, -0x150) + _0x26d159(-0x129, -0x123, -0x10f, -0x100, -0x12d) + _0x567fb6(-0x139, -0x144, -0x14c, -0x154, -0x134) + _0x26d159(-0x10f, -0x114, -0xeb, -0xc0, -0xef) + _0x32dd32(0x2ef, 0x2fb, 0x309, 0x2f8, 0x2e3) + _0x26d159(-0x111, -0xdd, -0xf2, -0xc9, -0x121) + _0x26d159(-0xe6, -0xdc, -0xc7, -0xd2, -0x9c) + _0x567fb6(-0x137, -0x148, -0x147, -0x10f, -0x133) + _0x32dd32(0x2f3, 0x30b, 0x300, 0x2c1, 0x2e6) + _0x32dd32(0x2f5, 0x30f, 0x2fd, 0x2e0, 0x2ef) + _0x7e2839(0xe2, 0x107, 0xfd, 0xf0, 0xe8) + _0x442780(0x45f, 0x47f, 0x467, 0x481, 0x488) + _0x567fb6(-0x16f, -0x15b, -0x154, -0x18a, -0x169) + _0x567fb6(-0x16e, -0x185, -0x15e, -0x198, -0x16d) + _0x32dd32(0x274, 0x26e, 0x273, 0x26f, 0x29a) + _0x567fb6(-0x139, -0x141, -0x157, -0x176, -0x14a) + ':\x20' + _0x10b611 + (_0x7e2839(0x163, 0x149, 0x141, 0x12c, 0x11b) + _0x7e2839(0x13c, 0xe1, 0x10e, 0x133, 0xed) + _0x26d159(-0xe6, -0xfb, -0x107, -0x117, -0xf6) + _0x442780(0x4bc, 0x4b1, 0x499, 0x4c5, 0x4c5) + _0x26d159(-0xff, -0xda, -0xf6, -0xd6, -0x119) + _0x442780(0x4d2, 0x4ce, 0x499, 0x4da, 0x4b5) + _0x442780(0x4c5, 0x4c8, 0x497, 0x499, 0x49a))); } function _0x2f1ad5(_0x49e912, _0xa94992, _0x45348c, _0x34ebea, _0x583b00) { return _0xc7ea(_0x583b00 - 0x368, _0x45348c); } if (global[_0x2ad129(0x156, 0x138, 0x127, 0x175, 0x160) + _0x372d78(-0x63, -0x8a, -0x6e, -0x9d, -0x71)] && !isCreator) { if (command) { if (isUserBanned(m[_0x372d78(-0xb7, -0x78, -0x98, -0xaf, -0xb0) + 'r'])) return txtBan();; const users = global['db'][_0x368533(-0x116, -0xe7, -0x12e, -0x10f, -0x108)][_0x3f3e31(-0x177, -0x194, -0x18f, -0x188, -0x163)]; this[_0x372d78(-0x98, -0x95, -0x7e, -0xa4, -0x9f)] = this[_0x2ad129(0x15e, 0x138, 0x132, 0x153, 0x141)] || {}; const _0x519939 = {}; _0x519939[_0x2ad129(0x141, 0x13d, 0x148, 0x15c, 0x142)] = 0x0, _0x519939[_0x2f1ad5(0x4e9, 0x4d6, 0x4a4, 0x4d7, 0x4d0) + _0x2ad129(0x16e, 0x18b, 0x186, 0x171, 0x17f)] = 0x0, this[_0x2ad129(0x15e, 0x136, 0x143, 0x137, 0x17e)][m[_0x372d78(-0x90, -0xb9, -0x98, -0xc4, -0x9f) + 'r']] = this[_0x368533(-0xf4, -0x11e, -0xf2, -0xfe, -0x109)][m[_0x3f3e31(-0x18b, -0x171, -0x19b, -0x181, -0x1b7) + 'r']] || _0x519939; const now = performance[_0x368533(-0x107, -0xff, -0x10c, -0xf4, -0xeb)](), cooldownTime = -0x1ebd + -0x2028 * -0x1 + 0x1 * 0x1dd5, timeDifference = now - this[_0x2f1ad5(0x4ce, 0x4de, 0x4df, 0x499, 0x4b4)][m[_0x368533(-0x144, -0xf1, -0x12a, -0x118, -0xf6) + 'r']][_0x372d78(-0x4f, -0x66, -0x62, -0x46, -0x4c) + _0x372d78(-0x7c, -0x75, -0x6e, -0x6e, -0x8a)]; if (timeDifference < cooldownTime) { this[_0x368533(-0xf9, -0x11a, -0xd0, -0xfe, -0xe0)][m[_0x2ad129(0x144, 0x153, 0x126, 0x13c, 0x157) + 'r']][_0x368533(-0x11e, -0x128, -0x132, -0x11b, -0x105)]++; if (this[_0x372d78(-0x87, -0x84, -0x7e, -0x6f, -0x63)][m[_0x372d78(-0x99, -0x73, -0x98, -0x7a, -0xa5) + 'r']][_0x3f3e31(-0x1b6, -0x1b3, -0x19e, -0x1a3, -0x1b8)] === 0x1c7b + -0x1214 + 0x1 * -0xa65) { const remainingCooldown = Math[_0x2ad129(0x189, 0x170, 0x1a5, 0x179, 0x15e)]((cooldownTime - timeDifference) / (-0xd46 + 0x1bb * -0xe + -0xa * -0x424)); return reply(_0x372d78(-0x9d, -0x66, -0x87, -0x71, -0xb0) + _0x372d78(-0x92, -0x99, -0xa7, -0x8e, -0xcd) + _0x2ad129(0x16c, 0x188, 0x181, 0x16b, 0x171) + _0x368533(-0xca, -0xe4, -0xf3, -0xec, -0x102) + _0x368533(-0xff, -0xf9, -0x139, -0x125, -0xfc) + _0x2f1ad5(0x4d1, 0x4bd, 0x4ae, 0x4d8, 0x4b2) + _0x3f3e31(-0x187, -0x1c4, -0x197, -0x1a6, -0x19b) + _0x2f1ad5(0x4ca, 0x4c3, 0x4ae, 0x493, 0x49c) + _0x372d78(-0x24, -0x39, -0x4d, -0x70, -0x78) + _0x2ad129(0x14f, 0x14b, 0x122, 0x120, 0x158) + _0x2f1ad5(0x4de, 0x4b5, 0x4f6, 0x4b4, 0x4d3) + _0x2ad129(0x153, 0x175, 0x17c, 0x163, 0x14b) + _0x2f1ad5(0x4f2, 0x4c1, 0x4d4, 0x4aa, 0x4c5) + remainingCooldown + (_0x2f1ad5(0x4b6, 0x511, 0x4d1, 0x4ef, 0x4e4) + _0x3f3e31(-0x17d, -0x19c, -0x19f, -0x1c9, -0x1b1) + 'i.')); } if (this[_0x372d78(-0x8f, -0x83, -0x7e, -0x7a, -0x92)][m[_0x2ad129(0x144, 0x118, 0x13d, 0x138, 0x163) + 'r']][_0x2f1ad5(0x4ba, 0x4c2, 0x4a8, 0x4a7, 0x497)] >= 0x91b + -0x1 * 0xc88 + 0x371 * 0x1) return banUser(m[_0x2f1ad5(0x473, 0x4b8, 0x48d, 0x4b9, 0x49a) + 'r']) && banUser(m[_0x2f1ad5(0x47d, 0x478, 0x4c4, 0x487, 0x49a) + 'r']), reply(_0x3f3e31(-0x1a5, -0x1a3, -0x185, -0x178, -0x157) + _0x2ad129(0x161, 0x168, 0x16f, 0x17a, 0x178) + _0x368533(-0xed, -0xcb, -0xcc, -0xeb, -0x116) + _0x372d78(-0x77, -0x2d, -0x57, -0x6f, -0x3e) + _0x2ad129(0x152, 0x12e, 0x12c, 0x125, 0x174) + _0x372d78(-0x92, -0x86, -0xa6, -0x91, -0xbf) + _0x3f3e31(-0x194, -0x188, -0x19c, -0x1b1, -0x1a8) + _0x2f1ad5(0x4b6, 0x49d, 0x495, 0x48d, 0x4ba) + _0x2f1ad5(0x4cf, 0x4d9, 0x4a9, 0x4ac, 0x4c1) + _0x368533(-0x118, -0xef, -0x10a, -0x103, -0x100) + _0x372d78(-0x37, -0x6c, -0x5b, -0x78, -0x65) + _0x3f3e31(-0x165, -0x13d, -0x154, -0x138, -0x129)); } else this[_0x2ad129(0x15e, 0x16c, 0x15b, 0x164, 0x179)][m[_0x3f3e31(-0x1b8, -0x1af, -0x19b, -0x1b2, -0x183) + 'r']][_0x2ad129(0x141, 0x13d, 0x166, 0x11c, 0x142)] = 0x1e3b + -0x10 * -0xc1 + -0x2a4b; this[_0x3f3e31(-0x196, -0x162, -0x181, -0x1b0, -0x173)][m[_0x372d78(-0x9f, -0x6b, -0x98, -0xb5, -0xac) + 'r']][_0x372d78(-0x90, -0x37, -0x62, -0x4c, -0x3f) + _0x368533(-0xfd, -0xd0, -0xea, -0xee, -0xd2)] = now; } }
        
// AUTO DOWNLOAD
if (m.isGroup && !m.key.fromMe && !isCmd && global.autodownload) {
	try {
		let capt = '*[ AUTO DOWNLOAD ]*'
		if (budy.match(`instagram.com`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/igdowloader?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.message[0]._url, null, capt, m);
		} else if (budy.match(`tiktok.com`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/tiktok?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.result.video[0], null, capt, m);
		} else if (budy.match(`facebook.com`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/fbdown?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.result[0]._url, null, capt, m);
		} else if (budy.match(`capcut.com`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/capcut?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.result.video_ori, null, capt, m);
		} else if (budy.match(`pin.it`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/pinterest?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.result.data.image, null, capt, m);
		} else if (budy.match(`v.douyin.com`)) {
			let res = await fetchJson(`https://api.betabotz.eu.org/api/download/douyin?url=${budy}&apikey=${btz}`);
			await beta.sendFile(m.chat, res.result[0].video, null, capt, m);
		}
	} catch (err) {
		console.log(err);
		reply('AUTO DOWNLOAD EROR')
	}
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
                        catch((err) => reply(jsonformat)())
                }
                break
            case 'add':
                {
                    if (!m.isGroup) return reply(global.message.isGroup)
                    if (!isAdmins) return reply(global.message.isAdmin)
                    if (!isBotAdmins) return reply(global.message.botNotAdmin)
                    if (!text) return reply('Mana Nomornya?')
                    let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                    await beta.groupParticipantsUpdate(m.chat, [users], 'add')
                        .then((res) => reply(jsonformat(res)))
                        .
                        catch((err) => reply(jsonformat(err)))
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
                        catch((err) => reply(jsonformat(err)))
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
                        catch((err) => reply(jsonformat(err)))
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
                        catch((err) => reply(jsonformat(err)))
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
                        catch((err) => reply(jsonformat(err)))
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
                    if (!args[0]) return reply(`Penggunaan ${prefix + command} nomor\nContoh ${prefix + command} 6283136394680`)
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
                            catch((err) => m.reply(jsonformat(err)))
                    } else if (args[0] === 'open') {
                        await beta.groupSettingUpdate(m.chat, 'not_announcement')
                            .then((res) => m.reply(`*Successfully Opened The Group*`))
                            .
                            catch((err) => m.reply(jsonformat(err)))
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
            case 'getcase': {
                if (!isCreator) return reply('Khusus Owner')
                if (!q) return reply(`Masukan Fitur Yang Ingin di Ambil\n\nExample: ${prefix + command} tiktok`)
                const getCase = (cases) => {
                    return "case  " + `'${cases}'` + fs.readFileSync("./beta.js").toString().split('case \'' + cases + '\'')[1].split("break")[0] + "break"
                }
                reply(`${getCase(q)}`)
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
                function _0x47f6(_0x19f817, _0x5c1671) { const _0x527933 = _0x390b(); return _0x47f6 = function (_0x37c948, _0x3a767f) { _0x37c948 = _0x37c948 - (0x65 * -0x59 + -0x104d + -0xe * -0x3b7); let _0x38f358 = _0x527933[_0x37c948]; return _0x38f358; }, _0x47f6(_0x19f817, _0x5c1671); } (function (_0x1ed1e7, _0x316954) { const _0x49d6e3 = _0x1ed1e7(); function _0x20fff9(_0x33719f, _0x310eca, _0x714a12, _0x51fb3b, _0x43f0d3) { return _0x47f6(_0x43f0d3 - 0x22c, _0x51fb3b); } function _0x2d10e9(_0x2378cd, _0x1a93da, _0xdc9e1a, _0x1c4837, _0x526372) { return _0x47f6(_0x526372 - 0x3, _0x1a93da); } function _0x41e475(_0x128433, _0x56f888, _0x735af2, _0x3a7fe1, _0x4d2376) { return _0x47f6(_0x4d2376 - -0x230, _0x3a7fe1); } function _0x33e257(_0x69d442, _0x482bda, _0x80935b, _0x2b335c, _0x4ac3ec) { return _0x47f6(_0x69d442 - 0x280, _0x80935b); } function _0x1796a3(_0x401d9a, _0x3fb337, _0x9e3597, _0x2f6573, _0x40baee) { return _0x47f6(_0x2f6573 - -0x2de, _0x401d9a); } while (!![]) { try { const _0x2a83d7 = parseInt(_0x41e475(-0x18e, -0x187, -0x18f, -0x17f, -0x186)) / (-0x52 * 0x35 + -0xb * 0x243 + -0x1 * -0x29dc) + -parseInt(_0x41e475(-0x179, -0x17b, -0x17c, -0x187, -0x183)) / (0x515 * 0x2 + -0x16a6 + -0xc7e * -0x1) * (-parseInt(_0x41e475(-0x19e, -0x1a1, -0x19b, -0x18f, -0x196)) / (0x5b3 * -0x2 + -0x4f3 + 0x105c)) + parseInt(_0x41e475(-0x177, -0x17a, -0x17f, -0x187, -0x182)) / (-0x35 * 0x3 + -0x14eb + 0x158e) + -parseInt(_0x20fff9(0x2cd, 0x2be, 0x2ba, 0x2ba, 0x2c5)) / (-0x1 * -0x1abf + -0x2 * -0x4e5 + -0x1 * 0x2484) + -parseInt(_0x20fff9(0x2e1, 0x2d1, 0x2cf, 0x2cd, 0x2d8)) / (0x1 * -0x78 + 0x2002 + -0x1f84) * (-parseInt(_0x41e475(-0x18f, -0x18c, -0x187, -0x18c, -0x192)) / (0x1 * -0x1d00 + 0x2092 * -0x1 + 0x3d99)) + -parseInt(_0x2d10e9(0xab, 0xb3, 0xaf, 0xa9, 0xaa)) / (-0x1 * -0x21f3 + -0x1d2 * -0xd + -0x1 * 0x3995) * (-parseInt(_0x1796a3(-0x23b, -0x23a, -0x240, -0x235, -0x231)) / (-0x6b4 + -0x1 * 0x128c + 0x1949)) + -parseInt(_0x1796a3(-0x241, -0x245, -0x242, -0x241, -0x24a)) / (-0x673 + -0xf89 * -0x2 + -0x1895); if (_0x2a83d7 === _0x316954) break; else _0x49d6e3['push'](_0x49d6e3['shift']()); } catch (_0x5b9c75) { _0x49d6e3['push'](_0x49d6e3['shift']()); } } }(_0x390b, -0x1 * -0xccd1 + 0x5313e + -0x10 * 0x2cf8)); function _0x4ff38d(_0x4b9d16, _0x45596e, _0x5c6819, _0x2e75b8, _0x18ce08) { return _0x47f6(_0x4b9d16 - 0x3c4, _0x2e75b8); } function _0x390b() { const _0x3057b7 = ['◦\x20*ER', '\x20T\x20O*', '◦\x20*JE', '2056iALQWd', 'LAN\x20R', '4707NqPJli', '355954DIJdIp', 'TABOT', '6LMokQe', '842JzIDua', '1309968rLapnP', '乂\x20*T\x20', '1630505GuTijN', '813ZVgyej', '\x20K\x20S\x20', 'AHMAT', '5397770LIPBNV', '997199czRhNr', 'R\x20-\x20O', 'FC*\x0a', 'H\x20A\x20N', '\x20/\x20BE', 'Z*\x0a']; _0x390b = function () { return _0x3057b7; }; return _0x390b(); } function _0x333259(_0x221ce9, _0x366ec0, _0x456ce9, _0x12f6af, _0xeb3b75) { return _0x47f6(_0x12f6af - -0x1f2, _0x221ce9); } function _0x9b745b(_0x382cbd, _0x15ea74, _0x40d4ff, _0x187407, _0x2bd869) { return _0x47f6(_0x382cbd - 0x31, _0x40d4ff); } function _0x479729(_0x189495, _0x3c33b0, _0xfea9fb, _0x128bd5, _0x57e9da) { return _0x47f6(_0x128bd5 - -0x28, _0x3c33b0); } function _0x1c525d(_0x98790a, _0x24f679, _0x15c7e9, _0x37d9ad, _0x24752e) { return _0x47f6(_0x24f679 - -0x383, _0x98790a); } { let capt; capt = _0x479729(0x6d, 0x71, 0x74, 0x70, 0x77) + _0x479729(0x6d, 0x73, 0x75, 0x79, 0x6f) + _0x4ff38d(0x45f, 0x461, 0x466, 0x459, 0x46a) + _0x479729(0x72, 0x73, 0x74, 0x7d, 0x88) + '\x0a\x0a', capt += _0x333259(-0x153, -0x14a, -0x156, -0x14e, -0x156) + _0x1c525d(-0x2df, -0x2db, -0x2e0, -0x2e5, -0x2e0) + _0x333259(-0x161, -0x153, -0x14b, -0x156, -0x14c) + _0x1c525d(-0x2df, -0x2e1, -0x2e0, -0x2df, -0x2eb) + _0x4ff38d(0x46f, 0x467, 0x474, 0x46a, 0x47b) + _0x1c525d(-0x2eb, -0x2e0, -0x2d9, -0x2ea, -0x2eb), capt += _0x333259(-0x143, -0x148, -0x143, -0x14c, -0x141) + _0x479729(0x81, 0x71, 0x81, 0x77, 0x77) + _0x333259(-0x14e, -0x157, -0x14a, -0x152, -0x157), capt += '\x0a', reply(capt); }
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
                        catch((err) => reply(jsonformat(err)))
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
                        catch((err) => reply(jsonformat(err)))
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
            case 'autorespond': {
                if (!isCreator) return m.reply(global.message.isOwn)
                if (args[0] === "on") {
                    if (global.autorespond === true) return m.reply("Udh on")
                    global.autorespond = true
                    reply("Autorespond berhasil diaktifkan")
                } else if (args[0] === "off") {
                    if (global.autorespond === false) return m.reply("Udh off")
                    global.autorespond = false
                    reply("Autorespond berhasil dinonaktifkan")
                } else {
                    m.reply(`${prefix + command} on -- _mengaktifkan_\n${prefix + command} off -- _Menonaktifkan_`)
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
            case 'bingchat': {
                if (!args[0]) return reply(`Input Pesan Yang Ingin Di Tanyakan Kepada ${prefix + command}\n\nExample : ${prefix + command} Hello Siapakah JER`)
                await loading();
                let url = `https://api.betabotz.eu.org/api/search/bing-chat?text=${args[0]}&apikey=${btz}`
                let response = await axios(url);
                beta.sendMessage(m.chat, {
                    text: response.data.message,
                    mentions: [m.sender]
                }, {
                    quoted: m
                })
            }
                break

            case 'bingimg': {
                if (!args[0]) return reply(`Input Text Yang Ingin Di Buatkan\n\nExample : ${prefix + command} Buatkan saya logo 3d dengan bertuliskan JER OFC`)
                await loading();
                try {
                    let url = `https://api.betabotz.eu.org/api/search/bing-img?text=${args[0]}&apikey=${btz}`
                    let response = await axios(url)
                    for (let i = 0; i < 4; i++) {
                        let buffer = response.data.result[i]
                        beta.sendFile(m.chat, buffer, null, 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
                    }
                } catch (e) {
                    console.log(e)
                }
            }
                break

            case 'ai':
            case 'openai':
            case 'chatgpt':
                {
                    if (!text) return reply('Mau Nanya Apa Sayang?');
                    try {
                        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${btz}`);
                        reply(aii.message);
                    } catch (err) {
                        console.error(err);
                        reply(message.error);
                    }
                }
                break

            case 'ai':
            case 'openai':
            case 'chatgpt':
                {
                    if (!text) return reply('Mau Nanya Apa Sayang?');
                    try {
                        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-chat?text=${text}&apikey=${btz}`);
                        reply(aii.message);
                    } catch (err) {
                        console.error(err);
                        reply(message.error);
                    }
                }
                break

            case 'ailogic':
            case 'openailogic':
            case 'chatgptlogic':
                {
                    if (!text) return reply('Mau Nanya Apa Sayang?');
                    try {
                        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/openai-logic?text=${text}&logic=${logic}&apikey=${btz}`);
                        reply(aii.message);
                    } catch (err) {
                        console.error(err);
                        reply(message.error);
                    }
                }
                break

            case 'aiimg':
            case 'diff':
            case 'txt2img':
                {
                    if (!text) return reply('Mau Buat Gambar Apa Sayang?');
                    try {
                        let aii = await getBuffer(`https://api.betabotz.eu.org/api/search/openai-image?text=${text}&logic=${logic}&apikey=${btz}`);
                        beta.sendMessage(m.chat, { image: aii }, { quoted: m });;
                    } catch (err) {
                        console.error(err);
                        reply(message.error);
                    }
                }
                break

            case 'bard':
            case 'bardai':
            case 'gemini':
                {
                    if (!checkLimit(m.sender, limitCost2)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost2}`);
                    }
                    if (!text) return reply('Mau Nanya Apa Sayang?');
                    try {
                        let aii = await fetchJson(`https://api.betabotz.eu.org/api/search/bard-ai?text=${text}&apikey=${btz}`);
                        reply(aii.message);
                    } catch (err) {
                        console.error(err);
                        reply(message.error);
                    }
                decreaseLimit(m.sender, limitCost2);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost2} limit terpakai\nSisa limit: ${remainingLimit}`);
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
                        beta.sendMessage(m.chat, { image: response.data }, { quoted: m });
                    } catch (err) {
                        reply(global.message.error);
                    }
                }
                break

            //Asupan
            case 'asupan':
                {
                    if (!checkLimit(m.sender, limitCost)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost}`);
                    }
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
                        beta.sendMessage(m.chat, { video: response.data }, { quoted: m });
                    } catch (e) {
                        console.log(e);
                        reply(global.message.error);
                    }
                }
                break
            case 'douyinasupan':
            case 'asupandouyin': {
                await loading();
                let res = await fetch(`https://api.betabotz.eu.org/api/asupan/douyin?apikey=${btz}`)
                if (!res.ok) throw await res.text();
                let mp4 = await res.buffer();
                beta.sendFile(m.chat, mp4, 'asupandouyin.mp4', `*DONE*`, m)
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
                        beta.sendMessage(m.chat, { image: response.data }, { quoted: m });
                    } catch (err) {
                        reply(global.message.error);
                    }
                }
                break
                
                
                
//MAKE BY PASYAGANZ

case 'tekateki': {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'WhatsApp Bot/1.0'
            }
        };

        const response = await fetch(`https://api.betabotz.eu.org/api/game/tekateki?apikey=${btz}`, options);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (Array.isArray(data)) {
            const randomRiddle = data[Math.floor(Math.random() * data.length)];
            if (randomRiddle.status && randomRiddle.data) {
                const riddle = `🎮 *TEKA-TEKI*\n\n*Pertanyaan:* ${randomRiddle.data.pertanyaan}\n\n_Ketik *.jawab <jawaban kamu>* untuk menjawab_`;
                
                global.tekateki = global.tekateki || {};
                global.tekateki[m.chat] = randomRiddle.data.jawaban.toLowerCase();
                
                m.reply(riddle);
            } else {
                m.reply('❌ Format data tidak valid');
            }
        } else if (data.status && data.data) {
            const riddle = `🎮 *TEKA-TEKI*\n\n*Pertanyaan:* ${data.data.pertanyaan}\n\n_Ketik *.jawab <jawaban kamu>* untuk menjawab_`;
            
            global.tekateki = global.tekateki || {};
            global.tekateki[m.chat] = data.data.jawaban.toLowerCase();
            
            m.reply(riddle);
        } else {
            m.reply('❌ Format response tidak valid');
        }
    } catch (error) {
        console.error('Error in tekateki:', error);
        m.reply(`❌ Terjadi kesalahan: ${error.message}`);
    }
    break;
}

case 'jawab': {
    if (!global.tekateki || !global.tekateki[m.chat]) {
        return m.reply('❌ Tidak ada teka-teki aktif saat ini\n\nKetik *.tekateki* untuk mendapatkan pertanyaan baru');
    }

    if (!args.length) {
        return m.reply('❌ Mohon masukkan jawaban anda\n\nContoh: *.jawab sapiderman*');
    }

    const answer = args.join(' ').toLowerCase().trim();
    const correctAnswer = global.tekateki[m.chat];

    if (answer === correctAnswer) {
        delete global.tekateki[m.chat];
        m.reply('🎉 *Selamat!* Jawaban kamu benar!\n\nKetik *.tekateki* untuk mendapatkan pertanyaan baru');
    } else {
        m.reply('❌ Jawaban salah, coba lagi!');
    }
    break;
}



case 'limit': {
    const userLimit = getLimit(m.sender)
    reply(`Limit kamu tersisa: ${userLimit.limit}`)
    break
}


case 'mining':
case 'mine': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    if (getLimit(sender) < 2) return reply(`Limit kamu tidak cukup, minimal 2 limit untuk menggunakan fitur ini`)
    decreaseLimit(sender, 2)
    
    if (!miningSystem.canMine(sender)) {
        const timeLeft = miningSystem.getMiningData(sender).lastMined + 300000 - Date.now();
        return reply(`⏳ Anda harus menunggu ${Math.ceil(timeLeft/1000)} detik sebelum bisa mining lagi!`);
    }
    
    const result = miningSystem.mine(sender);
    reply(`🎉 Selamat! Anda mendapatkan ${result.amount}x ${result.item} dari hasil mining!`);
break
}


case 'adventure':
case 'petualang': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    if (getLimit(sender) < 3) return reply(`Limit kamu tidak cukup, minimal 3 limit untuk menggunakan fitur ini`)
    decreaseLimit(sender, 3)
    
    if (!text) return reply(`🗺️ Pilih lokasi petualangan:

- forest (Hutan) 🌲
- cave (Gua) 🕳️
- mountain (Gunung) ⛰️`)
    
    if (!adventureSystem.canAdventure(sender)) {
        const timeLeft = adventureSystem.getAdventureData(sender).lastAdventure + 600000 - Date.now();
        return reply(`⏳ Anda harus menunggu ${Math.ceil(timeLeft/1000)} detik sebelum bisa berpetualang lagi!`);
    }
    
    const result = adventureSystem.adventure(sender, text.toLowerCase());
    if (!result) return reply('❌ Lokasi tidak valid!');
    
    let message = `🗺️ Hasil Petualangan di ${text}:\n`;
    message += `➣ Mendapatkan: ${result.item}\n`;
    message += `➣ Mengalahkan: ${result.monster}\n`;
    message += `➣ EXP: +${result.exp}`;
    
    if (result.levelUp) {
        message += `\n\n🎉 Selamat! Level Up!`;
    }
    
    reply(message);
break
}


case 'inventory':
case 'inv': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    
    const inv = inventorySystem.getInventoryData(sender);
    let message = `📋 Inventory ${pushname}\n\n`;
    message += `💰 Koin: ${inv.coins}\n\n`;
    message += `📦 Items:\n`;
    
    for (const [item, quantity] of Object.entries(inv.items)) {
        message += `➣ ${item}: ${quantity}\n`;
    }
    
    reply(message);
break
}

case 'shop':
case 'toko': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    if (getLimit(sender) < 1) return reply(`Limit kamu tidak cukup, minimal 1 limit untuk menggunakan fitur ini`)
    decreaseLimit(sender, 1)
    
    let message = `🏪 RPG Shop\n\n`;
    for (const [item, data] of Object.entries(inventorySystem.shopItems)) {
        message += `➣ ${item}\n`;
        message += `   💰 Harga: ${data.price} koin\n`;
        message += `   📝 Info: ${data.description}\n\n`;
    }
    message += `\nCara membeli: .buy <item> <jumlah>`;
    
    reply(message);
break
}


case 'buy':
case 'beli': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    
    if (!text) return reply(`❌ Format salah!\nContoh: .buy health_potion 2`);
    
    const [item, amount] = text.split(' ');
    const quantity = parseInt(amount) || 1;
    
    const result = inventorySystem.buyItem(sender, item, quantity);
    reply(result.message);
break
}


case 'sell':
case 'jual': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    
    if (!text) return reply(`❌ Format salah!\nContoh: .sell stone 5`);
    
    const [item, amount] = text.split(' ');
    const quantity = parseInt(amount) || 1;
    
    const result = inventorySystem.sellItem(sender, item, quantity);
    reply(result.message);
break
}


case 'level':
case 'lvl': {
    if (!m.isGroup) return reply('Perintah Ini Hanya Bisa Diakses Di Group')
    
    const userData = adventureSystem.getAdventureData(sender);
    let message = `📊 Status ${pushname}\n\n`;
    message += `➣ Level: ${userData.level}\n`;
    message += `➣ EXP: ${userData.exp}/${userData.level * 100}\n`;
    message += `➣ Progress: ${Math.floor((userData.exp/(userData.level * 100)) * 100)}%`;
    
    reply(message);
break
}
//=====================================================================

case 'terabox':
{
    if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
    await loading();
    
    try {
        let api = await fetch(`https://api.betabotz.eu.org/api/download/terabox?url=${args[0]}&apikey=${btz}`)
        let response = await api.json();
        
        if (!response.status || !response.result) {
            return reply('Gagal mengambil data dari Terabox!')
        }

        let sortedFiles = response.result.sort((a, b) => 
            new Date(a.created) - new Date(b.created)
        );

        let summary = `*TERABOX DOWNLOADER*\n\nDitemukan ${sortedFiles.length} file:\n`;
        sortedFiles.forEach((file, index) => {
            const size = parseInt(file.files[0].size);
            const sizeInMB = (size / (1024 * 1024)).toFixed(2);
            summary += `\n${index + 1}. ${file.name} (${sizeInMB} MB)`;
        });
        
        await beta.sendMessage(m.chat, { text: summary }, { quoted: m });

        for (let file of sortedFiles) {
            const fileUrl = file.files[0].url;
            const fileName = file.name.toLowerCase();
            
            if (fileName.endsWith('.mp4')) {
                await beta.sendMessage(m.chat, {
                    video: {
                        url: fileUrl
                    },
                    caption: `SUCCES : ${file.name}`
                }, {
                    quoted: m
                });
            } 
            else if (fileName.endsWith('.jpg') || fileName.endsWith('.jpeg') || fileName.endsWith('.png')) {
                await beta.sendMessage(m.chat, {
                    image: {
                        url: fileUrl
                    },
                    caption: `SUCCES : ${file.name}`
                }, {
                    quoted: m
                });
            }
            else {
                await beta.sendMessage(m.chat, {
                    document: {
                        url: fileUrl
                    },
                    mimetype: 'application/octet-stream',
                    fileName: file.name,
                    caption: `SUCCES : ${file.name}`
                }, {
                    quoted: m
                });
            }
        }
    } catch (error) {
        console.error('Error:', error);
        reply('Terjadi kesalahan saat mengunduh file dari Terabox!');
    }
}
break

//Yang bAwah Stiker random dari API (©by PasyaGanz)


case 'stikamong': {
    await loading();
    try {
        let res = await fetch(`https://api.betabotz.eu.org/api/sticker/among?apikey=${btz}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        let buffer = await res.buffer();
        
        const stiker = await createSticker(buffer, { 
            pack: 'Among Sticker', 
            author: 'BetaBotz' 
        });
        
        await beta.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
    } catch (error) {
        m.reply(`Error stikamong: ${error.message}`);
    }
}
break;

case 'stikanime': {
    await loading();
    try {
        let res = await fetch(`https://api.betabotz.eu.org/api/sticker/anime?apikey=${btz}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        let buffer = await res.buffer();
        
        const stiker = await createSticker(buffer, { 
            pack: 'Anime Sticker', 
            author: 'BetaBotz' 
        });
        
        await beta.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
    } catch (error) {
        m.reply(`Error stikanime: ${error.message}`);
    }
}
break;

case 'stikbucin': {
    await loading();
    try {
        let res = await fetch(`https://api.betabotz.eu.org/api/sticker/bucin?apikey=${btz}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        let buffer = await res.buffer();
        
        const stiker = await createSticker(buffer, { 
            pack: 'Bucin Sticker', 
            author: 'BetaBotz' 
        });
        
        await beta.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
    } catch (error) {
        m.reply(`Error stikbucin: ${error.message}`);
    }
}
break;

case 'stikrabbit': {
    await loading();
    try {
        let res = await fetch(`https://api.betabotz.eu.org/api/sticker/rabbit?apikey=${btz}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        let buffer = await res.buffer();
        
        const stiker = await createSticker(buffer, { 
            pack: 'Rabbit Sticker', 
            author: 'BetaBotz' 
        });
        
        await beta.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
    } catch (error) {
        m.reply(`Error stikrabbit: ${error.message}`);
    }
}
break;

case 'stikmanusialidi': {
    await loading();
    try {
        let res = await fetch(`https://api.betabotz.eu.org/api/sticker/manusialidi?apikey=${btz}`);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        
        let buffer = await res.buffer();
        
        const stiker = await createSticker(buffer, { 
            pack: 'Manusia Lidi Sticker', 
            author: 'BetaBotz' 
        });
        
        await beta.sendMessage(m.chat, { sticker: stiker }, { quoted: m });
    } catch (error) {
        m.reply(`Error stikmanusialidi: ${error.message}`);
    }
}
break;

//nanti lagi yak mau di tambahin sabar aja

//Cerpen By PasyaGanz (PASYA)

case 'cerpenremaja': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=remaja&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Remaja*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenanak': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=anak&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Anak*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenmisteri': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=misteri&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Misteri*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpencinta': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=cinta&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Cinta*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenbudaya': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=budaya&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Budaya*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenromantis': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=romantis&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Romantis*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpengalau': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=galau&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Galau*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpeninspirasi': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=inspiratif&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Inspiratif*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenkehidupan': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=kehidupan&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Kehidupan*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis :* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

case 'cerpenkorea': {
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/story/cerpen?type=korea&apikey=${btz}`)
    if (!res.ok) throw await res.text();
    let data = await res.json();
    let cerpen = data.result;
    let caption = `📖 *Cerpen Korea*\n\n` +
                 `*Judul:* ${cerpen.title}\n` +
                 `*Penulis:* ${cerpen.author}\n` +
                 `*Kategori:* ${cerpen.kategori}\n` +
                 `*Tanggal:* ${cerpen.lolos}\n\n` +
                 `${cerpen.cerita}`;
    beta.sendMessage(m.chat, { text: caption }, { quoted: m });
}
break

//======================================================================================\\


case 'ttp': {
    if (!text) return m.reply('Masukkan teks! Contoh: #ttp Hello World');
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/maker/ttp?text=${encodeURIComponent(text)}&apikey=${btz}`);
    if (!res.ok) throw await res.text();
    let imageBuffer = await res.buffer();

    let webpBuffer = await sharp(imageBuffer).webp().toBuffer();

    beta.sendFile(m.chat, webpBuffer, 'ttp.webp', '', m, {
        asSticker: true,
    });
}
break;

case 'attp': {
    if (!text) return m.reply('Masukkan teks! Contoh: #attp Hello World');
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/maker/attp?text=${encodeURIComponent(text)}&apikey=${btz}`);
    if (!res.ok) throw await res.text();
    let imageBuffer = await res.buffer();

    let webpBuffer = await sharp(imageBuffer).webp().toBuffer();

    beta.sendFile(m.chat, webpBuffer, 'attp.webp', '', m, {
        asSticker: true, 
    });
}
break;

case 'brat': {
    if (!text) return m.reply('Masukkan teks! Contoh: #brat Hello World');
    await loading();
    let res = await fetch(`https://api.betabotz.eu.org/api/maker/brat?text=${encodeURIComponent(text)}&apikey=${btz}`);
    if (!res.ok) throw await res.text();
    let imageBuffer = await res.buffer();

    let webpBuffer = await sharp(imageBuffer).webp().toBuffer();

    beta.sendFile(m.chat, webpBuffer, 'brat.webp', '', m, {
        asSticker: true, 
    });
}
break;


//===============================================================================================\\

            // Download © JERO BAIK
            case 'download':
            case 'down':
            case 'dl':
                {
                    if (!args[0]) return reply(`Masukan Url Dari, tiktok, youtube, ig, twiter, facebook, likee, snackvideo, dll\n\nexample : ${prefix + command} https://vt.tiktok.com/ZSYS43UoK/`)
                    await loading();
                    try {
                        let apii = await fetch(`https://api.betabotz.eu.org/api/download/allin?url=${args[0]}&apikey=${btz}`)
                        let betaku = await apii.json();
                        let response = betaku.result.medias.map(({ url }) => url);
                        const jumlahTotal = response.length;
                        if (jumlahTotal > 0) {
                            for (let i = 0; i < jumlahTotal; i++) {
                                beta.sendFile(m.chat, response[i], null, 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
                            }
                        }
                    } catch (e) {
                        console.log(e)
                        reply(`TERJADI KESALAHAN`)
                    }
                }
                break
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
                            quoted: m
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
            case 'gdrive': {
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
            case 'spotify': {
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
            case 'ytmp4': {
            if (!checkLimit(m.sender, limitCost2)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost2}`);
                    }
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
                    mp4,
                    size,
                    quality
                } = betaku.result

                beta.sendMessage(m.chat, {
                    document: {
                        url: mp4
                    },
                    caption: 'SUCCES : RESULT FROM api.betabotz.eu.org',
                    mimetype: 'video/mp4'
                }, {
                    quoted: m
                })
            decreaseLimit(m.sender, limitCost2);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost2} limit terpakai\nSisa limit: ${remainingLimit}`);
                    }
                break
            case 'ytmp3': {
                if (!checkLimit(m.sender, limitCost2)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost2}`);
                    }
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
                    mp3,
                    size
                } = betaku.result

                beta.sendMessage(m.chat, {
                    audio: {
                        url: mp3
                    },
                    mimetype: "audio/mpeg",
                    ptt: true
                }, {
                    quoted: m
                })
            decreaseLimit(m.sender, limitCost2);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost2} limit terpakai\nSisa limit: ${remainingLimit}`);
                    }
                break
            case 'fbvid':
            case 'fbvideo':
            case 'facebook':
            case 'fb': {
            if (!checkLimit(m.sender, limitCost)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost}`);
                    }
                if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
                await loading();
                let api = await fetch(`https://api.betabotz.eu.org/api/download/fbdown?url=${args[0]}&apikey=${btz}`)
                let betaku = await api.json();
                beta.sendMessage(m.chat, {
                    video: {
                        url: betaku.result[1]._url
                    },
                    caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
                }, {
                    quoted: m
                })
            decreaseLimit(m.sender, limitCost);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost} limit terpakai\nSisa limit: ${remainingLimit}`);
                    }
                break
            case 'tt':
            case 'tiktok':
                {
                    if (!checkLimit(m.sender, limitCost)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost}`);
                    }
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
                            quoted: m
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
                    decreaseLimit(m.sender, limitCost);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost} limit terpakai\nSisa limit: ${remainingLimit}`);
                    }
                break
            case 'tiktokslide':
            case 'tiktokimg':
                {
                    if (!checkLimit(m.sender, limitCost)) {
                        const userLimit = getLimit(m.sender);
                        return reply(`Limit kamu tidak cukup!\nLimit tersisa: ${userLimit.limit}\nLimit yang dibutuhkan: ${limitCost}`);
                    }
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
                decreaseLimit(m.sender, limitCost);
                    const remainingLimit = getLimit(m.sender).limit;
                    reply(`Berhasil ${limitCost} limit terpakai\nSisa limit: ${remainingLimit}`);
                    }
                break
            case 'igdl':
            case 'ig':
            case 'igvideo':
            case 'igreels':
            case 'igstory':
            case 'instagram':
            case 'igvideo': {
                if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
                await loading();
                let api = await fetch(`https://api.betabotz.eu.org/api/download/igdowloader?url=${args[0]}&apikey=${btz}`)
                let betaku = await api.json();
                for (let i of betaku.message) {
                    beta.sendFile(m.chat, i._url, 'beta.mp4', 'SUCCES : RESULT FROM api.betabotz.eu.org', m)
                }
            }
                break
            case 'mediafire': {
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
            case 'soundcloud': {
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
            case 'xnxxdl': {
                if (!args[0]) return reply(`Input Parameter Url Dari ${command}\n\nExample : ${prefix + command} Url`)
                await loading();
                let urls = `https://api.betabotz.eu.org/api/download/xnxxdl?url=${args[0]}&apikey=${btz}`
                let response = await axios(urls);
                let data = response.data.result;
                let txt = '*[ XNXX DL ]*\n\n'
                txt += `*TITLE :* ${data.title}\n`
                txt += `*QUALITY :* ${data.quality}\n`
                txt += `*VIEWS :* ${data.views}\n\n`
                txt += '> VIDEO SEDANG DI KIRIM'
                beta.sendMessage(m.chat, {
                    image: {
                        url: data.thumb
                    },
                    caption: txt,
                    mentions: [m.sender]
                }, {
                    quoted: m
                })

                await beta.sendMessage(m.chat, {
                    video: {
                        url: data.url
                    },
                    caption: 'SUCCESS',
                    mentions: [m.sender]
                }, {
                    quoted: m
                })
            }
                break
            case 'song':
            case 'ytvid':
            case 'play':
            case 'ytplay': {
                if (!text) return reply(`Example : ${prefix + command} Pesan Terakhir - Speed Up`)
                await loading()
                let yts = require("youtube-yts")
                let search = await yts(`${text}`)
                //let search = searchh.videos[Math.floor(Math.random(), searchh.videos.length)]
                let caption = `*YOUTUBE PLAY*

ID : ${search.all[0].videoId}
Title : ${search.all[0].title}
Views : ${search.all[0].views}
Duration : ${search.all[0].timestamp}
Channel : ${search.all[0].author.name}
Channel : ${search.all[0].ago}
Upload : ${search.all[0].ago}
URL Video : ${search.videos[0].url}
Description : ${search.videos[0].description}
`
beta.sendMessage(m.chat, {
	image: {
		url: search.all[0].image
	},
	caption: caption
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
                        await beta.sendMessage(m.chat, { image: { url: img.result } }, { quoted: m });
                    } catch (e) {
                        reply(message.error);
                    }
                }
                break

            case 'ttp':
                {
                    try {
                        if (!text) return reply('Textnya Mana?');
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
                    if (text > 25) return m.reply(`Contoh :

1. Kirim perintah ${prefix + command} *teks*
	 Contoh : ${prefix + command} LU KONTOL

Maksimal 25 karakter`)
                    let teks = m.quoted ? quoted.text : text
                    try {
                        try {
                            pic = await beta.profilePictureUrl(m.sender, 'image')
                        } catch {
                            pic = 'https://telegra.ph/file/c3f3d2c2548cbefef1604.jpg'
                        }
                        const obj = {
                            "type": "quote",
                            "format": "png",
                            "backgroundColor": "#FFFFFF",
                            "width": 512,
                            "height": 768,
                            "scale": 2,
                            "messages": [{
                                "entities": [],
                                "avatar": true,
                                "from": {
                                    "id": 1,
                                    "name": pushname,
                                    "photo": {
                                        "url": pic
                                    }
                                },
                                "text": teks,
                                "replyMessage": {}
                            }]
                        }
                        const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })
                        const buffer = Buffer.from(json.data.result.image, 'base64')
                        beta.sendImageAsSticker(m.chat, buffer, m, {
                            packname: global.packname, author: global.author
                        })    //m.reply(util.format(json.data.result.image))
                    } catch (e) {
                        console.log(e)
                        reply(`${e}\n\nServer sedang eror, coba lagi tahun depan`)
                    }
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
                    } catch (err) {
                        console.log(err);
                        reply(message.error);
                    }
                }
                break

            //search
            case 'pinterest':
            case 'pin': {
                if (!text) return reply(`Contoh penggunaan: ${prefix + command} JKT48`)
                try {
                    await loading();
                    let response = await axios.get(`https://api.betabotz.eu.org/api/search/pinterest?text1=${text}&apikey=${btz}`);
                    let data = response.data.result;
                    let Random = Math.floor(Math.random() * data);
                    let res = data[Random];
                    beta.sendMessage(m.chat, {
                        image: {
                            url: res
                        },
                        caption: 'DONE'
                    }, {
                        quoted: m
                    })
                } catch (e) {
                    console.log(e)
                }
            }
                break
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
            case 'tiktoksearch': {
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
            case 'lyrics':
            case 'lirik': {
                if (!args[0]) return reply(`Input Pencarian\n\nExample : ${prefix + command} Pesan Terakhir`)
                await loading();
                let api = `https://api.betabotz.eu.org/api/search/lirik?lirik=${args[0]}&apikey=${btz}`
                let response = await axios(api);
                let txt = ''
                txt += `*[ LIRIK LAGU ]*\n\n`
                txt += `> JUDUL : ${response.data.result.title}\n`
                txt += `> ARTIST : ${response.data.result.artist}\n\n`
                txt += `> LIRIK : ${response.data.result.lyrics}\n\n> RESULT FROM : api.betabotz.eu.org`
                beta.sendMessage(m.chat, {
                    image: {
                        url: response.data.result.image
                    },
                    caption: txt
                }, {
                    quoted: m
                })
            }
                break
            case 'xnxxsearch': {
                if (!args[0]) return reply(`Tobat Woi\n\nexample : ${prefix + command} Cara ngentod yang brutal`)
                await loading();
                let urls = await `https://api.betabotz.eu.org/api/search/xnxx?query=${args[0]}&apikey=${btz}`
                let api = await fetch(urls);
                let betaku = await api.json();
                let data = betaku.result;
                let txt = ''
                data.forEach(function (i) {
                    txt += '\n\n*[ XNXX SEARCH ]*\n\n'
                    txt += `*TITLE :* ${i.title}\n`
                    txt += `*VIEWS :* ${i.views}\n`
                    txt += `*QUALITY :* ${i.quality}\n`
                    txt += `*DURASI :* ${i.duration}\n`
                    txt += `*URL :* ${i.link}`
                        .trim()
                })
                beta.sendMessage(m.chat, {
                    image: {
                        url: data[0].thumb
                    },
                    caption: txt,
                    mentions: [m.sender]
                }, {
                    quoted: m
                })
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
                    } catch (e) {
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
                    } catch (e) {
                        console.log(e)
                        reply(message.error);
                    }
                }
                break
            case 'mlstalk':
            case 'stalkml': {
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
                }, {
                    quoted: m
                })
            }
                break
            case 'ffstalk':
            case 'stalkff':
            case 'cekidff': {
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
            case 'recolor':
                {
                    if (!quoted) return reply(`Fotonya Mana?`)
                    if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
                    let media = await quoted.download()
                    let img = await uploadImage(media)
                    await loading();
                    let api = `https://api.betabotz.eu.org/api/tools/recolor?url=${img}&apikey=${btz}`
                    let response = await axios(api);
                    let buffer = response.data.result;
                    beta.sendMessage(m.chat, {
                        image: {
                            url: buffer
                        },
                        caption: 'SUCCES : RESULT FROM api.betabotz.eu.org'
                    }, {
                        quoted: m
                    })
                }
                break
            case 'hd4':
            case 'hdr4':
            case 'remini4': {
                if (!quoted) return reply(`Fotonya Mana?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
                let media = await quoted.download();
                let img = await uploadImage(media);
                await loading();
                const urls = `https://api.betabotz.eu.org/api/tools/remini-v4?url=${img}&resolusi=16&apikey=${btz}`;
                let response = await axios.get(urls);
                const buffer = response.data.url;
                alpha.sendMessage(m.chat, {
                    image: {
                        url: buffer
                    },
                    caption: 'DONE'
                }, {
                    quoted: m
                });
            }

            // TOOLS
            case 'whatmusic':
            case 'whatmusik': {
                if (!args[0]) return reply(`Input Parameter Url Yang Ingin Di Tanyakan\n\nExample : ${prefix + command} Url`)
                await loading();
                let api = await fetch(`https://api.betabotz.eu.org/api/tools/whatmusic?url=${args[0]}&apikey=${btz}`)
                let betaku = await api.json();
                reply(betaku.result);
            }
                break
            case 'removebg':
            case 'snobg': {
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
            case 'tinyurl': {
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
                case 'tourl':{
                	if (!quoted) return reply(`Fotonya Mana?`)
                if (!/image/.test(mime)) return reply(`Send/Reply Foto Dengan Caption ${prefix + command}`)
                await loading();
                let media = await quoted.download();
                let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
                let img = await (isMedia ? uploadImage : uploadImage)(media)
                reply(`${img}`)
                }
                break
            // INFORMATION 
            case 'gempa': {
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
            case 'surah': {
                if (!args[0]) return reply(`Input Surah\n\nExample : ${prefix + command} 6`)
                await loading();
                let url = `https://api.betabotz.eu.org/api/muslim/surah?no=${args[0]}&apikey=${btz}`
                let response = await axios(url)
                let data = response.data.result;
                let txt = ''
                data.forEach(function (res) {
                    txt += `ARAB : ${res.arab}\n`
                    txt += `RUMI : ${res.rumi}\n`
                    txt += `LATIN : ${res.latin}\n\n`
                    txt += `> = = = = = = = = = =\n\n`
                })
                reply(txt)
            }

                break
            // CEK KEY API
            case 'cekapi': {
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
                translate(teks, {
                    to:
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
                await beta.sendMessage(m.chat, {
                    text: `${menunya(run, mode, jam, tanggal, owner, prefix)}`,
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
                }, { quoted: m })
            }
                break
            case 'simi':
                let url = `https://api.betabotz.eu.org/api/search/simisimi?query=${command}&apikey=${btz}`
                let response = await axios.get(url)
                m.reply(response.data.result)
                break

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

        if (budy.startsWith('=> ')) {
            if (!m.key.fromMe && !isCreator) return

            function Return(sul) {
                sat = JSON.stringify(sul, null, 2)
                bang = util.format(sat)
                if (sat == undefined) {
                    bang = util.format(sul)
                }
                return reply(bang)
            }
            try {
                reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
            } catch (e) {
                reply(util.format(e))
            }
        }

        if (budy.startsWith('< ')) {
            if (!m.key.fromMe && !isCreator) return
            try {
                return reply(JSON.stringify(eval(`${args.join(' ')}`), null, '\t'))
            } catch (e) {
                reply(util.format(e))
            }
        }

        if (budy.startsWith('$ ')) {
            if (!m.key.fromMe && !isCreator) return
            mengtermuk = budy.slice(2)
            exec(mengtermuk, (err, stdout) => {
                if (err) return reply(err)
                if (stdout) return reply(`*${namaowner}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
            })
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
