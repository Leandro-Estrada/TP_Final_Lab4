"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database.js");

var _programa = _interopRequireDefault(require("./programa.js"));

var _propaganda = _interopRequireDefault(require("./propaganda.js"));

var _temamusical = _interopRequireDefault(require("./temamusical.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Periodo = _database.sequelize.define('periodos', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  duracion: {
    type: _sequelize["default"].TIME,
    allowNull: false
  },
  fkprogramasid: {
    type: _sequelize["default"].INTEGER
  },
  fkpropagandasid: {
    type: _sequelize["default"].INTEGER
  },
  fktemasmusicalesid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

_programa["default"].hasMany(Periodo, {
  foreignKey: 'id'
  /*, sourceKey: 'fkperiodosid'*/

});

Periodo.belongsTo(_programa["default"], {
  foreignKey: 'id'
});
Periodo.hasMany(_propaganda["default"], {
  foreignKey: 'id'
  /*, sourceKey: 'fkpropagandasid'*/

});

_propaganda["default"].belongsTo(Periodo, {
  foreignKey: 'id'
});

Periodo.hasMany(_temamusical["default"], {
  foreignKey: 'id'
  /*, sourceKey: 'fktemasmusicalesid'*/

});

_temamusical["default"].belongsTo(Periodo, {
  foreignKey: 'id'
});

var _default = Periodo;
exports["default"] = _default;