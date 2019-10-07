const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        message.delete().catch(O_o=>{});
        let buser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!message.member.roles.has("597222640960405511")) return message.channel.send("You need to have the Senior Moderator Rank for this!").then(msg => {msg.delete(3000)});
        if(!buser) return message.channel.send("Can't find User!").then(msg => {msg.delete(3000)});
        let breason = args.join(" ").slice(22);
        if(buser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You can not ban this member!").then(msg => {msg.delete(3000)});

        let banEmbed = new Discord.RichEmbed()
        .setDescription("~Ban~")
        .setColor("#9b0000")
        .addField("Banned User", `${buser} with ID: ${buser.id}`)
        .addField("Banned By", `<@${message.author.id}> with ID: ${message.author.id}`)
        .addField("Banned In", message.channel)
        .addField("Time", message.createdAt)
        .addField("Reason", breason);

        let banChannel = message.guild.channels.find(`name`, "logs");
        if(!banChannel) return message.channel.send("Can't find Logs Channel!")

        message.guild.member(buser).ban(breason);

        banChannel.send(banEmbed);

        return;
}

module.exports.help = {
  name: "ban"
}
