const express = require('express');
const routes = require('./routes/v1');

const port = 3000;
const host = '127.0.0.1';
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/v1", routes);

// GLOBAL ERR HANDLER
app.use((err, req, res, next) => {
  next();
});

app.listen(port, host, () => {
  console.log(`app is running on http://${host}:${port}`);
});
