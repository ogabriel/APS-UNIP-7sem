const faker = require('faker');
const { Species } = require('../../app/models');

const defaultOptions = {
  popularName: faker.lorem.word(),
  scientificName: faker.lorem.words(),
  endangered: false,
};

module.exports = async (options = {}) =>
  await Species.create(await { ...defaultOptions, ...options });
