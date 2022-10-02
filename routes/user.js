
const express = require("express");
let router = express.Router();
let UserController = require('../controllers/user')


router.post('/registration',UserController.registerUser)
router.post('/login',UserController.loginUser)


module.exports = router;