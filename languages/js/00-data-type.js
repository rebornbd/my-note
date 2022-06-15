/*
    JS data types:
      (i):  primitive data types
      (ii): non-primitive/reference data types
    
    (i) primitive data types:
      (1) null
      (2) undefined
      (3) boolean
      (4) number
      (5) string
      (6) symbol – available from ES2015 | doesn’t have a literal form
      (7) bigint – available from ES2020
    
    (ii) non-primitive/reference data types:
      (1) object
*/


////////////////////
// symbol (symbol return a unique value)
////////////////////
const s1 = Symbol();
const s2 = Symbol();

const symbol1 = Symbol("symbol 01"); // unique symbol
const symbol2 = Symbol("symbol 02"); // unique symbol

const symbol3 = Symbol.for("key_name"); // symbol symbol3 & symbol4 are same
const symbol4 = Symbol.for("key_name");
const symbol5 = Symbol.for("another_key_name");

const symbolValue = symbol1.valueOf();  // Symbol('symbol 01')
const symbolDesc = symbol1.description; // symbol 01
const symbolStr = symbol1.toString();   // "Symbol('symbol 01')"


////////////////////
// symbol usecase 01: object dynamic key
////////////////////
const userId = Symbol("User ID");
const userIdValue = Math.floor(Math.random()*100);
const person = {
  name: 'rahim',
  age: 27,
  [userId]: userIdValue
};
const personProps = Object.getOwnPropertyNames(person);
const personSymbolProps = Object.getOwnPropertySymbols(person);
for(const psp of personSymbolProps) {
  const personUserIdValue = person[psp];
  // console.log(personUserIdValue, personUserIdValue === userIdValue);
}
