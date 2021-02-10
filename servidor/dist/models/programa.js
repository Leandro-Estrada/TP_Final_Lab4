"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database.js");

var _director = _interopRequireDefault(require("./director.js"));

var _locutor = _interopRequireDefault(require("./locutor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Programa = _database.sequelize.define('programas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tituloprograma: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  dia: {
    type: _sequelize["default"].DATEONLY,
    allowNull: false
  },
  horarioemision: {
    type: _sequelize["default"].TIME,
    allowNull: false
  },
  duracion: {
    type: _sequelize["default"].TIME,
    allowNull: false
  },
  fkdirectorid: {
    type: _sequelize["default"].INTEGER
  },
  fklocutoresid: {
    type: _sequelize["default"].INTEGER
  }
}, {
  timestamps: false
});

Programa.hasOne(_director["default"], {
  foreignKey: 'id',
  sourceKey: 'fkdirectorid'
});

_director["default"].belongsTo(Programa, {
  foreignKey: 'id'
});

Programa.hasMany(_locutor["default"], {
  foreignKey: 'id',
  sourceKey: 'fklocutoresid'
});

_locutor["default"].belongsTo(Programa, {
  foreignKey: 'id'
});

var _default = Programa;
exports["default"] = _default;