/*
  TypeScript generics allow you to write the reusable and 
  generalized form of functions, classes, and interfaces.

  (1) TypeScript Generics
  (2) Generic Constraints
*/

// (1) TypeScript Generics
// =================================== START ============================================
const getRandomElement = <T>(items: T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const numbers = [1, 5, 7, 4, 2, 9];
const colors = ['red', 'green', 'blue'];

const item1 = getRandomElement(numbers);
const item2 = getRandomElement(colors);



// (2) Generic Constraints
// =================================== START ============================================
const getId = () => Math.floor(Math.random() * 100);

// option: 01
const addID1 = <T>(obj: T) => {
  const id = getId();
  return { ...obj, id };
}
const user1 = addID1({ name: "rahim" });
const user2 = addID1("rahim");            // it's a problem

// option: 02
const addID2 = <T extends object>(obj: T) => {
  const id = getId();
  return { ...obj, id };
}
const user3 = addID2({ name: "rahim" });

// option: 03
const addID3 = <T extends { name: string; age: number}>(obj: T) => {
  const id = getId();
  return { ...obj, id };
}
const user4 = addID3({ name: "rahim", age: 27 });                 // user4.id || user4.name || user4.age
const user5 = addID3({ name: "rahim", age: 27, country: "BD" });  // user5.id || user5.name || user5.age || user5.country

// option: 04
const merge = <A extends object, B extends object>(obj1: A, obj2: B) => {
  const id = getId();
  return { ...obj1, ...obj2, id };
}
const user6 = merge(
  { name: "rahim", age: 27 },
  { country: "Bangladesh" }
);
// user6.id || user6.name || user6.age || user6.country

// option: 05
const getProp = <T extends object, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
}

const person = { name: 'rahim', age: 27, gender: 'male' };
const gender = getProp(person, 'gender');
