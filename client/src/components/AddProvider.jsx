import React, {useState} from 'react'
import {Link,  useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import '../css/AddProvider.css'
import providerApi from '../api/providerApi'



export default function AddProvider({handlePOST_response}) {

    let history = useHistory(); //For dynamic redirects
    const [providerInfo, setProviderInfo] = useState({provider_full_name: "", specialty: ""}) //Data that is sent in POST request
    const [waitingMessage, setWaitingMessage] = useState("Thank you for joining our list")

    useEffect(() => {console.log(providerInfo)})


    //Handle submission of form. If successful POST request. Asynchronous
    async function handleSubmit(event)
    {
        
        event.preventDefault(); //Prevent page reloading and data resetting

        if(  providerInfo.specialty === "" || providerInfo.provider_full_name === "" )
            {
                alert("Some or all fields are still blank")
            }

        else
            {
                setWaitingMessage("Loading...");
                await providerApi.insertProvider(providerInfo) 
                .then(response => handlePOST_response(response) )
                .catch( err => handlePOST_response(err) )

                history.push('/') //Change page to Home.jsx
            }

    }

    return (
        <div className="AddProvider">
            <Link to='/' className="cancel-link">Cancel</Link>


            <form onSubmit={e =>  handleSubmit(e) }>
            <div className="name-container">
            <label className="name-label" htmlFor="name">Full Name:</label>

            <input 
            className="input" 
            type="text" 
            name="name"
            onChange={e => setProviderInfo({...providerInfo, provider_full_name: e.target.value})}
            />
            </div>

            <div className="specialty-container">
            <label className="specialty-label" htmlFor="specialty">Specialty:</label>
            <input 
            className="input" 
            type="text" 
            name="specialty"
            onChange={e => setProviderInfo({...providerInfo, specialty: e.target.value})}
            />
            </div>

            <input 
            className="submit" 
            type="submit" 
            value="Submit"
            />
            </form>

            <h1>{waitingMessage}</h1>
        </div>
    )
}
