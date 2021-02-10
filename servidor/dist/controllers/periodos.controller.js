"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPeriodos = getPeriodos;
exports.getOnePeriodo = getOnePeriodo;
exports.createPeriodos = createPeriodos;
exports.updatePeriodos = updatePeriodos;
exports.deletePeriodo = deletePeriodo;

var _periodo = _interopRequireDefault(require("../models/periodo.js"));

var _temamusical = _interopRequireDefault(require("../models/temamusical.js"));

var _propaganda = _interopRequireDefault(require("../models/propaganda.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPeriodos(_x, _x2) {
  return _getPeriodos.apply(this, arguments);
}

function _getPeriodos() {
  _getPeriodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var periodos;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _periodo["default"].findAll({
              include: [{
                model: _propaganda["default"]
              }, {
                model: _temamusical["default"]
              }],
              attributes: ['id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
              order: [['id', 'DESC']]
            });

          case 3:
            periodos = _context.sent;
            res.json({
              periodos: periodos
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo consultar los periodos',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPeriodos.apply(this, arguments);
}

function getOnePeriodo(_x3, _x4) {
  return _getOnePeriodo.apply(this, arguments);
}

function _getOnePeriodo() {
  _getOnePeriodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, periodo;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params.id;
            _context2.next = 4;
            return _periodo["default"].findOne({
              attributes: ['id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
              where: {
                id: _id
              }
            });

          case 4:
            periodo = _context2.sent;
            res.json({
              periodo: periodo
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo consultar el periodo con id: ' + id,
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOnePeriodo.apply(this, arguments);
}

function createPeriodos(_x5, _x6) {
  return _createPeriodos.apply(this, arguments);
}

function _createPeriodos() {
  _createPeriodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, duracion, fkprogramasid, fkpropagandasid, fktemasmusicalesid, newPeriodo;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, duracion = _req$body.duracion, fkprogramasid = _req$body.fkprogramasid, fkpropagandasid = _req$body.fkpropagandasid, fktemasmusicalesid = _req$body.fktemasmusicalesid;
            _context3.prev = 1;
            _context3.next = 4;
            return _periodo["default"].create({
              duracion: duracion,
              fkprogramasid: fkprogramasid,
              fkpropagandasid: fkpropagandasid,
              fktemasmusicalesid: fktemasmusicalesid
            }, {
              fields: ['duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid']
            });

          case 4:
            newPeriodo = _context3.sent;

            if (!newPeriodo) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Periodo creado exitosamente',
              data: newPeriodo
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo crear un nuevo Periodo',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createPeriodos.apply(this, arguments);
}

function updatePeriodos(_x7, _x8) {
  return _updatePeriodos.apply(this, arguments);
}

function _updatePeriodos() {
  _updatePeriodos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, duracion, fkprogramasid, fkpropagandasid, fktemasmusicalesid, periodos, updatedPeriodos;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, duracion = _req$body2.duracion, fkprogramasid = _req$body2.fkprogramasid, fkpropagandasid = _req$body2.fkpropagandasid, fktemasmusicalesid = _req$body2.fktemasmusicalesid;
            _context4.prev = 2;
            _context4.next = 5;
            return _periodo["default"].findOne({
              attributes: ['id', 'duracion', 'fkprogramasid', 'fkpropagandasid', 'fktemasmusicalesid'],
              where: {
                id: id
              }
            });

          case 5:
            periodos = _context4.sent;
            _context4.next = 8;
            return _periodo["default"].update({
              duracion: duracion,
              fkprogramasid: fkprogramasid,
              fkpropagandasid: fkpropagandasid,
              fktemasmusicalesid: fktemasmusicalesid
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedPeriodos = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Periodo actualizado con exito',
              updatedPeriodos: updatedPeriodos
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo actuallizar el Periodos con id: ' + id,
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updatePeriodos.apply(this, arguments);
}

function deletePeriodo(_x9, _x10) {
  return _deletePeriodo.apply(this, arguments);
}

function _deletePeriodo() {
  _deletePeriodo = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id2 = req.params.id;
            _context5.next = 4;
            return _periodo["default"].destroy({
              where: {
                id: _id2
              }
            });

          case 4:
            res.json({
              message: 'Periodo borrado con exito'
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'No se pudo borrar el periodo con id: ' + id,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deletePeriodo.apply(this, arguments);
}