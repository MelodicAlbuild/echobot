const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.roles.has("599693757436264468")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
