"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const datatypes_1 = require("../common/datatypes");
class Transaction extends sequelize_1.Model {
}
Transaction.initialize = (sequelize) => {
    Transaction.init({
        entityId: datatypes_1.entityId,
        date: {
            type: new sequelize_1.DataTypes.DATE(),
            defaultValue: sequelize_1.DataTypes.NOW,
            allowNull: false,
        },
        createdAt: datatypes_1.createdAt,
        updatedAt: datatypes_1.updatedAt,
        deletedAt: datatypes_1.deletedAt,
    }, {
        sequelize,
        schema: 'entity',
        tableName: 'transactions',
    });
};
exports.default = Transaction;
//# sourceMappingURL=Transaction.js.map