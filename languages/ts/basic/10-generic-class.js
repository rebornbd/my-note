/*
  Generic Class:
  
  class className<T>{
    //...
  }

  class className<A, B>{
    //...
  }
*/
var Stack = /** @class */ (function () {
    function Stack(size) {
        if (size === void 0) { size = 100; }
        this.list = [];
        this.size = size;
    }
    Stack.prototype.push = function (item) {
        if (!this.isFull()) {
            this.list.push(item);
            return;
        }
        console.log("Stack is full, can't PUSH");
        return;
    };
    Stack.prototype.pop = function () {
        if (!this.isEmpty()) {
            return this.list.pop();
        }
        console.log("Stack is empty, can't POP");
        return undefined;
    };
    Stack.prototype.isEmpty = function () {
        return this.list.length === 0;
    };
    Stack.prototype.isFull = function () {
        return this.list.length === this.size;
    };
    return Stack;
}());
var numberStack = new Stack();
var stringStack = new Stack();
numberStack.push(10);
numberStack.push(20);
stringStack.push("rahim");
stringStack.push("khan");
