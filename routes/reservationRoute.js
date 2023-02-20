const reservationController = require('../controllers/reservationController')
const router = require('express').Router();

//Reservation Page / Get all
router.get("/", reservationController.reservation_index);
// use room search

// Reservation Add page
router.get("/add", reservationController.rooms_index);

// Find Room
router.get("/findRoom", reservationController.rooms_find);

module.exports = router;