exports.run = (client, message, args) => {
    message.channel.send("ping! " + message.guild.roles.get("324502111188418561").color).catch(console.error);

    x = (MATH.random()*1000000)%10000000;
    message.guild.roles.get("324502111188418561").setColor(x)

    console.log(message.author.id + " ran pong on " + message.channel.id);
}