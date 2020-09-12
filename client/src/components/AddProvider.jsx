import React, {useState} from 'react'
import {Link,  Redirect} from 'react-router-dom'
import {useEffect} from 'react'
import '../css/AddProvider.css'
import providerApi from '../api/providerApi'



export default function AddProvider() {


    const [providerInfo, setProviderInfo] = useState({name: "", specialty: ""})

    useEffect(() => {console.log(providerInfo)})


    //Handle submission of form. If successful POST request
    function handleSubmit(event)
    {
        
        event.preventDefault();

        if(providerInfo.name === "" || providerInfo.specialty === "")
            {
                alert("Some or all fields are still blank")
            }

        else
            {
                providerApi.insertProvider(providerInfo)
                .then(response => {console.log(response)})
                .catch( err => {console.log(err)} )

                return <Redirect from='/addProvider' to="/" />
            }

    }

    return (
        <div className="AddProvider">
            <Link to='/' className="cancel-link">Cancel</Link>


            <form onSubmit={e => handleSubmit(e)}>
            <div className="name-container">
            <label className="name-label" htmlFor="name">Full Name:</label>

            <input 
            className="input" 
            type="text" 
            name="name"
            onChange={e => setProviderInfo({...providerInfo, name: e.target.value})}
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

            <h1>Thank you for joining our list</h1>
        </div>
    )
}
