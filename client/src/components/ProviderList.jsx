import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Provider from './Provider'
import providerApi from '../api/providerApi'

export default function ProviderList() {

    const [providerData, setProviderData] = useState([])

    useEffect(() => {
            providerApi.getProviders()
            .then(res => {console.log(res)})
            .catch(
                error => console.log(error)
            )
    }, [])


    return (
        <div>
            <NavBar/>
            <h1>ProviderList</h1>
        </div>
    )
}
