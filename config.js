//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.pinimg.com/736x/fc/00/93/fc009343c511a73833ec2fcad8d63ad4.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "22565651420";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0FGV21pdUtIa3JmOTd4cnFXdlhkck4vSE9RNEtNaWJPY29XOGg3cW8wbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSldCa1JjcFVmeUVab082QVhPTHRXL2tWMXQ0MDB3QTBYL25UYnc0OXVCaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TVN4eUpoOTcrZU9OZGV3eTFRMndEQ2NTY0czTnV1TkdyQTNtSlVST0hFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQN015SlRSWEh4WmlZMWh2RXlqaHo0VHMvREVVeEswNVN5MGlHaXdhTzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktNL21URG44S1dSRjFWWkVEV2ZWYmhWVFlnMy80SXdRY3dZa1paQ2hEVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJHSjJ4a0hRTWRFNEZ3QUhnVkVseUgyVXFJMUdZc1NER3ZjQTZrUXJQMXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMEc4RnZKOHFIY3JjbFk0SWh3Z0xHOVN3blZ6cTFWT0NkbXRyTU53eUNHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaE5Yd2pVRXozcU5VbGliNUYxSWh4bnpINUpVaDJyVHpiV2xXb0Z0WlVSST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5kWmpvYnJ0anh5d0grWjhuelFIV0JGK1NSTWFqSHRQL2EzRngzYklTbC9XVS9SR0RGS2VCN2JkV1RScS9TN1o3c2h5ZUVUSEgxdXdqRXkrMFV3aWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDcsImFkdlNlY3JldEtleSI6InlVaWFES3l1U2g4OHI5SHd1TXRiUG9USWM3TXREZ080VHhrUWhXN1BvbFE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdCTEFfNU5HU01PTzZoa05fM1VRSmciLCJwaG9uZUlkIjoiYjllYjViNzEtMmZiYi00Y2MzLWJhNzYtMjZkZjEzMDY3ZjA5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZtNm1lNzFWL3NDaDR6QUFOLzB2aW9vUkdvWT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicmVMUGFpN2JGUks5dG9OaThhNlFNZEZlTUl3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVg3MkpZQ0VLT0JvYnNHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVi9Sd0x2MHVXSUphRHltZnErNElhS2p1WXFhdWIwWlJScTdqTlVHTU1VYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiOE5meDFJaEJ3NkVoekc1d2dGSmN6eVhNVkFoOEZzQnFVNmt4ZzNEWi84WE9CRW9UYzhvL1JKUkRyN1hXbVlPMngxa2UwbzIyM1l3cERpNmh0U2trZ2c9PSIsImRldmljZVNpZ25hdHVyZSI6Inh4b0dvN0cvd3N6S2hyYWZUUG1IcTNxZmR6TUNOMWZ0TWdjei9XZUJGSEQxL1FhWHhrZTM1c3ZiY0NMKzRXR3NhODhaRjRwYWdtM09mYlpDRDBGTmd3PT0ifSwibWUiOnsiaWQiOiIyMjU2NTY1MTQyMDo5MEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJbzL/Nh1PMv82HzLfMv82HZMy/zYd+zL/Nh0HMv82HYcy/zYdyzL/Nh2/Mv82HzLjMv82Hbs2HzL9dIMy/zYcifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjI1NjU2NTE0MjA6OTBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVmYwY0M3OUxsaUNXZzhwbjZ2dUNHaW83bUttcm05R1VVYXU0elZCakRGSCJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDg4NTU1MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLYjEifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`AARON-V2™`",
  author: process.env.PACK_AUTHER || "AARON-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "AARON-V2",
  ownername: process.env.OWNER_NAME || "AARON LEWIS",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
