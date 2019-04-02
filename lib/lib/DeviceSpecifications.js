"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var useragent = _interopRequireWildcard(require("useragent"));

var _browserslistUseragent = require("browserslist-useragent");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace DeviceSpecifications
 * @class DeviceSpecifications
 * @constructor
 * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
 */
var DeviceSpecifications =
/*#__PURE__*/
function () {
  function DeviceSpecifications(UserAgentString, browserslist) {
    _classCallCheck(this, DeviceSpecifications);

    if (UserAgentString) {
      this._agent = useragent.parse(UserAgentString);
      this.userAgentString = UserAgentString;
    } else {
      this._agent = useragent.parse(navigator.userAgent);
      this.userAgentString = navigator.userAgent;
    }

    if (browserslist) {
      this._browsersList = browserslist;
    } else {
      this._browsersList = ['last 5 versions', '> 3%', 'not ie <= 11'];
    }
  }
  /**
   * Returns information about the browser
   *
   * @method getBrowser
   * @return {IBrowser}
   */


  _createClass(DeviceSpecifications, [{
    key: "getBrowser",
    value: function getBrowser() {
      return {
        name: this._agent.family,
        version: "".concat(this._agent.major, ".").concat(this._agent.major, ".").concat(this._agent.patch),
        major: this._agent.major
      };
    }
    /**
     * Returns information about the operating system
     *
     * @method getOperatingSystem
     * @return {IOS}
     */

  }, {
    key: "getOperatingSystem",
    value: function getOperatingSystem() {
      return {
        name: this._agent.os.family,
        version: "".concat(this._agent.os.major, ".").concat(this._agent.os.minor, ".").concat(this._agent.os.patch),
        major: this._agent.os.major
      };
    }
    /**
     * Returns information about the device.
     *
     * Only works on mobile devices.
     *
     * @method getDevice
     * @return {IDevice}
     */

  }, {
    key: "getDevice",
    value: function getDevice() {
      return {
        name: this._agent.device.family
      };
    }
    /**
     * Returns if the browser is modern.
     *
     * Warning: this is general detection if the browser is a modern browser, it is not a replacement of feature detection libraries like mordernizer.
     *
     * @method isBrowserModern
     * @return {IDevice}
     */

  }, {
    key: "isBrowserModern",
    value: function isBrowserModern() {
      return (0, _browserslistUseragent.matchesUA)(this.userAgentString, {
        browsers: this._browsersList,
        allowHigherVersions: true
      });
    }
  }]);

  return DeviceSpecifications;
}();

var _default = DeviceSpecifications;
exports.default = _default;