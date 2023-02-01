let str = "1,2,3,1,2,3";
let array = str.split(",")
let sum1 = +array[0] + +array[1] + +array[2];
let sum2 = +array[3] + +array[4] + +array[5];

if (sum1 === sum2) {
    console.log("Да")
} else {
    console.log("Нет")
};
