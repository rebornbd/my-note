/*
    Hoisting is a behavior in which a function or a 
    variable can be used before declaration.

    (1) Variable Hoisting
    (2) Function Hoisting

    (1) Variable Hoisting:
      var: is hoisted
      let/const: don't hoisted
    
    (2) Function Hoisting:
      normal function: is hoisted
        example:
        sum(2, 2) // calls it before declare because of hoisting

        function sum(num1, num2) {
          return num1 + num2;
        }
    
      expression function: don't hoisted
        example:
        console.log(sum1); // undefined | var hoisted
        console.log(sum2); // undefined | var hoisted
        console.log(sum3); // ref error | let/const don't hoisted
        console.log(sum4); // ref error | let/const don't hoisted


        var sum1 = function(num1, num2) {
          return num1 + num2;
        }

        var sum2 = (num1, num2) => {
          return num1 + num2;
        }

        let sum3 = function(num1, num2) {
          return num1 + num2;
        }

        const sum4 = (num1, num2) => {
          return num1 + num2;
        }
*/


console.log(varVariable);
var varVariable = "this is var";


console.log(sum(3, 2));
function sum(num1, num2) {
  return num1 + num2;
}

console.log(showMessage);
var showMessage = function(message) {
  console.log(message);
}

console.log(showMessage2); /* ref error */
let showMessage2 = function(message) {
  console.log(message);
}
