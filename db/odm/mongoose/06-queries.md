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
