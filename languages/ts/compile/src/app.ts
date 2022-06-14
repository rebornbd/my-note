class Person {
  private name: string;
  private gender: 'male' | 'female' | 'other';

  constructor(name: string, gender: 'male' | 'female' | 'other') {
    this.name = name;
    this.gender = gender;
  }

  get getName() {
    return this.name;
  }

  set setName(name: string) {
    this.name = name;
  }

  getGender() {
    return this.gender;
  }

  setGender(gender: 'male' | 'female' | 'other') {
    this.gender = gender;
  }
}

const p1 = new Person("rahim", "male");
const p2 = new Person("rahim", "male");

p1.setName = 'korim';

console.log(p1, p1.getName, p1.getGender());
console.log(p2);
