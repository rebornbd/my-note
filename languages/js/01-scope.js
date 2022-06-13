/*
    Scope determines the visibility and accessibility 
    of a variable.

    (1) global scope
    (2) function/local scope
    (3) block scope

    var: funtional/local scope
    let/const: block scope
*/


// var y; /* engine declare this */
var x = 10;

function foo() {
  var x = 20; // this x is foo functional scope variable

  y = 50; /* here y is assign a value but not declare,
             then go to it's parent & lookup where it's
             declare, if not find then it's declare in 
             the global scope */
}


foo();
console.log(`x: ${x}`); // x is not change
console.log(`y: ${y}`);
