const serviceChildProcess = require('../services/calculateRandom')
const serviceGetArgvInfo = require('../services/usersService')
const args=                  require('../utils/yargs')


var childProcessActive = false

class UsersHandler {
  async getArgvInfo(req, res, next) {
    let data = serviceGetArgvInfo(req.body)
    res.render('layouts/info', {data})
  }
  async getRandoms(req, res, next){
      let {cant} = req.query;
      if(!cant) cant=1000000;
      if(args.mode==='child' && !childProcessActive){
         serviceChildProcess()
      }else{
        if(args.mode!=='child') {
          res.send(serviceChildProcess(cant))
        }
        if(childProcessActive) calculateRandomCP.send(cant)
      }
  }
}
module.exports = new UsersHandler();