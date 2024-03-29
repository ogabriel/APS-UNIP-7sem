'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      localization: {
        allowNull: false,
        type: Sequelize.GEOMETRY('POINT'),
      },
      state: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['alive', 'dead', 'burned', 'fallen', 'cutted'],
      },
      discovered: {
        type: Sequelize.BOOLEAN,
      },
      UserId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        references: {
          key: 'id',
          model: 'Users',
        },
      },
      SpeciesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        onUpdate: 'SET NULL',
        onDelete: 'SET NULL',
        references: {
          key: 'id',
          model: 'Species',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Plants');
  },
};
