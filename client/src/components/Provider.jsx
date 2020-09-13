import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Provider.css'

export default function Provider({provider}) {
    return (
        <div className="Provider">
            <div className="container">
                <div className="name-container">
                    <span className="label">Name:</span>
                    <div className="value">{provider.provider_full_name}</div>
                </div>

                <div className="specialty-container">
                    <span className="label">Specialty:</span>
                    <div className="value"> {provider.specialty}</div>
                </div>
                <Link to={{
                    pathname: "/addAppointment",
                    providerId: provider.provider_id
                }}
                className="appointment-btn">
                
                Make appointment</Link>    
            </div>
        </div>
    )
}
