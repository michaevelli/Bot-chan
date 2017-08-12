const request = require('request');

exports.redditrandom = function(client, guild){
    guild.channels.forEach(function(channel){
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

exports.redditplus = function(client, guild, score){
    guild.channels.forEach(function(channel){
        name = channel.name;
        if(name.split("_")[1] == "reddit"){
            var url = 'https://reddit.com/r/' + name.split("_")[0] + '/random.json'
            var vote = 0;
            var link = undefined;
            while(vote < score){
                request(url, function(error, response, body) {
                    if(!error && response.statusCode == 200){
                        vote = JSON.parse(body).data.children[0].data.score;
                        link = JSON.parse(body).data.children[0].data.url;
                    }
                    return;
                });
            }
            channel.send(link);
            console.log("sent " + link + " to " + channel.id);
            console.log(vote);
        }
    })
}

exports.reddithot = function(client, guild){
    guild.channels.forEach(function(channel){
        name = channel.name;
        if(name.split("_")[1] == "reddit"){
            var url = 'https://reddit.com/r/' + name.split("_")[0] + '/hot.json'
            request(url, function(error, response, body) {
                var n = Math.random() * (22 - 2) + 2;
                if(!error && response.statusCode == 200){
                    link = JSON.parse(body).data.children[n].data.url;
                    channel.send(link);
                    console.log("sent " + link + " to " + channel.id);
                }
            });
        }
    })
}