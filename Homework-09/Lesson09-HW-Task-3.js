function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getNum(resolvedResult, timeOut) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(resolvedResult)
        }, timeOut)
    })
}

async function getNumbersSum(num1,num2){
    console.log(await num1 + await num2)
}
getNumbersSum(getNum(getRandomInt(1, 6),3000),getNum(getRandomInt(6,11),5000));