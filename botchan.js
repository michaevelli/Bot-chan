const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require('./config.json');


bot.on('ready', () => {
    console.log('Okaeri Master!');
});

bot.on('message', message => {
    if(message.author.bot) return
    if(message.author.id !== config.master) return
    if(message.content === config.prefix + 'ping') {
        message.reply('pong');
    }
});






bot.login(config.token);



