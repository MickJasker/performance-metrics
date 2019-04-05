/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @constructor
 * @param {number} minimumFileSize Provide the minimum file size to the brandwidth against in bytes.
 */
class NetworkBandwidthInformation {
  public bandwidths: number[];

  public averageBandwidth: number;

  private _minSize: number;

  constructor(minimumFileSize?: number) {
    this._minSize = 0;

    if (minimumFileSize) {
      this._minSize = minimumFileSize;
    }

    this.bandwidths = this.getBandwidths();
    this.averageBandwidth = this.getAverageBandwidth();
  }

  public getBandwidths(): number[] {
    const resources = window.performance.getEntries();
    const bandwidths: number[] = [];
    // @ts-ignore
    resources.forEach((entry: PerformanceResourceTiming) => {
      if (entry.transferSize && entry.transferSize > this._minSize) {
        const transferTime = entry.responseEnd - entry.responseStart;
        const { transferSize } = entry;

        const bpms = transferSize / transferTime;

        bandwidths.push(bpms);
      }
    });
    this.bandwidths = bandwidths;
    this.getAverageBandwidth();
    return bandwidths;
  }

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
