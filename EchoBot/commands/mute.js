let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!tomute) return message.reply("Couldn't find user.");
if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply ("Can't mute this person.")
let muterole = message.guild.roles.find(`name`, "muted");
if(!muterole){
  try{
    muteroll = await message.guild.createRole({
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
  }
