const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getAllProductStatics,
} = require("../controllers/products");

router.route("/").get(getAllProducts);
router.route("/static").get(getAllProductStatics);

module.exports = router;
