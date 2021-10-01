class Person {
    #name = undefined;
    #address = undefined;

    constructor(name="", address="") {
        this.#name = name;
        this.#address = address;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
        return this.#name;
    }

    getAddress = () => this.#address;
    setAddress = (address) => { this.#address = address; return this.#address; }
}


var p1 = new Person('rahim', 'Dhaka-1001, BD');

p1.getName();           // rahim
p1.setName('korim');    // korim
