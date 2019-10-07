module.exports.run = async (client, message, args) => {
const Discord = require('discord.js')

let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let uptime = `${hours} hours, ${minutes} minutes and ${Math.floor(seconds)} seconds`;

let embed = new Discord.RichEmbed()
.setColor('#00eedd')
.setAuthor("Echo Bot:")
.setThumbnail('https://cdn.discordapp.com/avatars/630545525413904404/1c16cac1384551f0eb50dad155354a07.png?size=128')
.setTimestamp()
.setFooter("Echo Bot, Created by Vixel", 'https://cdn.discordapp.com/avatars/630545525413904404/1c16cac1384551f0eb50dad155354a07.png?size=128')
.addField("Stats:", `:grin:Users: ${client.users.size}
\n🔗Servers: ${client.guilds.size}
\n#⃣Channels ${client.channels.size}
\n:satellite:Ping: ${Math.round(client.ping)}ms
\n🔋Uptime: ${uptime}`
//\n"Links:"`, true)
)
message.channel.send({embed});
message.delete()
}
