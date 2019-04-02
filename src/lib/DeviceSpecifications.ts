import * as useragent from 'useragent';
// tslint:disable-next-line:no-duplicate-imports
import Useragent from 'useragent';
import { matchesUA } from 'browserslist-useragent';

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
class DeviceSpecifications {
  private _agent: Useragent.Agent;
  /** Returns the used useragent */
  public readonly userAgentString: string;
  private readonly _browsersList: string[];

  constructor(UserAgentString?: string, browserslist?: string[]) {
    if (UserAgentString) {
      this._agent = useragent.parse(UserAgentString);
      this.userAgentString = UserAgentString;
    } else {
      this._agent = useragent.parse(navigator.userAgent);
      this.userAgentString = navigator.userAgent;
    }

    if (browserslist) {
      this._browsersList = browserslist;
    } else {
      this._browsersList = [
        'last 5 versions',
        '> 3%',
        'not ie <= 11'
      ]
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
      name: this._agent.family,
      version: `${this._agent.major}.${this._agent.major}.${this._agent.patch}`,
      major: this._agent.major,
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
      name: this._agent.os.family,
      version: `${this._agent.os.major}.${this._agent.os.minor}.${this._agent.os.patch}`,
      major: this._agent.os.major,
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
      name: this._agent.device.family,
    }
  }

  /**
   * Returns if the browser is modern.
   *
   * Warning: this is general detection if the browser is a modern browser, it is not a replacement of feature detection libraries like mordernizer.
   *
   * @method isBrowserModern
   * @return {IDevice}
   */
  public isBrowserModern(): boolean {
    return matchesUA(this.userAgentString, {
      browsers: this._browsersList,
      allowHigherVersions: true,
    })
  }
}

export default DeviceSpecifications;
