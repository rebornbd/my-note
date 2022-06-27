# Middleware
#### Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions.
```
Mongoose middleware types: (all middleware have pre and post hook)
  01) document middleware
  02) model middleware
  03) aggregate middleware
  04) query middleware
```

### define middleware before compiling models [link](https://mongoosejs.com/docs/middleware.html#defining)
```js
// ========== wrong ==============
const userSchema = new Schema({ username: String, password: String });
const User = mongoose,model("User", userSchema);
userSchema.pre("save", function(next) {
 // do something
});
// ========== end wrong ================


// ############ correct ################
const userSchema = new Schema({ username: String, password: String });
userSchema.pre("save", function(next) {
 // do something
});
userSchema.post("save", function(doc, next) {
 // do something
});
const User = mongoose,model("User", userSchema);
// ############ end correct ################
```


### middleware hooks [link](https://mongoosejs.com/docs/middleware.html#pre)
```js
const userSchema = new Schema({ username: String, password: String });

////////////////////
// pre
////////////////////
userSchema.pre('save', async function(next) {
  try {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});


////////////////////
// post
////////////////////
userSchema.post('save', function(doc, next) {
  
});
```


### middleware error handling [link](https://mongoosejs.com/docs/middleware.html#error-handling-middleware)
```js
const userSchema = new Schema({ username: String, password: String });

userSchema.post('save', function(error, doc, next) {
  if (error.name === 'MongoServerError' && error.code === 11000) {
    next(new Error('There was a duplicate key error'));
  } else {
    next();
  }
});
```
