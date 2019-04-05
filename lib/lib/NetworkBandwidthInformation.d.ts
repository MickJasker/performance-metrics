/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @constructor
 */
declare class NetworkBandwidthInformation {
    bandwidths: number[];
    averageBandwidth: number;
    constructor();
    getBandwidths(): number[];
    getAverageBandwidth(): number;
}
export default NetworkBandwidthInformation;
