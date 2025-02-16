import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import '../css/Home.css'



export default function Home({message, removeMessage}) {

    useEffect(() => {

        return () => {
            removeMessage() //Remove message when leaving component
        }
    }, [removeMessage])
    


    let cname = "" //Classname for our Pop animation indicating if request worked or not
    if (message !== undefined) {cname = "PopUp"}

    return (
        <div className="Home">
            <div className="container">
                <h1 className="title">MyDocList</h1>
                <h2 className="subtitle">Your go-to place for finding health providers and making appointments</h2>
                    <div className="link-container">
                        
                        <Link to="/patientHome" className="link">I am a patient</Link>
                        <Link to="/addProvider" className="link" onClick={removeMessage}>I am a provider</Link>
                    </div> 

            <h1 className={cname}>{message}</h1>
            </div>
        </div>
    )
}
