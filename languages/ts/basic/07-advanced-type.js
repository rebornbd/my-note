/*
  Advanced Types:
    (1) Intersection Types
    (2) Type Casting
    (3) Type Assertions
*/
var data = { namei: "rahim", age: 27, country: "BD" };
var person = data;
console.log(person.name);
// const body1 = document.body as HTMLBodyElement;                   // as
// const body2 = <HTMLBodyElement> document.body;                    // <>
// const body3 = <HTMLBodyElement> document.body as HTMLBodyElement; // combine
////////////////////
// (3) Type Assertions
////////////////////
var getNetPrice = function (price, discount, format) {
    if (format === void 0) { format = false; }
    var _price = price * (1 - discount);
    return (format)
        ? "$".concat(_price)
        : _price;
};
var netPrice1 = getNetPrice(100, 0.05, true); // return type: string, number
var netPrice2 = getNetPrice(100, 0.05, true); // return type: string
var netPrice3 = getNetPrice(100, 0.05, true); // return type: string
var netPrice4 = getNetPrice(100, 0.05, false); // return type: number
var netPrice5 = getNetPrice(100, 0.05, false); // return type: number
