/* 
  CLASS:
  ------
    TS three access modifier:
      (1) public | default | allows access from any location
      (2) protected        | allows access within the same class and subclasses
      (3) private          | allows access within the same class
  
    To mark a property as immutable use keyword:
      (a) readonly
    
    
    (01) constructor
    (02) constructor with short way by adding access modifier
    (03) readonly
    (04) inheritance
    (05) Method overriding
    (06) static properties and methods
    (07) Abstract Classes
    (08) Class Interface
*/


////////////////////
// constructor
////////////////////
class Person1 {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const p1 = new Person1("rahim", 27);


////////////////////
// constructor with short way by adding access modifier
////////////////////
class Person2 {
  constructor(public name: string, private age: number) {}
}
const p2 = new Person2("rahim", 27);


////////////////////
// readonly
////////////////////
class Person3 {
  public name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }
}
const p3 = new Person3("rahim", 27);


////////////////////
// inheritance
////////////////////
class Person {
  constructor(public name: string, private age: number) {}

  getAge() {
    return this.age;
  }
}

class Employee extends Person {
  // private jobTitle: string;

  constructor(name: string, age: number, private jobTitle: string) {
    super(name, age);
    // this.jobTitle = jobTitle;
  }

  getJobTitle() {
    return this.jobTitle;
  }

  setJobTitle(jobTitle: string) {
    this.jobTitle = jobTitle;
  }
}

const emp = new Employee("rahim", 27, "Software Engineer");
emp.setJobTitle("DevOps Engineer");


////////////////////
// Method overriding
////////////////////
class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Animal can move!");
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }

  move() {
    console.log(`${this.name} can walk & run!`);
  }
}
const dog: Dog = new Dog("Poppy");


////////////////////
// static properties and methods
////////////////////
class Person4 {
  private static hasText: string = "This is person class";
  public name: string;
  private readonly age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getAge(): number {
    return this.age;
  }

  static getHasText() {
    return Person4.hasText;
  }
}
const p4 = new Person4("rahim", 27);
const hasText = Person4.getHasText();


////////////////////
// Abstract Classes
////////////////////
abstract class Person5 {
  constructor(public name: string, public age: number) {}

  abstract details(): string;
}

class Employee5 extends Person5 {
  constructor(name: string, age: number, public jobTitle: string) {
    super(name, age);
  }

  details() {
    return `${this.name} is a ${this.jobTitle} with ${this.age} years old`;
  }
}
const emp5 = new Employee5("rahim", 27, "Software Engineer");
const emp5Details = emp5.details();


////////////////////
// Class Interface
////////////////////
interface Person6 {
  name: string;
  age: number;

  details(): string;
}

class Employee6 implements Person6 {
  // name: string;
  // age: number;

  // constructor(name: string, age: number) {
  //   this.name = name;
  //   this.age = age;
  // }

  constructor(public name: string, public age: number) {}

  details(): string {
    return `${this.name} is ${this.age} year\'s old!`;
  }
}
const emp6 = new Employee6("rahim", 27);
emp6.details();
