import NetworkBandwidthInformation from '../src/lib/NetworkBandwidthInformation';
import INetworkBandwidthInformation from '../src/lib/interfaces/INetworkBandwidthInformation';

let networkBandwidthInformation: INetworkBandwidthInformation;

describe('Get network bandwidths', () => {
  beforeEach(() => {
    // @ts-ignore
    window.performance.getEntries = jest.fn(() => [
      {
        responseStart: 0,
        responseEnd: 500,
        transferSize: 512000,
      },
      {
        responseStart: 0,
        responseEnd: 980,
        transferSize: 1024000,
      },
    ]);
    networkBandwidthInformation = new NetworkBandwidthInformation(200000);
  });
  test('it should return an array of all bandwidths', () => {
    expect(networkBandwidthInformation.getBandwidths()).toEqual([1024, 1044.8979591836735]);
  });
});

describe('Get average network bandwidths', () => {
  beforeEach(() => {
    // @ts-ignore
    window.performance.getEntries = jest.fn(() => [
      {
        responseStart: 0,
        responseEnd: 500,
        transferSize: 512000,
      },
      {
        responseStart: 0,
        responseEnd: 980,
        transferSize: 1024000,
      },
    ]);
    networkBandwidthInformation = new NetworkBandwidthInformation();
  });
  test('it should return an array of all bandwidths', () => {
    expect(networkBandwidthInformation.getAverageBandwidth()).toEqual(1034.4489795918366);
  });
});

describe('Get average network bandwidths without network requests', () => {
  beforeEach(() => {
    // @ts-ignore
    window.performance.getEntries = jest.fn(() => [
      {
        responseStart: 0,
        responseEnd: 500,
        transferSize: 51,
      },
      {
        responseStart: 0,
        responseEnd: 980,
        transferSize: 102,
      },
    ]);
    networkBandwidthInformation = new NetworkBandwidthInformation(1000);
  });
  test('it should return an array of all bandwidths', () => {
    expect(networkBandwidthInformation.getAverageBandwidth()).toEqual(undefined);
  });
});
