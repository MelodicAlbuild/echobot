const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args == 0)return message.reply("you forgot who you want to mute!")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be muted!");
// let role = message.guild.roles.find(r => r.name === "muted");
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions: []
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        })
      })
    }catch(e){
      console.log(e.stack);
    }}
// Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
let member = message.mentions.members.first();
// if(message.member.roles.some( r=>["muted"].includes(r.name))) {

// or the person who made the command: let member = message.member;

// Add the role!
member.addRole(muterole).catch(console.error);
message.channel.send(`The Member ${member} got muted!`)

}

module.exports.help = {
  name: "mute"
}
