const express = require('express')
const router = express.Router()
const userController = require('../../controllers/api/users')

router.post('/', userController.create)

module.exports=router