exports.run = (client, message, args) => {
    /*message.channel.send("ping!").catch(console.error);
    console.log(message.author.id + " ran pong on " + message.channel.id);
    */

    //find vc the user is in
    //edit permissions for vc for "everyone"
    //    {'CONNECT': false}

    //message.author.client.voiceConnections.overwritePermissions("everyone",{'CONNECT': false});

    const channel = message.member.voiceChannel;
    /*
    channel.join()
    .then(connection => console.log('Connected!'))
    .catch(console.error);
    */
    /*message.server.roles.get("name", "@everyone")*/
    channel.overwritePermissions(message.guild.roles.find("name", "@everyone"), {'CONNECT': false});

    console.log(message.author.id + " ran lockvc on " + message.channel.id);
}