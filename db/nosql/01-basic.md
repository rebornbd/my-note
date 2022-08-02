### database
```
# view all dbs
show dbs
show databases

# go to a db
use db_name

# create db
use new_db_name
db.createCollection("collection_name")

# delete db
use db_name
db.dropDatabase()
```

### collection
```
use db_name

# create collection
db.createCollection("collection_name")

# delete collection
db.dropDatabase()
```

### document
```
use blog
db.createCollection("posts")

# insert
db.posts.insertOne({ title: "post 01" })
db.posts.insertMany([{ title: "post 02" }, { title: "post 03" }])

# query
db.posts.find()
db.posts.find({ title: "post 01" })
db.posts.find({ _id: ObjectId("62e8bfe26ace980ef8d0c111") })
db.posts.find(ObjectId("62e8bfe26ace980ef8d0c111"))
db.posts.find({ title: { $eq: "post 01" } })
db.posts.find({ title: { $in: ["post 01", "post 02"] } })

# update
# db.collection.updateOne(filter, update, options) | db.collection.updateMany(filter, update, options)
db.posts.updateOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") }, { $set: { title: "new title..." }})
db.posts.updateMany({ title: "some title" }, { $set: { title: "new title..." }})

# delete
# db.collection.deleteOne(filter, option) | db.collection.deleteMany(filter, option)
db.posts.deleteOne({ _id: ObjectId("62e8bfe26ace980ef8d0c111") })
db.posts.deleteMany({ title: "some title" })
```
