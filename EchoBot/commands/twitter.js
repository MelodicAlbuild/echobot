const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Twitter")
    .setAuthor("Echo Bot: By Echo Studios")
    .setColor("#28a18f")
    .addField("Twitter Handle", "https://twitter.com/echostudios1")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "twitter"
  category: "links"
}
