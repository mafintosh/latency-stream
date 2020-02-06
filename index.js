const { Transform } = require('streamx')

module.exports = class LatencyStream extends Transform {
  constructor (range) {
    if (typeof range === 'number') range = [range, range]

    super({
      highWaterMark: 16 * 1024 * 1024,
      mapWritable (data) {
        return { time: Date.now(), data }
      }
    })

    this.min = range[0]
    this.len = range[1] - range[0]
  }

  _transform ({ time, data }, cb) {
    const arrival = Math.floor(time + (this.len ? this.min + Math.random() * this.len : this.min))
    const diff = arrival - Date.now()
    if (diff <= 1) return cb(null, data)
    setTimeout(cb, diff, null, data)
  }
}
