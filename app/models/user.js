'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Plant);
  };
  return User;
};
