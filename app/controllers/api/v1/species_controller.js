'use strict';

const router = require('express').Router();
const { Species } = require('../models');

router.get('/', function (req, res) {
  Species.findAll().then((data) => {
    res.json(data);
  });
});

router.get('/:id', function (req, res) {
  Species.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

module.exports = router;
