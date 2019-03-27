interface INetworkBandwidthInformation {
    bandwidths: number[];
    averageBandwidth: number;
    getBandwidths(): number[];
    getAverageBandwidth(): number;
}
export default INetworkBandwidthInformation;
