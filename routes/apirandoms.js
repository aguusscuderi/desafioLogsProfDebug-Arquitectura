const { Router } = require("express")
const router = Router()
const usersHandler = require("../controllers/usersHandler")

module.exports = (app) => {
  app.use("/", router);
  router.get('/api/randoms', usersHandler.getRandoms)
}