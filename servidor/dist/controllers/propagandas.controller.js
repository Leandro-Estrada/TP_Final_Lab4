"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPropaganda = getPropaganda;
exports.getOnePropaganda = getOnePropaganda;
exports.createPropaganda = createPropaganda;
exports.updatePropaganda = updatePropaganda;
exports.deletePropaganda = deletePropaganda;

var _propaganda = _interopRequireDefault(require("../models/propaganda.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getPropaganda(_x, _x2) {
  return _getPropaganda.apply(this, arguments);
}

function _getPropaganda() {
  _getPropaganda = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var propaganda;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _propaganda["default"].findAll({
              attributes: ['id', 'cuit', 'empresa'],
              order: [['id', 'DESC']]
            });

          case 3:
            propaganda = _context.sent;
            res.json({
              propaganda: propaganda
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo consultar las propandas',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getPropaganda.apply(this, arguments);
}

function getOnePropaganda(_x3, _x4) {
  return _getOnePropaganda.apply(this, arguments);
}

function _getOnePropaganda() {
  _getOnePropaganda = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, propaganda;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params.id;
            _context2.next = 4;
            return _propaganda["default"].findOne({
              attributes: ['id', 'cuit', 'empresa'],
              where: {
                id: _id
              }
            });

          case 4:
            propaganda = _context2.sent;
            res.json({
              propaganda: propaganda
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo consultar la propaganda con id: ' + id,
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOnePropaganda.apply(this, arguments);
}

function createPropaganda(_x5, _x6) {
  return _createPropaganda.apply(this, arguments);
}

function _createPropaganda() {
  _createPropaganda = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, cuit, empresa, newPropaganda;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, cuit = _req$body.cuit, empresa = _req$body.empresa;
            _context3.prev = 1;
            _context3.next = 4;
            return _propaganda["default"].create({
              cuit: cuit,
              empresa: empresa
            }, {
              fields: ['cuit', 'empresa']
            });

          case 4:
            newPropaganda = _context3.sent;

            if (!newPropaganda) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Propaganda creada exitosamente',
              data: newPropaganda
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo crear una nueva Propaganda',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createPropaganda.apply(this, arguments);
}

function updatePropaganda(_x7, _x8) {
  return _updatePropaganda.apply(this, arguments);
}

function _updatePropaganda() {
  _updatePropaganda = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, cuit, empresa, propaganda, updatedPropaganda;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, cuit = _req$body2.cuit, empresa = _req$body2.empresa;
            _context4.prev = 2;
            _context4.next = 5;
            return _propaganda["default"].findOne({
              attributes: ['id', 'cuit', 'empresa'],
              where: {
                id: id
              }
            });

          case 5:
            propaganda = _context4.sent;
            _context4.next = 8;
            return _propaganda["default"].update({
              cuit: cuit,
              empresa: empresa
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedPropaganda = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Propaganda actualizada con exito',
              updatedPropaganda: updatedPropaganda
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo actuallizar la propaganda con id: ' + id,
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updatePropaganda.apply(this, arguments);
}

function deletePropaganda(_x9, _x10) {
  return _deletePropaganda.apply(this, arguments);
}

function _deletePropaganda() {
  _deletePropaganda = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id2 = req.params.id;
            _context5.next = 4;
            return _propaganda["default"].destroy({
              where: {
                id: _id2
              }
            });

          case 4:
            res.json({
              message: 'Propaganda borrada con exito'
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'No se pudo borrar la propaganda con el id: ' + id,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deletePropaganda.apply(this, arguments);
}