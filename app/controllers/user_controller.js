'use strict';

const router = require('express').Router();
const { User } = require('../models');

router.get('/', function (req, res) {
  User.findAll().then((data) => {
    res.send(data);
  });
});

module.exports = router;
