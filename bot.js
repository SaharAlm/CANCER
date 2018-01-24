const Discord = require("discord.js");
const settings = require("./settings.json")
const token = settings.token;
const prefix = settings.prefix;


var bot = new Discord.Client();

bot.on("guildMemberAdd", member => {
  if (member.guild.id === "405769057065762826") {
    member.addRole('405754175113265152')
  }
  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba join`)
});

bot.on("guildMemberRemove", (member) => {
  member.guild.channels.get('405769057065762826').send(`**${member.user.username}** Another Nibba Left `)
});

bot.login(token)
