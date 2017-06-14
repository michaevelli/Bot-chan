exports.run = (client, message, args) => {
    message.channel.send("ping!" + server.roles.get("name", "rainbow")).catch(console.error);
    console.log(message.author.id + " ran pong on " + message.channel.id);
}