import React, {useState} from 'react'
import {Link,  useHistory} from 'react-router-dom'
import {useEffect} from 'react'
import DateTimePicker from 'react-datetime-picker'
import Select from 'react-select'

export default function AddAppointment({location}) {
    let history = useHistory() //For redirecting after submit
    const [appointmentInfo, setAppointmentInfo] = useState({
        provider_id: location.providerId,
        start_time: undefined,
        end_time: undefined,
        appointment_reason: undefined,
        patient_full_name: undefined,
        patient_gender: undefined,
        patient_date_of_birth: undefined,
        patient_phone_number: undefined
    })

    //Values that will be assigned to our appointmentInfo object
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());

    //Dropdown options for gender selection
    const genderOptions = [
            {value: "Male", label: "Male"},
            {value: "Female", label: "Female"},
            {value: "Other", label: "Other"}
    ]

    return (
        <div className="AddAppointment">
            <Link to='/' className="cancel-link">Cancel</Link>

            <form>

                <div>
                    <label>Start time: </label>
                    <DateTimePicker
                        value={startTime}
                        onChange={setStartTime}
                    />
                    
                </div>

                <div>
                    <label>End time: </label>
                    <DateTimePicker
                        value={endTime}
                        onChange={setEndTime}
                    />
                </div>

                <div>
                    <label htmlFor="reason">Reason: </label>
                    <input type="text" name="reason" placeholder="e.g. pain, nausea, loss of vision, etc."/>
                </div>

                <div className="patient-name-form">
                    <label htmlFor="patientname">Your name: </label>
                    <input type="text" name="patientname"/>
                </div>

                <div>
                    <label htmlFor="gender">Gender: </label>
                    <Select
                    options={genderOptions}
                    />
                </div>

                <div>
                    <label htmlFor="birthday">Date of birth: </label>
                    <input type="date" name="birthday"/>
                </div>

                <div>
                    <label htmlFor="phone">Phone: </label>
                    <input type="text" name="phone"/>
                </div>
            </form> 
            
        </div>
    )
}
