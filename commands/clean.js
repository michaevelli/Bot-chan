const config = require("../config.json");

exports.run = (client, message, args) => {
    if(message.author.id === config.master){
        n = 100;
        if(args[0] == parseInt(args[0])){
            n = args[0];
        }

        if (message.channel.type == 'text') {
            //for(i = 0; i < n; i++){
            //    message.channel.fetchMessages().then(messages => {
            //        if(messages.array().length > 2){
                        message.channel.bulkDelete(n);//.catch(console.error);
            //        };
            //    })
            //}
            message.channel.send("> Cleaned!").catch(console.error);
            console.log(message.author.id +" ran clean on " message.channel.id);
        }

    };
};