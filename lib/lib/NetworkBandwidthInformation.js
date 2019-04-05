"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @constructor
 */
var NetworkBandwidthInformation =
/*#__PURE__*/
function () {
  function NetworkBandwidthInformation() {
    _classCallCheck(this, NetworkBandwidthInformation);

    this.bandwidths = this.getBandwidths();
    this.averageBandwidth = this.getAverageBandwidth();
  }

  _createClass(NetworkBandwidthInformation, [{
    key: "getBandwidths",
    value: function getBandwidths() {
      var resources = window.performance.getEntries();
      var bandwidths = []; // @ts-ignore

      resources.forEach(function (entry) {
        if (entry.transferSize) {
          var transferTime = entry.responseEnd - entry.responseStart;
          var transferSize = entry.transferSize;
          var bpms = transferSize / transferTime;
          bandwidths.push(bpms);
        }
      });
      this.bandwidths = bandwidths;
      this.getAverageBandwidth();
      return bandwidths;
    }
  }, {
    key: "getAverageBandwidth",
    value: function getAverageBandwidth() {
      var bandwidths = this.bandwidths;
      var sum = bandwidths.reduce(function (previous, current) {
        var val = current + previous;
        return val;
      });
      var avg = sum / bandwidths.length;
      this.averageBandwidth = avg;
      return avg;
    }
  }]);

  return NetworkBandwidthInformation;
}();

var _default = NetworkBandwidthInformation;
exports.default = _default;