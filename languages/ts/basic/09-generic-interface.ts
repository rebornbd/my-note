/*
  Generic Interface:
  =================

  interface interfaceName<T> {
    // ...
  }

  interface interfaceName<A, B> {
    // ...
  }
*/


////////////////////
// Generic Interface that describe object properties
////////////////////
interface IPair<K, V> {
  key: K;
  value: V;
}

const month: IPair<string, number> = { key: "Jan", value: 1 };
const task: IPair<string, boolean> = { key: "Go to gym friday", value: true };


////////////////////
// Generic interfaces that describe methods
////////////////////
interface ICollection<T> {
  add(o: T): void;
  remove(o: T): void;
}

class List<T> implements ICollection<T> {
  private items: T[] = [];
  
  add(item: T) {
    this.items.push(item);
  }

  remove(item: T) {
    const index = this.items.indexOf(item);

    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}

const items = new List();
items.add(10);
items.add(20);
items.remove(20);


////////////////////
// Generic interfaces that describe index types
////////////////////
interface IOptions<T> {
  [name: string]: T
}

const configOptions: IOptions<boolean> = {
  'disabled': false,
  'visible': true
};
