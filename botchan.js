
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
var color = require('./functions/colorchange.js');

const config = require("./config.json");
//eval(color.readFileSync('functions/colorchange.js'+''));

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
        if(message.content.startsWith(">")){
            message.delete(1000);
        }
        return;
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







//rainbow function.
setTimeout (function(){
    var interval = setInterval (function(){
        client.guilds.forEach(function(guild){
            role = guild.roles.find("name", "rainbow");
            role.setColor(color.changeHue(role.hexColor, 1));
            //console.log(role.hexColor);
        });
    }, 20);
},1000);




//ping self to prevent timeout
var http = require("http");
var pinger = setInterval(function() {
    var d = new Date();
    if( !(d.getUTCHours() >= 14 && d.getUTCHours() <= 23) ){
        try {
            http.get("http://ancient-sea-31927.herokuapp.com");
            console.log("Ping Self");
        } catch(err) {
            console.log(err);
        }
    }
}, 600000);
