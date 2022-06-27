# Queries
#### Each of these functions returns a mongoose Query object.
```
Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndReplace()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()
```

### using
```js
const User = mongoose.model('User', new Schema({ name: String, age: Number }));

// findOneAndUpdate
const oldUser = User.findOneAndUpdate({ _id: id }, { name: "rahim" });
const updatedUser = User.findOneAndUpdate({ _id: id }, { name: "rahim" }, { new: true });
// Upsert | if not find then create new instance
const updatedOrCreateUser = User.findOneAndUpdate({ _id: id }, { name: "rahim" }, { new: true, upsert: true });
```

### Executing Query
```js
const Person = mongoose.model('Person', yourSchema);

// With a JSON doc
Person
  .find({
    occupation: /host/,
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 },
    likes: { $in: ['vaporizing', 'talking'] }
  })
  .limit(10)
  .sort({ occupation: -1 })
  .select({ name: 1, occupation: 1 })
  .exec(callback);

// Using query builder
Person
  .find({ occupation: /host/ })
  .where('name.last').equals('Ghost')
  .where('age').gt(17).lt(66)
  .where('likes').in(['vaporizing', 'talking'])
  .limit(10)
  .sort('-occupation')
  .select('name occupation')
  .exec(callback);
```
