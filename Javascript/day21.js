// let a = 1;
// let b = 5;

// for (let i = 1; i <= b; i++) {
//     a *= i;
// }

// console.log(`factorial of ${b} = ${a}`);


// let number13 = 6;
// let count13 = 0;

// for (let i = 1; i <= number13; i++) {

//     if (number13 % i == 0) {
//         count13++;
//     }
// }


// if (count13 == 2) {
//     console.log(`${number13} is prime`);
// }
// else {
//     console.log(`${number13} is not a prime`);
// }







// let r;
// let sum15 = 0;
// let number15 = 153;
// let temp15;

// temp15 = number15;

// while (temp15 > 0) {

//     r = temp15 % 10;

//     sum15 += r * r * r;

//     temp15 = parseInt(temp15 / 10);
// }

// if (number15 == sum15) {
//     console.log(`${number15} is Armstrong`);
// }
// else {
//     console.log(`${number15} is not Armstrong`);
// }


// console.log("Prime number series:");

// for (let number14 = 1; number14 <= 50; number14++) {

//     let count14 = 0;

//     for (let i = 1; i <= number14; i++) {

//         if (number14 % i == 0) {
//             count14++;
//         }
//     }

//     if (count14 == 2) {
//         console.log(number14);
//     }
// }

// console.log("Armstrong number series:");

// for (let number16 = 1; number16 <= 1000; number16++) {

//     let temp16 = number16;
//     let sum16 = 0;

//     while (temp16 > 0) {

//         let r16 = temp16 % 10;

//         sum16 += r16 * r16 * r16;

//         temp16 = parseInt(temp16 / 10);
//     }

//     if (number16 == sum16) {
//         console.log(number16);
//     }
// }


console.log("Fibonacci series:");

let first = 0;
let second = 1;

for (let i = 1; i <= 10; i++) {

    console.log(first);
    let next = first + second;


    first = second;
    second = next;


}


console.log("5 Table:");

for (let i = 1; i <= 10; i++) {

    console.log(`${i} * 5 = ${i * 5}`);
}



let number19 = 123;
let temp19 = number19;
let sum19 = 0;

while (temp19 > 0) {

    let r19 = temp19 % 10;

    sum19 += r19;

    temp19 = parseInt(temp19 / 10);
}

console.log(`sum of digits of ${number19} = ${sum19}`);


let word20 = "MALAYALAM";
let reverse20 = "";

for (let i = word20.length - 1; i >= 0; i--) {

    reverse20 += word20[i];
}

if (word20 == reverse20) {
    console.log(`${word20} is palindrome`);
}
else {
    console.log(`${word20} is not palindrome`);
}