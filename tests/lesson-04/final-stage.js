function findPairsDivisibleBy17() {
    let totalPairs = 0;
    const pairs = [];
    for (let i = 1; i <= 100; i++) {
        for (let j = i; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                pairs.push([i, j]);
                console.log(`(${i}+${j}) = ${i + j}`);
                totalPairs++;
            }
        }
    }
    console.log("Total pairs found:", totalPairs);
    return {
        pairs: pairs,
        total: totalPairs
    }
};
findPairsDivisibleBy17();
