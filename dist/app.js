"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _task = _interopRequireDefault(require("./routes/task.routes"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

//Initializations
var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 3000); //Middlewares

app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));
var corsOptions = {};
app.use((0, _cors["default"])(corsOptions)); //Routes

app.get('/', function (req, res) {
  res.json({
    message: 'Welcome to my app'
  });
});
app.use('/api/tasks', _task["default"]);
var _default = app;
exports["default"] = _default;