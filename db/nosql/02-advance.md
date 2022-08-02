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
