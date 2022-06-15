/* 
  Function:
    (a) Function signatures | function body | function call
    (b) Function overloading
    (c) Method overloading
*/


////////////////////
// (a) Function signatures | function body | function call
////////////////////
let log: (message: string) => void;
let add: (num1: number, num2: number) => number;
let calculate: (num1: number, num2: number, num3?: number) => number;

log = (message) => {
  console.log(message);
}

add = (num1, num2) => {
  return num1 + num2;
}

calculate = (num1, num2, num3 = 0) => {
  return num1 + num2 + num3;
}

const calculation = (num1: number, num2: number, num3: number = 0): number => {
  return num1 + num2 + num3;
}

log(`Hi ${"rahim"}`);
add(10, 10);

calculate(5, 10);
calculation(2, 5);
calculation(5, 3, 2);


////////////////////
// (b) Function overloading
////////////////////
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;

function add1(a: any, b: any): any {
   return a + b;
}

add1(1, 1);
add1('rahim ', 'khan');


////////////////////
// (c) Method overloading
////////////////////
class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  show(): void;
  show(all: boolean): void;

  show(all: boolean = false) {
    if (all) {
      console.log(`Name: ${this.name}, age: ${this.age}`);
    } else {
      console.log(`Name: ${this.name}`);
    }
  }
}

const person = new Person("rahim", 27);
person.show();
person.show(true);
