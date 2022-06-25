const express = require('express');
const productRoutes = require("./product.route");


// router
const router = express.Router();

// routes
router.use("/product", productRoutes);


module.exports = router;
