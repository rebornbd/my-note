const express = require('express');
const router = express.Router();


router.route("/")
  .get((req, res) => {
    res.send("AUTH GET METHOD");
  })

  .post((req, res) => {
    res.send("AUTH POST METHOD");
  })

module.exports = router;
