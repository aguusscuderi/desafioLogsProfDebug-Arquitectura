const { Router } = require("express")
const router = Router()
const usersHandler = require("../controllers/usersHandler")

module.exports = (app) => {
  app.use("/", router);
  router.get('/info', usersHandler.getArgvInfo)
  router.get('/api/randoms', usersHandler.getRandoms)
};


