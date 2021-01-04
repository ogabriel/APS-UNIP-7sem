'use strict';

const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(plainPassword) {
          this.setDataValue('password', bcrypt.hashSync(plainPassword, 10));
        },
      },
      company: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    });

  User.associate = function (models) {
    User.hasMany(models.Plant);
  };

  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  return User;
};
