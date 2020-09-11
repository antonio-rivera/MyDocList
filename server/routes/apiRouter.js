const express = require('express');
const providerCtrls = require('../controllers/providerCtrls')
const appointmentCtrls = require('../controllers/appointmentCtrls')
const router = express.Router();

//Controls execute the logic, routes make sure the data goes where it needs to go

//POST route for providers
router.post('/provider', providerCtrls.createProvider);

//GET by id route for providers
router.get('/provider/:id', providerCtrls.getProviderbyId);

//GET route for providers
router.get('/providers', providerCtrls.getProviders);

////////////////////////////////////////////////////////////////////////

//POST route for appointments
router.post('/appointments', appointmentCtrls.createAppointment)

//GET route for appointments
router.get('/appointments', appointmentCtrls.getAppointments)


//export routes
module.exports = router;

