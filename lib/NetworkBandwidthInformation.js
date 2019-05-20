function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
var NetworkBandwidthInformation =
/*#__PURE__*/
function () {
  /** `number[]` containing all bandwidths. */

  /** Average of `bandwidths` property. */

  /**
   * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
   */
  function NetworkBandwidthInformation() {
    var minimumFileSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;

    _classCallCheck(this, NetworkBandwidthInformation);

    _defineProperty(this, "bandwidths", void 0);

    _defineProperty(this, "averageBandwidth", void 0);

    _defineProperty(this, "_minSize", void 0);

    this._minSize = minimumFileSize; // this.bandwidths = this.getBandwidths();
    // this.averageBandwidth = this.getAverageBandwidth();
  }
  /**
   * Returns an array of all bandwidths.
   *
   * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
   * @method getBandwidths
   */


  _createClass(NetworkBandwidthInformation, [{
    key: "getBandwidths",
    value: function getBandwidths() {
      var _this = this;

      var resources = window.performance.getEntries();

      if (resources) {
        var bandwidths = resources // @ts-ignore
        .filter(function (entry) {
          return entry.transferSize && entry.transferSize > _this._minSize;
        }).map(function (entry) {
          var transferTime = entry.responseEnd - entry.responseStart;
          var transferSize = entry.transferSize;
          return transferSize / transferTime;
        });

        if (bandwidths.length > 0) {
          this.bandwidths = bandwidths;
          return bandwidths;
        }

        return undefined;
      }

      return undefined;
    }
    /**
     * Returns an average of `this.bandwidths`
     *
     * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
     * @method getAverageBandwidth
     */

  }, {
    key: "getAverageBandwidth",
    value: function getAverageBandwidth() {
      this.getBandwidths();

      if (!this.bandwidths) {
        return undefined;
      }

      var sum = this.bandwidths.reduce(function (previous, current) {
        var val = current + previous;
        return val;
      });
      var avg = sum / this.bandwidths.length;
      this.averageBandwidth = avg;
      return avg;
    }
  }]);

  return NetworkBandwidthInformation;
}();

export default NetworkBandwidthInformation;