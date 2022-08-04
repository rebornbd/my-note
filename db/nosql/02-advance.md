### COMPARISON QUERY OPERATORS
```
$eq:    Equal To
$ne:    Not Equal To
$lt:    Less Than
$lte:   Less Than or Equal To
$gt:    Greater Than
$gte:   Greater Than or Equal To
$in:    In
$nin:   Not In

db.posts.find({ title: { $eq: "some title" } })
db.posts.find({ _id: { $ne: ObjectId("62e8bfe26ace980ef8d0c111") } })
db.posts.find({ likes: { $lt: 10 } })
db.posts.find({ likes: { $lte: 10 } })
db.posts.find({ likes: { $gt: 10 } })
db.posts.find({ likes: { $gte: 10 } })
db.posts.find({ title: { $in: ["title-01", "title-02"] } })
db.posts.find({ title: { $nin: ["title-01", "title-02"] } })
```

### LOGICAL QUERY OPERATORS
```
$and:   Logical AND
$or:    Logical OR
$nor:   Logical NOR
$not:   Logical NOT

db.posts.find({ $and: [{ title: "post 01" }, { likes: { $lt: 5 } }] })   ### title === "post 01" && likes < 5
db.posts.find({ $or: [{ title: "post 01" }, { likes: { $lt: 5 } }] })    ### title === "post 01" || likes < 5
db.posts.find({ $nor: [{ title: "post 01" }, { likes: { $lt: 5 } }] })   ### !(title === "post 01" || likes < 5)
db.posts.find({ $not: { title: "post 01" } })                            ### title !== "post 01"
```

### SORTING & LIMITING
```
sort()
limit()

db.posts.find().sort({ title: 1 })    ### ascending order
db.posts.find().sort({ title: -1 })   ### descending order
db.posts.find({}, { title: 1 }).sort({ title: 1 })
db.posts.find({}, { title: 1 }).limit(5)

db.posts
  .find({}, { title: 1 })
  .sort({ title: 1 })
  .skip(10) ### offset
  .limit(5)
```

### UPDATING DOCUMENTS
```
updateOne:  Update one Document
updateMany: Update Multiple Documents
$inc:       Increase / Decrease Field Value
$min:       Update Field Value
$max:       Update Field Value
$mul:       Mutiply Field By a Number
$unset:     Remove Fields
$rename:    Rename Fields
upsert:     Combination of update and insert

db.collection.updateOne(filter, update, options)
db.collection.updateMany(filter, update, options)
{ $inc: { field1: number, ... } }
{ $min: { field1: number, ... } }
{ $max: { field1: number, ... } }
{ $mul: { field1: number, ... } }

db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $set: { price: 250 } })
db.products.updateMany({ price: 255 }, { $set: { price: 250 } })
db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $inc: { price: 10 } })
db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $min: { price: 250 } })
db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $max: { price: 260 } })
db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $mul: { discount: 1.1 } })
db.products.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { price: 250 }, { upsert: true })
```

### AGGREGATION
```
### FUNCTIONS:
$avg
$count
$sum
$max
$min

### SYNTAX OF AGGREGATION PIPELINE:
db.collection.aggregate([{ $match:...}, {$group:...}, {$sort:...}])


#### DATA:
use coffeeshop
db.sales.insertMany([
  { "_id" :  1, "item" : "Americanos", "price" : 5,  "size": "Short",  "quantity" : 22 },
  { "_id" :  2, "item" : "Cappuccino", "price" : 6,  "size": "Short",  "quantity" : 12 },
  { "_id" :  3, "item" : "Lattes",     "price" : 15, "size": "Grande", "quantity" : 25 },
  { "_id" :  4, "item" : "Mochas",     "price" : 25, "size": "Tall",   "quantity" : 11 },
  { "_id" :  5, "item" : "Americanos", "price" : 10, "size": "Grande", "quantity" : 12 },
  { "_id" :  6, "item" : "Cappuccino", "price" : 7,  "size": "Tall",   "quantity" : 20 },
  { "_id" :  7, "item" : "Lattes",     "price" : 25, "size": "Tall",   "quantity" : 30 },
  { "_id" :  8, "item" : "Americanos", "price" : 10, "size": "Grande", "quantity" : 21 },
  { "_id" :  9, "item" : "Cappuccino", "price" : 10, "size": "Grande", "quantity" : 17 },
  { "_id" : 10, "item" : "Americanos", "price" : 8,  "size": "Tall",   "quantity" : 15 }
]);

### $avg
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      averageQty: { $avg: '$quantity' },
      averageAmount: { $avg: { $multiply: ['$quantity', '$price'] } },
    },
  },
  { $match: { averageAmount: { $gt: 150 } } },
  { $project: { _id: 0 } },
  { $sort: { averageAmount: 1 } }
]);

### $count
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      itemCount: { $count: {} },
    },
  },
  {
    $match: { itemCount: { $gt: 2 } },
  },
]);

### $sum
db.sales.aggregate([
  {
    $group: {
      _id: null,
      totalQty: { $sum: '$quantity' },
    },
  },
]);
db.sales.aggregate([
  {
    $group: {
      _id: '$size',
      totalAmount: { $sum: { $multiply: ['$price', '$quantity'] } },
    },
  },
  { $sort: { totalAmount: -1 } },
]);

### $max | $min
db.sales.aggregate([
  {
    $group: {
      _id: null,
      maxQty: { $max: '$quantity' },
    },
  },
  { $project: { _id: 0 } },
]);
db.sales.aggregate([
  {
    $group: {
      _id: '$item',
      maxQty: { $max: { $multiply: ['$quantity', '$price'] } },
    },
  },
]);
```

### INDEXES
```
Create Index
Unique Index
Compound index
Drop Index

db.users.createIndex({ username: 1 })
db.users.createIndex({ username: 1 }, { unique: true })            ### unique username
db.users.createIndex({ email: 1 }, { unique: true })               ### unique email
db.users.createIndex({ username: 1, email: 1 }, { unique: true })  ### username_1_email_1 | compound unique value
db.users.dropIndex({ email: 1 })
```
