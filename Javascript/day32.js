// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("welcome to js")
//     }, 2000);
// });
// promise.then((result) => {
//     console.log(result);
// });

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Invalid Data");
//     }, 3000);
// });

// promise.then((result) => {
//     console.log(result);
// })
//     .catch((error) => {
//         console.log(error);
//     });

// function checkNumber(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 !== 0) {
//             resolve("Number is Odd");
//         } else {
//             reject("Number is Even");
//         }
//     });
// }
// checkNumber(7)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function checkAge(age) {
//     return new Promise((resolve, reject) => {
//         if (age >= 18) {
//             resolve("Eligible for Employement");
//         } else {
//             reject("Not eligible for Employement");
//         }
//     });
// }

// checkAge(20)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function Sum(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b < 0) {
//             reject("b cannot be negative");
//         } else {
//             resolve(a + b);
//         }
//     });
// }

// Sum(10, 20)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// let order = new Promise((resolve, reject) => {
//     console.log("Order placed");

//     setTimeout(() => {
//         resolve("Food is ready");
//     }, 5000);
// });

// order.then((result) => {
//     console.log(result);
// });


// function checkString(str) {
//     return new Promise((resolve, reject) => {
//         if (str.length > 0) {
//             resolve("String contains characters");
//         } else {
//             reject("String is empty");
//         }
//     });
// }

// checkString("Hello")
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// function findEven(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("Number is Even");
//         } else {
//             reject("Number is Odd");
//         }
//     });
// }

// findEven(10)
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 completed");
//     }, 1000);
// });

// let p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 completed");
//     }, 2000);
// });

// let p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 3 completed");
//     }, 3000);
// });

// Promise.all([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     });

// let p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 1 completed");
//     }, 3000);
// });

// let p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Promise 2 completed");
//     }, 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Promise 3 failed");
//     }, 2000);
// });

// Promise.race([p1, p2, p3])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


// function delayMessage() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Welcome to Async Await");
//         }, 2000);
//     });
// }

// async function task1() {
//     let result = await delayMessage();
//     console.log(result);
// }

// function getUser() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 id: 1,
//                 name: "Rahul",
//                 email: "rahul@gmail.com"
//             });
//         }, 1500);
//     });
// }

// async function task2() {
//     let user = await getUser();

//     console.log("User Name:", user.name);
//     console.log("Email:", user.email);
// }

// async function loginUser(isLoggedIn) {
//     try {
//         if (isLoggedIn) {
//             console.log("Login successful");
//         } else {
//             throw new Error("Invalid credentials");
//         }
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// function getOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order received");
//         }, 1000);
//     });
// }

// function processOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order processed");
//         }, 1000);
//     });
// }

// function deliverOrder() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Order delivered");
//         }, 1000);
//     });
// }

// async function task4() {
//     let order = await getOrder();
//     console.log(order);

//     let processed = await processOrder();
//     console.log(processed);

//     let delivered = await deliverOrder();
//     console.log(delivered);
// }

// function getProducts() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(["Laptop", "Mobile", "Tablet"]);
//         }, 2000);
//     });
// }

// async function task5() {
//     console.log("Loading products...");

//     let products = await getProducts();

//     console.log(products);
// }

// async function main() {
//     await task1();
//     await task2();
//     await loginUser(false);
//     await task4();
//     await task5();
// }

// main();
