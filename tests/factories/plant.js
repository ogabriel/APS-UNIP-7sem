const faker = require('faker');

const { userParams } = require('./user');
const { speciesParams } = require('./species');
const { Plant, User, Species } = require('../../app/models');

const defaultOptions = {
  localization: {
    type: 'Point',
    coordinates: [faker.address.latitude(), faker.address.longitude()],
  },
  state: 'alive',
  discovered: false,
  User: userParams(),
  Species: speciesParams(),
};

const plantParams = (options) => ({ ...defaultOptions, ...options });

exports.plantParams = (options = {}) => plantParams(options);

exports.createPlant = async (options = {}) =>
  await Plant.create(plantParams(options), { include: [User, Species] });

exports.buildPlant = async (options = {}) =>
  await Plant.build(plantParams(options), { include: [User, Species] });
