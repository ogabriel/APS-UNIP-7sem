const db = require('../app/models');

beforeEach(async () => {
  const models = Object.values(db.sequelize.models);

  return await models.forEach((tableName) => {
    tableName.destroy({ truncate: true, cascade: true });
  });
});
