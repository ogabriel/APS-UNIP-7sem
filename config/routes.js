const Router = require('express').Router();
const UserController = require('../app/controllers/user_controller');
const PlantController = require('../app/controllers/plant_controller');
const SpeciesController = require('../app/controllers/species_controller');

Router.use('/users', UserController);
Router.use('/plants', PlantController);
Router.use('/species', SpeciesController);

module.exports = Router;
