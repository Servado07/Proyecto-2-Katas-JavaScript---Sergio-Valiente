console.log("4.1")

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adults = ages.filter(age => age > 18);

console.log(adults);


console.log("4.2")

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evens = ages2.filter(age => age % 2 === 0);

console.log(evens);


console.log("4.3")

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const lolPlayers = streamers.filter(streamer => streamer.gameMorePlayed === 'League of Legends');

console.log(lolPlayers);


console.log("4.4")

const streamers2 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamersWithU = streamers2.filter(streamer => streamer.name.includes('u'));

console.log(streamersWithU);


console.log("4.5")

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const legendsPlayers = streamers3.filter(streamer => {
    const isLegend = streamer.gameMorePlayed.includes('Legends');
    
    if (isLegend && streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    
    return isLegend;
});

console.log(legendsPlayers);