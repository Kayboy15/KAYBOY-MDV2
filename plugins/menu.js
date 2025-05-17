// CODED BY KEITH-TECH 
const {readEnv} = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')
cmd({
    pattern: "menu",
    alias: ["list"],
    desc: "bot's commands",
    react: "📜",
    category: "main"
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let desc = `*👋 Hello ${pushname}*

*╭╴╴╴╴╴╴╴╴╴╴✬
*┊*  ⏣ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}*
*┊*  ⏣ʀᴀᴍᴜꜱᴀɢᴇ: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*
*┊*  ⏣ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}*
*┊*  ⏣ᴠᴇʀꜱɪᴏɴ : 1.0.0*
*╰╴╴╴╴╴╴╴╴╴╴╴✬*

*╭╴╴╴╴╴╴╴╴╴╴✬
*┊*1* ⏣ᴍᴀɪɴ
*┊*2* ⏣ꜱᴇᴀʀᴄʜ
*┊*3* ⏣ ᴅᴏᴡɴʟᴏᴀᴅ
*┊*4* ⏣ɢʀᴏᴜᴘ
*┊*5* ⏣ᴏᴡɴᴇʀ
*┊*6* ⏣ꜰᴜɴ
*╰╴╴╴╴╴╴╴╴╴╴╴✬*
_*🌟 Reply with the Number you want to select*_

> *ᴋᴀʏʙᴏʏ-ᴍᴅ*`;

        const vv = await conn.sendMessage(from, { image: { url: config.MENU_IMG}, caption: desc }, { quoted: mek });

        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const selectedOption = msg.message.extendedTextMessage.text.trim();

            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === vv.key.id) {
                switch (selectedOption) {
                    case '1':
                    reply(`
                    

*╭╴╴* ✬ *ᴍᴀɪɴᴍᴇɴᴜ* ✬
*┊*  ⏣ᴀʟɪᴠᴇ
*┊*  ⏣ᴍᴇɴᴜ
*┊*  ⏣ᴍᴇɴᴜ2
*┊*  ⏣ꜱʏꜱᴛᴇᴍ
*┊*  ⏣ᴘɪɴɢ
*┊*  ⏣ʀᴜɴᴛɪᴍᴇ
*┊*  ⏣ᴊɪᴅ
*╰╴╴╴╴╴╴╴╴╴╴╴✬*
> ©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴋᴀʏʙᴏʏ-ᴍᴅ  

`);

                        break;
                    case '2':               
                        reply(`

╔════════════════════════╗  
║ 🔍 **𝗦𝗘𝗔𝗥𝗖𝗛 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 🔍║  
╚════════════════════════╝  

╭─━〔 ⚡ **Commands** ⚡ 〕━──━╮  
┃ ◈ **yts**  
┃ ◈ **image** 
╰─━─━─━━─━─━─━─━─━─╯  

📊 **Total Commands in SEARCH:** 2

> 💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 ᴋᴀʏʙᴏʏ-ᴍᴅ**
`);
                        break;
                    case '3':               
                        reply(`
╔════════════════════════╗  
║ 📥 **𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 📥 ║  
╚════════════════════════╝  

╭─━━〔 ⚡ **Commands** ⚡ 〕━─━━╮  
┃ ◈ **apk**  
┃ ◈ **twitter**  
┃ ◈ **gdrive**  
┃ ◈ **mediafire**  
┃ ◈ **fb**  
┃ ◈ **play**
┃ ◈ **play2**  
┃ ◈ **video**   
┃ ◈ **video2**  
┃ ◈ **yta**  
┃ ◈ **tiktok**
┃ ◈ **ytmp3**
╰─━─━─━─━─━─━─━─━─━─╯  

📊 **Total Commands in DOWNLOAD:** 12
 
> 💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 ᴋᴀʏʙᴏʏ-ᴍᴅ**  

`);
                    
                        break;
                    case '4':               
                        reply(`
╔════════════════════════╗  
║ 👥 **𝗚𝗥𝗢𝗨𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👥 ║  
╚════════════════════════╝  

╭─━──━〔 ⚡ **Commands** ⚡ 〕━─━╮  
┃ ◈ **mute**  
┃ ◈ **unmute**  
┃ ◈ **promote**  
┃ ◈ **demote**  
┃ ◈ **del**  
┃ ◈ **add**  
┃ ◈ **admins**  
┃ ◈ **groupdesc**  
┃ ◈ **groupinfo**  
┃ ◈ **gname**  
┃ ◈ **setsubject**  
┃ ◈ **tagall**  
┃ ◈ **hidetag**  
┃ ◈ **unlock**  
┃ ◈ **lock**
┃ ◈ **gname**  
┃ ◈ **join**  
┃ ◈ **leave**  
┃ ◈ **invite**  
┃ ◈ **tagadmin**  
╰─━─━─━─━─━─━─━─━─━━─╯  

📊 **Total Commands in GROUP:** 20  


> 💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 ᴋᴀʏʙᴏʏ-ᴍᴅ**  
`);
                    break;
                    case '5':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝗢𝗪𝗡𝗘𝗥 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━〔 🍿 **Commands** 🍿 〕━──━╮ 
┃ ◈ **shutdown**  
┃ ◈ **alive**  
┃ ◈ **ping**  
┃ ◈ **clearchats**  
┃ ◈ **block**
┃ ◈ **unblock**
┃ ◈ **repo**
┃ ◈ **owner**
┃ ◈ **owner2**
╰─━━─━─━──━─━─━━─━─╯  

📊 **Total Commands in Owner:** 9

 
> 💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 ᴋᴀʏʙᴏʏ-ᴍᴅ**  

`);
                    break;
                    case '6':               
                        reply(`
╔════════════════════════╗  
║ 👨‍💻 **𝐓𝐎𝐎𝐋𝐒 𝗖𝗢𝗠𝗠𝗔𝗡𝗗 𝗟𝗜𝗦𝗧** 👨‍💻 ║  
╚════════════════════════╝  

╭─━〔 🍿 **Commands** 🍿 〕━──━╮ 
┃ ◈ **joke**  
┃ ◈ **flirt**  
┃ ◈ **truth**  
┃ ◈ **dare**  
┃ ◈ **fact**
┃ ◈ **pickupline**
┃ ◈ **character**
┃ ◈ **repeat**
┃ ◈ **spam**
┃ ◈ **readmore**
╰─━━─━─━──━─━─━━─━─╯  

📊 **Total Commands in Owner:** 10

 
> 💡 **𝙋𝙊𝙒𝙀𝙍𝙀𝘿 𝘽𝙔 ᴋᴀʏʙᴏʏ-ᴍᴅ**  

`);
                       
                        
                    break;
                    default:
                    
                        reply("Invalid option. Please select a valid option🔴");
                }

            }
        });

    } catch (e) {
        console.error(e);
        await conn.sendMessage(from, { react: { text: '❌', key: mek.key } })
        reply('An error occurred while processing your request.');
    }
});
