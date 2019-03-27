import * as useragent from 'useragent';
// tslint:disable-next-line:no-duplicate-imports
import Useragent from 'useragent';

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
 */
class DeviceSpecifications {
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

  public getBrowser(): IBrowser {
    return {
      name: this.agent.family,
      version: `${this.agent.major}.${this.agent.major}.${this.agent.patch}`,
      major: this.agent.major,
    }
  }

  public getOperatingSystem(): IOS {
    return {
      name: this.agent.os.family,
      version: `${this.agent.os.major}.${this.agent.os.minor}.${this.agent.os.patch}`,
      major: this.agent.os.major,
    }
  }
  
  public getDevice(): IDevice {
    return {
      name: this.agent.device.family,
    }
  }
}

export default DeviceSpecifications;
