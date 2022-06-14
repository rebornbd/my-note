// Function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;

function add(a: any, b: any): any {
   return a + b;
}

console.log(add(1, 1));
console.log(add('rahim ', 'khan'));


// method overloading
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
