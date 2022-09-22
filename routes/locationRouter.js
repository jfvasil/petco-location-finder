const express = require('express')
const router = express.Router()
const locationController = require('../controllers/locationController')

router.get('/', locationController.getlocations)


module.exports = router