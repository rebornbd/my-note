/*
  TypeScript types are:
    (a) Primitive types
      (1) string
      (2) number
      (3) boolean
      (4) null
      (5) undefined | It is a default value of an uninitialized variable
      (6) symbol    | It represents a unique constant value

    (b) Object types
      *) functions
      *) arrays
      *) classes
     **) etc.
*/
// variable data types
var person1 = 'Rahim';
var person2 = person1;
var persons1 = [person1, person2];
var persons2 = [person1, person2];
// function signatures
var add;
// function body
add = function (num1, num2) {
    return num1 + num2;
};
// function call
add(10, 10);
