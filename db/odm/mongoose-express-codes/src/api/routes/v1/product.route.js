const express = require('express');
const controller = require("../../controllers/product.controller");


// router
const router = express.Router();

// load product
router.param("productId", controller.load)

router.route("/")
  .get(controller.list)
  .post(controller.create)

router.route("/:productId")
  .get(controller.view)
  .put(controller.update)
  .patch(controller.update)
  .delete(controller.delete)


module.exports = router;
