'use strict';
module.exports = (sequelize, DataTypes) => {
  const Species = sequelize.define('Species', {
    popularName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    scientificName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endangered: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    description: DataTypes.TEXT
  }, {});
  Species.associate = function(models) {
    Species.hasMany(models.Plant);
  };
  return Species;
};
