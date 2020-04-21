'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const usersQuery = await queryInterface.sequelize.query(
      'SELECT id FROM "Users" u WHERE u.company = true'
    );
    const speciesQuery = await queryInterface.sequelize.query(
      'SELECT id FROM "Species" s WHERE s.endangered = false'
    );

    const users = usersQuery[0];
    const species = speciesQuery[0];

    return await queryInterface.bulkInsert(
      'Plants',
      [
        {
          localization: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(-23.550404 -46.633906)',
            '4326'
          ),
          state: 'alive',
          discovered: false,
          UserId: users[0].id,
          SpeciesId: species[0].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          localization: Sequelize.fn(
            'ST_GeomFromText',
            'POINT(-23.550404 -45.633906)',
            '4326'
          ),
          state: 'alive',
          discovered: false,
          UserId: users[0].id,
          SpeciesId: species[1].id,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    const plantsQuery = await queryInterface.sequelize.query(
      `SELECT id FROM "Plants" p
      JOIN "Users" u ON u.id = p.UserId"
      JOIN "Species" s ON s.id = p.SpeciesId"
      WHERE u.company = true AND s.endangered = false`
    );

    const plants = plantsQuery[0];

    if (plants.length < 1) {
      return 0;
    } else {
      return await queryInterface.bulkDelete('Plants', [
        { id: [plants[0].id, plants[1].id] },
      ]);
    }
  },
};
