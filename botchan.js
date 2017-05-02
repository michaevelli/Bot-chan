/*const Discord = require("discord.js");
const client = new Discord.Client();
const config = require('./config.json');


client.on('ready', () => {
    console.log('Okaeri Master!');
    console.log(`${client.guilds.size} servers`);
    console.log(`${client.channels.size} channels`);
    console.log(`${client.users.size} users`);
    //console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});

client.on('message', message => {
    if(message.author.client) return
    if(message.author.id !== config.master) return
    if(message.content === config.prefix + 'ping') {
        message.reply('pong');
    }
});






client.login(config.token);
*/

const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");

const config = require("./config.json");

// This loop reads the /events/ folder and attaches each event file to the appropriate event.
fs.readdir("./events/", (err, files) => {
    if(err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        // super-secret recipe to call events with all their proper arguments *after* the `client` var.
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

client.on("message", message => {
    if (message.author.bot){
        //if(message.content == "Cleaned!"){
        if(message.content.startsWith(">")){
            message.delete(1000);
        }
        return
    };
    if (!message.content.startsWith(config.prefix)) return;




    let command = message.content.split(" ")[0];
    command = command.slice(config.prefix.length);

    let args = message.content.split(" ").slice(1);
    // The list of if/else is replaced with those simple 2 lines:

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(config.token);

var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question("", function(answer) {
   if(answer = "quit"){
        console.log("bye");
        client.destroy();
   }
});

//git push -u origin master