const express = require('express');
const qs = require('querystring');

// router
const router = express.Router();

router.route("/")
  .get((req, res) => {
    res.send("List View");
  })
  .post((req, res) => {
    res.send("Create View");
  })


router.route("/:productId")
  .get((req, res) => {
    const { productId } = req.params;
    
    res.send(`${productId}: Specific View`);
  })
  .put((req, res) => {
    res.send("Put View");
  })
  .patch((req, res) => {
    res.send("Patch View");
  })
  .delete((req, res) => {
    res.send("Delete View");
  })


module.exports = router;
