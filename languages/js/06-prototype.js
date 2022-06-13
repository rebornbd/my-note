/*
  Prototypes are the mechanism by which JavaScript 
  objects inherit features from one another.

  ** Prototype is a property of a every function 
  that point of a object(it's parent).
*/

// STEP 01: 
function Person1(name, age) {
  const person = Object.create(Person1.prototype);

  person.name = name;
  person.age = age;
  return person;
}

Person1.prototype = {
  play() {
    console.log("Person1 Playing!");
  },

  eat() {
    console.log("Person1 eatting!");
  }
}

const p1 = Person1('rahim', 27);
console.dir(p1); /*
{ 
  name: 'rahim', age: 27,
  prototype: {
    eat(),
    play(),
    ....,
    ....
  }
} */
// END STEP 01


// STEP 02:
function Person2(name, age) {
  this.name = name;
  this.age = age;
}

Person2.prototype = {
  play() {
    console.log("Person2 Playing!");
  },

  eat() {
    console.log("Person2 eatting!");
  }
}

const pp1 = new Person2('rahim', 27);
const pp2 = new Person2('korim', 32);
console.dir(pp1);
// END STEP 02


// STEP 03:
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // start shared methods
  play() {
    console.log("Person Playing!");
  }

  eat() {
    console.log("Person eatting!");
  }
  // end shared methods
}

const person1 = new Person('rahim', 27);
const person2 = new Person('korim', 32);
console.dir(person1);
// END STEP 03


// STEP 04:
class FPerson {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  play() {
    console.log("FPerson Playing!");
  }

  eat() {
    console.log("FPerson eatting!");
  }
}


FPerson.prototype.anotherProperty = "value";
FPerson.prototype.anotherMethod = function() {
  console.log("FPerson another method!");
}


const fp1 = new FPerson('rahim', 27);
const fp2 = new FPerson('korim', 32);
console.dir(fp1);
// END STEP 04
