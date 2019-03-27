import DeviceSpecifications from './DeviceSpecifications';
import IDeviceSpecifications from './IDeviceSpecifications';

import NetworkBandwidthInformation from "./NetworkBandwidthInformation";
import INetworkBandwidthInformation from "./INetworkBandwidthInformation";

class PerformanceMetrics {
  public deviceSpecifications: IDeviceSpecifications;
  public networkBandwidthInformation: INetworkBandwidthInformation;

  constructor() {
    this.deviceSpecifications = new DeviceSpecifications();
    this.networkBandwidthInformation = new NetworkBandwidthInformation();
  }
}

export default PerformanceMetrics
