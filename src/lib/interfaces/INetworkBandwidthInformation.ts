interface INetworkBandwidthInformation {
  /** `number[]` containing all bandwidths. */
  bandwidths: number[];

  /** Average of `bandwidths` property. */
  averageBandwidth: number;

  /**
   * Returns an array of all bandwidths.
   * @method getBandwidths
   * @returns number[]
   */
  getBandwidths(): number[];

  /**
   * Returns an average of `this.bandwidths`
   * @method getAverageBandwidth
   */
  getAverageBandwidth(): number;
}

export default INetworkBandwidthInformation;
