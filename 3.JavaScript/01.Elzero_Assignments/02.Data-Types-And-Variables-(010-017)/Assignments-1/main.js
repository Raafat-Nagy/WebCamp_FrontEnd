let numberOne = 10;
let numberTwo = 20;

// Normal Concatenate => 1020
console.log(numberOne + "" + numberTwo);
// Normal Concatenate => String
console.log(typeof (numberOne + "" + numberTwo));

// Template Literals Way => 1020
console.log(`${numberOne}${numberTwo}`);
// Template Literals Way => String
console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/
