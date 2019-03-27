"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DeviceSpecifications = _interopRequireDefault(require("./DeviceSpecifications"));

var _NetworkBandwidthInformation = _interopRequireDefault(require("./NetworkBandwidthInformation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PerformanceMetrics = function PerformanceMetrics() {
  _classCallCheck(this, PerformanceMetrics);

  this.deviceSpecifications = new _DeviceSpecifications.default();
  this.networkBandwidthInformation = new _NetworkBandwidthInformation.default();
};

var _default = PerformanceMetrics;
exports.default = _default;