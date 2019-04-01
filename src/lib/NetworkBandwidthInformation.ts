/**
 * @namespace NetworkBandwidthInformation
 * @class NetworkBandwidthInformation
 * @constructor
 */
class NetworkBandwidthInformation {
  public bandwidths: number[];
  public averageBandwidth: number;

  constructor() {
    this.bandwidths = this.getBandwidths();
    this.averageBandwidth = this.getAverageBandwidth();
  }

  public getBandwidths(): number[] {
    const resources = window.performance.getEntries();
    const bandwidths: number[] = [];
    // @ts-ignore
    resources.forEach((entry: PerformanceResourceTiming) => {
      if (entry.transferSize) {
        const transferTime = entry.responseEnd - entry.responseStart;
        const transferSize = entry.transferSize;

        const bpms = transferSize / transferTime;

        bandwidths.push(bpms);
      }
    });
    this.bandwidths = bandwidths;
    this.getAverageBandwidth();
    return bandwidths;
  }

  public getAverageBandwidth(): number {
    const bandwidths = this.bandwidths;
    const sum = bandwidths.reduce((previous, current) => {
      const val = current + previous;
      return val;
    })
    const avg = sum / bandwidths.length;
    this.averageBandwidth = avg;
    return avg;
  }
}

export default NetworkBandwidthInformation;
