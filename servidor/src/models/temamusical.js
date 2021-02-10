import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js';

const TemaMusical = sequelize.define('temasmusicales', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    autor: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, {
        timestamps: false,
});

export default TemaMusical;