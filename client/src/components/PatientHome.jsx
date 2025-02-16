import React, {useState} from 'react'
import NavBar from './NavBar'
import '../css/PatientHome.css'
import providerApi from '../api/providerApi'
import Provider from './Provider'

export default function PatientHome() {

    const [searchData, setSearchData] = useState([]) //Data from search

    const [searchInput, setSearchInput] = useState("") //What user writes on search bar

    //Function to handle the search functionality
    //Get data and then filter it based on the user's input string
    async function handleSearch(e)
    {
        e.preventDefault();


        await providerApi.getProviders()
       .then(res => {
           console.log(res)
           let allData = res.data.data

           const filtered = allData.filter((provider) => {
  
            return provider.provider_full_name.toLowerCase().includes(searchInput.toLowerCase()) || provider.specialty.toLowerCase().includes(searchInput.toLowerCase())
            })

            setSearchData(filtered)
            window.scrollTo(0,document.body.scrollHeight);

        })
       .catch(
           error => {console.log(error)
           }
       )

    } //handleSearch

    return (
        <div className="PatientHome">

            <NavBar/>

            <form className="searchbar">
                <input 
                className="bar" 
                type="search" 
                placeholder="search by provider name or specialty"
                onChange={e => setSearchInput(e.target.value)}
                />
                <button 
                className="search-button" 
                onClick={e => handleSearch(e)}
                >
                Search</button>
            </form>

            {searchData.map((provider) => <Provider key={provider._id}  provider={provider}/>)}
            
        </div>
    )
}
