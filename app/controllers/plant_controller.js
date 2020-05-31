'use strict';

const router = require('express').Router();
const { Plant, Species } = require('../models');

router.get('/', (req, res) => {
  Plant.findAll().then((data) => {
    res.json(data);
  });
});

router.get('/:id', function (req, res) {
  Plant.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

router.get('/localization', (req, res) => {
  Plant.findAll({ include: Species }).then((data) => {
    const localizations = data.map((plant) => {
      return {
        type: 'Feature',
        properties: {
          popupContent: plant.Species.popularName,
        },
        geometry: plant.localization,
      };
    });

    res.json(localizations);
  });
});

module.exports = router;
