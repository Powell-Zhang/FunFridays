const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
 
  if (command === 'ping'){
    message.channel.send('pong!');
  }
  else if (command == 'youtube') {
    message.channel.send('Subscribe to Powell');
    message.channel.send('youtube.com');
  }
});

client.login('your-token-goes-here');