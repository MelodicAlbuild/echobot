const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Youtube")
    .setAuthor("Echo Bot: By Vixel")
    .setColor("#003182")
    .addField("Youtube Channel", "https://www.youtube.com/channel/UCCk2MfTdmPu9FDm6PW0qh0g")
    .addField("Discord Server", "https://www.discord.gg/qSU6xnN")
    .addField("Offical Instagram", "https://www.instagram.com/echostudiosgames")
    .addField("Patreon Page", "https://www.patreon.com/echostudios")
    .addField("Twitter Handle", "https://twitter.com/echostudios1")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "community"
  category: "links"
}
