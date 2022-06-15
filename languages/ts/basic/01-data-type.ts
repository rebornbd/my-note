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

////////////////////
// variable data types
////////////////////
const person1 = 'Rahim';
const person2: string = person1;
const persons1: string[] = [person1, person2];
const persons2: Array<string> = [person1, person2];

////////////////////
// function signatures
////////////////////
let add: (num1: number, num2: number) => number;

////////////////////
// function body
////////////////////
add = (num1, num2) => {
  return num1 + num2;
}

////////////////////
// function call
////////////////////
add(10, 10);
