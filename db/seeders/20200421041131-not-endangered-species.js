'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Species',
      [
        {
          popularName: 'Laranjeira',
          scientificName: 'Citrus sinensis',
          endangered: false,
          description: 'O fruto da árvore é a laranja',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          popularName: 'Macieira',
          scientificName: 'Malus domestica',
          endangered: false,
          description: 'O fruto da árvore é a maça',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Species', [
      { scientificName: ['Citrus sinensis', 'Malus domestica'] },
    ]);
  },
};
