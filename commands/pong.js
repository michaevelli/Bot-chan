var reddit = require('../functions/reddit.js');

exports.run = (client, message, args) => {
    message.channel.send("ping! ").catch(console.error);

    reddit.reddithot(client, client.guilds.find("id","167895139518382081"));

    console.log(message.author.id + " ran pong on " + message.channel.id);

}
