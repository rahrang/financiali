import { Sequelize, Model, DataTypes } from 'sequelize';

import { entityId, createdAt, updatedAt } from '../common/datatypes';
import { ModelTypeMap } from '../common/modelType';

class User extends Model {
  public id!: number;

  public firstName!: string;
  public lastName!: string | null;
  public preferredName!: string | null;
  public email!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initialize = (sequelize: Sequelize) => {
    User.init(
      {
        entityId,
        email: {
          type: new DataTypes.STRING(),
          allowNull: false,
          unique: true,
          comment: 'email of user',
          validate: {
            isEmail: true,
          },
        },
        first_name: {
          type: new DataTypes.STRING(),
          allowNull: false,
          comment: 'first name of user',
        },
        last_name: {
          type: new DataTypes.STRING(),
          allowNull: true,
          comment: 'last name of user',
        },
        preferred_name: {
          type: new DataTypes.STRING(),
          allowNull: true,
          comment: 'preferred name of user',
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

  get name() {
    return this.preferredName || this.firstName;
  }

  get fullName() {
    return `${this.firstName}${this.lastName ? ` ${this.lastName}` : ''}`;
  }
}

export default User;
