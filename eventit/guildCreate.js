const Discord = require("discord.js");
const client = new Discord.Client();
const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUyOTk1NTUyNzQ1OTg2NDU4NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgwNzQwNjc1fQ.lzfxtpS24WOTVfUl5XnNTnmGBNrdCGTiISCH01_KvRc', client);
const config = require('../config.json');
module.exports = (client, guild) => {
//  client.channels.get('320571459678371840').send(`:tada: **Uusi palvelin** :tada:\n**Nimi:** ${guild.name} (${guild.id})\n**Omistaja:** ${guild.owner.user.tag} (${guild.owner.user.id})\n**Käyttäjät:** ${guild.memberCount.toLocaleString()}\n**Yhteensä:** __${client.guilds.size.toLocaleString()}__ palvelinta.`);
  dbl.postStats(client.guilds.size);
  };
