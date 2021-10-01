/*
    String[number] Access
    Multiline Strings
    String.split()
    String.trim()
*/

var str = "Hello World";
var text = "  Hello World  ";


var ch = str[0];            // String[number] Access | 
var mls =   "Hello" +       // Multiline Strings
            " World";

var res = str.split(' ');   // String.split() | [ 'Hello', 'World' ]
var res = text.trim();      // String.trim() | "Hello World"
