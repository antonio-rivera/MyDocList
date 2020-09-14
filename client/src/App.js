import React, {useState} from 'react';
import Home from './components/Home'
import AddProvider from './components/AddProvider'
import PatientHome from './components/PatientHome'
import ProviderList from './components/ProviderList'
import AddAppointment from './components/AddAppointment'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './css/App.css'

function App() {


  const [message, setMessage] = useState(undefined) //Message that indicates whether the POST request on
                                                    //the AddProvider component was successful or not



  function removeMessage() //Function to make sure after message is delivered it will reset to wait for next request response
  {
    setMessage(undefined)
  }


  function handlePOST_response(res) { //Change message depending on response. Passed as prop to addProvider component

      if(res.status === 201)
        {
          setMessage("Provider added successfully!")
        }

      else 
        {
          setMessage("Some error occurred while adding the provider")
        }

  }

  return (
        <>
        <Router>
        <Switch>
        <Route path='/addAppointment' exact component={AddAppointment}></Route>
            <Route path='/providerList' render={()  => <ProviderList/>}></Route>
            <Route path='/patientHome' render={()  => <PatientHome/>}></Route>
            <Route path='/addProvider' render={() => <AddProvider handlePOST_response={handlePOST_response}/> }></Route>
            <Route path='/' render={() => <Home message={message} removeMessage={removeMessage} /> }></Route>
        </Switch>
        </Router>
        </>
  );
}

export default App;
