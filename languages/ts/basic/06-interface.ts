////////////////////
// Interface
////////////////////
interface Person {
  fName:  string;
  mName?: string;
  lName:  string;
}


////////////////////
// Interface uses of a function
////////////////////
const personDetails1 = (person: Person) => {
  console.log(`fName: ${person.fName}`);
  console.log(`mName: ${person.mName}`);
  console.log(`lName: ${person.lName}`);
}

const personDetails2 = ({ fName, mName, lName }: Person) => {
  console.log(`fName: ${fName}`);
  console.log(`mName: ${mName}`);
  console.log(`lName: ${lName}`);
}


////////////////////
// Interface uses to initialize of a object
////////////////////
const personObj1: Person = {
  fName: 'Rahim',
  lName: 'Khan'
};

const personObj2: Person = {
  fName: 'Rahim',
  mName: 'Uddin',
  lName: 'Khan'
};


////////////////////
// Interface uses of a class
////////////////////
class Employee implements Person {
  constructor(public fName: string, public lName: string, public mName?: string) {}
}


////////////////////
// Interface inheritance
////////////////////
interface A {
  aProps1: string;
  aMethod1(): void;
}

interface B extends A {
  bProps1: string;
  bMethod1(): void;
}
