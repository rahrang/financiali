import { Sequelize, ModelType as SequelizeModelType } from 'sequelize';

interface ModelType extends SequelizeModelType {
  initialize: (sequelize: Sequelize) => void;
  associate: (models: ModelTypeMap) => void;
}

interface ModelTypeMap {
  User: ModelType;
  Transaction: ModelType;
}
