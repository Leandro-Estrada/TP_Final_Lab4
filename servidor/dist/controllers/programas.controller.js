"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProgramas = getProgramas;
exports.getOnePrograma = getOnePrograma;
exports.createProgramas = createProgramas;
exports.updatePrograma = updatePrograma;
exports.deletePrograma = deletePrograma;

var _director = _interopRequireDefault(require("../models/director.js"));

var _locutor = _interopRequireDefault(require("../models/locutor.js"));

var _periodo = _interopRequireDefault(require("../models/periodo.js"));

var _programa = _interopRequireDefault(require("../models/programa.js"));

var _propaganda = _interopRequireDefault(require("../models/propaganda.js"));

var _temamusical = _interopRequireDefault(require("../models/temamusical.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getProgramas(_x, _x2) {
  return _getProgramas.apply(this, arguments);
}

function _getProgramas() {
  _getProgramas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var programas;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _programa["default"].findAll({
              include: [{
                model: _director["default"]
              }, {
                model: _locutor["default"]
              }, {
                model: _periodo["default"],
                include: [{
                  model: _propaganda["default"]
                }, {
                  model: _temamusical["default"]
                }]
              }],
              attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
              order: [['id', 'DESC']]
            });

          case 3:
            programas = _context.sent;
            res.json({
              programas: programas
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo consultar los programas',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getProgramas.apply(this, arguments);
}

function getOnePrograma(_x3, _x4) {
  return _getOnePrograma.apply(this, arguments);
}

function _getOnePrograma() {
  _getOnePrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, programa;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params.id;
            _context2.next = 4;
            return _programa["default"].findOne({
              attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
              where: {
                id: _id
              }
            });

          case 4:
            programa = _context2.sent;
            res.json({
              programa: programa
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo consultar el programa con id: ' + id,
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOnePrograma.apply(this, arguments);
}

function createProgramas(_x5, _x6) {
  return _createProgramas.apply(this, arguments);
}

function _createProgramas() {
  _createProgramas = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, tituloprograma, dia, horarioemision, duracion, fkdirectorid, fklocutoresid, newPrograma;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, tituloprograma = _req$body.tituloprograma, dia = _req$body.dia, horarioemision = _req$body.horarioemision, duracion = _req$body.duracion, fkdirectorid = _req$body.fkdirectorid, fklocutoresid = _req$body.fklocutoresid;
            _context3.prev = 1;
            _context3.next = 4;
            return _programa["default"].create({
              tituloprograma: tituloprograma,
              dia: dia,
              horarioemision: horarioemision,
              duracion: duracion,
              fkdirectorid: fkdirectorid,
              fklocutoresid: fklocutoresid
            }, {
              fields: ['tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid']
            });

          case 4:
            newPrograma = _context3.sent;

            if (!newPrograma) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Programa creado exitosamente',
              data: newPrograma
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo crear un nuevo Programa',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createProgramas.apply(this, arguments);
}

function updatePrograma(_x7, _x8) {
  return _updatePrograma.apply(this, arguments);
}

function _updatePrograma() {
  _updatePrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, tituloprograma, dia, horarioemision, duracion, fkdirectorid, fklocutoresid, programa, updatedPrograma;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, tituloprograma = _req$body2.tituloprograma, dia = _req$body2.dia, horarioemision = _req$body2.horarioemision, duracion = _req$body2.duracion, fkdirectorid = _req$body2.fkdirectorid, fklocutoresid = _req$body2.fklocutoresid;
            _context4.prev = 2;
            _context4.next = 5;
            return _programa["default"].findOne({
              attributes: ['id', 'tituloprograma', 'dia', 'horarioemision', 'duracion', 'fkdirectorid', 'fklocutoresid'],
              where: {
                id: id
              }
            });

          case 5:
            programa = _context4.sent;
            _context4.next = 8;
            return _programa["default"].update({
              tituloprograma: tituloprograma,
              dia: dia,
              horarioemision: horarioemision,
              duracion: duracion,
              fkdirectorid: fkdirectorid,
              fklocutoresid: fklocutoresid
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedPrograma = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Programa actualizado con exito',
              updatedPrograma: updatedPrograma
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo actuallizar el Programa con id: ' + id,
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updatePrograma.apply(this, arguments);
}

function deletePrograma(_x9, _x10) {
  return _deletePrograma.apply(this, arguments);
}

function _deletePrograma() {
  _deletePrograma = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id2 = req.params.id;
            _context5.next = 4;
            return _programa["default"].destroy({
              where: {
                id: _id2
              }
            });

          case 4:
            res.json({
              message: 'Programa borrado con exito'
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'No se pudo borrar el Programa con id: ' + id,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deletePrograma.apply(this, arguments);
}