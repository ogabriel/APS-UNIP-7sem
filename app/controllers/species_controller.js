'use strict';

const router = require('express').Router();
const { Species } = require('../models');

router.get('/', function (req, res) {
  Species.findAll().then((data) => {
    res.send(data);
  });
});

module.exports = router;
