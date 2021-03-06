const config = require("../config.json");

exports.run = (client, message, args) => {
    if(message.author.id != config.master){
        message.channel.send("You do not have the permissions!");
        return;
    }
    console.log(message.author.id + " ran clean on " + message.channel.id + " | param: " + args[0]);

    if(args[0] == undefined){
        trigger = 0;
        while(trigger == 0){
            message.channel.bulkDelete(100).catch(trigger = 1);
        }
    } else if (args[0] == parseInt(args[0])){
        n = args[0] + 1;
        trigger = 0;

        while(n > 100 && trigger == 0){
            message.channel.bulkDelete(100).catch(trigger = 1);
            n -= 100;
        }
        if(trigger == 0){
            message.channel.bulkDelete(n).catch();
        }
    } else {
        message.channel.send("Invalid Syntax```Usage: ~/clean [n]```");
        return;
    }

    message.channel.send("> Cleaned!").catch(console.error);
};