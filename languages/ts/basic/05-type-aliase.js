// Type Aliases
var showPerson = function (_a) {
    var name = _a.name, age = _a.age, gender = _a.gender;
    console.log("Name: ".concat(name, ", age: ").concat(age, ", gender: ").concat(gender));
};
var person = {
    name: "rahim",
    age: 27,
    gender: 'male'
};
showPerson(person);
