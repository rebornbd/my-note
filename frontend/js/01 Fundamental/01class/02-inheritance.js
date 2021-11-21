class Person {
    constructor(name) {
        this.name = name;

        this.show = this.show.bind(this);
    }

    show() {
        console.log(`show: ${this.name}`);
    }
}

class User extends Person {
    constructor(name, address) {
        super(name);
        this.address = address;

        this.show1 = this.show1.bind(this);
        this.show2 = this.show2.bind(this);
    }

    show(name) {
        console.log(`override show: ${name}`);
    }

    show1() {
        console.log(`show1: ${this.name} | ${this.address}`);
    }

    show2 = function() {
        console.log(`show2: ${this.name} | ${this.address}`);
    }

    show3 = () => {
        console.log(`show3: ${this.name} | ${this.address}`);
    }
}

// create object
let p = new User("rahim", "dhaka-1212, BD");

setTimeout(p.show1, 1000);
setTimeout(p.show2, 1000);
setTimeout(p.show3, 1000);

// p.show();
// p.show("jio");
