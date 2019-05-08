"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _DeviceSpecifications = _interopRequireDefault(require("./DeviceSpecifications"));

var _NetworkBandwidthInformation = _interopRequireDefault(require("./NetworkBandwidthInformation"));

var _FPSCounter = _interopRequireDefault(require("./FPSCounter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @namespace DevicePerformanceMetrics
 * @class DevicePerformanceMetrics
 * @constructor
 * Global class where all subclasses are initialized.
 */
var DevicePerformanceMetrics =
/**
 * @namespace DeviceSpecifications
 * @class DeviceSpecifications
 * @constructor
 * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
 * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
 */

/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @constructor
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */

/**
 * @namespace FPSCounter
 * @class FPSCounter
 * @constructor
 *
 * Get information about the device's framerate.
 */
function DevicePerformanceMetrics() {
  _classCallCheck(this, DevicePerformanceMetrics);

  _defineProperty(this, "deviceSpecifications", void 0);

  _defineProperty(this, "networkBandwidthInformation", void 0);

  _defineProperty(this, "fpsCounter", void 0);

  this.deviceSpecifications = new _DeviceSpecifications.default();
  this.networkBandwidthInformation = new _NetworkBandwidthInformation.default();
  this.fpsCounter = new _FPSCounter.default();
};

var _default = DevicePerformanceMetrics;
exports.default = _default;