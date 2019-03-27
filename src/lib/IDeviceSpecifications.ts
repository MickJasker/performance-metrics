interface IBrowser {
  name: string;
  version: string;
  major: string;
}

interface IOS {
  name: string;
  version: string;
  major: string;
}

interface IDevice {
  name: string;
}

interface IDeviceSpecifications {
  /** Returns the used useragent */
  userAgentString: string;

  /**
   * Returns information about the browser
   *
   * @method getBrowser
   * @return {IBrowser}
   */
  getBrowser(): IBrowser;

  /**
   * Returns information about the operating system
   *
   * @method getOperatingSystem
   * @return {IOS}
   */
  getOperatingSystem(): IOS;

  /**
   * Returns information about the device.
   *
   * Only works on mobile devices.
   *
   * @method getDevice
   * @return {IDevice}
   */
  getDevice(): IDevice;
}

export default IDeviceSpecifications;
