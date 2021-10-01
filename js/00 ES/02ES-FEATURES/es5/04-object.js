/*
    Property getters and setters
    Reserved words as property names

    Object defineProperty()
    Object methods
*/

// getters & setters | reserved words as property
var person = {
    _name: "rahim",
    _email: "rahim@gmail.com",
    new: "THIS IS: reserved words as property names",
    
    get name() { return this._name; },
    set name(userName) { this._name = userName; },
    get email() { return this._email; },
    set email(userEmail) { this._email = userEmail; }
};

person.name = "korim";
person.email = "korim@gmail.com";
var userName  = person.name;
var userEmail = person.email;
// console.log(person.new);


// Object defineProperty()
var obj = {}
Object.defineProperty(obj, "user", {
    value: "unknown",
    writable: true
});
obj.user = "rahim";
// console.log(obj.user);


// ============= managing Objects ====================
// Create object with an existing object as prototype
var obj = Object.create({});

// Adding or changing an object property
Object.defineProperty(obj, "user", {
    value: "rahim",
    writable: true
});

// Adding or changing object properties
Object.defineProperties(obj, {
    "user": {
        value: "korim",
        writable: false
    },
    "address": {
        value: "dhaka, bd",
        writable: true
    }
});

// Accessing Properties
var res = Object.getOwnPropertyDescriptor(obj, "address");
// console.log(res);

// Returns all properties as an array
var res = Object.getOwnPropertyNames(obj);
// console.log(res);

// Accessing the prototype
var obj1 = Object.create(obj);
// console.log(Object.getPrototypeOf(obj1) === obj);

// Returns enumerable properties as an array
var keys = Object.keys(obj);
// console.log(keys);


// ============== protecting Objects ================

// Prevents adding properties to an object
var obj1 = Object.create({ name: "rahim" });
var obj2 = Object.create({ name: "rahim" });
Object.preventExtensions(obj1);

// Returns true if properties can be added to an object
var res = Object.isExtensible(obj1);    // false
var res = Object.isExtensible(obj2);    // true
// console.log(res);

// Prevents changes of object properties (not values)
var obj1 = { name: "rahim" };
var obj2 = Object.create({ name: "rahim" });

Object.seal(obj1);
Object.seal(obj2);

obj1['name'] = 'korim';     // update
obj2['name'] = 'korim';     // not update
// console.log(obj1.name, obj2.name);

// Returns true if object is sealed
var obj = { name: "rahim" };
Object.isSealed(obj);       // false
Object.isSealed(obj1);      // true

// Prevents any changes to an object\
var obj = { name: "rahim" };
Object.freeze(obj);
obj['name'] = "korim";      // not update
console.log(obj);

// Returns true if object is frozen
Object.isFrozen(obj);       // true
Object.isFrozen(obj1);      // false
