function add(a, b) {
    return a + b;
}
console.log(add(1, 1));
console.log(add('rahim ', 'khan'));
// method overloading
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.show = function (all) {
        if (all === void 0) { all = false; }
        if (all) {
            console.log("Name: ".concat(this.name, ", age: ").concat(this.age));
        }
        else {
            console.log("Name: ".concat(this.name));
        }
    };
    return Person;
}());
var person = new Person("rahim", 27);
person.show();
person.show(true);
