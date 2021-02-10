import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js'
import Director from './director.js'
import Locutor from './locutor.js'

const Programa = sequelize.define('programas', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tituloprograma: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    dia: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    horarioemision: {
        type: Sequelize.TIME,
        allowNull: false
    },
    duracion: {
        type: Sequelize.TIME,
        allowNull: false
    },
    fkdirectorid:{
        type: Sequelize.INTEGER
    },
    fklocutoresid:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
});

Programa.hasOne(Director, { foreignKey: 'id', sourceKey: 'fkdirectorid'});

Director.belongsTo(Programa, { foreignKey: 'id'});

Programa.hasMany(Locutor, { foreignKey: 'id', sourceKey: 'fklocutoresid' });

Locutor.belongsTo(Programa, { foreignKey: 'id'});

export default Programa;