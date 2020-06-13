const config = require('../config.json');
exports.run = (client, message, params) => {
  if (!message.guild) {
    if (!params[0]) {
      const commandNames = Array.from(client.commands.keys());
      const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
      message.channel.send({
      embed: {
          color: 0xFFFFFF,
          author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL
          },
          description: `**Commands**\n\nDo \`\`${config.prefix}help (command)\`\` If You Need More Help.\n\n${client.commands.map(c => `**${config.prefix}${c.help.name}** ${c.help.description}`).join('\n')}`,
          timestamp: new Date(),
          footer: {
            text: message.author.tag,
            icon_url: message.author.avatarURL
          }
      }
    });
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send({
        embed: {
            color: 0xFFFFFF,
            author: {
              name: message.author.tag,
              icon_url: message.author.avatarURL
            },
            description: `**Command:** ${config.prefix}${command.help.name}\n**Description:** ${command.help.description}\n**Usage:**${command.help.usage}`,
            timestamp: new Date(),
            footer: {
              text: message.author.tag,
              icon_url: message.author.avatarURL
            }
        }
      });
    }
  }
  return;
}

  if (!message.channel.permissionsFor(client.user.id).has("EMBED_LINKS")) {
    return message.channel.send(`<:X_:498898724500799489> **|** ${message.author} I Dont Have Enough Permissions. \`\`EMBED_LINKS\`\``);
  }

  if (message.channel.permissionsFor(client.user.id).has("MANAGE_MESSAGES")) {
    message.delete();
  }

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send({
      embed: {
          color: 0xFFFFFF,
          author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL
          },
          description: `**Commands**\n\Do \`\`${config.prefix}help (komento)\`\` If You Need More Info.\n\n${client.commands.map(c => `**${config.prefix}${c.help.name}** ${c.help.description}`).join('\n')}`,
          timestamp: new Date(),
          footer: {
            text: message.guild.name,
            icon_url: message.guild.iconURL
          }
      }
  }).then(msgdel => {msgdel.delete(60000)});
    //      message.author.sendCode('asciidoc', `= Guide =\n\n[You Need A Role Called Bot Admin, that all "Admin" command would work. More Info With ${config.prefix}ohje]\n\n= Commands =\n\n[Tee ${config.prefix}help <command> If You Need More Info]\n\n${client.commands.map(c => `${config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`).join('\n')}`);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.channel.send({
        embed: {
            color: 0xFFFFFF,
            author: {
              name: message.author.tag,
              icon_url: message.author.avatarURL
            },
            description: `**Command:** ${config.prefix}${command.help.name}\n**Description:** ${command.help.description}\n**Usage:**${command.help.usage}`,
            timestamp: new Date(),
            footer: {
              text: message.guild.name,
              icon_url: message.guild.iconURL
            }
        }
    }).then(msgdel => {msgdel.delete(60000)});
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'apuva'],
};

exports.help = {
  name: 'help',
  description: 'Shows Every Command Of The Bot',
  usage: ` ${config.prefix}help (command)\n**Example:** ${config.prefix}help purge`
};
