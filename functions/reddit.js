exports.redditrandom = function(client){
    client.channels.forEach(function(channel){
        name = channel.name;
        if(name.split("_")[1] == "reddit"){
            var url = 'https://reddit.com/r/' + name.split("_")[0] + '/random.json'
            request(url, function(error, response, body) {
                if(!error && response.statusCode == 200){
                    link = JSON.parse(body)[0].data.children[0].data.url;
                    channel.send(link);
                    console.log("sent " + link + " to " + channel.id);
                }
            });
        }
    })
}