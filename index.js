const config = require('./config.json');
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./app.js', { token: config.token });

manager.spawn();
manager.on('launch', shard => console.log(`Käynnistin Oren ${shard.id}`));