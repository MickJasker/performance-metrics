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
    /** Returns the used useragent */
    userAgentString: string;
    /**
     * Returns information about the browser
     *
     * @method getBrowser
     * @return {IBrowser}
     */
    getBrowser(): IBrowser;
    /**
     * Returns information about the operating system
     *
     * @method getOperatingSystem
     * @return {IOS}
     */
    getOperatingSystem(): IOS;
    /**
     * Returns information about the device.
     *
     * Only works on mobile devices.
     *
     * @method getDevice
     * @return {IDevice}
     */
    getDevice(): IDevice;
    /**
     * Returns if the browser is modern.
     *
     * Warning: this is general detection if the browser is a modern browser, it is not a replacement of feature detection libraries like mordernizer.
     *
     * @method isBrowserModern
     * @return {IDevice}
     */
    isBrowserModern(): boolean;
}
export default IDeviceSpecifications;
