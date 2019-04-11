# Performance metrics

![npm](https://img.shields.io/npm/v/device-performance-metrics.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/device-performance-metrics.svg)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/device-performance-metrics.svg)
![GitHub](https://img.shields.io/github/license/MickJasker/performance-metrics.svg)
![npm](https://img.shields.io/npm/dt/device-performance-metrics.svg)


## Usage

### Installation

To install the library run `$ yarn add device-performance-metrics` in the root of your project.

### Basic usage

Importing the library globally:

```typescript
import PerformanceMetrics from 'device-performance-metrics';

const performanceMetrics: PerformanceMetrics = new PerformanceMetrics();

const browser = performanceMetrics.deviceSpecifications.getBrowser();

const fps = performanceMetrics.fpscounter.fps;

const bandwidth = performanceMetrics.networkBandwidtInformation.getAverageBandwidth();
```

Or tree shake the library:

```typescript
import { DeviceSpecifications } from 'device-performance-metrics';
import { NetworkBandwidthInformation } from 'device-performance-metrics';
import { FPSCounter } from 'device-performance-metrics';

const deviceSpecs = new DeviceSpecifications();
const browser = deviceSpecs.getBrowser();

const networkBandwidth = new NetworkBandwidthInformation();
const avgBandwidth = networkBandwidth.getAverageBandwidth();

const fpsCounter = new FPSCounter();
const fps = fpsCounter.fps;
```

### Getting device specifications
The class `DeviceSpecifications` gives you the ability to get basic specifications about your user's device. For example his browser and OS:

```typescript
import { DeviceSpecifications } from 'device-performance-metrics';
import IDeviceSpecifications from 'device-performance-metrics/interfaces';

const deviceSpecs: IDeviceSpecifications = new DeviceSpecifications();

const browser = deviceSpecs.getBrowser();

const browserName = browser.name;
const browserVersion = browser.version;

const OS = deviceSpecs.getOS();

const OSName = OS.name;
const OSVersion = OS.version;

console.log(`Browser: ${browserName}(${browserVersion}), OS: ${OSName}(${OSVersion})`);
// example log: 'Browser: Chrome(73.0.3683), OS: MacOS(10.14.4)'
```

### Network bandwidth
If you need to get information about the bandwidth you can use the `NetworkBandwidthInformation` class.

```typescript
import { NetworkBandwidthInformation } from 'device-performance-metrics';
import INetworkBandwidthInformation from 'device-performance-metrics/interfaces';

const networkInfo: INetworkBandwidthInformation = new NetworkBandwidthInformation();

// Logs an array of all measured bandwidths found when the class is contstructed
console.log(networkInfo.bandwidths);
// example log: [1432, 4234, 7686]

// Logs an avaerge of all measured bandwidths found when the class is contstructed
console.log(`${networkInfo.averageBandwidth}bps`);
// example log: 3973bps

// Because the above values are made when the class is contstructed you also directly trigger the functions that get the data, for example:

console.log(networkInfo.getAverageBandwidth());
// example log: 4264bps
```

### FPS
The `FPSCounter` class gives you the ability to get the current framerate.

```typescript
import { FPSCounter } from 'device-performance-metrics';
import IFPSCounter from 'device-performance-metrics/interfaces';

const fpsCounter: IFPSCounter = new FPSCounter();

// Logs the current FPS
console.log(`${fpsCounter.fps}fps`)
// Example log: 60fps
```
If you want to get realtime information about the framerate you can use the `setInterval()` function:

```typescript
// Logs the current FPS every 500ms.
setInterval(() => {
    console.log(`${fpsCounter.fps}fps`);
}, 500);
```


## Typedoc

Detailed documentation can be found in the [typedoc](https://mickjasker.github.io/performance-metrics/).

## Building
This project forces you to use `yarn`;

`$ yarn`

`$ yarn test` to test

`$ yarn test:dev` to watch tests

`$ yarn build` to build the code to the `/lib` folder.

`$ yarn doc` to generated documentation in the `./docs` folder

## Contribution

TODO
