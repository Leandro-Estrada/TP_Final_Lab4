"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTemaMusical = getTemaMusical;
exports.getOneTemaMusical = getOneTemaMusical;
exports.createTemaMusical = createTemaMusical;
exports.updateTemaMusical = updateTemaMusical;
exports.deleteTemaMusical = deleteTemaMusical;
exports.getTasksByProject = getTasksByProject;

var _temamusical = _interopRequireDefault(require("../models/temamusical.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function getTemaMusical(_x, _x2) {
  return _getTemaMusical.apply(this, arguments);
}

function _getTemaMusical() {
  _getTemaMusical = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var temamusical;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _temamusical["default"].findAll({
              attributes: ['id', 'titulo', 'autor'],
              order: [['id', 'DESC']]
            });

          case 3:
            temamusical = _context.sent;
            res.json({
              temamusical: temamusical
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.status(500).json({
              message: 'No se pudo consultar los temas musicales',
              data: {}
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));
  return _getTemaMusical.apply(this, arguments);
}

function getOneTemaMusical(_x3, _x4) {
  return _getOneTemaMusical.apply(this, arguments);
}

function _getOneTemaMusical() {
  _getOneTemaMusical = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _id, temamusical;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _id = req.params.id;
            _context2.next = 4;
            return _temamusical["default"].findOne({
              attributes: ['id', 'titulo', 'autor'],
              where: {
                id: _id
              }
            });

          case 4:
            temamusical = _context2.sent;
            res.json({
              temamusical: temamusical
            });
            _context2.next = 12;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).json({
              message: 'No se pudo consultar el tema musical con id: ' + id,
              data: {}
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return _getOneTemaMusical.apply(this, arguments);
}

function createTemaMusical(_x5, _x6) {
  return _createTemaMusical.apply(this, arguments);
}

function _createTemaMusical() {
  _createTemaMusical = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, titulo, autor, newTemaMusical;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, titulo = _req$body.titulo, autor = _req$body.autor;
            _context3.prev = 1;
            _context3.next = 4;
            return _temamusical["default"].create({
              titulo: titulo,
              autor: autor
            }, {
              fields: ['titulo', 'autor']
            });

          case 4:
            newTemaMusical = _context3.sent;

            if (!newTemaMusical) {
              _context3.next = 7;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: 'Tema Musical creado exitosamente',
              data: newTemaMusical
            }));

          case 7:
            _context3.next = 13;
            break;

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](1);
            console.log(_context3.t0);
            res.status(500).json({
              message: 'No se pudo crear un nuevo Tema Musical',
              data: {}
            });

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 9]]);
  }));
  return _createTemaMusical.apply(this, arguments);
}

function updateTemaMusical(_x7, _x8) {
  return _updateTemaMusical.apply(this, arguments);
}

function _updateTemaMusical() {
  _updateTemaMusical = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, titulo, autor, temamusical, updatedTemaMusical;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, titulo = _req$body2.titulo, autor = _req$body2.autor;
            _context4.prev = 2;
            _context4.next = 5;
            return _temamusical["default"].findOne({
              attributes: ['id', 'titulo', 'autor'],
              where: {
                id: id
              }
            });

          case 5:
            temamusical = _context4.sent;
            _context4.next = 8;
            return _temamusical["default"].update({
              titulo: titulo,
              autor: autor
            }, {
              where: {
                id: id
              }
            });

          case 8:
            updatedTemaMusical = _context4.sent;
            return _context4.abrupt("return", res.json({
              message: 'Tema Musical actualizado con exito',
              updatedTemaMusical: updatedTemaMusical
            }));

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);
            res.status(500).json({
              message: 'No se pudo actuallizar el Tema Musical con id: ' + id,
              data: {}
            });

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 12]]);
  }));
  return _updateTemaMusical.apply(this, arguments);
}

function deleteTemaMusical(_x9, _x10) {
  return _deleteTemaMusical.apply(this, arguments);
}
/* ---------------------------------------------------------------------------------------------------------------------- */


function _deleteTemaMusical() {
  _deleteTemaMusical = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var _id2;

    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _id2 = req.params.id;
            _context5.next = 4;
            return _temamusical["default"].destroy({
              where: {
                id: _id2
              }
            });

          case 4:
            res.json({
              message: 'Tema Musical borrado con exito'
            });
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            res.status(500).json({
              message: 'No se pudo borrar el tema musical con id: ' + id,
              data: {}
            });

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _deleteTemaMusical.apply(this, arguments);
}

function getTasksByProject(_x11, _x12) {
  return _getTasksByProject.apply(this, arguments);
}

function _getTasksByProject() {
  _getTasksByProject = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var projectid, tasks;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            projectid = req.params.projectid;
            _context6.next = 4;
            return Task.findAll({
              attributes: ['id', 'projectid', 'name', 'done'],
              where: {
                projectid: projectid
              }
            });

          case 4:
            tasks = _context6.sent;
            res.json({
              tasks: tasks
            });
            _context6.next = 11;
            break;

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            console.log(_context6.t0);

          case 11:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));
  return _getTasksByProject.apply(this, arguments);
}