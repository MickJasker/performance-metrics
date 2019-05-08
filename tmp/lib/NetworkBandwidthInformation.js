/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
class NetworkBandwidthInformation {
    /**
     * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
     */
    constructor(minimumFileSize = 10) {
        /** `number[]` containing all bandwidths. */
        this.bandwidths = [0];
        /** Average of `bandwidths` property. */
        this.averageBandwidth = 0;
        this._minSize = minimumFileSize;
        // this.bandwidths = this.getBandwidths();
        // this.averageBandwidth = this.getAverageBandwidth();
    }
    /**
     * Returns an array of all bandwidths.
     * @method getBandwidths
     */
    getBandwidths() {
        const resources = window.performance.getEntries();
        if (resources) {
            const bandwidths = resources
                // @ts-ignore
                .filter((entry) => {
                return entry.transferSize && entry.transferSize > this._minSize;
            })
                .map((entry) => {
                const transferTime = entry.responseEnd - entry.responseStart;
                const { transferSize } = entry;
                return transferSize / transferTime;
            });
            this.bandwidths = bandwidths;
            this.getAverageBandwidth();
            return bandwidths;
        }
        return [0];
    }
    /**
     * Returns an average of `this.bandwidths`
     * @method getAverageBandwidth
     */
    getAverageBandwidth() {
        if (this.bandwidths === []) {
            return 0;
        }
        const sum = this.bandwidths.reduce((previous, current) => {
            const val = current + previous;
            return val;
        });
        const avg = sum / this.bandwidths.length;
        this.averageBandwidth = avg;
        return avg;
    }
}
export default NetworkBandwidthInformation;
