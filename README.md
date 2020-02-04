# latency-stream

A stream that can mimic network latency.

```
npm install latency-stream
```

## Usage

``` js
const LatencyStream = require('latency-stream')

const latency = new LatencyStream(100) // add a 100ms of latency

someStream.pipe(latency).pipe(someDestination)
```

You can also set an interval of latency and it will pick a random number inbetween

``` js
const latency = new LatencyStream([100, 200]) // add between 100-200 ms of latency
```

## License

MIT
