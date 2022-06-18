const EventEmitter = require("events");


class Person extends EventEmitter {
  constructor(name, time=1) {
    super();
    this.name = name;
    this.time = time;
  }

  // event listing
  onEat() {
    console.log(`START: ${this.name} | event listing`);
    this.on("EAT", this.eatHandler);
  }

  // event raise
  emitEat(...items) {
    setTimeout(() => {
      console.log(`START: ${this.name} | event raise`);
      this.emit("EAT", { item1: "fruits", item2: "etc..", ...items });
    }, this.time * 1000);
  }

  eatHandler(...items) {
    // do something
    console.log(`  END: ${this.name} items ${JSON.stringify(items)}`);
  }
}


// event create
const rahim = new Person('rahim', 5);
const korim = new Person('korim', 2);

rahim.onEat();
korim.onEat();

rahim.emitEat();
korim.emitEat();
