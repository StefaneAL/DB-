const express = require('express')
const router = express.Router()
const controller = require('../controllers/usersControllers')

router.get('/all', controller.getAll)

router.post('/create', controller.createUser)


module.exports = router