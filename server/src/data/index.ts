import { Sequelize } from 'sequelize';

import { ModelTypeMap } from './common/modelType';

if (!process.env.DATABASE_URL) {
  throw new Error('missing DATABASE_URL');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {});

const models: ModelTypeMap = {
  User: require('./models/User'),
  Transaction: require('./models/Transaction'),
};

Object.keys(models).forEach(modelName => {
  models[modelName].initialize(sequelize);
});

Object.keys(models).forEach(modelName => {
  models[modelName].associate(models);
});
