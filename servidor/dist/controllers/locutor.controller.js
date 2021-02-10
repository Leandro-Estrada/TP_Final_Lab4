"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocutores = getLocutores;
exports.getOneLocutor = getOneLocutor;
exports.createLocutor = createLocutor;
exports.updateLocutor = updateLocutor;
exports.deleteLocutor = deleteLocutor;

var _locutor = _interopRequireDefault(require("../models/locutor.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getLocutores(_x, _x2) {
  return _getLocutores.apply(this, arguments);
}

function _getLocutores() {
  _getLocutores = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var locutores;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _locutor["default"].findAll({
              attributes: ['id', 'dni', 'nombre', 'apellido'],
              order: [['id', 'DESC']]
            });

          case 3:
            locutores = _context.sent;
            res.json({
              locutores: locutores
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo consultar los locutores',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getLocutores.apply(this, arguments);
}

function getOneLocutor(_x3, _x4) {
  return _getOneLocutor.apply(this, arguments);
}

function _getOneLocutor() {
  _getOneLocutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, locutor;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params.id;
            _context2.next = 4;
            return _locutor["default"].findOne({
              attributes: ['id', 'dni', 'nombre', 'apellido'],
              where: {
                id: _id
              }
            });

          case 4:
            locutor = _context2.sent;
            res.json({
              locutor: locutor
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo consultar el locutor con id: ' + id,
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneLocutor.apply(this, arguments);
}

function createLocutor(_x5, _x6) {
  return _createLocutor.apply(this, arguments);
}

function _createLocutor() {
  _createLocutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, dni, nombre, apellido, newLocutor;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, dni = _req$body.dni, nombre = _req$body.nombre, apellido = _req$body.apellido;
            _context3.prev = 1;
            _context3.next = 4;
            return _locutor["default"].create({
              dni: dni,
              nombre: nombre,
              apellido: apellido
            }, {
              fields: ['dni', 'nombre', 'apellido']
            });

          case 4:
            newLocutor = _context3.sent;

            if (!newLocutor) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Locutor creado exitosamente',
              data: newLocutor
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo crear un nuevo Locutor',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createLocutor.apply(this, arguments);
}

function updateLocutor(_x7, _x8) {
  return _updateLocutor.apply(this, arguments);
}

function _updateLocutor() {
  _updateLocutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, dni, nombre, apellido, locutor, updatedLocutor;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, dni = _req$body2.dni, nombre = _req$body2.nombre, apellido = _req$body2.apellido;
            _context4.prev = 2;
            _context4.next = 5;
            return _locutor["default"].findOne({
              attributes: ['id', 'dni', 'nombre', 'apellido'],
              where: {
                id: id
              }
            });

          case 5:
            locutor = _context4.sent;
            _context4.next = 8;
            return _locutor["default"].update({
              dni: dni,
              nombre: nombre,
              apellido: apellido
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedLocutor = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Locutor actualizado con exito',
              updatedLocutor: updatedLocutor
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo actuallizar el Locutor con id: ' + id,
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updateLocutor.apply(this, arguments);
}

function deleteLocutor(_x9, _x10) {
  return _deleteLocutor.apply(this, arguments);
}

function _deleteLocutor() {
  _deleteLocutor = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id2 = req.params.id;
            _context5.next = 4;
            return _locutor["default"].destroy({
              where: {
                id: _id2
              }
            });

          case 4:
            res.json({
              message: 'Locutor borrado con exito'
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'No se pudo borrar el Locutor con id: ' + id,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deleteLocutor.apply(this, arguments);
}