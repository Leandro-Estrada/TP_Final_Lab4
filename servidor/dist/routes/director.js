"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _directorController = require("../controllers/director.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/directores
router.post('/', _directorController.createDirector);
router.get('/', _directorController.getDirectores); // http://localhost:3000/api/directores/1

router.get('/:id', _directorController.getOneDirector);
router["delete"]('/:id', _directorController.deleteDirector);
router.put('/:id', _directorController.updateDirector);
var _default = router;
exports["default"] = _default;