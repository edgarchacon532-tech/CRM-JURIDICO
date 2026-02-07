const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Caso extends Model {}

    Caso.init({
        numero_caso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cliente_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fecha_inicio: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fecha_cierre: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        descripcion: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        prioridad: {
            type: DataTypes.ENUM('alta', 'media', 'baja'),
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'Caso',
    });

    return Caso;
};