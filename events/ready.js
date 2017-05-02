exports.run = (client) => {
    console.log('Okaeri Master!');
    console.log(`${client.guilds.size} servers`);
    console.log(`${client.channels.size} channels`);
    console.log(`${client.users.size} users`);
    client.channels.get("306391339031986177").send("Tadaima~");
}