const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function morePlayerMore30(streamer) {
  if (streamer.gameMorePlayed === "League of Legends" && streamer.age < 30) {
    return streamer.name;
  }
}
console.log(streamers.filter(morePlayerMore30));
