/*
  JS inheritance:
    (1) prototype inheritance
    (2) class inheritance | ES6 syntactic sugar
*/


// (1) prototype inheritance:
// Parent Object
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.show = function() {
  console.log(this.name, this.age);
}

// Child Object
function Cricketer(name, age, type) {
  Person.call(this, name, age);
  this.type = type;
}

Cricketer.prototype = Object.create(Person.prototype);
Cricketer.prototype.showType = function() {
  console.log(this.type);
}

// instance
const c = new Cricketer("rahim", 28, 'bowler');
console.dir(c);



// (2) class inheritance | ES6 syntactic sugar
class Animal {
  constructor(name) {
    this.name = name;
  }

  showName() {
    console.log(this.name);
  }
}

class Dog extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }

  displayType() {
    console.log(this.type);
  }
}

const dog = new Dog('tom', 'cute');
console.dir(dog);
