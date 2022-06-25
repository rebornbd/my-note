const express = require('express');
const cors = require('cors');
const routes = require('../api/routes/v1');

// app
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// all routes
app.use("/v1", routes);

// error handle
app.use((err, req, res, next) => {
  const error_message = err?.message || "some error";
  res.status(200).send(error_message);
});


module.exports = app;
