const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Youtube")
    .setAuthor("Echo Bot: By Vixel")
    .setColor("#003182")
    .addField("Offical Instagram", "https://www.instagram.com/echostudiosgames")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "instagram"
}
