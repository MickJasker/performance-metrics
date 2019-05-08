interface INetworkBandwidthInformation {
  /** `number[]` containing all bandwidths. */
  bandwidths: number[] | undefined;

  /** Average of `bandwidths` property. */
  averageBandwidth: number | undefined;

  /**
   * Returns an array of all bandwidths.
   * @method getBandwidths
   * @returns number[]
   */
  getBandwidths(): number[] | undefined;

  /**
   * Returns an average of `this.bandwidths`
   * @method getAverageBandwidth
   */
  getAverageBandwidth(): number | undefined;
}

export default INetworkBandwidthInformation;
