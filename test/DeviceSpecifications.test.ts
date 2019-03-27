import DeviceSpecifications from '../src/lib/DeviceSpecifications';
import IDeviceSpecifications from '../src/lib/IDeviceSpecifications';

let deviceSpecs: IDeviceSpecifications;

describe('Device useragent', () => {
  test('Return the useragent', () => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0');
    deviceSpecs = new DeviceSpecifications();
    expect(deviceSpecs.userAgentString).toBe('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0');
  });
  test('Return the useragent', () => {
    deviceSpecs = new DeviceSpecifications('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36');
    expect(deviceSpecs.userAgentString).toBe('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36');
  });
});


describe('Browser information with navigator.useragent', () => {
  beforeEach(() => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10.14; rv:67.0) Gecko/20100101 Firefox/67.0');
    deviceSpecs = new DeviceSpecifications()
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getBrowser().name).toBe('Firefox')
  });
  test('Return the browser version', () => {
    expect(deviceSpecs.getBrowser().version).toBe('67.67.0')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getBrowser().major).toBe('67')
  });
});

describe('Browser information with provided UA', () => {
  beforeEach(() => {
    deviceSpecs = new DeviceSpecifications('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getBrowser().name).toBe('Chrome')
  });
  test('Return the browser version', () => {
    expect(deviceSpecs.getBrowser().version).toBe('73.73.3683')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getBrowser().major).toBe('73')
  });
});

describe('OS information with navigator.useragent', () => {
  beforeEach(() => {
    jest.spyOn(navigator, 'userAgent', 'get').mockReturnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36');
    deviceSpecs = new DeviceSpecifications()
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getOperatingSystem().name).toBe('Mac OS X')
  });
  test('Return the browser version', () => {
    expect(deviceSpecs.getOperatingSystem().version).toBe('10.14.3')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getOperatingSystem().major).toBe('10')
  });
});

describe('OS information with provided UA', () => {
  beforeEach(() => {
    deviceSpecs = new DeviceSpecifications('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.86 Safari/537.36')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getOperatingSystem().name).toBe('Mac OS X')
  });
  test('Return the browser version', () => {
    expect(deviceSpecs.getOperatingSystem().version).toBe('10.14.3')
  });
  test('Return the browser name', () => {
    expect(deviceSpecs.getOperatingSystem().major).toBe('10')
  });
});
