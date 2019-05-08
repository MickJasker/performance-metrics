/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
declare class NetworkBandwidthInformation {
    /** `number[]` containing all bandwidths. */
    bandwidths: number[] | undefined;
    /** Average of `bandwidths` property. */
    averageBandwidth: number | undefined;
    private _minSize;
    /**
     * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
     */
    constructor(minimumFileSize?: number);
    /**
     * Returns an array of all bandwidths.
     *
     * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
     * @method getBandwidths
     */
    getBandwidths(): number[] | undefined;
    /**
     * Returns an average of `this.bandwidths`
     *
     * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
     * @method getAverageBandwidth
     */
    getAverageBandwidth(): number | undefined;
}
export default NetworkBandwidthInformation;
