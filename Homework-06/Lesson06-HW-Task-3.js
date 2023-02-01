// First variant
let arr;
arr = [12, 15, 20, 25, 59, 79];
for (let i = 0, sum = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i === arr.length-1) {
        let avg = sum/arr.length;
    };
};

// Second variant
let avg =arr.reduce((sum, x) => sum + x)/arr.length