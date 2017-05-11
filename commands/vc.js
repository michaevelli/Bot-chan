const config = require("../config.json");

exports.run = (client, message, args) => {
    if(message.author.id != config.master){
        message.channel.send("You do not have the permissions!");
        return;
    }

    console.log(message.author.id + " ran vc on " + message.channel.id + " | param: " + args[0] + " , " + args[1]);

    if(args[1] == "-a"){
        const list = message.guild.channels.array();
        if(args[0] == "lock"){
            for(i = 0; i < list.length; i++){
                list[i].overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': false});
            }
            message.channel.send("Locked all voice channels!");
        } else if(args[0] == "unlock"){
            for(i = 0; i < list.length; i++){
                list[i].overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': true});
            }
            message.channel.send("Unlocked all voice channels!");
        } else {
            message.channel.send("Incorrect syntax. Try: ```~/vc <lock|unlock> <-a|>```");
        }
        return;
    }


    const channel = message.member.voiceChannel;
    if(channel == undefined){
        message.channel.send("You are not currently in a voice channel!")
        return;
    }
    if(args[0] == "lock"){
        channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': false});
        message.channel.send("Locking" + channel.name).catch(console.error);
    } else if (args[0] == "unlock"){
        channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': true});
        message.channel.send("unlocking" + channel.name).catch(console.error);
    } else {
        message.channel.send("Incorrect syntax. Try: ```~/vc <lock|unlock> <-a|>```");
    }


}