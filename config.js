const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "BWM-XMD;;;H4sIAAAAAAAAA61Vy47jRBT9FVTbZCZ+xXYitYRfSZxnJ3HiThBCfpTtip+xy3HsUaQRIFaDhhWIxYgNq5HYjQQLfmA+Y3rJhvkE5E63usVjaCRqVarHuefee+rUMxDFKIMjWILuM5Ck6GBgWE9xmUDQBWLuODAFTWAb2ABdsOn7CXkYzE1BnekjW7OtCR7NIxhpc4HbSgMcbg2pcLbVirkApyZIcjNA1gcAe735ImQFLwvEZAR1NlOg1jM8Py6ucolIdrtta1f09R4RbC7AqUY0UIoiV0k8GMLUCEawvDRQ+jj6utrQtUEs80d7Sax9hoj2BTOVUgZX0yCb+C0437eUob66ifYI+qiT6Ww0IRYSL5vVcqWsGpsly1ATeRi5dGPMa1He2aIho6hn+hlyI2irNowwwuWj685MqKETEXunP54UkhwnZDa/jKXtrLW0/TB1vKrFlEForQPrccTpBYvHXKILPFsuZmGFpmjNKwK5tda7g5Xv80MVq/40uzpmD4lfpnda8f9L3fk+t9cNZY8KusWPjiSvsbIoWVWsq0cO9fWox2NpG+bJyn8c/YZYyYcBN/D304YUjtit3Fnxe6Ji8FFcmi0mbAnyzo8VoSTu6Rs4Tz/E0lGXRNs7kq7qazPchl5VWXx/vhjoo0tYTNct6FuBMmbIw5BZjxnp6LDaaNWTuAQuZr20XZVuAxbqFNOp4UWiNg+NLXIvbjLyYanaoEuemiCFLspwamAUR/VauwkM+7CEVgrxTXFBvKcyXzrgArM52xb7QwfKo122H8X+Sragm1XxxMOm6k+EC9AESRpbMMugPUAZjtNyArPMcGEGup/c9KlOOYVhjOEQ2bWYCI4jeJLsUJ2Ps6eFZ+DMSJKnEcSgCZw0DicQdHGawya4OS9SitgW2R7X41he7BA8I/ACq0ii3GElUqLq/MJzTA2FMMNGmIAuyTEUQVMURZ6a/wsNlhJoghVkmaAFmRBkQhIEXiRIsaMoMsHT/0KDOn3aBBE84rOG68rTZBM4KM3wKsqTIDbsO4HfbRqWFecRXpaRJdUTmILug2WIMYrcrE4sj4zU8tABSnUeoOsYQQZPTWDDA7JgjQeQ19Y7azdc0tR2Ewj2Z7NIX7h1/7w4Oh+hOYo1LYZ9QrI0+YThSPikQ3HWE9oirTZjQKrjGKAux9k+6jv/qGbryAXWYLYZtNVZ3mlwnrw7jtp8ZdKTG0WeZQhTaN9V2TQsP0+02IfRB3D7hZfN595mBxkzpLbQj8eSfUSQLYsHuGd5g+6ze8uWYrvG4ziaVRbkJai7Vcf5sxi6JPNXPURGfRhcf/fl9csfr5+/uH7+4refvn//6qtfr7949f6HF69//+XlR/X6F6+vn7/46N3PP7x/9c3n7968zN69+frt67dvzpvf1jdqlrctrOPbEBsoyEAXSJel176cK8qENUiT6fcFxRUkVwD3Lb+zkfNDVfVFFcWMmVoh0pVetuqZ011UjhK+aquHaq5t3EDVohnhbS7+BqSu7tRf2/vGOhL4WebNB7EgWa1xuelPg1QrWktCdQY2JHb8hjo41LgNNc5SVKssxtONKR1td5B7Q0SRaYfYyorDT8LVQK495056D4Mtr6LC3NElN+vPShN5+7wKyF3q21WlVVdXRYOCWO4T/cN2cHlItGy8HwaFs1816MyoUhMFlZZIWrSdH1OzR8/zK39ue8LZ4G4MNrj92NCt+ZyF6iB480/c9vDfWn3/ZIhT8wHE7cfzD7IUlz3farOzPksP48ATzZ6oV5s2j/bOpLEc84RCqcOl0q6wqoNT7QVJYGAnTkPQBUZkpzGyQRMERoaF+1f/N0ZCdpogLIUkWWID35kFEOoxG7ng9AejaVtiUwkAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS JUST NOW ALI-MD 👻*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ALI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "ALI-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "40770811929",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "cosmin",
// add bot owner name
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ALI*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.ironman.my.id/i/2du3i5.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> HEY 👋 IM ALIVE NOW*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923003588997",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
