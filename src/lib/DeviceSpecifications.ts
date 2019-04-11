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
 *
 * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
 *
 * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
 */
class DeviceSpecifications {
  private _agent: Useragent.Agent;

  /** Returns the used useragent */
  public readonly userAgentString: string;

  private readonly _browsersList: string[];

  /**
   * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
   * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
   */
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
      this._browsersList = ['last 5 versions', '> 3%', 'not ie <= 11'];
    }
  }

  /**
   * Returns returns an object containing:
   * -  name
   * -  version (eg. 1.2.3)
   * -  major version
   *
   * @method getBrowser
   * @return {IBrowser}
   */
  public getBrowser(): IBrowser {
    return {
      name: this._agent.family,
      version: `${this._agent.major}.${this._agent.major}.${this._agent.patch}`,
      major: this._agent.major,
    };
  }

  /**
   *    * Returns returns an object containing:
   * -  name
   * -  version (eg. 1.2.3)
   * -  major version
   *
   * @method getOperatingSystem
   * @return {IOS}
   */
  public getOperatingSystem(): IOS {
    return {
      name: this._agent.os.family,
      version: `${this._agent.os.major}.${this._agent.os.minor}.${this._agent.os.patch}`,
      major: this._agent.os.major,
    };
  }

  /**
   * Returns the mobile device typs (eg. iPhone, Android, etc.)
   *
   * Only works on mobile devices!
   *
   * @method getDevice
   * @return {IDevice}
   */
  public getDevice(): IDevice {
    return {
      name: this._agent.device.family,
    };
  }

  /**
   * Returns if the browser is up to date using browserslist.
   * Keep the library up-to-date to keep this functionality working properly
   *
   * Warning: this is general detection if the browser is a modern browser, it is not a replacement of feature detection libraries like mordernizer.
   *
   * @method isBrowserModern
   * @return {boolean}
   */
  public isBrowserModern(): boolean {
    return matchesUA(this.userAgentString, {
      browsers: this._browsersList,
      allowHigherVersions: true,
    });
  }
}

export default DeviceSpecifications;
