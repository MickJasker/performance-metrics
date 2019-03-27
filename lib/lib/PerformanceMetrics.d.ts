import IDeviceSpecifications from './IDeviceSpecifications';
import INetworkBandwidthInformation from "./INetworkBandwidthInformation";
declare class PerformanceMetrics {
    deviceSpecifications: IDeviceSpecifications;
    networkBandwidthInformation: INetworkBandwidthInformation;
    constructor();
}
export default PerformanceMetrics;
