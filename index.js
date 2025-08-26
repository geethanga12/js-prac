const numbers = [1, 2, 3, 4, 5];

const double = numbers.map((num) => num * 2);

console.log(double);
console.log(numbers);





// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(doubleNum);
// numbers.forEach(display);

// function doubleNum(element, index, array){
//   array[index] = element * 2;
// }

// function display(element) {
//   console.log(element);
// }



// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Dog walked");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Kitchen cleaned");
//     }, 2500);
//   });
// }

// function doLaundry() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Laundry done");
//     }, 500);
//   });
// }

// walkDog()
//   .then((value) => {
//     console.log(value);
//     return cleanKitchen();
//   })
//   .then((value) => {
//     console.log(value);
//     return doLaundry();
//   })
//   .then((value) => {
//     console.log(value);
//     console.log("All tasks completed!");
//   });

// function hello() {
//   return new Promise((resolve, reject) => {
//     resolve("Hello, World!");
//     reject("Error occurred");
//   });
// }

// hello()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Execution completed.");
//   });

// import { PI, getCircleArea } from './mathUtil.js';

// console.log("Value of PI:", PI);
// console.log("Area of circle with radius 5:", getCircleArea(5).toFixed(2));

// let num = [1, 2, 3, 4, 5];

// num.push(6);
// console.log(num);

// num.pop();
// console.log(num);

// num.shift();
// console.log(num);

// num.unshift(0);
// console.log(num);

// num.splice(2, 1); // Remove 1 element at index 2
// console.log(num);

// const myPromise = new Promise((resolve, reject) => {
//   const success = true; // Simulate success or failure)
//   if (success) {
//     resolve("Promise resolved successfully!");
//   } else {
//     reject("Promise rejected.");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("Promise handling completed.");
//   });

// function checkNumber(num) {
//   if (num % 2 === 0) {
//     console.log(num + " is an even number.");
//   } else {
//     console.log(num + " is an odd number.");
//   }
// }

// checkNumber(16);

// let course = "computer science";

// console.log(course);

// function calculateTax(taxPercent, amount) {
//     return (taxPercent / 100) * amount;
// }

// console.log(calculateTax(10, 50000));

// console.log(50 == "50");

// console.log(50 === "50");
