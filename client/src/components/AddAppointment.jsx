import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker'
import '../css/AddAppointment.css'
import appointmentApi from '../api/appointmentApi'


export default function AddAppointment({location}) {

    let history = useHistory() //For redirecting after submit
    const [appointmentInfo, setAppointmentInfo] = useState({
        provider_id: location.providerId,
        start_time: new Date(),
        end_time: new Date(),
        appointment_reason: undefined,
        patient_full_name: undefined,
        patient_gender: undefined,
        patient_date_of_birth: undefined,
        patient_phone_number: undefined
    })

    //Values that will be assigned to our appointmentInfo object state
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());


    //Get value from startTime to our appointmentInfo object
    useEffect(() => {
            setAppointmentInfo(appointmentInfo => ({...appointmentInfo, start_time: startTime.toString()}))
    }, [startTime])



    //Get value from endTime to our appointmentInfo object
    useEffect(() => {
        setAppointmentInfo(appointmentInfo => ({...appointmentInfo, end_time: endTime.toString()}))
}, [endTime])

    
    const [gender, setGender] = useState("Male") //State for our selector

    //Get gender value from gender state
    useEffect(() => {
        setAppointmentInfo(appointmentInfo => ({...appointmentInfo, patient_gender: gender}))
    }, [gender])



    const [loading, setLoading] = useState('') //Set message when request is sent


    //handle the submission of the form
    async function handleSubmit(e) {
        e.preventDefault()

        setLoading("Loading...")
        await appointmentApi.insertAppointment(appointmentInfo)  //Add our form data to our database
            .then(response => {alert("Success!"); console.log(response)} ) 
            .catch( err => {alert("An error occured"); console.log(err)} )

            history.push('/patientHome')


    }



    return (
        <div className="AddAppointment">
            <div className="cancel-container"><Link to='/patientHome' className="cancel-link">Cancel</Link></div>

            <form onSubmit={e => handleSubmit(e)}>

                <div className="time-container">
                    <label>Start time: </label>
                    <div className="dtp-container">
                    <DateTimePicker
                        
                        className="dtp"
                        value={startTime}
                        onChange={setStartTime}
                    />
                    </div>
                    
                </div>

                <div className="time-container">
                    <label>End time: </label>
                    <div className="dtp-container">
                    <DateTimePicker
                        
                        className="dtp"
                        value={endTime}
                        onChange={setEndTime}
                    />
                    </div>
                </div>

                <div className="reason-container">
                    <label className="reason" htmlFor="reason">Reason: </label>

                    <textarea 
                    type="text" 
                    name="reason" 
                    placeholder="e.g. pain, nausea, loss of vision, etc."
                    onChange={e => setAppointmentInfo({...appointmentInfo, appointment_reason: e.target.value})}
                    />
                </div>

                <div className="patient-name-form">
                    <label htmlFor="patientname">Your name: </label>
                    <input 
                    type="text" 
                    name="patientname"
                    onChange={e => setAppointmentInfo({...appointmentInfo, patient_full_name: e.target.value})}
                    required
                    />
                </div>

                <div>
                    <label htmlFor="gender">Gender: </label>
                    <select className="select" name="gender" id="gender" onChange={e => setGender(e.target.value)}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                    
                </div>

                <div>
                    <label htmlFor="birthday">Date of birth: </label>
                    <input 
                    type="date" 
                    name="birthday"
                    onChange={e => setAppointmentInfo({...appointmentInfo, patient_date_of_birth: e.target.value})}
                    />
                </div>

                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input 
                    type="tel" 
                    name="phone"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                    placeholder="000-000-0000"
                    onChange={e => setAppointmentInfo({...appointmentInfo, patient_phone_number: e.target.value})}
                    />
                </div>

                <input 
                    className="submit" 
                    type="submit" 
                    value="Submit"
                />
            </form> 

            <h2>{loading}</h2>
            
        </div>
    )
}
