const Discord = require('discord.js');

const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setDescription('Koksiu pięć gram.')
	.setThumbnail('https://media.tenor.com/images/84673ffc00bbca616c006c39d1bf7e49/tenor.gif')

const client = new Discord.Client();

client.on('ready', () => {

    console.log('Żyje i robie piwo!');

});

client.on('message', message => {

    if (message.content.includes('iwo?')) {

       message.reply('oczywiście.');

       }

});

client.on('message', message => {

    if (message.content.includes('estem menel')) {

       message.reply('gratulacje.');

       }

});

client.on('message', message => {

    if (message.content.includes('ylko jedno w głowie ma')) {

       message.channel.send({embed:exampleEmbed});

       }

});

client.login(process.env.BOT_TOKEN);
