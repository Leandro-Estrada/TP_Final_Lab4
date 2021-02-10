import Sequelize from 'sequelize';
import { sequelize } from '../database/database.js'
import Programa from './programa.js'
import Propaganda from './propaganda.js'
import TemaMusical from './temamusical.js'

const Periodo = sequelize.define('periodos', {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    duracion: {
        type: Sequelize.TIME,
        allowNull: false
    },
    fkprogramasid:{
        type: Sequelize.INTEGER
    },
    fkpropagandasid:{
        type: Sequelize.INTEGER
    },
    fktemasmusicalesid:{
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false,
});


Programa.hasMany(Periodo, { foreignKey: 'id'/*, sourceKey: 'fkperiodosid'*/});

Periodo.belongsTo(Programa, {foreignKey: 'id'});

Periodo.hasMany(Propaganda, {foreignKey: 'id'/*, sourceKey: 'fkpropagandasid'*/});

Propaganda.belongsTo(Periodo, {foreignKey: 'id'});

Periodo.hasMany(TemaMusical, {foreignKey: 'id'/*, sourceKey: 'fktemasmusicalesid'*/});

TemaMusical.belongsTo(Periodo, {foreignKey: 'id'});

export default Periodo;