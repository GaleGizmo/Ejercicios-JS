const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

function legends (streamer){
    if (streamer.gameMorePlayed.includes("Legends")==true && streamer.age>35){
       streamer.gameMorePlayed=streamer.gameMorePlayed.toUpperCase()
return streamer.name

    }
}
console.log(streamers.filter(legends))