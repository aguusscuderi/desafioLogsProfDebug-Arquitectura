const apirandoms = require('./apirandoms')
const info = require('./info')
const others = require('./others')


module.exports = (app) => {  
  apirandoms(app)
  info(app)
  others(app)
}