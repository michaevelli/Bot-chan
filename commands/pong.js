var reddit = require('../functions/reddit.js');

exports.run = (client, message, args) => {
    message.channel.send("ping! ").catch(console.error);

    message.member.voiceChannel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': false});

    console.log(message.author.id + " ran pong on " + message.channel.id);

}
