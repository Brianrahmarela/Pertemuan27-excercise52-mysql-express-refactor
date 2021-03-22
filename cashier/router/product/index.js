const express = require("express");
const router = express.Router()

const {getAllProduct, getIDProduct} = require('./controller.product')

router.get("/", getAllProduct);
router.get("/:id", getIDProduct);

module.exports = router;