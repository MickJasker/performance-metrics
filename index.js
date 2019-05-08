"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DeviceSpecifications", {
  enumerable: true,
  get: function get() {
    return _DeviceSpecifications.default;
  }
});
Object.defineProperty(exports, "NetworkBandwidthInformation", {
  enumerable: true,
  get: function get() {
    return _NetworkBandwidthInformation.default;
  }
});
Object.defineProperty(exports, "FPSCounter", {
  enumerable: true,
  get: function get() {
    return _FPSCounter.default;
  }
});
exports.default = void 0;

var _DeviceSpecifications = _interopRequireDefault(require("./lib/DeviceSpecifications"));

var _NetworkBandwidthInformation = _interopRequireDefault(require("./lib/NetworkBandwidthInformation"));

var _DevicePerformanceMetrics = _interopRequireDefault(require("./lib/DevicePerformanceMetrics"));

var _FPSCounter = _interopRequireDefault(require("./lib/FPSCounter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _DevicePerformanceMetrics.default;
exports.default = _default;