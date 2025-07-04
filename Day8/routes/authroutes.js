const express = require("express");
const router = express.Router();
const { register, login } = require("../controller/authcon");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/register", register);
router.post("/login", login);

module.exports = router;
