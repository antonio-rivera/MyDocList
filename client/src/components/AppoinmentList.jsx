import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import appointmentApi from '../api/appointmentApi'
import Appointment from './Appointment'


export default function AppointmentList() {

    const [appointmentData, setAppointmentData] = useState([])

    useEffect( () => {

        const getData = async () => {   //Fetch the appointment list from our API
             await appointmentApi.getAppointments()
            .then(res => {
                console.log(res)
                setAppointmentData(res.data.data)
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
            {appointmentData.map(appointment => <Appointment key={appointment._id} appointment={appointment}/>)}
            <div className="error-message">{appointmentData.length === 0 ? "Failed to load data" : ""}</div>
        </div>
    )
}