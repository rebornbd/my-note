/*
  Advanced Types:
    (1) Intersection Types
    (2) Type Casting
    (3) Type Assertions
*/


// (1) Intersection Types
interface A {
  name: string;
  age: number;
}

interface B {
  id: number;
  name: string;
}

interface C {
  email: string;
  phone: string;
}

type AB  = A & B; // name, age, id | combine props
type _AB = A | B; // name          | common props
type AC  = A & B; // name, age, email, phone



// (2) Type Casting | type cast keyword: as, <> 
// const body1 = document.body as HTMLBodyElement;                   // as
// const body2 = <HTMLBodyElement> document.body;                    // <>
// const body3 = <HTMLBodyElement> document.body as HTMLBodyElement; // combine



// (3) Type Assertions
const getNetPrice = (price: number, discount: number, format: boolean = false): (number | string) => {
  const _price = price * (1 - discount);
  return (format)
    ? `$${_price}`
    : _price;
}

const netPrice1 = getNetPrice(100, 0.05, true);           // return type: string, number
const netPrice2 = getNetPrice(100, 0.05, true) as string; // return type: string
const netPrice3 = <string> getNetPrice(100, 0.05, true);  // return type: string

const netPrice4 = <number> getNetPrice(100, 0.05, false);           // return type: number
const netPrice5 = <number> getNetPrice(100, 0.05, false) as number; // return type: number
