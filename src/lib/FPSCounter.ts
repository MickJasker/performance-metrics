import FpsEmitter from 'fps-emitter';

/**
 * @namespace FPSCounter
 * @class FPSCounter
 * @constructor
 * Get information about the device's framerate.
 */
class FPSCounter {
  private _fpsEmitter: any;

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
  public fps: number;

  constructor() {
    this._fpsEmitter = new FpsEmitter();
    this.fps = 0;

    this._fpsEmitter.on('update', (fps: number) => {
      this.fps = fps;
    });
  }
}

export default FPSCounter;
