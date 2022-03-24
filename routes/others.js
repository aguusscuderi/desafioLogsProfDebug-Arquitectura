const { Router } = require("express");
const router = Router();
const logger = require('../utils/logger')

module.exports = (app) => {
  app.use("/", router);
  router.get('/:par', (req, res, next)=>{
      logger.getLogger('outwarning').warn(`Try to access non existing route ${req.params.par} - ${req.url}`);
      res.send(`WARNING, route ${req.method} - ${req.url} does not exist, like Colon`)
  })
}