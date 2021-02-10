"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../database/database.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Propaganda = _database.sequelize.define('propagandas', {
  id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cuit: {
    type: _sequelize["default"].BIGINT,
    allowNull: true
  },
  empresa: {
    type: _sequelize["default"].STRING(50),
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Propaganda;
exports["default"] = _default;