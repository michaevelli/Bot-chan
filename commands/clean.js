const config = require("../config.json");

exports.run = (client, message, args) => {
    if(message.author.id != config.master){
        message.channel.send("You do not have the permissions!");
        return;
    }
    /*
        n = 100;
        if(args[0] == parseInt(args[0])){
            n = args[0];
        }

        if (message.channel.type == 'text') {
            //for(i = 0; i < n; i++){
            //    message.channel.fetchMessages().then(messages => {
            //        if(messages.array().length > 2){
            //            message.channel.bulkDelete(n);//.catch(console.error);
            //        };
            //    })
            //}
            if (args[0] == "all") {
                message.channel.bulkDelete(message.channel.fetchMessages());
                console.log("oh no");
            } else {
                message.channel.bulkDelete(n);
            }

        }
        message.channel.send("> Cleaned!").catch(console.error);
        console.log(message.author.id + " ran clean on " + message.channel.id + " | param: " + args[0]);

    */
    n = 1;
    const channel = message.channel;
    if(args[0] == parseInt(args[0])){
        n = args[0];
    }
    /*for(i = 0; i < n; i++){
        if(channel.lastMessageID != undefined){
            mess = channel.fetchMessage(channel.lastMessageID);
            mess.delete();
        } else {
            break;
        }
        i++;
    }*/
    const messlist = client.messages
    for(messageStep in messlist){
        if(messageStep.channel == channel){
            messageStep.delete();
        }
    }





    message.channel.send("> Cleaned!").catch(console.error);
    console.log(message.author.id + " ran clean on " + message.channel.id + " | param: " + args[0]);
};