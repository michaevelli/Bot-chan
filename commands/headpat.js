const config = require("../config.json");

exports.run = (client, message, args) => {
    console.log(message.author.id +" ran headpat on " message.channel.id);
    if(message.author.id === config.master){
        switch(rand(0,4)){
        case 0:
            message.channel.send("~(^o^)~").catch(console.error);
            break;
        case 1:
            message.channel.send("Mm!~").catch(console.error);
            break;
        case 2:
            message.channel.send("Arigatou, Master!").catch(console.error);
            break;
        case 3:
            message.channel.send("~yay~").catch(console.error);
            break;
        case 4:
            message.channel.send("^-^").catch(console.error);
            break;
        default:
            message.channel.send("error: default case reached /m. does mod match number of case?").catch(console.error);
    }
        return;
    }

    switch(rand(0,9)){
        case 0:
            message.channel.send("don't touch me").catch(console.error);
            break;
        case 1:
            message.channel.send("keep your filthy hands away from me").catch(console.error);
            break;
        case 2:
            message.channel.send("die in a hole").catch(console.error);
            break;
        case 3:
            message.channel.send("your parents are disappointed in you").catch(console.error);
            break;
        case 4:
            message.channel.send("you are nothing").catch(console.error);
            break;
        case 5:
            message.channel.send("you don't deserve to touch me").catch(console.error);
            break;
        case 6:
            message.channel.send("mada mada").catch(console.error);
            break;
        case 7:
            message.channel.send("you are a mistake").catch(console.error);
            break;
        case 8:
            message.channel.send("get away from me you trash").catch(console.error);
            break;
        case 9:
            message.channel.send("Mm!~").catch(console.error);
            break;
        default:
            message.channel.send("error: default case reached. does mod match number of case?").catch(console.error);
    }
}

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}