"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _directorController = require("../controllers/director.controller.js");

var _locutorController = require("../controllers/locutor.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/locutores
router.post('/', _locutorController.createLocutor);
router.get('/', _locutorController.getLocutores); // http://localhost:3000/api/locutores/1

router.get('/:id', _locutorController.getOneLocutor);
router["delete"]('/:id', _locutorController.deleteLocutor);
router.put('/:id', _locutorController.updateLocutor);
var _default = router;
exports["default"] = _default;