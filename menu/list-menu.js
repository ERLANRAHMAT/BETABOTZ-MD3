const chalk = require('chalk')
const fs = require('fs')

/*
Menu Non Api
*/
global.listgroup = (prefix) =>{
	return `
> • ${prefix}add
> • ${prefix}antilink
> • ${prefix}antilink2
> • ${prefix}antiwame
> • ${prefix}antiwame2
> • ${prefix}demote
> • ${prefix}group
> • ${prefix}hidetag
> • ${prefix}kick
> • ${prefix}linkgc
> • ${prefix}promote
> • ${prefix}revoke
> • ${prefix}sendlinkgc
> • ${prefix}setdesk
> • ${prefix}setnamegc
> • ${prefix}tagall

`
}

global.listinfo = (prefix) =>{
	return `
> • ${prefix}grupbot
> • ${prefix}owner
> • ${prefix}runtime
> • ${prefix}sc
> • ${prefix}tqto

`
}

global.listowner = (prefix) =>{
	return `
> • ${prefix}anticall
> • ${prefix}delete
> • ${prefix}join
> • ${prefix}out 
> • ${prefix}public
> • ${prefix}self

`
}

/*
From Api
*/
global.listai = (prefix) =>{
	return `
> • ${prefix}ai
> • ${prefix}ailogic
> • ${prefix}aiimg
> • ${prefix}bard
> • ${prefix}bardimg
`
}

global.listanime = (prefix) =>{
	return `
> • ${prefix}akira
> • ${prefix}akiyama
> • ${prefix}ana
> • ${prefix}asuna
> • ${prefix}ayuzawa
> • ${prefix}boruto
> • ${prefix}chiho
> • ${prefix}chitoge
> • ${prefix}deidara
> • ${prefix}doraemon
> • ${prefix}eba
> • ${prefix}elaina
> • ${prefix}emilia
> • ${prefix}erza
> • ${prefix}gremory
> • ${prefix}hestia
> • ${prefix}hinata
> • ${prefix}inori
> • ${prefix}isuzu
> • ${prefix}itachi
> • ${prefix}itori
> • ${prefix}kaga
> • ${prefix}kagura
> • ${prefix}kaneki
> • ${prefix}kaori
> • ${prefix}kotori
> • ${prefix}kurumi
> • ${prefix}loli
> • ${prefix}madara
> • ${prefix}megumin
> • ${prefix}miku
> • ${prefix}mikasa
> • ${prefix}minato
> • ${prefix}naruto
> • ${prefix}nezuko
> • ${prefix}rize
> • ${prefix}sagiri
> • ${prefix}sakura
> • ${prefix}sasuke
> • ${prefix}shina
> • ${prefix}shinka
> • ${prefix}shinomiya
> • ${prefix}shizuka
> • ${prefix}shota
> • ${prefix}tejina
> • ${prefix}toukachan
> • ${prefix}tsunade
> • ${prefix}umaru
> • ${prefix}waifu
> • ${prefix}yotsuba
> • ${prefix}yumeko
> • ${prefix}yuri
`
}

global.listasupan = (prefix) =>{
	return `
> • ${prefix}asupan
`
}

global.listcecan = (prefix) =>{
	return `
> • ${prefix}china
> • ${prefix}hijaber
> • ${prefix}indonesia
> • ${prefix}jeni
> • ${prefix}japan
> • ${prefix}jiso
> • ${prefix}justinaxie
> • ${prefix}korea
> • ${prefix}malaysia
> • ${prefix}rose
> • ${prefix}ryujin
> • ${prefix}thailand
> • ${prefix}vietnam
`
}

global.listdownload = (prefix) =>{
	return `
> • ${prefix}capcut
> • ${prefix}pindl
> • ${prefix}pinterestdl
> • ${prefix}threads
> • ${prefix}douyin
> • ${prefix}douyinslide
> • ${prefix}douyinimg
> • ${prefix}gdrive
> • ${prefix}spotify
> • ${prefix}ytmp4
> • ${prefix}ytmp3
> • ${prefix}fbvid
> • ${prefix}fbvideo
> • ${prefix}facebook
> • ${prefix}fb
> • ${prefix}tt
> • ${prefix}tiktok
> • ${prefix}ig
> • ${prefix}igvideo
> • ${prefix}igreels
> • ${prefix}igstory
> • ${prefix}instagram
> • ${prefix}mediafire
> • ${prefix}soundcloud
`
}

