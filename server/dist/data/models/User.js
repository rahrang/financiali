"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const datatypes_1 = require("../common/datatypes");
class User extends sequelize_1.Model {
}
User.initialize = (sequelize) => {
    User.init({
        entityId: datatypes_1.entityId,
        firstName: {
            type: new sequelize_1.DataTypes.STRING(),
            allowNull: false,
        },
        lastName: {
            type: new sequelize_1.DataTypes.STRING(),
            allowNull: true,
        },
        preferredName: {
            type: new sequelize_1.DataTypes.STRING(),
            allowNull: true,
        },
        createdAt: datatypes_1.createdAt,
        updatedAt: datatypes_1.updatedAt,
    }, {
        sequelize,
        schema: 'entity',
        tableName: 'users',
    });
};
User.associate = (models) => {
    User.hasMany(models.Transaction);
};
exports.default = User;
//# sourceMappingURL=User.js.map