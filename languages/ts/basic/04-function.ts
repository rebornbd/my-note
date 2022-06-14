/* 
  Function
*/


// function signatures
let log: (message: string) => void;
let add: (num1: number, num2: number) => number;
let calculate: (num1: number, num2: number, num3?: number) => number;


// function body
log = (message) => {
  console.log(message);
}

add = (num1, num2) => {
  return num1 + num2;
}

calculate = (num1, num2, num3 = 0) => {
  return num1 + num2 + num3;
}

const calculation = (num1: number, num2: number, num3: number = 0): number => {
  return num1 + num2 + num3;
}


// function call
log(`Hi ${"rahim"}`);
add(10, 10);


calculate(5, 10);
calculation(2, 5);
calculation(5, 3, 2);
