const express = require('express');
const router = express.Router();


router.route("/")
  .get((req, res) => {
    res.send("USER GET METHOD");
  })

  .post((req, res) => {
    res.send("USER POST METHOD");
  })

module.exports = router;
