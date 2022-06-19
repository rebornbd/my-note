const express = require('express');

const port = 3000;
const app = express();

// parse request to JSON | enabled nested object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200);
  res.write("<h1>Home Page</h1>")
  res.write("<h5>.... the end!</h5>");
  res.send();
})

app.listen(port, () => {
  console.log(`app is running on port:${port}`);
});
