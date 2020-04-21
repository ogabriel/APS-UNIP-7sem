const request = require('supertest');
const app = require('../../../../app');

const speciesFactory = require('../../../factories/species');

describe('GET /species', () => {
  describe('when there are no species', () => {
    test('return an empty array', async () => {
      const response = await request(app).get('/api/v1/species');

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are species created', () => {
    beforeEach(() => speciesFactory({ popularName: 'Laranjeira' }));

    test('return all the created species', async () => {
      const response = await request(app).get('/api/v1/species');

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].popularName).toEqual('Laranjeira');
    });
  });
});
