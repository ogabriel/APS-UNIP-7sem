'use strict';

const router = require('express').Router();
const { Plant } = require('../models');

router.get('/', function (req, res) {
  Plant.findAll().then((data) => {
    res.send(data);
  });
});

module.exports = router;
