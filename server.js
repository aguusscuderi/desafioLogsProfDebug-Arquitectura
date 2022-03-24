const express = require('express');
const path = require('path')
const {appConfig}  = require('./config/index.js');
const serverRoutes = require('./routes/info.js');
const cors = require('cors');
const compression = require('compression');
const logger = require('./utils/logger')

module.exports = () => {
    
  const app = express()

  app.use(compression())

  app.use((req, res, next)=>{       
    logger.getLogger('info').info(`${req.method} - ${req.url}`)
    next() 
  })
  app.set('view engine', 'ejs');                        
  app.set('views', path.join(__dirname, 'views'))     
  app.use(express.urlencoded({extended:true}))       
  app.use(cors(`${appConfig.cors}`))
  app.use(express.static(path.join(__dirname, './public'))) 
    
  serverRoutes(app)
  return app
}