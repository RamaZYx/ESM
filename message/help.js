 import moment from "moment-timezone"
import fs from "fs"
import chalk from 'chalk'
import ms from "parse-ms"
import {runtime,kyun} from "../lib/myfunc.js" 
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
moment.tz.setDefault("Asia/Jakarta").locale("id");

//Total fitur by Official Dittaz
const totalFitur = () =>{
var mytext = fs.readFileSync("./message/case.js").toString()
var numUpper = (mytext.match(/case '/g) || []).length;
return numUpper
}

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

let yes = "*「 _Error_ 」* ❌"
let no =""


const feat = (q) => {
let status = false
Object.keys(db.data.listerror).forEach((i) => {
if (db.data.listerror[i].cmd === q) {
status = true
}
})
return status
}


export const allmenu =  ( limitCount, isPremium,thisHit, publik, sender, prefix, pushname) => {
return `
乂 ${week}, ${calender} 

   -  Running On : *${runWith}*
   -  Mode : ${publik ? "Public" : "Self"}
   -  Time : ${timeWib} WIB       
   -  Hit Today : ${thisHit.toLocaleString()}
   -  Total Feature : ${totalFitur()}
   -  Total Error : ${db.data.listerror.length}
   -  Total User : ${Object.keys(db.data.users).length}
   -  User Banned : ${db.data.banned.length}
   -  Cmd Blocked : ${db.data.blockcmd.length}
         
 `}

export const fitur = (prefix) => {
const data = global.db.data.others['newinfo']
const info = data ? data.info : ""

const timeInfo = data ? clockString(new Date - data.lastinfo)  : "tidak ada"
  
return`${apz} *MENU DOWNLOAD*

${str} ${prefix}fb 
${app} ${prefix}ig
${app} ${prefix}play
${app} ${prefix}tiktok
${app} ${prefix}tiktokmp3
${app} ${prefix}twitter
${app} ${prefix}sfile
${app} ${prefix}mediafire
${app} ${prefix}gitclone
${app} ${prefix}ytmp4
${app} ${prefix}ytmp3
${end} ${prefix}gdrive

${apz} *MENU GROUP*

${str} ${prefix}kick
${app} ${prefix}add
${app} ${prefix}promote
${app} ${prefix}demote
${app} ${prefix}closetime
${app} ${prefix}opentime
${app} ${prefix}revoke
${app} ${prefix}hidetag
${app} ${prefix}listoline
${app} ${prefix}afk
${app} ${prefix}ceksewa
${app} ${prefix}cekprem 
${app} ${prefix}ceklimit 
${app} ${prefix}ban
${app} ${prefix}unban
${app} ${prefix}listban
${app} ${prefix}addkick
${app} ${prefix}delkick
${app} ${prefix}moveongc
${end} ${prefix}updategempa

${apz} *MENU ANONYMOUS*

${str} ${prefix}anonymous
${app} ${prefix}confess
${app} ${prefix}start
${app} ${prefix}startchat
${app} ${prefix}keluar
${app} ${prefix}next
${app} ${prefix}sendkontak
${app} ${prefix}invite
${end} ${prefix}joinchat

${apz} *MENU TOOLS*

${str} ${prefix}ttp
${app} ${prefix}attp
${app} ${prefix}resize
${app} ${prefix}inspect
${app} ${prefix}tr
${app} ${prefix}ss
${app} ${prefix}runtime
${app} ${prefix}speed
${app} ${prefix}rules
${app} ${prefix}speedest
${app} ${prefix}tts
${app} ${prefix}volume
${app} ${prefix}bass
${app} ${prefix}deep
${app} ${prefix}earrape
${app} ${prefix}fast
${app} ${prefix}fat  
${app} ${prefix}robot
${app} ${prefix}slow
${app} ${prefix}smooth
${app} ${prefix}blown
${app} ${prefix}hode
${app} ${prefix}ghost
${app} ${prefix}imut
${app} ${prefix}tupai
${app} ${prefix}nightcore
${app} ${prefix}smeme
${app} ${prefix}get
${app} ${prefix}jadianime
${app} ${prefix}transfer
${app} ${prefix}gempanow
${end} ${prefix}emojimix

${apz} *MENU COVERTER*

${str} ${prefix}tomp3
${app} ${prefix}tomp4
${app} ${prefix}toimg
${app} ${prefix}togif
${app} ${prefix}toptt
${app} ${prefix}tourl
${app} ${prefix}bitIy
${end} ${prefix}s 

${apz} *MENU STORAGE*

${str} ${prefix}addvn
${app} ${prefix}addstik
${app} ${prefix}delvn 
${app} ${prefix}delstik
${app} ${prefix}liststik
${app} ${prefix}listvn 
${end} ${prefix}getallstik 

${apz} *MENU DATABASE*

${str} ${prefix}addcmdowner
${app} ${prefix}addcmdlimit
${app} ${prefix}addcmdprem
${app} ${prefix}addowner
${app} ${prefix}addprem
${app} ${prefix}addsewa
${app} ${prefix}blockcmd
${app} ${prefix}unblockcmd
${app} ${prefix}delowner
${app} ${prefix}delprem
${app} ${prefix}delowner
${app} ${prefix}delcmdowner
${app} ${prefix}delcmdlimit
${app} ${prefix}delcmdprem
${app} ${prefix}listcmdowner
${app} ${prefix}listblockcmd
${app} ${prefix}listprem
${app} ${prefix}listsewa
${app} ${prefix}listowner
${end} ${prefix}listcmdlimit

${apz} *MENU GAME*

${str} ${prefix}family100
${app} ${prefix}math
${end} ${prefix}caklontong

${apz} *MENU OWNER*

${str} ${prefix}banchat
${app} ${prefix}public
${app} ${prefix}self
${app} ${prefix}> evalcode
${app} ${prefix}$ executor
${app} ${prefix}join
${app} ${prefix}bcgc
${app} ${prefix}bcgcc
${app} ${prefix}getcase
${app} ${prefix}getfile
${app} ${prefix}restart
${app} ${prefix}delsampah
${app} ${prefix}delchat
${app} ${prefix}listblock
${app} ${prefix}newupdate
${app} ${prefix}sendbug
${app} ${prefix}savefile
${app} ${prefix}buggc
${app} ${prefix}whatmusic
${app} ${prefix}Update
${app} ${prefix}outdate
${app} ${prefix}uninstall
${app} ${prefix}out
${app} ${prefix}listgc
${app} ${prefix}setmenu
${app} ${prefix}setnamebot
${app} ${prefix}setppbot
${app} ${prefix}setimgreply
${app} ${prefix}setimgquoted
${app} ${prefix}setimgdoc
${app} ${prefix}setgif
${app} ${prefix}sf
${app} ${prefix}setimgbc
${end} ${prefix}setbio

${apz} *RANDOM MENU*

${str} ${prefix}gura
${app} ${prefix}doge
${app} ${prefix}patrick
${app} ${prefix}cosplay
${app} ${prefix}cogan
${app} ${prefix}cecan 
${app} ${prefix}wallml
${app} ${prefix}animesad
${app} ${prefix}animebite
${app} ${prefix}animekill
${app} ${prefix}animelick
${app} ${prefix}hentai
${app} ${prefix}hneko
${app} ${prefix}trap
${app} ${prefix}blowjob
${app} ${prefix}hentai
${app} ${prefix}anime
${app} ${prefix}loli
${app} ${prefix}milf
${app} ${prefix}husbu
${end} ${prefix}waifu

${apz} *SEARCH MENU*

${str} ${prefix}gimage
${app} ${prefix}pinterest
${app} ${prefix}animesearch
${app} ${prefix}google
${app} ${prefix}yts
${end} ${prefix}ai (gpt 3.5)

${apz} *LOGO MENU*

${str} ${prefix}glitch
${app} ${prefix}3dspace
${app} ${prefix}lion
${app} ${prefix}3dneon
${app} ${prefix}greenneon
${app} ${prefix}bokeh
${app} ${prefix}holographic
${app} ${prefix}bear
${app} ${prefix}wolf
${app} ${prefix}joker
${app} ${prefix}dropwater
${app} ${prefix}dropwater2
${app} ${prefix}thewall
${app} ${prefix}neonlight
${app} ${prefix}natural
${app} ${prefix}carbon
${app} ${prefix}pencil
${app} ${prefix}blackpink2
${end} ${prefix}neon

${apz} *IMAGE MAKER*

${str} ${prefix}wanted
${app} ${prefix}utatoo
${app} ${prefix}usharpen
${app} ${prefix}thanos
${app} ${prefix}sniper
${app} ${prefix}sharpen
${app} ${prefix}sepia
${app} ${prefix}scary
${app} ${prefix}rip
${app} ${prefix}redple
${app} ${prefix}rejected
${app} ${prefix}posterize
${app} ${prefix}jail
${app} ${prefix}invert
${app} ${prefix}gay
${app} ${prefix}frame
${app} ${prefix}fire
${app} ${prefix}distort
${app} ${prefix}deepfry
${app} ${prefix}ddungeon
${app} ${prefix}circle
${app} ${prefix}burn
${app} ${prefix}challenger
${app} ${prefix}brazzers
${app} ${prefix}beatiful
${app} ${prefix}approved
${app} ${prefix}3000years
${app} ${prefix}ps4
${app} ${prefix}pixelize
${app} ${prefix}missionpassed
${app} ${prefix}moustache
${app} ${prefix}grayscale
${app} ${prefix}instagram
${end} ${prefix}lookwhatkarenhave
   
${apz} *THANKS TO*

${str} Baileys
${app} Irfan Hariyanto
${app} Dittaz
${app} Nina Kawai
${app} Resta Gamteng :v
${app} Zeeone Ofc
${app} Yudha Perdana
${app} Yogi PW
${app} Decode Denpa
${app} Fernazer
${app} X - Dev Team
${app} XChillDs & Yuzu
${end} Dika Ardnt
`
}
  



