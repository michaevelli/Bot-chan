exports.run = (client, message, args) => {
    message.channel.send("Beep Boop. I am a bot.").catch(console.error);
    message.channel.send("```md\n\
<commands>\n\
clean <n|>\n \
#   clear chat channel\n\
vc <lock/unlock> <-a|>\n\
#    lock/unlock voice channels\n\
headpat\n\
#    headpat\n\
ping\n\
#    pong!\n\
pong\n\
#    ping!\n\
```").catch(console.error);
    console.log(message.author.id + " ran help on " + message.channel.id);
}