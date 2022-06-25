# Schemas
#### Each schema maps to a MongoDB collection and defines the shape of the documents within that collection
```js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: {
    type: String,
    required: true,
    maxlength: 128,
    index: true, // indexing by lastname
    trim: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 4,
    maxlength: 128,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  },
});
```
