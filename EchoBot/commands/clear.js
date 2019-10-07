const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("8192")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "addrole"
  category: "moderation"
}
