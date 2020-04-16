const Router = require('express').Router()
const UserController = require('../app/controllers/user_controller')

Router.use('/users', UserController)

module.exports = Router;
