/*
    Array.isArray()
    Array.forEach()
    Array.map()
    Array.filter()
    Array.reduce()
    Array.reduceRight()
    Array.every()
    Array.some()
    Array.indexOf()
    Array.lastIndexOf()
*/

var arr1 = [1, 2, 3, 4, 5];
var arr2 = ['aa', 'bb', 'cc', 'dd'];

var res = typeof {};                // object
var res = typeof [];                // object
var res = typeof [] === typeof {};  // true

var res = Array.isArray({});  // false
var res = Array.isArray([]);  // true

// Array.forEach()
arr2.forEach((value, index, arr) => {
    // console.log(value, index, arr);
});

// Array.map()
var res = arr2.map((value, index, arr) => `<li>${value}</li>`);
console.log(res);

// Array.filter()
var res = arr1.filter((value, index, arr) => value%2 != 0);
// console.log(res);

// Array.reduce() | direction: LeftToRight
var sum = arr1.reduce((preValue, currValue, currIndex, arr) => {
    // console.log(preValue, currValue);
    return preValue + currValue;
}, 0);
// console.log(sum);

// Array.reduce() | direction: RightToLeft
var sum = arr1.reduceRight((preValue, currValue, currIndex, arr) => {
    // console.log(preValue, currValue);
    return preValue + currValue;
}, 0);
// console.log(sum);

// Array.every()
var resFlag = arr1.every((value, index, arr) => {
    return value > 3;
});
// console.log(resFlag);


// Array.some()
var resFlag = arr1.some((value, index, arr) => {
    return value > 4;
});
// console.log(resFlag);


// Array.indexOf()
var index = arr1.indexOf(4);
// console.log(index);

// Array.lastIndexOf()
var lastIndex = arr1.lastIndexOf(4);
// console.log(lastIndex);
