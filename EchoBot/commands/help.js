const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let dmauth = message.author;

  let hEmbed = new Discord.RichEmbed()
  .setDescription("Help")
  .setColor("#7a1616")
  .addField("Moderation Commands", "addrole\n ban\n clear\n kick\n mute\n removerole\n report\n tempmute\n unmute\n warn")
  .addField("Fun Commands", "say")
  .addField("Bot and Server Info", "botinfo\n serverinfo")

  message.delete().catch(O_o=>{});
  dmauth.send(hEmbed)
  message.channel.send("Check your DM's!").then(msg => {msg.delete(3000)});
}

module.exports.help = {
  name: "help"
  category: "moderation"
}
