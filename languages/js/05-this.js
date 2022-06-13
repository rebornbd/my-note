/*
  # JS this keyword refers to the object where it is called.
  # JS this keyword refers to the object that is executing the current function.

  If the calling function is a part of an
    (a) object, this function is called, method | this -> current-object
    (b) normal function | this -> global (window, global)
  
  JS this binding:
    (1) implicit binding
    (2) explicit binding | call(), apply() & bind() play a big role here
    (3) new keyword binding | constructor function | this keyword inside the function binds to the new object being created
    (4) global (window, global) object binding | "strict mode" this is undefined
    (5) arrow funtion binding | this refers it's immediate parent
*/
"use strict"



// START implicitly binding
let blog = {
  name: 'MyTv',
  address: 'dhaka',
  message: function() {
      console.log(`${this.name} blogs on ${this.address}`);
  }
};

blog.message(); // MyTv blogs on dhaka
// END implicitly binding



// START explicitly binding
function info(age, ...rest) {
  console.log(this.name, age, rest);
}

const person = {
  name: "sakib",
  age: 20
};

info.call(person, person.age, 25);
info.apply(person, [30, 35]);
info.bind(person)(40, 45);

const infoFun = info.bind(person);
infoFun(50, 55);
// END explicitly binding



// START new keyword binding
const People = function(name, age) {
  this.name = name;
  this.age = age;
  // console.log(this);
}

const p = new People("rahim", 29);
console.log(p.name);
// END new keyword binding



// START global binding
const sayName = function(name) {
  console.log(this);
};

sayName("rahim");
// END global binding



// START arrow funtion binding
const bunny = {
  name: 'dipta',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks() {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
    
    // this.tasks.forEach(function(task) {
    //   console.log(this.name + " wants to " + task);
    // }, this);

    // this.tasks.forEach(function(task) {
    //   console.log(this.name + " wants to " + task);
    // }.bind(this));
  }
};

bunny.showTasks();
// END arrow funtion binding
