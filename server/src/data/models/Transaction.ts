import { Sequelize, Model, DataTypes } from 'sequelize';

import { entityId, createdAt, updatedAt, deletedAt } from '../common/datatypes';

class Transaction extends Model {
  public id!: number;
  public date!: Date;
  public amount!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public deletedAt!: Date | null;

  static initialize = (sequelize: Sequelize) => {
    Transaction.init(
      {
        entityId,
        date: {
          type: new DataTypes.DATE(),
          defaultValue: DataTypes.NOW,
          allowNull: false,
        },
        createdAt,
        updatedAt,
        deletedAt,
      },
      {
        sequelize,
        schema: 'entity',
        tableName: 'transactions',
      }
    );
  };
}

export default Transaction;
