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
declare class DeviceSpecifications {
    private agent;
    /** Returns the used useragent */
    readonly userAgentString: string;
    constructor(UserAgentString?: string);
    getBrowser(): Browser;
}
export default DeviceSpecifications;
