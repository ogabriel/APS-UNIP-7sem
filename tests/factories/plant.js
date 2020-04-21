const faker = require('faker');

const userFactory = require('./user');
const speciesFactory = require('./species');
const { Plant } = require('../../app/models');

const defaultOptions = {
  localization: {
    type: 'Point',
    coordinates: [faker.address.latitude, faker.address.longitude],
  },
  state: 'alive',
  discovered: false,
  User: userFactory(),
  Species: speciesFactory(),
};

module.exports = async (options = {}) =>
  await Plant.create(await { ...defaultOptions, ...options });
