const express = require("express");
const reviewController = require("./reviewController");

const router = express.Router();

router.get("/post/:id", reviewController.findByPost);
router.get("/:id", reviewController.findById);

module.exports = router;