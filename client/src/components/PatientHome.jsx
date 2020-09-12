import React from 'react'
import NavBar from './NavBar'
import '../css/PatientHome.css'

export default function PatientHome() {
    return (
        <div className="PatientHome">

            <NavBar/>

            <div className="searchbar">
                <input className="bar" type="text" placeholder="search by provider name or specialty"/>
                <button className="search-button">Search</button>
            </div>
            
        </div>
    )
}
