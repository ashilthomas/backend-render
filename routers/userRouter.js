const express = require('express')
const router = express.Router()
const {postData, postLogin} = require('../controller/userController')
router.route('/user').post(postData)
router.route('/login').post(postLogin)

module.exports = router