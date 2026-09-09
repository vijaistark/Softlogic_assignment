for (let i = 1; i <= 20; i++) {
    console.log(i);
}


for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
    console.log(i);
}

for (let i = 0; i <= 25; i += 5) {
    console.log(i);
}


let sum1 = 0;

for (let i = 1; i <= 20; i++) {
    sum1 = sum1 + i;
}

console.log("Sum =", sum1);

let sum2 = 0;

for (let i = 0; i <= 20; i += 2) {
    sum2 = sum2 + i;
}

console.log("Sum =", sum2);


let sum3 = 0;

for (let i = 1; i <= 20; i += 2) {
    sum3 = sum3 + i;
}

console.log("Sum =", sum3);

let sum4 = 0;

for (let i = 0; i <= 20; i += 5) {
    sum4 = sum4 + i;
}

console.log("Sum =", sum4);


// 9.
let sum5 = 0;
let fact1 = 1;

for (let i = 1; i <= 10; i++) {
    fact1 = fact1 * i;
    sum5 = sum5 + (i / fact1);
}

console.log("Sum =", sum5);


// 10. 
let sum6 = 0;
let fact2 = 1;

for (let i = 0; i <= 10; i += 2) {

    if (i === 0) {
        sum6 = sum6 + 0;
    } else {
        fact2 = fact2 * (i - 1) * i;
        sum6 = sum6 + (i / fact2);
    }
}

console.log("Sum =", sum6);


// 11. 
let sum7 = 0;
let fact3 = 1;

for (let i = 1; i <= 9; i += 2) {

    if (i === 1) {
        fact3 = 1;
    } else {
        fact3 = fact3 * (i - 1) * i;
    }

    sum7 = sum7 + (i / fact3);
}

console.log("Sum =", sum7);