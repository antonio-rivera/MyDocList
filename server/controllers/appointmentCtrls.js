const Appointment = require('../models/appointmentModel')

exports.createAppointment = (req,res) => { //Function controller to create a new Appointment
    const body = req.body;

     //Check if the request is blank or invalid in some way
     if (!body)
     {
         return res.status(400).json(
             { success: false,
               error: "No data entered!" 
             }
         )
     }


     //Create a Appointment with the data in the request. Handle errors with status codes and json responses
    Appointment.create(body, (err, appointment) => {
        if (err) return res.status(400).send(`Some error occured while adding the Appointment. Error: ${err}`);

        else {
                return res.status(201).json(
                    { success: true,
                      id: appointment._id,
                      message: "Appointment added!"
                    }
                )
            }
    })

} //function to handle POST requests and add new appointment to database

// exports.getAppointmentbyId = async (req,res) => { //Controller for finding a single Appointment with the requested id
//     await Appointment.findOne({_id: req.params.id}, (err, appointment) => {
//         if(err)
//             return res.status(400).json(
//                 {
//                     success: false,
//                     message: "Incorrect query",
//                     error: err
//                 })

        
//         if(!appointment)
//         {
//             return res.status(404).json({success: false, error: `Appointment was not found`})
//         }

//     return res.status(200).json({ success: true, data: appointment });
//     }).catch(error => console.log(error)) //find method
// } //SEARCH function

exports.getAppointments = async (req, res) => { //Controller for finding all appointments on the list
    await Appointments.find({}, (error, appointment) => {
        if(error)
        {
            return res.status(400).json({success: false, error: "Query is incorrect"});
        }

        if(!appointment.length)
        {
            return res.status(404).json({success: false, error: "List possibly empty or contains incorrect values"});
        }


        return res.status(200).json(
                { success: true, data: appointment }
            )


    }).catch(
        error => console.log(error)
    )


} //GET list/database

module.exports = exports //export all controllers