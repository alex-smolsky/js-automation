function getRandomInt() {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNum() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(getRandomInt())
        }, 3000)
    })
}

async function getSquareOfNumber(number) {
    console.log(Math.pow(await number, 2));
}

getSquareOfNumber(getNum())