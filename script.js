const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulate success or failure)
  if (success) {
    resolve("Promise resolved successfully!");
  } else {
    reject("Promise rejected.");
  }
});

myPromise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise handling completed.");
  });

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
