let str = " 280388Hello ";
let boolTrue = true;
let boolFalse = false;
let numb = 23;

// Addition

let resStrPlusBool = str + boolTrue;
let resStr1PlusNumb = str + numb;
let resNumbPlusBool = numb + boolTrue;

// Multiplication

let resStrMultipleBool = str * boolTrue;
let resStrMultipleNumb = str * numb;
let resNumbMultipleBool = numb * boolFalse;

// Division
let resStrDivideBool = str / boolTrue;
let resStrDivideNumb = str / numb;
let resNumbDivideBool = numb / boolFalse;

// Explicit conversion

let strToBool = Boolean(str);
let numbToBool = Boolean(numb);
let boolToString = boolTrue.toString();
let numbToString = String(numb);
let strToNumb = parseInt(str);
let strToNumb1 = Number(str);
let strToNumb2 = +("1234");
let boolToNumb = Number(boolTrue);
let boolToNumb1= +(boolFalse);
