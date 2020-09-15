import React from 'react'

export default function Appointment({appointment}) {
    return (
        <div className="Appointment">
            <div className="container">

                <div className="id-container">
                <span className="label">Appointment ID: </span>
                <div className="value">{appointment._id}</div>
                </div>

                <div className="start-time-container">
                <span className="label">Start Time: </span>
                <div className="value">{appointment.start_time}</div>
                </div>

                <div className="end-time-container">
                <span className="label">End Time: </span>
                <div className="value">{appointment.end_time}</div>
                </div>

                <div className="reason-container">
                <span className="label">Reason: </span>
                <div className="value">{appointment.reason}</div>
                </div>

                <div className="patient-name-container">
                    <span className="label">Name:</span>
                    <div className="value">{appointment.patient_full_name}</div>
                </div>

                <div className="gender-container">
                    <span className="label">Gender:</span>
                    <div className="value"> {appointment.gender}</div>
                </div>

                <div className="birth-container">
                    <span className="label">Date of Birth:</span>
                    <div className="value"> {appointment.date_of_birth}</div>
                </div>

                <div className="phone-container">
                    <span className="label">Date of Birth:</span>
                    <div className="value"> {appointment.phone_number}</div>
                </div>

            </div>
            
        </div>
    )
}
