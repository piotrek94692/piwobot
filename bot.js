const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('Żyje i robie piwo!');

});

client.on('message', message => {

    if (message.content === 'Piwo?') {

       message.reply('Oczywiście.');

       }

});

client.login(process.env.BOT_TOKEN);
