const express = require("express");
let router = express.Router();
let CarController = require('../controllers/cars')

router.post('/create',CarController.AddCars)
router.get('/cars',CarController.Allcars)
router.put('/update',CarController.UpdateCars)
module.exports = router;