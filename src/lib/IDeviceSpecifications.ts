interface Browser {
  name: string;
  version: string;
  major: string;
}

interface IDeviceSpecifications {
  userAgentString: string;

  getBrowser(): Browser;
}

export default IDeviceSpecifications;
