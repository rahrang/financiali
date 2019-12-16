"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.entityId = {
    field: 'entity_id',
    type: sequelize_1.DataTypes.UUID,
    defaultValue: sequelize_1.DataTypes.UUIDV4,
    unique: true,
    allowNull: false,
};
const dateType = {
    type: new sequelize_1.DataTypes.DATE(),
    defaultValue: sequelize_1.DataTypes.NOW,
    allowNull: false,
};
exports.createdAt = {
    field: 'created_at',
    ...dateType,
};
exports.updatedAt = {
    field: 'updated_at',
    ...dateType,
};
exports.deletedAt = {
    type: sequelize_1.DataTypes.DATE,
    field: 'deleted_at',
};
//# sourceMappingURL=datatypes.js.map