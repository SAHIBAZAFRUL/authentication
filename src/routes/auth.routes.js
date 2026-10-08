const express = require('express');

const authController = require("../controllers/auth.controller");

const router = express.Router();

//api create here wih the help of router

//prefix/register==/api/auth/register

router.post("/register", authController.registerUser);

module.exports = router;