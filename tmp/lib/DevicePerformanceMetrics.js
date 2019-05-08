import DeviceSpecifications from './DeviceSpecifications';
import NetworkBandwidthInformation from './NetworkBandwidthInformation';
import FPSCounter from './FPSCounter';
/**
 * @namespace DevicePerformanceMetrics
 * @class DevicePerformanceMetrics
 * @constructor
 * Global class where all subclasses are initialized.
 */
class DevicePerformanceMetrics {
    constructor() {
        this.deviceSpecifications = new DeviceSpecifications();
        this.networkBandwidthInformation = new NetworkBandwidthInformation();
        this.fpsCounter = new FPSCounter();
    }
}
export default DevicePerformanceMetrics;
