function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import FpsEmitter from 'fps-emitter';
/**
 * @namespace FPSCounter
 * @class FPSCounter
 * Get information about the device's framerate.
 */

var FPSCounter =
/** The device's current FPS, to get a realtime reading get this value from a `setInterval()` function.
 *
 * ### Example:
 * ```typescript
 * const fpscounter = new FPSCounter();
 *
 * // Log the current FPS to the console every 500ms.
 * setInterval(() => {
 *  console.log(`The current FPS is ${fpscounter.fps}FPS`)
 * }, 500);
 * // Example log could be: 'The current FPS is 60FPS'
 * ```
 */
function FPSCounter() {
  var _this = this;

  _classCallCheck(this, FPSCounter);

  _defineProperty(this, "_fpsEmitter", void 0);

  _defineProperty(this, "fps", void 0);

  this._fpsEmitter = new FpsEmitter();
  this.fps = 0;

  this._fpsEmitter.on('update', function (fps) {
    _this.fps = fps;
  });
};

export default FPSCounter;