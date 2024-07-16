let num = "10";
num = +num;

// Solution One
console.log(num + num); // 20

// Solution Two
console.log((true + true) * num); // 20

// Solution Three
console.log(num ** (true + true) / (num / (true + true))); // 20

// Solution Four
console.log((num * num) / (num / (true + true))); // 20
