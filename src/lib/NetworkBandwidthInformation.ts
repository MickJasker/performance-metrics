class NetworkBandwidthInformation {
  public bandwidths: number[];

  constructor() {
    this.bandwidths = this.getBandwidths();
  }
  public getBandwidths(): number[] {
    const resources = window.performance.getEntries();
    const bandwidths: number[] = [];
    // @ts-ignore
    resources.forEach((entry: PerformanceResourceTiming) => {
      const transferTime = entry.responseEnd - entry.responseStart;
      const transferSize = entry.transferSize;

      const bpms = transferSize / transferTime;

      bandwidths.push(bpms);
    });
    this.bandwidths = bandwidths;
    this.getAverageBandwidth();
    return bandwidths;
  }
}

export default NetworkBandwidthInformation;
