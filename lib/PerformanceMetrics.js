import DeviceSpecifications from './DeviceSpecifications';
import NetworkBandwidthInformation from "./NetworkBandwidthInformation";
import FPSCounter from './FPSCounter';
class PerformanceMetrics {
    constructor() {
        this.deviceSpecifications = new DeviceSpecifications();
        this.networkBandwidthInformation = new NetworkBandwidthInformation();
        this.fpsCounter = new FPSCounter();
    }
}
export default PerformanceMetrics;
