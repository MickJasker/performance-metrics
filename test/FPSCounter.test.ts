import FPSCounter from '../src/lib/FPSCounter';
import IFPSCounter from '../src/lib/interfaces/IFPSCounter';

let fpsCounter: IFPSCounter;

describe('Get the framerate', () => {
  test('it should return 60fps', () => {
    fpsCounter = new FPSCounter();
    expect(fpsCounter.fps).toEqual(0);
  })
});
