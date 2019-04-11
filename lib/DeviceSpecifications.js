import * as useragent from 'useragent';
import { matchesUA } from 'browserslist-useragent';
/**
 * @namespace DeviceSpecifications
 * @class DeviceSpecifications
 *
 * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
 *
 * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
 */
class DeviceSpecifications {
    /**
     * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
     * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
     */
    constructor(UserAgentString, browserslist) {
        if (UserAgentString) {
            this._agent = useragent.parse(UserAgentString);
            this.userAgentString = UserAgentString;
        }
        else {
            this._agent = useragent.parse(navigator.userAgent);
            this.userAgentString = navigator.userAgent;
        }
        if (browserslist) {
            this._browsersList = browserslist;
        }
        else {
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
    getBrowser() {
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
    getOperatingSystem() {
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
    getDevice() {
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
    isBrowserModern() {
        return matchesUA(this.userAgentString, {
            browsers: this._browsersList,
            allowHigherVersions: true,
        });
    }
}
export default DeviceSpecifications;
