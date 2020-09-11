import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'http://localhost:5000/api'
    }
)

//These functions make the requests that our own server will handle
//and return our data 

//Request to insert a new appointment to database based on a provider chosen
export const insertAppointment = formData => api.post('/appointments', formData)

//View all appointments made thus far
export const getAppointments = () => api.get('/appointments')

const appointmentApi = {
    insertAppointment,
    getAppointments
}

export default appointmentApi