exports.run = (client, message, args) => {
    console.log(message.author.id + " ran role on " + message.channel.id + " | param: " + args[0] + " , " + args[1]);

    if(args[0] == undefined){
        message.channel.send("Invalid Syntax```Usage: ~/role <rolename> [lock|unlock]```");
        return;
    }

    role = message.guild.roles.find("name", args[0]);
    if(role == undefined){
        message.channel.send("No such role \"" + args[0] + "\" found on server.");
        return;
    }

    var trigger = 0;
    message.member.roles.forEach(function(role){
        if(role.name == args[0]){
            trigger = 1;
        }
    });

    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync('./data/roleeditable.JSON', 'utf8'));

    var canedit = 0;
    for(i in obj.roles){
        if(obj.roles[i] == role.name){
            canedit = 1;
        }
    }

    //status
    if(args[1] == undefined){
        if(trigger == 0){
            message.channel.send("You are not in role " + args[0]);
        } else {
            message.channel.send("You are in role " + args[0]);
        }
        return;

    } else if(canedit == 1){
        if(args[1] == "join"){
            if(trigger == 1){
                message.channel.send("You are already in this role");
                return;
            }
            message.member.addRole(role);
            message.channel.send("You are now in role " + args[0]);
        } else if(args[1] == "leave"){
            if(trigger == 0){
                message.channel.send("You are already not part of this role");
                return;
            }
            message.member.removeRole(role);
            message.channel.send("You have now left role " + args[0]);
        } else {
            message.channel.send("Invalid Syntax```Usage: ~/role <rolename> [join|leave]```");
        }
    } else {
        message.channel.send("You do not have the permissions to access that role");
    }

}