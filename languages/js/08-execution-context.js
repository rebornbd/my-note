/*
    Execution Context(EC) is an abstract concept of an environment where the JavaScript code is executed.
    JS Compiler: JIT-Compiler(Just-In-Time Compiler)

    Types of Execution Context:
      (a) Global EC
      (b) Function EC
      (c) Eval Function EC
    
    Execution Context Phase:
      (a) Loading/Creation Phase
      (b) Execution Phase
    
    Execution Stack:
      Execution stack, also known as "calling stack" is used LIFO
*/


// START Execution Context by Example
var username = "Ram";                      // line: 1
let city = "Dhaka";                        // line: 2
                                           // line: 3
function getDetails() {                    // line: 4
  return `${username} lives in ${city}.`;  // line: 5
}                                          // line: 6
                                           // line: 7
console.log(getDetails());                 // line: 8
// END

/*
(a) Global EC:
  Concept:
    PHASE: Creation           PHASE: Execution(L: 1)   Line: 2        Line: 3-7      Line: 8
    ---------------           ----------------------   -------        ---------      -------
    window: global object     same                     --             --             --
    this: window              same                     un: "Ram"      un: "Ram"      --
    username: undefined       username: "Ram"          gd: fn()       gd: fn()       --
    getDetails: fn()          same                     city: "Dhaka"  city: "Dhaka"  -- | print | end
  
  Summary:
    PHASE: Creation           PHASE: Execution
    ---------------           ----------------
    window: global object     window: global object
    this: window              this: window
    username: undefined       username: "Ram" | (after Line: 1)
    getDetails: fn()          getDetails: fn()
                              city: "Dhaka" | (after Line: 2)
*/

/*
  Funtion: 01                    Function: 02
  -------------------------------------------------------
  function add10(num) {       |  var person = {              // L: 1
    var n = 10;               |    name = "rahim",           // L: 2
    return n + num;           |    getName: function() {     // L: 3
  }                           |      return this.name;       // L: 4
                              |    }                         // L: 5
                              |  };                          // L: 6
  add10(20);                  |  person.getName();           // L: 7


(b) Function EC:
  Function: 01
    PHASE: Creation                 PHASE: Execution
    ---------------                 ----------------
    arguments: {0: 20, length: 1}   arguments: {0: 20, length: 1}
    this: window                    this: window
    num: 20                         num: 20
    n: undefined                    n: 10
  
  Function: 02
    PHASE: Creation                 PHASE: Execution
    ---------------                 ----------------
    arguments: {0: 20, length: 1}   arguments: {0: 20, length: 1}
    this: person                    this: person
    num: 20                         num: 20
*/


/*
Execution Stack:
================
var fun2 = function() {    // L: 01
  return true;             // L: 02
}                          // L: 03
                           // L: 04
function fun1() {          // L: 05
  fun2();                  // L: 06
}                          // L: 07
                           // L: 08
fun1()                     // L: 09


                                               *
                                            --------
                                           |  fun2  |
                                            --------              *
                         --------           --------           --------
                        |  fun1  |         |  fun1  |         |  fun1  |
                         --------           --------           --------              *
      --------           --------           --------           --------           --------
     |  G EC  |         |  G EC  |         |  G EC  |         |  G EC  |         |  G EC  |
      --------           --------           --------           --------           --------             end
    ============       ============       ============       ============       ============       ============
*/
