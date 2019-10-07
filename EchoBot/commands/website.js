const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bicon = client.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()

    .setDescription("Echo Studios Website")
    .setAuthor("Echo Bot: By Echo Studios")
    .setColor("#28a18f")
    .addField("Offical Website", "https://www.echo-studios.com")
    .setThumbnail(bicon)

    return message.channel.send(botEmbed);
}

module.exports.help = {
  name: "website"
  category: "links"
}
