exports.run = (client, message, args) => {

    const channel = message.member.voiceChannel;

    channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': true});

    console.log(message.author.id + " ran unlockvc on " + message.channel.id);
}