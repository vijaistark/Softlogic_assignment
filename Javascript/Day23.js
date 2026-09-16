let numbers = [10, 20, 30];

console.log(numbers);

numbers.push(40);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

numbers.shift();
console.log(numbers);


let fruits = ["Apple", "Banana", "Mango", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

let numbers2 = [1, 2, 3, 4, 5];
let doubled = numbers2.map((number) => {
    return number * 2;
});
console.log(doubled);

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbers3.filter((number) => {
    return number % 2 == 0;
});
console.log(evenNumbers);

let numbers4 = [10, 20, 30, 40, 50];
let sum = numbers4.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum);


let numbers5 = [5, 8, 12, 15, 20];
let result = numbers5.find((number) => {
    return number > 10;
});
console.log(result);


let numbers6 = [10, 20, 30, 40, 50];
let check = numbers6.includes(30);
console.log(check);