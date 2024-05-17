const {
    bookingModel
} = require('../schema/schema')


// controllers registrations

// post event request 
const postEventBooking = async (req, res)=>{
    const { bookedBy, bookingDate, eventName, bookingType, location, description } = req.body

    try {

        // using the save method 
        
        // const postEvent = new bookingModel({
        //     bookedBy,
        //     bookingDate,
        //     eventName,
        //     bookingType,
        //     location,
        //     description
        // })

        // await postEvent.save()

        // using create method

        if (!bookedBy && !bookingDate && !eventName && !bookingType && !location && !description) {
            return res.status(400).json({ message: 'all fields are required' })
        }
        if(!bookedBy){
            return res.status(400).json({messag:'please enter booked by'})
        }
        if(!bookingDate){
            return res.status(400).json({ message:'please enter booking date' })
        }
        if(!eventName){
            return res.status(400).json({ message:'please enter event name' })
        }      
        if(!bookingType){
            return res.status(400).json({ message:'please enter booking type' })
        }
        
        if(!location){
            return res.status(400).json({ message:'please enter event location' })
        }
        
        if(!description){
            return res.status(400).json({ message:'please enter event description' })
        }

        const postEvent = await bookingModel.create({
            bookedBy,
            bookingDate,
            eventName,
            bookingType,
            location,
            description
        })

        if(!postEvent){
            return res.status(400).json({ message: 'could not post to database' })
        }
        return res.status(200).json({ message: 'Booking event added to database successfully', postEvent })

    } catch (error) {
        console.log(error);
    }
}

// get all event bookings
const getAllEventBooking = async (req, res) => {
    const allEvents = await bookingModel.find({})

    try{

        if(!allEvents > 0){
            return res.status(404).json({ message: 'sorry no event bookings found' })
        }
        return res.status(200).json({ message: 'found events', allEvents })
    }catch(error){
        console.log(error)
    }

}

// get bookings by id
const getBookingsByID = async(req, res)=>{
    const { id } = req.params
    const singleEvent = await bookingModel.findById(id)

    try{

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json({ message: 'no event with such id found' })
        }
        res.status(200).json({ message: 'one event found', singleEvent })
    }catch(error){
        console.log(error)
    }

}


// update bookings details 
const updateBookingDetails = async(req, res)=>{
    const { id } = req.params
    const { bookedBy, bookingDate, eventName, bookingType, location, description } = req.body

    try{

        const updateDetails = await bookingModel.findByIdAndUpdate(id, {
            bookedBy,
            bookingDate,
            eventName,
            bookingType,
            location,
            description
        },
        { new: true }
        )
    
        if(!updateDetails){
            return res.status(400).json({ message: 'could not update records' })
        }
        return res.status(200).json({ message: 'record updated successfully', updateDetails })

    }catch(error){
        console.log(error)
    }
}

// delete user details
const deleteBookingDetails = async(req, res)=>{
    const { id } = req.params

    const deleteRecords = await bookingModel.findByIdAndDelete(id)

    try{
        if(!deleteRecords){
            return res.status(400).json({ message: "could not delete records" })
        }
        return res.status(200).json({ message: 'records successfully deleted', deleteRecords })

    }catch(error){
        console.log(error)
    }
}

module.exports = {
    getAllEventBooking,
    getBookingsByID,
    updateBookingDetails,
    deleteBookingDetails,
    postEventBooking
}