import React from 'react'
import {Link} from 'react-router-dom'
import '../css/NavBar.css'

export default function NavBar() {
    return (

        <div className="NavBar">
              


        
            <nav>
                <span className="homeTitle">MyDocList</span>

                
                <div className="link-container">
                    <Link className="navlink" to="/providerList">Browse Providers</Link>
                    <Link className="navlink" to="/appointmentList">My Appointments</Link>
                    <Link className="navlink" to="/patientHome">Search</Link>
                    <Link className="navlink" to="/">Home</Link>
                </div>
            </nav>
        </div>
    )
}
