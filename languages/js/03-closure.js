/*
    a closure is a function that references variables
    in the outer scope from its inner scope.

    NB: run the code browser console
*/


function outerFunction(str) {
    let outerFunctionScopeVariable = "outer Function Scope Variable";

    return function innerFunction() {
        // closure: [str | outerFunctionScopeVariable]

        return `${str} | ${outerFunctionScopeVariable}`;
    }
}

const ofn = outerFunction("MESSAGE");
console.dir(ofn);
