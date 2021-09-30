/*
    // ES5
    String[number] Access
    Multiline Strings
    String.split()
    String.trim()

    // ES6
    String.includes()
    String.startsWith()
    String.endsWith()
*/

var str = "Hello World";
var text = "  Hello World  ";


var ch = str[0];            // String[number] Access | 
var mls =   "Hello" +       // Multiline Strings
            " World";

var res = str.split(' ');   // String.split() | [ 'Hello', 'World' ]
var res = text.trim();      // String.trim() | "Hello World"


// ES6
var str = "This is simple a sentence."

var flagInclude = str.includes('simple');
var flagInclude = str.includes('simple', str.indexOf('sim'));
// console.log(flagInclude);

var flagStartWith = str.startsWith('This');     // true
var flagEndWith = str.endsWith('sentence.');     // true
// console.log(flagEndWith);
