const request = require('supertest');
const app = require('../../../../app');

const { createPlant } = require('../../../factories/plant');

describe('GET /plants', () => {
  describe('when there are no plants', () => {
    test('return an empty array', async () => {
      const response = await request(app).get('/api/v1/plants');

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are plants created', () => {
    beforeEach(() => createPlant({}));

    test('return all the created plants', async () => {
      const response = await request(app).get('/api/v1/plants');

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].discovered).toEqual(false);
    });
  });
});

describe('GET /plants/localization', () => {
  describe('when there are no plants', () => {
    test('return an empty array', async () => {
      const response = await request(app).get('/api/v1/plants/localization');

      expect(response.statusCode).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe('when there are plants created', () => {
    beforeEach(() => createPlant({}));

    test('return all the created plants', async () => {
      const response = await request(app).get('/api/v1/plants/localization');

      expect(response.statusCode).toBe(200);
      expect(response.body).not.toEqual([]);
      expect(response.body.length).toEqual(1);
      expect(response.body[0].type).toEqual('Feature');
      expect(response.body[0].properties).not.toEqual({});
      expect(response.body[0].geometry.type).toEqual('Point');
      expect(response.body[0].geometry.coordinates[0]).toBeGreaterThanOrEqual(
        -90
      );
      expect(response.body[0].geometry.coordinates[0]).toBeLessThanOrEqual(90);
      expect(response.body[0].geometry.coordinates[1]).toBeGreaterThanOrEqual(
        -180
      );
      expect(response.body[0].geometry.coordinates[1]).toBeLessThanOrEqual(180);
    });
  });
});
