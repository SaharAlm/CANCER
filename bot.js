const Discord = require("discord.js");
const settings = require("./settings.json")
const token = settings.token;
const prefix = settings.prefix;

// --var--
var bot = new Discord.Client();


// need

bot.on('ready', function() {
  console.log("fuck me")
});

bot.on("guildMemberAdd", member => {
  var role = member.guild.roles.find('name', 'User')

  member.addRole(role)

  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba join`)
});

bot.on("guildMemberRemove", (member) => {
  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba Left `)
});

bot.login(token)
