exports.run = (client, message, args) => {
    message.channel.send("Beep Boop. I am a bot.").catch(console.error);
    message.channel.send("```<commands> \
        clean <n|> \
            clear chat channel \
        vc <lock/unlock> <-a|> \
            lock/unlock voice channels \
        headpat \
            headpat \
        ping \
            pong! \
        pong \
            ping!```").catch(console.error);
    console.log(message.author.id + " ran help on " + message.channel.id);
}