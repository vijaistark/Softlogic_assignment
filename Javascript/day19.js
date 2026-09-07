let num = Number(prompt("Enter a number"));
if (num > 0) {
    console.log("Positive");
} else if (num < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}




let num2 = Number(prompt("Enter a number"));

if (num2 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}




let age = Number(prompt("Enter your age"));

if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}




let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));

if (a > b) {
    console.log(a + " is largest");
} else if (b > a) {
    console.log(b + " is largest");
} else {
    console.log("Both are equal");
}




let marks = Number(prompt("Enter marks"));

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}




let x = Number(prompt("first number"));
let y = Number(prompt("second number"));
let z = Number(prompt("third number"));

if (x >= y && x >= z) {
    console.log(x + " is largest");
} else if (y >= x && y >= z) {
    console.log(y + " is largest");
} else {
    console.log(z + " is largest");
}




let year = Number(prompt("Enter year"));

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("Leap year");
} else {
    console.log("No leap year");
}




let drivingAge = Number(prompt("Enter your age"));

if (drivingAge >= 18) {
    console.log("Eligible for driving license");
} else {
    console.log("Not eligible");
}




let number = Number(prompt("Enter a number"));

if (number % 3 === 0 && number % 5 === 0) {
    console.log("Divisible by both 3 and 5");
} else {
    console.log("Not divisible by both 3 and 5");
}




let first = Number(prompt("first number"));
let second = Number(prompt("second number"));
let operator = prompt("Enter operator");

switch (operator) {
    case "+":
        console.log(first + second);
        break;

    case "-":
        console.log(first - second);
        break;

    case "*":
        console.log(first * second);
        break;

    case "/":
        console.log(first / second);
        break;

    default:
        console.log("Invalid operator");
}