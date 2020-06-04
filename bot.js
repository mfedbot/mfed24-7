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
    	message.channel.send('冲!');
  	}
});

client.on('message', message => {
    if (message.content === 'chao') {
    	message.channel.send('NI MA!');
  	}
});

client.on('message', message => {
    if (message.content === 'chong') {
    	message.reply('not gonna say it ni*ga!');
  	}
}); 

client.login(process.env.BOT_TOKEN);
