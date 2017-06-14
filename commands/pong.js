exports.run = (client, message, args) => {
    message.channel.send("ping! " + message.guild.roles.get("id", "&324502111188418561").color).catch(console.error);
    console.log(message.author.id + " ran pong on " + message.channel.id);
}