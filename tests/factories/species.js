const faker = require('faker');
const { Species } = require('../../app/models');

const defaultOptions = {
  popularName: faker.lorem.word(),
  scientificName: faker.lorem.words(),
  endangered: false,
};

const speciesParams = (options) => ({ ...defaultOptions, ...options });

exports.speciesParams = (options = {}) => speciesParams(options);

exports.createSpecies = async (options = {}) =>
  await Species.create(speciesParams(options));

exports.buildSpecies = async (options = {}) =>
  await Species.build(speciesParams(options));
