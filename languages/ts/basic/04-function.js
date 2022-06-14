/*
  Function
*/
// function signatures
var log;
var add;
var calculate;
// function body
log = function (message) {
    console.log(message);
};
add = function (num1, num2) {
    return num1 + num2;
};
calculate = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var calculation = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
// function call
log("Hi ".concat("rahim"));
add(10, 10);
calculate(5, 10);
calculation(2, 5);
calculation(5, 3, 2);
