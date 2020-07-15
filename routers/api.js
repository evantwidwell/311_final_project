const express = require('express')
const apiController = require('../controllers/api.js')
const router = express.Router()

router.get('/customers', apiController.getAllCustomers)

router.post('/customers', apiController.createCustomer)

 module.exports = router