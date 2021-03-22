const express = require("express");
const router = express.Router()

const {getAllUser, getIDUser} = require('./controller.user')

router.get("/", getAllUser);
router.get("/:id", getIDUser);

module.exports = router;
