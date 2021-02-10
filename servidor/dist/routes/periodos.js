"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _PeriodosController = require("../controllers/Periodos.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/periodos/:id
router.post('/', _PeriodosController.createPeriodos);
router.get('/', _PeriodosController.getPeriodos); // http://localhost:3000/api/periodos/:id

router.get('/:id', _PeriodosController.getOnePeriodo);
router["delete"]('/:id', _PeriodosController.deletePeriodo);
router.put('/:id', _PeriodosController.updatePeriodos);
var _default = router;
exports["default"] = _default;