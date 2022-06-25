# Mongoose Core Concepts
```
Schemas
SchemaTypes
Models
Queries
Validation
Middleware
Populate
Discriminators
Query Casting
findOneAndUpdate
Getters and Setters
Virtuals
```

```js
// mongoose.config.js
const mongoose = require('mongoose');


mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});


exports.connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/project-name", {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};


// app.js
const express = require("express");
const mongoose = require("./config/mongoose.congig");

const app = express();

mongoose.connect();

app.get("/", (req, res) => {
  res.send("OK!");
})

app.listen(3000, () => console.log("server runing on port: 3000"));
```