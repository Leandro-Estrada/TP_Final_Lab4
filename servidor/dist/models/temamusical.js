"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TemaMusical = _database.sequelize.define('temasmusicales', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  },
  autor: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = TemaMusical;
exports["default"] = _default;