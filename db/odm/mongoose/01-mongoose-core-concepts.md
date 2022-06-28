# Mongoose Core Concepts
```
Schemas
SchemaTypes
Models
Queries
Validation
Middleware
Populate
Getters and Setters
Virtuals
```

### Schemas
```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  age: Number,
  gender: String,
  password: String,
  isActive: Boolean
});
```

### SchemaTypes
```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [5, "User username minlength 5, but you enter {VALUE}"],
  },
  age: Number,
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
    default: "male"
  },
  password: String,
  isActive: Boolean,
  posts: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post"
  }]
});
```

# Models
```js
const User = mongoose.model("User", userSchema);
```

# Queries
```js
// GET ALL USER
const users = await User.find();

// GET SPECIFIC USER
const user = await User.find({ _id: userId });
const user = await User.findById(userId);

// CREATE NEW USER
const userData = req.body;
const user = new User(userData);
const savedUser = await user.save();

// UPDATE SPECIFIC USER
const { userId } = req.params;
const updatedData = { age: 28, name: "rahim" };
const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true });

// DELETE SPECIFIC USER
const deletedUser = User.findByIdAndDelete(userId);
const user = User.finById(userId);
await user.remove();
```

### Validation
```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 128,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: function(props) {
        return `${props.value} is not a valid username`
      }
    }
  }
});
```

### Middleware | all middleware have pre and post hook
```js
// pre
userSchema.pre('save', async function(next) {
  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

// post
userSchema.post('save', function(doc, next) {
  
});
```

### Populate
```js
const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  password: String,
  posts: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Post"
  }]
});
const postSchema = new mongoose.Schema({
  title: String,
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  }
});

const Post = mongoose.model("Post", postSchema);
const User = mongoose.model("User", userSchema);

// POPULATE
// CASE-1: GET ALL POST with USER details
Post
  .find()
  .populate("user", "name age -_id")
  .select({ _id: 0, __v: 0 })
  .exec()

// CASE-2: GET ALL USER data with POST details | LIMIT
User
  .find()
  .populate("posts", "title -_id")
  .select({ password: 0, _id: 0, __v: 0 })
  .limit(5)
  .exec()

// CASE-3: GET SPECIFIC POST with USER details
Post
  .findById(postId)
  .populate("user", "name age -_id")
  .select({ _id: 0, __v: 0 })
  .exec()

// CASE-4: GET SPECIFIC USER data with POST details
User
  .findById(userId)
  .populate("posts", "title -_id")
  .select({ password: 0, _id: 0, __v: 0 })
  .exec()
```

### Getters and Setters
```js
const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    get: hideEmail
    set: lowercaseEmail
  }
});

function hideEmail(email) {
  const separatorIndex = email.indexOf('@');
  const hideString = "*".repeat(Math.min(5, separatorIndex));
  const emailExtension = email.substr(separatorIndex);
  return `${hideString}${emailExtension}`;
}

function lowercaseEmail(email) {
  return email.toLowerCase();
}

const user = new User({ name: "rahim", email: "Rahim@gmail" })
const savedUser = await user.save();

// savedUser.email is saved is the db is "rahim@gmail" & when we view data we get "*****@gmail"

// get: view format
// set: db save format
```

### Virtuals | virtual property can't save db
```js
const userSchema = mongoose.Schema({
  email: String
});

userSchema.virtual('domain').get(function() {
  return this.email.slice(this.email.indexOf('@') + 1);
});
const User = mongoose.model('User', userSchema);

let doc = await User.create({ email: 'test@gmail.com' });
doc.domain; // 'gmail.com'
```
