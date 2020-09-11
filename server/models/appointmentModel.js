const mongoose = require('mongoose')
const Schema = mongoose.Schema

const appointmentSchema = new Schema(
    {
        _id: {type: String, required: true},
        provider_id: {type: String, required: true},
        start_time: {type: Date, required: true},
        end_time: {type: Date, required: true},
        appointment_reason: {type: String, required: true},
        patient_full_name: {type: String, required: true},
        patient_gender: {type: String, required: true},
        patient_date_of_birth: {type: Date, required: true},
        patient_phone_number: {type: String, required: true}
    }
)

module.exports = mongoose.model('Appointment', appointmentSchema)