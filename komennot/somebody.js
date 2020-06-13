const Discord = require('discord.js');
const config = require('../config.json');
exports.run = (client, message, args) => {

  if (message.channel.permissionsFor(client.user.id).has("MANAGE_MESSAGES")) {
    message.delete();
  }

  if (!message.channel.permissionsFor(client.user.id).has("EMBED_LINKS")) {
      return message.channel.send(`<:X_:498898724500799489> **|** ${message.author} I Dont have enough permissions. \`\`EMBED_LINKS\`\``);
  }

  if (!message.channel.permissionsFor(message.author.id).has("MENTION_EVERYONE")) {
    return message.channel.send(`You dont have permissions to mention everyone.`).then(msgdel => {msgdel.delete(10000)});
  };

message.channel.send("You just pinged <@" + message.guild.members.random().user.id + ">");
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['someone', 'somenone'],
};

exports.help = {
  name: 'somebody',
  description: 'Randomly pings somebody',
  usage: `${config.prefix}somebody \n**Example:** ${config.prefix}8ball`
};
