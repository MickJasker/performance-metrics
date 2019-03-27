interface Browser {
  name: string;
  version: string;
  major: string;
}

interface OS {
  name: string;
  version: string;
  major: string;
}

interface IDeviceSpecifications {
  userAgentString: string;

  getBrowser(): Browser;

  getOperatingSystem(): OS;
}

export default IDeviceSpecifications;
