"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _fpsEmitter = _interopRequireDefault(require("fps-emitter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FPSCounter = function FPSCounter() {
  var _this = this;

  _classCallCheck(this, FPSCounter);

  this._fpsEmitter = new _fpsEmitter.default();
  this.fps = 0;

  this._fpsEmitter.on('update', function (fps) {
    _this.fps = fps;
  });
};

var _default = FPSCounter;
exports.default = _default;