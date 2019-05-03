/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
class NetworkBandwidthInformation {
  /** `number[]` containing all bandwidths. */
  public bandwidths: number[];

  /** Average of `bandwidths` property. */
  public averageBandwidth: number;

  private _minSize: number;

  /**
   * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
   */
  constructor(minimumFileSize: number = 0) {
    this._minSize = minimumFileSize;

    this.bandwidths = this.getBandwidths();
    this.averageBandwidth = this.getAverageBandwidth();
  }

  /**
   * Returns an array of all bandwidths.
   * @method getBandwidths
   */
  public getBandwidths(): number[] {
    const resources = window.performance.getEntries();
    const bandwidths = resources
    // @ts-ignore
      .filter((entry: PerformanceResourceTiming) => {
        return entry.transferSize && entry.transferSize > this._minSize;
      })
      .map((entry: PerformanceResourceTiming) => {
        const transferTime = entry.responseEnd - entry.responseStart;
        const { transferSize } = entry;

        return transferSize / transferTime;
      });

    this.bandwidths = bandwidths;
    this.getAverageBandwidth();
    return bandwidths;
  }

  /**
   * Returns an average of `this.bandwidths`
   * @method getAverageBandwidth
   */
  public getAverageBandwidth(): number {
    if (this.bandwidths !== []) {
      const sum = this.bandwidths.reduce((previous, current) => {
        const val = current + previous;
        return val;
      });
      const avg = sum / this.bandwidths.length;
      this.averageBandwidth = avg;
      return avg;
    }
    return 0;
  }
}

export default NetworkBandwidthInformation;
