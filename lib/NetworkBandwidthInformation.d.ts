/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
declare class NetworkBandwidthInformation {
    /** `number[]` containing all bandwidths. */
    bandwidths: number[];
    /** Average of `bandwidths` property. */
    averageBandwidth: number;
    private _minSize;
    /**
     * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
     */
    constructor(minimumFileSize?: number);
    /**
     * Returns an array of all bandwidths.
     * @method getBandwidths
     */
    getBandwidths(): number[];
    /**
     * Returns an average of `this.bandwidths`
     * @method getAverageBandwidth
     */
    getAverageBandwidth(): number;
}
export default NetworkBandwidthInformation;
