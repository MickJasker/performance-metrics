"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var useragent = _interopRequireWildcard(require("useragent"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace DeviceSpecifications
 * @class DeviceSpecifications
 * @constructor
 */
var DeviceSpecifications =
/*#__PURE__*/
function () {
  function DeviceSpecifications(UserAgentString) {
    _classCallCheck(this, DeviceSpecifications);

    if (UserAgentString) {
      this.agent = useragent.parse(UserAgentString);
      this.userAgentString = UserAgentString;
    } else {
      this.agent = useragent.parse(navigator.userAgent);
      this.userAgentString = navigator.userAgent;
    }
  }

  _createClass(DeviceSpecifications, [{
    key: "getBrowser",
    value: function getBrowser() {
      return {
        name: this.agent.family,
        version: "".concat(this.agent.major, ".").concat(this.agent.major, ".").concat(this.agent.patch),
        major: this.agent.major
      };
    }
  }]);

  return DeviceSpecifications;
}();

var _default = DeviceSpecifications;
exports.default = _default;