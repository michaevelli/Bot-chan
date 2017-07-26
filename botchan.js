
const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();
const fs = require("fs");
var color = require('./functions/colorchange.js');

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







//colorchange
setTimeout (function(){
    var interval = setInterval (function(){
        client.guilds.forEach(function(guild){
            role = guild.roles.find("name", "rainbow");
            if(role != undefined){
                role.setColor(color.changeHue(role.hexColor, 5));
            }
        });
    }, 100);
},2000);


//tzuyu
/*
setTimeout (function(){
    var interval2 = setInterval (function(){
    //post picture/gif of tzuyu in channel
        var url = 'https://www.reddit.com/r/tzuyu/random.json';
        request(url, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                tzuyuJSON = JSON.parse(body);
                link = tzuyuJSON[0].data.children[0].data.url;
                client.guilds.forEach(function(guild){
                    channel = guild.channels.find("name", "tzuyu");
                    if(channel != undefined){
                        channel.send(link);
                        console.log("sent " + link + " to " +  channel.id);
                    }
                })
            }
        });
    }, 3600000);
},2000);*/
setTimeout (function(){
    var interval2 = setInterval (function(){
        //post picture/gif of tzuyu in channel
        var d = new Date();
        if((d.getUTCHours == 11 || d.getUTCHours == 23) && d.getUTCMinutes == 0){
            var url = 'https://www.reddit.com/r/tzuyu/random.json';
            request(url, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    tzuyuJSON = JSON.parse(body);
                    link = tzuyuJSON[0].data.children[0].data.url;
                    client.guilds.forEach(function(guild){
                        channel = guild.channels.find("name", "tzuyu");
                        if(channel != undefined){
                            channel.send(link);
                            console.log("sent " + link + " to " +  channel.id);
                        }
                    })
                }
            });
        }
    }, 60000);
},2000);


var express = require('express');
var app     = express();
app.set('port', (process.env.PORT || 5000));
//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});


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
