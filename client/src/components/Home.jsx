import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Home.css'


export default function Home() {
    return (
        <div className="Home">
            <div className="container">
            <h1 className="title">MyDocList</h1>
            <h2 className="subtitle">Your go-to place for finding health providers and making appointments</h2>
            <div className="link-container">
            <Link to="/PatientHome" className="link">I am a patient</Link>
            <Link to="/addProvider" className="link">I am a provider</Link>
            </div>
            </div>
        </div>
    )
}
