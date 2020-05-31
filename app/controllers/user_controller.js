'use strict';

const router = require('express').Router();
const { User } = require('../models');

router.get('/', function (req, res) {
  User.findAll().then((data) => {
    res.json(data);
  });
});

router.get('/:id', function (req, res) {
  User.findByPk(req.params.id).then((data) => {
    res.json(data);
  });
});

module.exports = router;
