const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookedBy: {
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    }, 
    bookingDate: {
        type: String,
        required: true
    }, 
    bookingType: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }

}, { timestamps: true })

const bookingModel = mongoose.model('eventBooking', bookingSchema)

module.exports = {
    bookingModel
}