exports.run = (client, message, args) => {
    message.channel.send("ping! " + message.server.roles.get("name", "rainbow").color).catch(console.error);
    console.log(message.author.id + " ran pong on " + message.channel.id);
}