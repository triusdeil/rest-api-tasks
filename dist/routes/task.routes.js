"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var TaskCtrl = _interopRequireWildcard(require("../controllers/task.controller"));

//Initizalition
var router = (0, _express.Router)();
router.get('/', TaskCtrl.findAllTask);
router.post('/', TaskCtrl.createTask);
router.get('/done', TaskCtrl.findAllDoneTask);
router.get('/:id', TaskCtrl.findOneTask);
router["delete"]('/:id', TaskCtrl.deleteTask);
router.put('/:id', TaskCtrl.updateTask);
var _default = router;
exports["default"] = _default;