"use strict";
var Person = /** @class */ (function () {
    function Person(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.getGender = function () {
        return this.gender;
    };
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    return Person;
}());
var p1 = new Person("rahim", "male");
var p2 = new Person("rahim", "male");
p1.setName = 'korim';
console.log(p1, p1.getName, p1.getGender());
console.log(p2);
