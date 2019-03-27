import * as useragent from 'useragent';
// tslint:disable-next-line:no-duplicate-imports
import Useragent from 'useragent';
import IDeviceSpecifications from "./IDeviceSpecifications";

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

/**
 * @namespace DeviceSpecifications
 * @class DeviceSpecifications
 * @constructor
 * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
 */
class DeviceSpecifications implements IDeviceSpecifications{
  private agent: Useragent.Agent;
  /** Returns the used useragent */
  public readonly userAgentString: string;

  constructor(UserAgentString?: string) {
    if (UserAgentString) {
      this.agent = useragent.parse(UserAgentString);
      this.userAgentString = UserAgentString;
    } else {
      this.agent = useragent.parse(navigator.userAgent);
      this.userAgentString = navigator.userAgent;
    }
  }

  /**
   * Returns information about the browser
   *
   * @method getBrowser
   * @return {IBrowser}
   */
  public getBrowser(): IBrowser {
    return {
      name: this.agent.family,
      version: `${this.agent.major}.${this.agent.major}.${this.agent.patch}`,
      major: this.agent.major,
    }
  }

  /**
   * Returns information about the operating system
   *
   * @method getOperatingSystem
   * @return {IOS}
   */
  public getOperatingSystem(): IOS {
    return {
      name: this.agent.os.family,
      version: `${this.agent.os.major}.${this.agent.os.minor}.${this.agent.os.patch}`,
      major: this.agent.os.major,
    }
  }

  /**
   * Returns information about the device.
   *
   * Only works on mobile devices.
   *
   * @method getDevice
   * @return {IDevice}
   */
  public getDevice(): IDevice {
    return {
      name: this.agent.device.family,
    }
  }
}

export default DeviceSpecifications;
