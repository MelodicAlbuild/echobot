//This Setup is Created by Vixel

const Discord = require('discord.js')
const fs = require('fs')
const client = new Discord.Client();
const config = require("./storage/config.json");
const prefixes = require("./storage/prefixes.json")

//Bot Transitions
const beta = false            //logs in with beta token
const logging = false         //activates Logging (sends log data in same chat as trigger message)
const console_mode = false    //disables the need for prefix and makes the channel to a console


client.on('ready', async() =>{
  if (!beta){
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  } else {
console.log(`Bot started in Beta Mode: ${client.guilds.size} Guilds, ${client.channels.size} Channels and with ${client.users.size} Users!`)
  }

  if (!beta) {
    //main activity
    client.user.setActivity('EchoBot Designed by Vixel', { type: 'PLAYING' },);
    client.user.setStatus('online')
  } else {
    //beta activity
    client.user.setActivity('maintanance mode');
    client.user.setStatus('idle')
  }

});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

client.on('message', async message => {

  let prefixes = JSON.parse(fs.readFileSync("./storage/prefixes.json", "utf8"));

  if(message.guild === null){
    if(message.author.id != "562836708564140043") {
      let dmauthor = message.author;
      let dmmessage = message.content;
      let dmembed = new Discord.RichEmbed()
      .setDescription("Incoming Dm Support Request")
      .setColor("#00ffff")
      .addField("Author", message.author.username)
      .addField("Author ID", message.author.id)
      .addField("Support Message", dmmessage);
      return client.channels.get("617878876680355871").send(dmembed), dmauthor.send("The Staff of DefiantVideos has been Notified of your Issue, They will reply here shortly!");
    }
  } else if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };

  }

  const prefix = prefixes[message.guild.id].prefixes;

  const language = "eng"


    if(!message.guild || message.author.bot) return;

    let msg = message.content.toUpperCase();
       let args;
       let cmd;
       if(!console_mode){
      args = message.content.slice(prefix.length).trim().split(" ");
      cmd = args.shift().toLowerCase();
      }
       let msgContent = message.content.toLowerCase().trim().split(" ");
       if(console_mode) {
       cmd = msgContent.shift()
       args = msgContent.slice(cmd)
       }
       if(msgContent.includes('prefix'))message.channel.send(`My prefix on this server is **${prefix}**`)

    let mprefix = msg.slice(0, prefix.length)
    let uprefix = prefix.toUpperCase()

    if (!console_mode){
    if (mprefix !== uprefix) return;
    }

    if(logging){
    message.channel.send(`args: "${args}", cmd: "${cmd}", msg: "${msg}", mprefix: "${mprefix}", prefix: "${uprefix}", Console Mode: ${console_mode}, triggered: ${mprefix == uprefix}`)

    }
    if (message.author.bot) return;

    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, prefix, language, beta)
    } catch (err) {
      console.log(err)
    };
});

client.on('error', console.error);

if(!beta) {
client.login(config.token.main)
} else {
  client.login(config.token.beta)
}
