import axios from 'axios'

const api = axios.create(
    {
        baseURL: 'http://localhost:5000/api'
    }
)

//These functions make the requests that our own server will handle
//and return our data 


//Provider requests

//Request to insert a new provider with the data gathered from React form
export const insertProvider = formData => api.post('/provider', formData)

//Request to get a provider by its id
export const getProviderById = (id, formData) => api.get(`/provider/${id}`, formData)

//Request to get all providers on database
export const getProviders = () => api.get('/providers')

const providerApis = {
    insertProvider,
    getProviderById,
    getProviders
}

export default providerApis