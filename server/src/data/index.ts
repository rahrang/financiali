import { Sequelize } from 'sequelize';

import { ModelTypeMap } from './common/modelType';

if (!process.env.DATABASE_URI) {
  throw new Error('missing DATABASE_URI');
}

const sequelize = new Sequelize(process.env.DATABASE_URI, {
  dialect: 'postgres',
});

const models: ModelTypeMap = {
  User: require('./models/User').default,
  Transaction: require('./models/Transaction').default,
};

Object.keys(models).forEach(modelName => {
  models[modelName].initialize(sequelize);
});

Object.keys(models).forEach(modelName => {
  models[modelName].associate(models);
});

export default models;
