const Discord = require("discord.js");
const settings = require("./settings.json")
const token = settings.token;
const prefix = settings.prefix;

// --var--
var bot = new Discord.Client();


// need

bot.on('ready', function() {
  console.log("fuck me")
  bot.user.setGame("come on suckers pay me i want suck")
});

bot.on("guildMemberAdd", member => {
  if (member.guild.id === '405753208829378560') {
    member.addRole('405754175113265152', 'Joined in the 90\'s')
  }
  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba join`)
});

bot.on("guildMemberRemove", (member) => {
  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba Left `)
});

bot.login(token)
