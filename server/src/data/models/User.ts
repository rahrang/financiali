import { Sequelize, Model, DataTypes } from 'sequelize';

import { entityId, createdAt, updatedAt } from '../common/datatypes';
import { ModelTypeMap } from '../common/modelType';

class User extends Model {
  public id!: number;

  public firstName!: string;
  public lastName!: string | null;
  public preferredName!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize = (sequelize: Sequelize) => {
    User.init(
      {
        entityId,
        firstName: {
          type: new DataTypes.STRING(),
          allowNull: false,
        },
        lastName: {
          type: new DataTypes.STRING(),
          allowNull: true,
        },
        preferredName: {
          type: new DataTypes.STRING(),
          allowNull: true,
        },
        createdAt,
        updatedAt,
      },
      {
        sequelize,
        schema: 'entity',
        tableName: 'users',
      }
    );
  };

  static associate = (models: ModelTypeMap): void => {
    User.hasMany(models.Transaction);
  };
}

export default User;
