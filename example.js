const LatencyStream = require('./')

const l = new LatencyStream(1000)

l.write('a')
l.write('b')
l.write('c')

l.on('data', console.log)
