import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js'

const Director = sequelize.define('directores', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dni: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nombre: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    apellido: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
}, {
    timestamps: false,
});

export default Director;