import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Provider from './Provider'
import providerApi from '../api/providerApi'
import '../css/ProviderList.css'

export default function ProviderList() {

    const [providerData, setProviderData] = useState([])

    useEffect( () => {

        const getData = async () => {   //Fetch the provider list from our API
             await providerApi.getProviders()
            .then(res => {
                console.log(res)
                setProviderData(res.data.data)
            })
            .catch(
                error => {console.log(error)
                }
            )
        }

        getData();
    }, [])


    return (
        <div className="ProviderList">
            <NavBar/>
            {providerData.map(provider => <Provider key={provider._id} provider={provider}/>)}
            <div className="error-message">{providerData.length === 0 ? "Failed to load data" : ""}</div>
        </div>
    )
}
