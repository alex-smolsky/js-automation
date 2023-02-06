function getRandomInt() {
    let min = 1;
    let max = 7;
    return Math.floor(Math.random() * (max - min)) + min;
}

// First variant

function game(){
    let sum1=0, sum2=0;
    for (let i = 0; i < 6; i++){
        const dice = getRandomInt();
        if (i%2===0){
            sum1+=dice;
            console.log("player 1 throws " + dice)
        } else {
            sum2+=dice;
            console.log(`player 2 throws ${dice}`)
        }
    }
    return [sum1, sum2];
}

function compareResult() {
    const [firstResult, secondResult] = game();
    if (firstResult > secondResult) {
        console.log("First player wins!");
    } else if (secondResult > firstResult) {
        console.log("Second player wins!");
    } else {
        console.log("Draw!")
    }
}


// Second variant

function playerTurn(currentSum) {
    return currentSum + getRandomInt();
}

function dicesGame(numberOfTurns) {

    let a = 0, b = 0;
    for (let i = 0; i < numberOfTurns; i++) {
            if (i % 2 === 0) {
                a = playerTurn(a);
                console.log("first player score " + a)
            } else {
                b = playerTurn(b);
                console.log("second player score " + b);
            }
    }
    if (a > b) {
        console.log("FP wins")
    } else if (b > a) {
        console.log("SP wins");
    } else {
        console.log("Draw")
    }
}

// Third variant

const sum = data => data.reduce((a, b) => a + b, 0);
function diceGame2(numberOfTurns){
    const players = [[], []];
    for (let i =0; i < numberOfTurns; i++){
        players[i%2].push(getRandomInt());
    }
    const [sum1, sum2] = players.map(sum);

    if (sum1 > sum2){
        console.log("FP wins!")
    } else if (sum2 > sum1){
        console.log("SP wins!")
    } else {
        console.log("Draw!")
    }
}

diceGame2(8)