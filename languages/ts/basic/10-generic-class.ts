/*
  Generic Class:
  
  class className<T>{
    //... 
  }

  class className<A, B>{
    //... 
  }
*/


////////////////////
// Generic Stack class
////////////////////
interface IStack<T> {
  readonly size: number;

  push(item: T): void;
  pop(): T | undefined;

  isEmpty(): boolean;
  isFull(): boolean;
}

class Stack<T> implements IStack<T> {
  public size: number;
  private list: T[] = [];

  constructor(size: number=100) {
    this.size = size;
  }

  push(item: T): void {
    if (!this.isFull()) {
      this.list.push(item);
      return;
    }

    console.log("Stack is full, can't PUSH");
    return;
  }

  pop() {
    if (!this.isEmpty()) {
      return this.list.pop();
    }

    console.log("Stack is empty, can't POP");
    return undefined;
  }

  isEmpty(): boolean {
    return this.list.length === 0
  }

  isFull(): boolean {
    return this.list.length === this.size
  }
}

const numberStack = new Stack<number>();
const stringStack = new Stack<string>();

numberStack.push(10)
numberStack.push(20);

stringStack.push("rahim");
stringStack.push("khan");
