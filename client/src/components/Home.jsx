import React from 'react'
import {Link, BrowserRouter as Router} from 'react-router-dom'
import '../css/Home.css'


export default function Home() {
    return (
        <div className="Home">
            <div className="container">
            <h1 className="title">MyDocList</h1>
            <h2 className="subtitle">Your go-to place for finding health providers and making appointments</h2>
            <div className="link-container">
            <Router>
            <Link to="/PatientHome" className="link">I am a patient</Link>
            </Router>
            <Link to="/addProvider" className="link">I am a provider</Link>
            </div>
            </div>
        </div>
    )
}
