"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
if (!process.env.DATABASE_URL) {
    throw new Error('missing DATABASE_URL');
}
const sequelize = new sequelize_1.Sequelize(process.env.DATABASE_URL, {});
const models = {
    User: require('./models/User'),
    Transaction: require('./models/Transaction'),
};
Object.keys(models).forEach(modelName => {
    models[modelName].initialize(sequelize);
});
Object.keys(models).forEach(modelName => {
    models[modelName].associate(models);
});
//# sourceMappingURL=index.js.map