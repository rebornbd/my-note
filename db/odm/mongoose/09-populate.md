# Populate
#### populate is used for populating the data inside the reference.
```js
////////////////////
// consider USER & POST model
//   a USER have many POST
//   a/many POST have a USER
//   =======================
//   USER(1)  -----  (M)POST
////////////////////
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  password: String
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }]
});
const postSchema = new mongoose.Schema({
  title: String,
  user: { type: Schema.Types.ObjectId, ref: "User" }
});

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);


////////////////////
// populate
////////////////////
Post
  .find()
  .populate("user")
  .select({ _id: 0, _v: 0 })
  .exec(function(err, posts) {
  })

const posts = await Post
                      .find()
                      .populate("user")
                      .select({ _id: 0, _v: 0 })
                      .exec()


////////////////////
// Field Selection
////////////////////
Post
  .find()
  .populate("user", "name age -_id") // -something: not selected
  .select({ _id: 0, _v: 0 })
  .exec()


////////////////////
// Populating Multiple Paths
////////////////////
Post
  .find()
  .populate("user", "name age -_id")
  .populate("other", "otherProp1 otherProp2")
  .select({ _id: 0, _v: 0 })
  .exec()


////////////////////
// Query conditions and other options
////////////////////
Post
  .find()
  .populate({
    path: 'user',
    match: { age: { $gte: 21 } },
    select: 'name age -_id'
  })
  .select({ _id: 0, _v: 0 })
  .exec()


////////////////////
// Populate in Middleware
////////////////////
postSchema.post('find', async function() {
  await this.populate('user');
});
postSchema.post('find', async function(doc, next) {
  await doc.populate('user');
  next();
});
```
