import FpsEmitter from 'fps-emitter';
/**
 * @namespace FPSCounter
 * @class FPSCounter
 * Get information about the device's framerate.
 */
class FPSCounter {
    constructor() {
        this._fpsEmitter = new FpsEmitter();
        this.fps = 0;
        this._fpsEmitter.on('update', (fps) => {
            this.fps = fps;
        });
    }
}
export default FPSCounter;
