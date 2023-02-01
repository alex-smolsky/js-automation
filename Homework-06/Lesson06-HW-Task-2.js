// First variant

let num = 0;
let n =1000;
for ( ; n >= 50; num++, n /= 2) {};

// Second variant

let num1 = 0;
for (let n1 = 1000;; num1++, n1/=2){
    if (n1 < 50){
        break
    }
}

// Third variant

let n2 = 1000;
let num2 = 0;
while (n2 >= 50){
    n2 /= 2;
    num2++
}