global.listemoji = (prefix) =>{
	return `
> • ${prefix}stikapple
> • ${prefix}stikkddi
> • ${prefix}stikgoogle
> • ${prefix}stikdocomo
> • ${prefix}stiksoftbank
> • ${prefix}stikhtc
> • ${prefix}stikmozilla
> • ${prefix}stiklg
> • ${prefix}stikopenmoji
> • ${prefix}stikemojipedia
> • ${prefix}stikjoypixels
> • ${prefix}stikfacebook
> • ${prefix}stikskype
> • ${prefix}stikwhatsapp
> • ${prefix}stiktwitter
> • ${prefix}stiksamsung
> • ${prefix}stikmicrosoft
`
}

global.listephoto = (prefix) =>{
	return `
> • ${prefix}ytgold
> • ${prefix}ytsilver
> • ${prefix}iggold
> • ${prefix}igsilver
> • ${prefix}fbgold
> • ${prefix}fbsilver
> • ${prefix}twtgold
> • ${prefix}twtsilver
> • ${prefix}televisi
> • ${prefix}glasses
> • ${prefix}blackpink
> • ${prefix}blackpink2
> • ${prefix}coverpubg
> • ${prefix}greenbrush
> • ${prefix}eraser
> • ${prefix}dragonfire
> • ${prefix}incandescent
> • ${prefix}typography
> • ${prefix}typography2
> • ${prefix}cloth
> • ${prefix}grafitti
> • ${prefix}galaxy
> • ${prefix}blueneon
> • ${prefix}nightstars
> • ${prefix}cloud
> • ${prefix}papercut
> • ${prefix}horor
> • ${prefix}sunlight
> • ${prefix}pig
`
}

global.listmaker = (prefix) =>{
	return `
> • ${prefix}carbon
> • ${prefix}ttp
> • ${prefix}sticker
> • ${prefix}s
> • ${prefix}stickergif
> • ${prefix}sgif
> • ${prefix}smeme
> • ${prefix}stickmeme
> • ${prefix}stikmeme
> • ${prefix}stickermeme
> • ${prefix}stikermeme
> • ${prefix}toanime
> • ${prefix}jadianime
> • ${prefix}tozombie
> • ${prefix}jadizombie
> • ${prefix}togta
> • ${prefix}jadigta
> • ${prefix}qc
`
}
global.listnsfw = (prefix) =>{
	return `
> • ${prefix}gay
> • ${prefix}ahegao
> • ${prefix}ass
> • ${prefix}bdsm
> • ${prefix}blowjob
> • ${prefix}cuckold
> • ${prefix}cum
> • ${prefix}ero
> • ${prefix}femdom
> • ${prefix}foot
> • ${prefix}gangbang
> • ${prefix}glasses
> • ${prefix}hentai
> • ${prefix}gifs
> • ${prefix}jahy
> • ${prefix}manga
> • ${prefix}masturbation
> • ${prefix}neko
> • ${prefix}neko2
> • ${prefix}orgy
> • ${prefix}panties
> • ${prefix}pussy
> • ${prefix}tentacles
> • ${prefix}yuri
> • ${prefix}thighs
> • ${prefix}zettai
`
}
global.listphotooxy = (prefix) =>{
	return `
> • ${prefix}bevel-text
> • ${prefix}luxury
> • ${prefix}flaming
> • ${prefix}underwater
> • ${prefix}shadow-sky
> • ${prefix}wolf-metal
> • ${prefix}metallic
> • ${prefix}metallic2
> • ${prefix}burn-paper
> • ${prefix}naruto
> • ${prefix}3d-summer
> • ${prefix}under-grass
> • ${prefix}smoke
> • ${prefix}flower-typography
> • ${prefix}picture-of-love
> • ${prefix}hello-kitty
> • ${prefix}coffe-cup
> • ${prefix}butterfly
> • ${prefix}night-sky
> • ${prefix}carved-wood
> • ${prefix}sweet-candy
`
}
global.listsearch = (prefix) =>{
	return `
> • ${prefix}jarak
> • ${prefix}tiktoksearch
`
}

global.liststalk = (prefix) =>{
	return `
> • ${prefix}igstalk
> • ${prefix}ttstalk
> • ${prefix}ytstalk
`
}

global.listtools = (prefix) =>{
	return `
> • ${prefix}hd1
> • ${prefix}hd2
> • ${prefix}hd3
> • ${prefix}gempa
> • ${prefix}cekapi
> • ${prefix}whatmusic
> • ${prefix}removebg
> • ${prefix}tinyurl
`

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

