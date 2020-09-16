import React from 'react'
import '../css/Appointment.css'

export default function Appointment({appointment}) {
    const startDate = new Date(appointment.start_time).toLocaleString()
    const endDate = new Date(appointment.end_time).toLocaleString()
    const birthDate = new Date(appointment.patient_date_of_birth).toLocaleDateString()
    return (
        <div className="Appointment">
            <div className="container">

                <div className="labelvalue-container">
                <span className="label">Appointment ID: </span>
                <div className="value">{appointment._id}</div>
                </div>

                <div className="labelvalue-container">
                <span className="label">Your Provider's ID: </span>
                <div className="value">{appointment.provider_id}</div>
                </div>

                <div className="labelvalue-container">
                <span className="label">Start Time: </span>
                <div className="value">{ startDate}</div>
                </div>

                <div className="labelvalue-container">
                <span className="label">End Time: </span>
                <div className="value">{ endDate}</div>
                </div>

                <div className="labelvalue-container">
                <span className="label">Reason: </span>
                <div className="value">{appointment.appointment_reason}</div>
                </div>

                <div className="labelvalue-container">
                    <span className="label">Name: </span>
                    <div className="value">{appointment.patient_full_name}</div>
                </div>

                <div className="labelvalue-container">
                    <span className="label">Gender: </span>
                    <div className="value"> {appointment.patient_gender}</div>
                </div>

                <div className="labelvalue-container">
                    <span className="label">Date of Birth: </span>
                    <div className="value"> { birthDate}</div>
                </div>

                <div className="labelvalue-container">
                    <span className="label">Phone Number: </span>
                    <div className="value"> {appointment.patient_phone_number}</div>
                </div>

            </div>
            
        </div>
    )
}
