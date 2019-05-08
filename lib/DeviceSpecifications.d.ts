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
declare class DeviceSpecifications {
    private _agent;
    /** Returns the used useragent */
    readonly userAgentString: string;
    private readonly _browsersList;
    /**
     * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
     * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
     */
    constructor(UserAgentString?: string, browserslist?: string[]);
    /**
     * Returns returns an object containing:
     * -  name
     * -  version (eg. 1.2.3)
     * -  major version
     *
     * @method getBrowser
     * @return {IBrowser}
     */
    getBrowser(): IBrowser;
    /**
     *    * Returns returns an object containing:
     * -  name
     * -  version (eg. 1.2.3)
     * -  major version
     *
     * @method getOperatingSystem
     * @return {IOS}
     */
    getOperatingSystem(): IOS;
    /**
     * Returns the mobile device typs (eg. iPhone, Android, etc.)
     *
     * Only works on mobile devices!
     *
     * @method getDevice
     * @return {IDevice}
     */
    getDevice(): IDevice;
    /**
     * Returns if the browser is up to date using browserslist.
     * Keep the library up-to-date to keep this functionality working properly
     *
     * Warning: this is general detection if the browser is a modern browser, it is not a replacement of feature detection libraries like mordernizer.
     *
     * @method isBrowserModern
     * @return {boolean}
     */
    isBrowserModern(): boolean;
}
export default DeviceSpecifications;
