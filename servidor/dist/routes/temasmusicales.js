"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _temasmusicalesController = require("../controllers/temasmusicales.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/temasmusicales
router.post('/', _temasmusicalesController.createTemaMusical);
router.get('/', _temasmusicalesController.getTemaMusical); // http://localhost:3000/api/temasmusicales/:id

router.get('/:id', _temasmusicalesController.getOneTemaMusical);
router["delete"]('/:id', _temasmusicalesController.deleteTemaMusical);
router.put('/:id', _temasmusicalesController.updateTemaMusical);
var _default = router;
exports["default"] = _default;