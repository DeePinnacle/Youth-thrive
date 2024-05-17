const express = require('express')

const {
    getAllEventBooking,
    getBookingsByID,
    updateBookingDetails,
    deleteBookingDetails,
    postEventBooking
} = require('../controllers/controllers')

const routes = express.Router()

// routes registrations

// post event
routes.post('/post-event', postEventBooking)

// get all bookings
routes.get('/', getAllEventBooking)

// get bookings by id
routes.get('/single-event/:id', getBookingsByID)

// update details
routes.patch('/update-booking/:id', updateBookingDetails)

// delete records
routes.delete('/delete-booking/:id', deleteBookingDetails)



module.exports = routes;