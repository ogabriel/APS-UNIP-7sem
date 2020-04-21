'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plant = sequelize.define(
    'Plant',
    {
      localization: {
        type: DataTypes.GEOMETRY('POINT'),
        allowNull: false,
      },
      state: {
        type: DataTypes.ENUM,
        defaultValue: ['alive'],
        values: ['alive', 'dead', 'burned', 'fallen', 'cutted'],
      },
      discovered: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {}
  );
  Plant.associate = function (models) {
    Plant.belongsTo(models.User);
    Plant.belongsTo(models.Species);
  };
  return Plant;
};
