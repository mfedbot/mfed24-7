const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'ching') {
    	message.channel.send('CHONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'chao') {
    	message.channel.send('NI MA!');
  	}
});

client.on('message', message => {
    if (message.content === 'chong') {
    	message.channel.send('not gonna say it ni**a');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
