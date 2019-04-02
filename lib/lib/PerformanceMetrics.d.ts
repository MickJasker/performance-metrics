import IDeviceSpecifications from './interfaces/IDeviceSpecifications';
import INetworkBandwidthInformation from "./interfaces/INetworkBandwidthInformation";
import IFPSCounter from './interfaces/IFPSCounter';
declare class PerformanceMetrics {
    deviceSpecifications: IDeviceSpecifications;
    networkBandwidthInformation: INetworkBandwidthInformation;
    fpsCounter: IFPSCounter;
    constructor();
}
export default PerformanceMetrics;
