let playerName = "Mario";
const currentLives = 3;
const coinsLevels = { "Level 1": 25, "Level 2": 30, "Level 3": 45 };
let sum = sumCoins(coinsLevels);
function sumCoins(levels) {
    let total = 0;
    for (let level in coinsLevels) {
        total += coinsLevels[level];
    }
    return total;
}
function averageCoins(total, levels) {
    return total / levels;
}
console.log(`Remainder of coins: ${sum % 3}`);