import { DataTypes, ModelAttributeColumnOptions } from 'sequelize';

export const entityId: ModelAttributeColumnOptions = {
  field: 'entity_id',
  type: DataTypes.UUID,
  defaultValue: DataTypes.UUIDV4,
  unique: true,
  allowNull: false,
};

const dateType: ModelAttributeColumnOptions = {
  type: new DataTypes.DATE(),
  defaultValue: DataTypes.NOW,
  allowNull: false,
};

export const createdAt: ModelAttributeColumnOptions = {
  field: 'created_at',
  ...dateType,
};

export const updatedAt: ModelAttributeColumnOptions = {
  field: 'updated_at',
  ...dateType,
};

export const deletedAt: ModelAttributeColumnOptions = {
  type: DataTypes.DATE,
  field: 'deleted_at',
};
