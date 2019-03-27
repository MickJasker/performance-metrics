import * as useragent from 'useragent';
// tslint:disable-next-line:no-duplicate-imports
import Useragent from 'useragent';

interface Browser {
  name: string;
  version: string;
  major: string;
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

  public getBrowser(): Browser {
    return {
      name: this.agent.family,
      version: `${this.agent.major}.${this.agent.major}.${this.agent.patch}`,
      major: this.agent.major,
    }
  }
}

export default DeviceSpecifications;
