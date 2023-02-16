// First variant
function divide(k, n) {
    let arr = [];
    for (let i = 0; i < n-1; i++) {
        const x = Math.floor(Math.random() * k / (n-i));
        k-=x;
        arr.push(x)
    }
    arr.push(k);
    return arr;
}

// Second variant
function divide2(k, n, res = []){
    console.log(`dividing number ${k} to ${n} parts`)
    if (n === 1){
        res.push(k);
        return res;
    }
    const x = Math.floor(Math.random() * k/(n-1));
    res.push(x);
    return divide2(k-x, n-1, res)

}

function divide3(k, n, res = []){
    console.log(`dividing number ${k} to ${n} parts`)
    if (n === 1){
        res.push(k.toFixed(2));
        return res.map(Number);
    }
    const x = (Math.random() * k/(n-1)).toFixed(2);
    res.push(x);
    return divide3(k-x, n-1, res)

}