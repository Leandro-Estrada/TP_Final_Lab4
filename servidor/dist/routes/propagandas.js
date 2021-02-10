"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _propagandasController = require("../controllers/propagandas.controller.js");

var router = (0, _express.Router)();
// http://localhost:3000/api/propagandas
router.post('/', _propagandasController.createPropaganda);
router.get('/', _propagandasController.getPropaganda); // http://localhost:3000/api/propagandas/:id

router.get('/:id', _propagandasController.getOnePropaganda);
router["delete"]('/:id', _propagandasController.deletePropaganda);
router.put('/:id', _propagandasController.updatePropaganda);
var _default = router;
exports["default"] = _default;