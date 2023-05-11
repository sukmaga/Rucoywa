let handler = async (m, { args, usedPrefix, text, command }) => { 

let nk = await (`https://image.thum.io/get/auth/67655-best/https://www.rucoyonline.com/news`)
conn.sendMessage(m.chat,{image:{url: nk}, caption:'infonya bwang!'}, {quoted:m })
}

handler.command = /^news?$/i
handler.limit = true

handler.fail = null

module.exports = handler


