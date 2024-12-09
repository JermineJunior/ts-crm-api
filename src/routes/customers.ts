const express = require('express');
import { createCustomerController } from '../controllers/createCustomer';
import { fetchAllCustomers, fetchCustomerByEmail } from '../controllers/fetchCustomers';

const router = express.Router();

console.log('Customers router')
//customers routes
router.get('/', fetchAllCustomers)
router.post('/', createCustomerController)
router.get('/:email', fetchCustomerByEmail)

module.exports = router