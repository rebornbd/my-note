/*
    Map
        .set(key, value)
        .get(key)
        .has(key)
        .delete(key)
        .keys()
        .values()
        .entries()
        .clear()
        .size
    WeakMap

    Set
        .add(value)
        .has(value)
        .delete(value)
        .keys()
        .values()
        .entries()
        .clear()
        .size
    WeakSet
*/

// Map
var m = new Map();
m.set('k1', 'a');
m.set('k2', null);
m.set('k3', undefined);

var searchKeys = ['k1', 'k2', 'k3'];
searchKeys.forEach((key) => {
    var keyFlag = m.has(key);
    var value = m.get(key);
    // console.log(keyFlag, value);
});

var keys = m.keys();        // for(let k of keys) console.log(k);
var values = m.values();    // for(let v of values) console.log(v);
var entries = m.entries();  // for(let [k, v] of entries) console.log(k, v);

var size = m.size;          // console.log(size); | 3
var flag = m.delete('k3');  // true

m.clear();
var size = m.size;          // console.log(size); | 0


// Set
var s = new Set();
s.add('10');
s.add('20');
s.add('10');

var flag = s.has('10');             // true
var deleteFlag = s.delete('10');    // true

var keys = s.keys();        // for(let k of keys) console.log(k);
var values = s.values();    // for(let v of values) console.log(v);
var entries = s.entries();  // for(let [k, v] of entries) console.log(k, v);

var size = s.size;
s.forEach((value1, value2, set) => {
    // console.log(value1);
    // console.log(value2);
    // console.log(set);
});
s.clear()
