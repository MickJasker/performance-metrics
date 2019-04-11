import DeviceSpecifications from './DeviceSpecifications';
import IDeviceSpecifications from './interfaces/IDeviceSpecifications';

import NetworkBandwidthInformation from './NetworkBandwidthInformation';
import INetworkBandwidthInformation from './interfaces/INetworkBandwidthInformation';

import FPSCounter from './FPSCounter';
import IFPSCounter from './interfaces/IFPSCounter';

class DevicePerformanceMetrics {
  public deviceSpecifications: IDeviceSpecifications;

  public networkBandwidthInformation: INetworkBandwidthInformation;

  public fpsCounter: IFPSCounter;

  constructor() {
    this.deviceSpecifications = new DeviceSpecifications();
    this.networkBandwidthInformation = new NetworkBandwidthInformation();
    this.fpsCounter = new FPSCounter();
  }
}

export default DevicePerformanceMetrics;
