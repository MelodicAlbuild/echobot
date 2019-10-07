const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Patreon")
    .setAuthor("Echo Bot: By Vixel")
    .setColor("#28a18f")
    .addField("Patreon Page", "https://www.patreon.com/echostudios")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "patreon"
  category: "links"
}
