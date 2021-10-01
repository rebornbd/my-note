class Person {
    constructor(name) {
        this._name = name;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }
}

let person = new Person("rahim");

console.log(person.getName);

person.setName = "korim";
console.log(person.getName);

