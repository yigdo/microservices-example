const express = require("express");
const productController = require("./productController");

const router = express.Router();

router.get("/", productController.getAll);
router.get("/:id", productController.findById);

module.exports = router;