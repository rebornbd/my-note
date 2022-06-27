# validation
```js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true, // not use unque: [true, "..."]
    required: [true, "User username is required"]
    minlength: [6, "User username min length is 6, got {VALUE}"],
    maxlength: 128,
    validate: {
      validator: function(value) {
        return /^[a-zA-Z0-9]+$/.test(value);
      },
      message: function(props) {
        return `${props.value} is not a valid username`
      }
    }
  },

  age: {
    type: Number,
    required: true,
    min: 1,
    max: 150,
    default: 1
  },

  gender: {
    type: String,
    enum: {
      values: ["male", "female"],
      message: "{VALUE} is not supported"
    }
  }
});

// nb: unique option for schemas is not a validator. It's a convenient helper for building MongoDB unique indexes.
```
