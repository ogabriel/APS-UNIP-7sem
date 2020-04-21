const faker = require('faker');
const { User } = require('../../app/models');

const defaultOptions = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  company: false,
};

module.exports = async (options = {}) =>
  await User.create(await { ...defaultOptions, ...options });
