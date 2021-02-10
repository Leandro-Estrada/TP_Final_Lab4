"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _programasController = require("../controllers/programas.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/programas
router.post('/', _programasController.createProgramas);
router.get('/', _programasController.getProgramas); // http://localhost:3000/api/programas/:id

router.get('/:id', _programasController.getOnePrograma);
router["delete"]('/:id', _programasController.deletePrograma);
router.put('/:id', _programasController.updatePrograma);
var _default = router;
exports["default"] = _default;