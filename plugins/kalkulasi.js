const fetch = require('node-fetch')

let handler = async (m, { args, usedPrefix, text, command }) => 
{
if (!text) return m.reply(`level berapa?
Example: .kalkulasi 200`)

let nk = [`https://saipulanuar.ga/api/download/ssweb2?url=https://rucoykingdom.com/calculator/${text}`]

conn.sendMessage(m.chat,{image:{url: nk}, caption:'Tuh!'}, {quoted:m })
}


handler.command = /kalkulasi/i


handler.limit = true

module.exports = handler






