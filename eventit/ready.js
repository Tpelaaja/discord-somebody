const Discord = require('discord.js');
const config = require('../config.json');
module.exports = client => {
	client.user.setActivity(`@Somebody | Randomly Ping Anybody Easily`, { type: 'PLAYING' });
	console.log('Valmis');
}
