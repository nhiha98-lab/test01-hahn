function createCharacters(name, level, health) {
    const characters = [
        { name: "Mario", level: 5, health: 100 },
        { name: "Mario2", level: 9, health: 300 },
        { name: "Mario3", level: 9, health: 500 },
        { name: "Mario4", level: 10, health: 600 },
        { name: "Mario5", level: 2, health: 150 },
    ];
    const charactersPowerUp = characters.map((char) => {
        return {
            name: char.name.toUpperCase(),
            level: char.level * 2,
            health: char.health * 3
        };
    });
    return charactersPowerUp;
}
let possibleWinners = createCharacters().filter((char) => char.health > 1000);
console.log("Possible Winners:", possibleWinners);

function printLeaderBoard(name, score) {
    const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 900 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 800 },
        { name: "Phong", score: 500 }
    ]
    return sortPlayers(players);
}
let sortPlayers = (players) => players.sort((a, b) => b.score - a.score);
const badges = ["🥇", "🥈", "🥉"];
let topPlayers = printLeaderBoard();
topPlayers.forEach((player, index) => {
    const rank = index + 1;
    if (index < badges.length) {
        console.log(`${rank}. ${badges[index]} ${player.name} - ${player.score} pts`);
    } else {
        console.log(`${rank}. ${player.name} - ${player.score} pts`);
    }
}
);