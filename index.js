const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = "!"


client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
      message.channel.send('No')
    }else if (command == 'e'){
        message.channel.send('bruh get lost ty!');
    }
});

client.on("ready", () => {
  console.log('Dog Shit!')
});

client.login("ODM4NTkyOTI4OTM3OTM0ODc5.YI9Whg.dzNBgYcpjMWGYiqktMZHWV3qXv8")