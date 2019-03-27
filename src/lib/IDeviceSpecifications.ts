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
  userAgentString: string;

  getBrowser(): IBrowser;

  getOperatingSystem(): IOS;

  getDevice(): IDevice;
}

export default IDeviceSpecifications;
