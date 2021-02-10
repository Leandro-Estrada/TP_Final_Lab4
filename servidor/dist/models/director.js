"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Director = _database.sequelize.define('directores', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dni: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nombre: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  apellido: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Director;
exports["default"] = _default;