const request = require('supertest');
const app = require('../../../../app');

const plantFactory = require('../../../factories/plant');

describe('GET /plants', () => {
  describe('when there are no plants', () => {
    test('return an empty array', async () => {
      const response = await request(app).get('/api/v1/plants');

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are plants created', () => {
    beforeEach(() => plantFactory());

    test('return all the created plants', async () => {
      const response = await request(app).get('/api/v1/plants');

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].discovered).toEqual(false);
    });
  });
});
