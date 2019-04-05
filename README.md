# Performance metrics
This project uses yarn. Do not use npm if you wish to contribute to this project!

`$ yarn`

`$ yarn test` to test

`$ yarn test:dev` to watch tests

`$ yarn build` to build the code to the `/lib` folder.

`$ yarn doc` to generated documentation in the `./docs` folder

## Usage
### Installation

To install the library run `$ yarn add device-performance-metrics` in the root of your project.

### Example usage

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
const browser =  deviceSpecs.getBrowser();

const networkBandwidth = new NetworkBandwidthInformation();
const avgBandwidth = networkBandwidth.getAverageBandwidth();

const fpsCounter = new FPSCounter();
const fps = fpsCounter.fps
```

### Typedoc
Detailed information about all propterties, methods, etc. can be found in the [typedoc](https://mickjasker.github.io/performance-metrics/).

## Contribution
TODO
