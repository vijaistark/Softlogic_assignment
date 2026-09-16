const factorial = (number) => {

    let a = 1;

    for (let i = 1; i <= number; i++) {
        a *= i;
    }

    console.log(`factorial of ${number} = ${a}`);
};

factorial(5);

const prime = (number) => {

    let count = 0;

    for (let i = 1; i <= number; i++) {

        if (number % i == 0) {
            count++;
        }
    }

    if (count == 2) {
        console.log(`${number} is prime`);
    }
    else {
        console.log(`${number} is not a prime`);
    }
};

prime(6);
const armstrong = (number) => {

    let r;
    let sum = 0;
    let temp = number;

    while (temp > 0) {

        r = temp % 10;

        sum += r * r * r;

        temp = parseInt(temp / 10);
    }

    if (number == sum) {
        console.log(`${number} is Armstrong`);
    }
    else {
        console.log(`${number} is not Armstrong`);
    }
};

armstrong(153);
const primeSeries = (limit) => {

    console.log("Prime number series:");

    for (let number = 1; number <= limit; number++) {

        let count = 0;

        for (let i = 1; i <= number; i++) {

            if (number % i == 0) {
                count++;
            }
        }

        if (count == 2) {
            console.log(number);
        }
    }
};

primeSeries(50);
const armstrongSeries = (limit) => {

    console.log("Armstrong number series:");

    for (let number = 1; number <= limit; number++) {

        let temp = number;
        let sum = 0;

        while (temp > 0) {

            let r = temp % 10;

            sum += r * r * r;

            temp = parseInt(temp / 10);
        }

        if (number == sum) {
            console.log(number);
        }
    }
};

armstrongSeries(1000);
const fibonacci = (limit) => {

    console.log("Fibonacci series:");

    let first = 0;
    let second = 1;

    for (let i = 1; i <= limit; i++) {

        console.log(first);

        let next = first + second;

        first = second;
        second = next;
    }
};

fibonacci(10);
const table = (number) => {

    console.log(`${number} Table:`);

    for (let i = 1; i <= 10; i++) {

        console.log(`${i} * ${number} = ${i * number}`);
    }
};

table(5);
const sumOfDigits = (number) => {

    let temp = number;
    let sum = 0;

    while (temp > 0) {

        let r = temp % 10;

        sum += r;

        temp = parseInt(temp / 10);
    }

    console.log(`sum of digits of ${number} = ${sum}`);
};

sumOfDigits(123);
const palindrome = (word) => {

    let reverse = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reverse += word[i];
    }

    if (word == reverse) {
        console.log(`${word} is palindrome`);
    }
    else {
        console.log(`${word} is not palindrome`);
    }
};

palindrome("MALAYALAM");