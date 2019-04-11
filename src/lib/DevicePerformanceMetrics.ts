import DeviceSpecifications from './DeviceSpecifications';
import IDeviceSpecifications from './interfaces/IDeviceSpecifications';

import NetworkBandwidthInformation from './NetworkBandwidthInformation';
import INetworkBandwidthInformation from './interfaces/INetworkBandwidthInformation';

import FPSCounter from './FPSCounter';
import IFPSCounter from './interfaces/IFPSCounter';

/**
 * @namespace DevicePerformanceMetrics
 * @class DevicePerformanceMetrics
 * @constructor
 * Global class where all subclasses are initialized.
 */
class DevicePerformanceMetrics {
  /**
   * @namespace DeviceSpecifications
   * @class DeviceSpecifications
   * @constructor
   * @param {string} UserAgentString Provide a user agent, if none is provided `navigator.useragent` will be used by default.
   * @param {string[]} browserslist Provide a `string[]` of a browserslist to manually overide the default value: `['last 5 versions', '> 3%', 'not ie <= 11']`
   */
  public deviceSpecifications: IDeviceSpecifications;

  /**
   * @namespace NetworkBandwidthInformation
   * @class NetworkBandwidthInformation
   * @constructor
   * @param {number} minimumFileSize Provide the minimum file size of the files you want to get the bandwidth of.
   */
  public networkBandwidthInformation: INetworkBandwidthInformation;

  /**
   * @namespace FPSCounter
   * @class FPSCounter
   * @constructor
   *
   * Get information about the device's framerate.
   */
  public fpsCounter: IFPSCounter;

  constructor() {
    this.deviceSpecifications = new DeviceSpecifications();
    this.networkBandwidthInformation = new NetworkBandwidthInformation();
    this.fpsCounter = new FPSCounter();
  }
}

export default DevicePerformanceMetrics;
