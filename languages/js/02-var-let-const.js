/*
    var: functional scope, reassign, redeclare
    let: block scope, reassign
    const: block scope
*/

var varGlobalScope = "this is global scope variable";
varGlobalScope = "this is global scope variable | reassign";
var varGlobalScope = "this is global scope variable | redeclare";

function foo() {
  var varFunctionScope = "this is functional scope variable";
}


if (true) {
  let letBlockScope = "this is block scope variable";
  letBlockScope = "this is block scope variable | reassign";
}

if (true) {
  const constBlockScope = "this is block scope variable";

  const person = { name: "rahim", age: 27 };
  person.name = "Rahim Khan"; // not reassign, just update property
}
