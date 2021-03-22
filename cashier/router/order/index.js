const express = require("express");
const router = express.Router()

const {getAllOrder, getIDOrder} = require('./controller.order')

router.get("/", getAllOrder);
router.get("/:id", getIDOrder);

module.exports = router;
