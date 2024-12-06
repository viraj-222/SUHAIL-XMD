const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "https://i.imgur.com/9J2sj3q.mp4" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Kandy,Sri Lanka"


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/adb301df693b5aa080346.jpg" || "https://telegra.ph/file/adb301df693b5aa080346.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Vixen" 


global.devs = "94760457315" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "94760457315";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94760457315";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/9J2sj3q.mp4,https://i.imgur.com/9nEfkh0.jpg,https://telegra.ph/file/54cec841210f77dc986c0.jpg,https://telegra.ph/file/b1a39dd8265abe4f44e2a.jpg,https://telegra.ph/file/e40c97bfd34ba973bd583.jpg,https://telegra.ph/file/7e36b7c94be8255ccbf0b.jpg,https://telegra.ph/file/60cbb959c3b77477b1c2d.jpg,https://telegra.ph/file/adb301df693b5aa080346.jpg,https://telegra.ph/file/f2826d3d77cfb0d7a86bb.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_13_54_12_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDI2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDk0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MixcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzLFxuICAgICAgICAzNixcbiAgICAgICAgMTUzLFxuICAgICAgICA5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA5NixcbiAgICAgICAgMjU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgNTksXG4gICAgICAgIDIyNixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgODQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxODIsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzLFxuICAgICAgICA3NixcbiAgICAgICAgOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICA1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMzksXG4gICAgICAgIDEwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICA5LFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICA0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxODUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDQ1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTYyLFxuICAgICAgICA4MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDksXG4gICAgICAgIDU5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcyLFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY4LFxuICAgICAgICA2NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTMzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaDVBSDhtQThWUzU1aUhCQnd6a1RtdmEybDJTMGt4cWpwaDg2OHhSVHpmST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMnR4NjMxcEJSU3FTZkxJUzIxYXFJd1wiLFxuICBcInBob25lSWRcIjogXCJkZDZkZWE3ZS1iODk3LTQ5YzEtYTM3OC1kMDk0ZWYwZjkxNGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcsXG4gICAgICAxNjksXG4gICAgICAyNTIsXG4gICAgICAyMTIsXG4gICAgICAxNzEsXG4gICAgICAyMzksXG4gICAgICAxMTksXG4gICAgICAxMjgsXG4gICAgICAxMjksXG4gICAgICA0LFxuICAgICAgMTk1LFxuICAgICAgMjIwLFxuICAgICAgMTUxLFxuICAgICAgNzEsXG4gICAgICAxNDUsXG4gICAgICAxMDYsXG4gICAgICAxMzYsXG4gICAgICA2MyxcbiAgICAgIDE0MyxcbiAgICAgIDEyNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzcsXG4gICAgICAyOSxcbiAgICAgIDM4LFxuICAgICAgMTU2LFxuICAgICAgMjEsXG4gICAgICAxMjAsXG4gICAgICAxMDQsXG4gICAgICAxNzEsXG4gICAgICAxMjQsXG4gICAgICA5MyxcbiAgICAgIDE5OCxcbiAgICAgIDY3LFxuICAgICAgNTgsXG4gICAgICAyMzIsXG4gICAgICA0MyxcbiAgICAgIDEyOSxcbiAgICAgIDEwMyxcbiAgICAgIDEwNixcbiAgICAgIDE4NixcbiAgICAgIDE3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AycCtyOERFUDNneHJvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwieDBxaFMvdFFYWEVFanlqY0ZyOFYrRGtFZUdsZXRZN1krekdjYi8wQkJ5RT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmd1duMUpHZmc1cEVTbFlsQ0g4WTFhL0FIWEFtZDNweHJmMndTL1VwVTFTeU5ON1hUSTlyTDIvRHNXY0RacDBGd0tNTENIZjQrYjl4VGZlTGQwZnpCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIwTEt1NC92TTRhc0ZkQS83RjJncWg0TXZ3YTVZMCs3TjB5OVRDbldmcnk1OEt4UVNKMFh4TW9yV00rWHVTaDdwY0FFUFBsRTlJQVVmc3RaZ3JRTkdnUT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzYwNDU3MzE1OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiyaLKnOG0j+qcseG0my544oCieFwiLFxuICAgIFwibGlkXCI6IFwiMTc1MTA2MzIwMDExNDE1OjE4QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NjA0NTczMTU6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzQwNjg1MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdNTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR01NLmpzb24iOiAie1wia2V5RGF0YVwiOlwicHA0dEdVclM0Yk9YUTVkcEJzcHVXY3N2Q0NWNWJrcWEzc09XQ3p6VWVRMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5Mzk0MzExNjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzQwNjg1MjE3NFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "``『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪʜᴀɴɢᴀ-ᴍᴅ 』``" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★",
  packname: process.env.PACK_NAME || "whatsapp bot",
  botname : process.env.BOT_NAME  || "VIXEN-XMD",
  ownername:process.env.OWNER_NAME|| "★彡[ᴠɪʜᴀɴɢᴀ.xx]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
