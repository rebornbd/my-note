# Model
#### Models are fancy constructors compiled from Schema definitions.
##### An instance of a model is called a document.
```
Model:
  Compiling your first model
  Constructing Documents
  Querying
  Deleting
  Updating
```

```js
////////////////////
// Compiling your first model
////////////////////
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    minlength: 4,
    maxlength: 128,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    minlength: 6,
    maxlength: 128,
    required: true
  },

  age: {
    type: Number,
    min: 1,
    max: 100,
    default: 1
  }
})
const User = mongoose.model("User", userSchema);


////////////////////
// Constructing Documents
////////////////////
const user = new User({ username: "rahim", password: "123456" });
const savedUser = await user.save();


////////////////////
// Querying
////////////////////
User
  .find({ username: "rahim" })
  .where('createdDate')
  .gt(oneYearAgo)
  .exec(callback);


////////////////////
// Deleting
////////////////////
// option-01
User.deleteOne({ username: "rahim" }, (err) => {
  if (err) return handleError(err);
});
// option-02
try {
  const user = await User.deleteOne({ username: "rahim" });
} catch (err) {}


////////////////////
// Updating
////////////////////
// option-01
User.updateOne({ username: "rahim" }, (err) => {
  if (err) return handleError(err);
});
// option-02
try {
  const user = await User.updateOne({ username: "rahim", age: 28 });
} catch (err) {}
```
#### NB: The .model() function makes a copy of schema. Make sure that you've added everything you want to schema, including hooks, before calling .model()!
