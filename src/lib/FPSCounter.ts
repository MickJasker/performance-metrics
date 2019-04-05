import FpsEmitter from 'fps-emitter';

class FPSCounter {
  private _fpsEmitter: any;
  public fps: number;

  constructor() {
    this._fpsEmitter = new FpsEmitter();
    this.fps = 0;

    this._fpsEmitter.on('update', (fps: number) => {
      this.fps = fps;
    })
  }
}

export default FPSCounter;
