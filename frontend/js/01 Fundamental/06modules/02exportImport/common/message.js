function message() {
    return "This is a simple text!";
}

function sayHi(name) {
    return (name.length % 2 === 0) ? `Hi, ${name}` : `Hello, ${name}`;
}

function sayBye(name) {
    return `Bye, ${name}`;
}

export { sayHi, sayBye as bye };
export default message;
