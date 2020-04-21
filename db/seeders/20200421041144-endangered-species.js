'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Species',
      [
        {
          popularName: 'Araucária Chilena',
          scientificName: 'Araucaria araucana',
          endangered: true,
          description: 'Araucaria nativa do Chile',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          popularName: 'Dioneia',
          scientificName: 'Dionaea muscipula',
          endangered: true,
          description: 'Planta carnírvora que come insetos e aracnídeos',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Species', [
      { scientificName: ['Araucaria araucana', 'Dionaea muscipula'] },
    ]);
  },
};
