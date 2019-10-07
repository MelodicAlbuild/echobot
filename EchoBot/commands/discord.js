const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Discord")
    .setAuthor("Echo Bot: By Vixel")
    .setColor("#003182")
    .addField("Discord Server", "https://www.discord.gg/qSU6xnN")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "discord"
  category: "links"
}
