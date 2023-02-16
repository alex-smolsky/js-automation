function getRandomInt() {
    let min = 1;
    let max = 6;
    return Math.floor(Math.random() * (max - min)) + min;
}

function getPromiseRes(result) {
    return new Promise((res) =>
        setTimeout(() => {
            res (result)
        }, getRandomInt()*1000)
    )}

let promise1 = getPromiseRes(1)
let promise2 = getPromiseRes(2)
let promise3 = getPromiseRes(3)

async function main(){
    const result = await Promise.race([promise1, promise2, promise3])
    console.log(result)
}
main();