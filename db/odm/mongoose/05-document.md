# Document
#### The Model class is a subclass of the Document class. When you use the Model constructor, you create a new document
```
Document:
  Documents vs Models
  Retrieving
  Updating
  Validating
  Overwriting
```

```js
////////////////////
// Documents vs Models
////////////////////
const MyModel = mongoose.model('Test', new Schema({ name: String }));
const doc = new MyModel();
// instanceof
doc instanceof MyModel;           // true
doc instanceof mongoose.Model;    // true
doc instanceof mongoose.Document; // true


////////////////////
// Retrieving
////////////////////
const doc = await MyModel.findOne();


////////////////////
// Updating
////////////////////
const doc = await MyModel.findOne();
doc.name = "rahim"
await doc.save();


////////////////////
// Validating
////////////////////
const schema = new Schema({ name: String, age: { type: Number, min: 0 } });
const Person = mongoose.model('Person', schema);
// model instance | doc
const person1 = new Person({ name: 'foo', age: 5 });
const person2 = new Person({ name: 'foo', age: -1 });
// validate
await person1.validate(); // true
await person2.validate(); // false


////////////////////
// Validating
////////////////////
// option-01
const doc = await Person.findOne({ _id });
doc.overwrite({ name: 'Jean-Luc Picard' });
await doc.save();
// option-02
await Person.replaceOne({ _id }, { name: 'Jean-Luc Picard' });
```
