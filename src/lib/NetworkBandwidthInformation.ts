/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
 */
class NetworkBandwidthInformation {
  /** `number[]` containing all bandwidths. */
  public bandwidths: number[] | undefined;

  /** Average of `bandwidths` property. */
  public averageBandwidth: number | undefined;

  private _minSize: number;

  /**
   * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
   */
  constructor(minimumFileSize: number = 10) {
    this._minSize = minimumFileSize;

    // this.bandwidths = this.getBandwidths();
    // this.averageBandwidth = this.getAverageBandwidth();
  }

  /**
   * Returns an array of all bandwidths.
   *
   * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
   * @method getBandwidths
   */
  public getBandwidths(): number[] | undefined {
    const resources = window.performance.getEntries();
    if (resources) {
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

      if (bandwidths.length > 0) {
        this.bandwidths = bandwidths;
        return bandwidths;
      }
      return undefined;
    }
    return undefined;
  }

  /**
   * Returns an average of `this.bandwidths`
   *
   * Returns ``` undefined ``` if there are no bandwidths matching the minimum file size requirement.
   * @method getAverageBandwidth
   */
  public getAverageBandwidth(): number | undefined {
    this.getBandwidths();
    if (!this.bandwidths) {
      return undefined;
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
