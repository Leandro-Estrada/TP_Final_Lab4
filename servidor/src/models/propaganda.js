import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js'

const Propaganda = sequelize.define('propagandas', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cuit: {
        type: Sequelize.BIGINT,
        allowNull: true
    },
    empresa: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
        timestamps: false,
});

export default Propaganda;