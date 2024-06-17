/*
   Created By Lann && JerOfc
   Github: https://github.com/ERLANRAHMAT/BETABOTZ-MD3
   Created At: 17 June 2024
   Dont Delete This Watermark and Sell This Code !!!!
*/

const chalk = require('chalk')
const fs = require('fs')

/*
Menu Non Api
*/

global.menu = (run, mode, jam, tanggal) =>{
	return `
       ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
    
> © BetaBotz-Md3
`
}

global.allmenu = (run, mode, jam, tanggal, listall) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ A L L M E N U ｣* ᵡ͟͟͞͞         
   ${listall}
> © BetaBotz-Md3
`
}
global.groupmenu = (run, mode, jam, tanggal, listgroup) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ G R O U P M E N U ｣* ᵡ͟͟͞͞         
   ${listgroup}
> © BetaBotz-Md3
`
}

global.infomenu = (run, mode, jam, tanggal, listinfo) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ I N F O M E N U ｣* ᵡ͟͟͞͞         
   ${listinfo}
> © BetaBotz-Md3
`
}

global.ownermenu = (run, mode, jam, tanggal, listowner) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ O W N E R M E N U ｣* ᵡ͟͟͞͞         
   ${listowner}
> © BetaBotz-Md3
`
}
/*
From Api
*/
global.aimenu = (run, mode, jam, tanggal, listai) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ A I M E N U ｣* ᵡ͟͟͞͞         
   ${listai}
> © BetaBotz-Md3
`
}

global.animemenu = (run, mode, jam, tanggal, listanime) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ A N I M E M E N U ｣* ᵡ͟͟͞͞         
   ${listanime}
> © BetaBotz-Md3
`
}

global.asupanmenu = (run, mode, jam, tanggal, listasupan) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ A S U P A N M E N U ｣* ᵡ͟͟͞͞         
   ${listasupan}
> © BetaBotz-Md3
`
}

global.cecanmenu = (run, mode, jam, tanggal, listcecan) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ C E C A N M E N U ｣* ᵡ͟͟͞͞         
   ${listcecan}
> © BetaBotz-Md3
`
}


global.downloadmenu = (run, mode, jam, tanggal, listdownload) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ D L M E N U ｣* ᵡ͟͟͞͞         
   ${listdownload}
> © BetaBotz-Md3
`
}


global.emojimenu = (run, mode, jam, tanggal, listemoji) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ E M O J I M E N U ｣* ᵡ͟͟͞͞         
   ${listemoji}
> © BetaBotz-Md3
`
}

global.ephotomenu = (run, mode, jam, tanggal, listephoto) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ E P H O T O M E N U ｣* ᵡ͟͟͞͞         
   ${listephoto}
> © BetaBotz-Md3
`
}

global.makermenu = (run, mode, jam, tanggal, listmaker) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ M A K E R M E N U ｣* ᵡ͟͟͞͞         
   ${listmaker}
> © BetaBotz-Md3
`
}

global.nsfwmenu = (run, mode, jam, tanggal, listnsfw) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ N S F W M E N U ｣* ᵡ͟͟͞͞         
   ${listnsfw}
> © BetaBotz-Md3
`
}

global.photooxymenu = (run, mode, jam, tanggal, listphotooxy) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ P H O T O O X Y M E N U ｣* ᵡ͟͟͞͞         
   ${listphotooxy}
> © BetaBotz-Md3
`
}

global.searchmenu = (run, mode, jam, tanggal, listsearch) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ S E A R C H M E N U ｣* ᵡ͟͟͞͞         
   ${listsearch}
> © BetaBotz-Md3
`
}

global.stalkmenu = (run, mode, jam, tanggal, liststalk) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ S T A L K M E N U ｣* ᵡ͟͟͞͞         
   ${liststalk}
> © BetaBotz-Md3
`
}

global.toolsmenu = (run, mode, jam, tanggal, listtools) =>{
	return `
    ͟͟͞͞ᵡ  *｢ I N F O   B O T ｣* ᵡ͟͟͞͞
	
   ❐ Bot Name : *BetaBotz-Md3*
   ≡ Botmode : *${mode}*
   ≡ Runtime : *${run}*
   ≡ Jam : *${jam}*
   ≡ Tanggal : *${tanggal}*     
   
   
   ͟͟͞͞ᵡ  *｢ T O O L S M E N U ｣* ᵡ͟͟͞͞         
   ${listtools}
> © BetaBotz-Md3
`
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})

