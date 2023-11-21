const express = require('express')
const router = express.Router()
const userController = require('../../controllers/api/users')
const ensureLoggedIn=require('../../config/ensureLoggedIn')

router.post('/', userController.create)
router.post('/login',userController.login)

router.get('/check-token',ensureLoggedIn, userController.checkToken)

module.exports=router