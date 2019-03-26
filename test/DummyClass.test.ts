import DummyClass from '../src/lib/DummyClass';
import IDummyClass from '../src/lib/IDummyClass';

let dummyClass: IDummyClass;

describe('Dummy', () => {
  beforeEach(() => {
    dummyClass = new DummyClass();
  });
  test('should be a dummy', () => {
    expect(dummyClass.dummy).toBe('I am a dummy class!')
  })
});
