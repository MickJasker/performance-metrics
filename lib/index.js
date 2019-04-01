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
exports.default = void 0;

var _DeviceSpecifications = _interopRequireDefault(require("./lib/DeviceSpecifications"));

var _NetworkBandwidthInformation = _interopRequireDefault(require("./lib/NetworkBandwidthInformation"));

var _PerformanceMetrics = _interopRequireDefault(require("./lib/PerformanceMetrics"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _PerformanceMetrics.default;
exports.default = _default;