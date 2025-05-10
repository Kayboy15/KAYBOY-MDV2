async function githubCommand(sock, chatId) {
    const repoInfo = `*KAYBOY-MD-V2*
╒┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◈
┋▩ *📂 ᏀᏆͲᎻႮᏴ ᎡᎬᏢϴՏᏆͲϴᎡᎽ:*
┋   https://github.com/Kayboy15/KAYBOY-MDV2
┋
┋▩ *ᏦᎪᎽᏴϴᎽ-ᎷᎠ ᏀᎡϴႮᏢ:*
┋     https://chat.whatsapp.com/JfFGYIVmrwk7uYb8fWyn0V
┋
┋
┋▩ *ϴҒҒᏆᏟᎪᏞ ᏟᎻᎪΝΝᎬᏞ* 
┋   https://whatsapp.com/channel/0029VbAjDiYJf05hsaM06704
┋
┋▩ *ᎠᎬᏙᎬᏞϴᏢᎬᎡ*
┋▩  ᴋᴀʏʙᴏʏ/ᴋᴇɪᴛʜ-ᴛᴇᴄʜ
┋
┋▩ *ՏႮᏢᏢϴᎡͲ*
┋    +263789745277
╘┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄◈
> ᴘʟᴇᴀꜱᴇ ꜱᴛᴀʀ⭐ ᴍʏ ʀᴇᴘᴏꜱɪᴛᴏʀʏ_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363416998900907@newsletter',
                    newsletterName: 'KAYBOYMD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 