/*
defination: A callback function is a function passed into another function as an argument.
*/

let showMessage = (name) => {
    console.log("Hi, " + name);
};

function mainFun(name, callbackRef) {
    // some kinds of processing
    // code here

    // call callback function
    callbackRef(name);
}

// main function calling
mainFun("rahim", showMessage);
