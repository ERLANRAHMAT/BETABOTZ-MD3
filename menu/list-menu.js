const chalk = require('chalk')
const fs = require('fs')

/*
Menu Non Api
*/
global.listgroup = (prefix) =>{
	return `
> • !add
> • !antilink
> • !antilink2
> • !antiwame
> • !antiwame2
> • !demote
> • !group
> • !hidetag
> • !kick
> • !linkgc
> • !promote
> • !revoke
> • !sendlinkgc
> • !setdesk
> • !setnamegc
> • !tagall

`
}

global.listinfo = (prefix) =>{
	return `
> • !grupbot
> • !owner
> • !runtime
> • !sc
> • !tqto

`
}

global.listowner = (prefix) =>{
	return `
> • !anticall
> • !delete
> • !join
> • !out 
> • !public
> • !self

`
}

/*
From Api
*/
global.listai = (prefix) =>{
	return `
> • !ai
> • !ailogic
> • !aiimg
> • !bard
> • !bardimg
> • !bingchat
> • !bingimg
> • !simi
`
}

global.listanime = (prefix) =>{
	return `
> • !akira
> • !akiyama
> • !ana
> • !asuna
> • !ayuzawa
> • !boruto
> • !chiho
> • !chitoge
> • !deidara
> • !doraemon
> • !eba
> • !elaina
> • !emilia
> • !erza
> • !gremory
> • !hestia
> • !hinata
> • !inori
> • !isuzu
> • !itachi
> • !itori
> • !kaga
> • !kagura
> • !kaneki
> • !kaori
> • !kotori
> • !kurumi
> • !loli
> • !madara
> • !megumin
> • !miku
> • !mikasa
> • !minato
> • !naruto
> • !nezuko
> • !rize
> • !sagiri
> • !sakura
> • !sasuke
> • !shina
> • !shinka
> • !shinomiya
> • !shizuka
> • !shota
> • !tejina
> • !toukachan
> • !tsunade
> • !umaru
> • !waifu
> • !yotsuba
> • !yumeko
> • !yuri
`
}

global.listasupan = (prefix) =>{
	return `
> • !asupan
`
}

global.listcecan = (prefix) =>{
	return `
> • !china
> • !hijaber
> • !indonesia
> • !jeni
> • !japan
> • !jiso
> • !justinaxie
> • !korea
> • !malaysia
> • !rose
> • !ryujin
> • !thailand
> • !vietnam
> • !asupandouyin
`
}

global.listdownload = (prefix) =>{
	return `
> • !capcut
> • !pindl
> • !pinterestdl
> • !threads
> • !douyin
> • !douyinslide
> • !douyinimg
> • !gdrive
> • !spotify
> • !play
> • !ytmp4
> • !ytmp3
> • !fbvid
> • !fbvideo
> • !facebook
> • !fb
> • !tt
> • !tiktok
> • !ig
> • !igvideo
> • !igreels
> • !igstory
> • !instagram
> • !mediafire
> • !soundcloud
> • !download
> • !dl
`
}

global.listemoji = (prefix) =>{
	return `
> • !stikapple
> • !stikkddi
> • !stikgoogle
> • !stikdocomo
> • !stiksoftbank
> • !stikhtc
> • !stikmozilla
> • !stiklg
> • !stikopenmoji
> • !stikemojipedia
> • !stikjoypixels
> • !stikfacebook
> • !stikskype
> • !stikwhatsapp
> • !stiktwitter
> • !stiksamsung
> • !stikmicrosoft
`
}

global.listephoto = (prefix) =>{
	return `
> • !ytgold
> • !ytsilver
> • !iggold
> • !igsilver
> • !fbgold
> • !fbsilver
> • !twtgold
> • !twtsilver
> • !televisi
> • !glasses
> • !blackpink
> • !blackpink2
> • !coverpubg
> • !greenbrush
> • !eraser
> • !dragonfire
> • !incandescent
> • !typography
> • !typography2
> • !cloth
> • !grafitti
> • !galaxy
> • !blueneon
> • !nightstars
> • !cloud
> • !papercut
> • !horor
> • !sunlight
> • !pig
`
}

global.listmaker = (prefix) =>{
	return `
> • !carbon
> • !ttp
> • !sticker
> • !s
> • !stickergif
> • !sgif
> • !smeme
> • !stickmeme
> • !stikmeme
> • !stickermeme
> • !stikermeme
> • !toanime
> • !jadianime
> • !tozombie
> • !jadizombie
> • !togta
> • !jadigta
> • !qc
`
}
global.listnsfw = (prefix) =>{
	return `
> • !gay
> • !ahegao
> • !ass
> • !bdsm
> • !blowjob
> • !cuckold
> • !cum
> • !ero
> • !femdom
> • !foot
> • !gangbang
> • !glasses
> • !hentai
> • !gifs
> • !jahy
> • !manga
> • !masturbation
> • !neko
> • !neko2
> • !orgy
> • !panties
> • !pussy
> • !tentacles
> • !yuri
> • !thighs
> • !zettai
`
}
global.listphotooxy = (prefix) =>{
	return `
> • !bevel-text
> • !luxury
> • !flaming
> • !underwater
> • !shadow-sky
> • !wolf-metal
> • !metallic
> • !metallic2
> • !burn-paper
> • !naruto
> • !3d-summer
> • !under-grass
> • !smoke
> • !flower-typography
> • !picture-of-love
> • !hello-kitty
> • !coffe-cup
> • !butterfly
> • !night-sky
> • !carved-wood
> • !sweet-candy
`
}
global.listsearch = (prefix) =>{
	return `
> • !jarak
> • !tiktoksearch
> • !lirik
`
}

global.liststalk = (prefix) =>{
	return `
> • !igstalk
> • !ttstalk
> • !ytstalk
> • !ffstalk
> • !mlstalk
`
}

global.listtools = (prefix) =>{
	return `
> • !hd1
> • !hd2
> • !hd3
> • !gempa
> • !cekapi
> • !whatmusic
> • !removebg
> • !tinyurl
> • !translate
> • !recolor
`

}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

