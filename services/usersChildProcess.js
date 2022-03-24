const path = require('path')

module.exports = function serviceChildProcess(cant){
            
            calculateRandomCP = cp.fork(path.join(__dirname, '../usersServices/calculateRandom'))
            
            logger.getLogger('consola').info(`este es el proceso lanzado de child_process ${calculateRandomCP.pid}`)          
            
            calculateRandomCP.on('message', response =>{
              res.send(response.data)
              calculateRandomCP.kill()
            })
      
            calculateRandomCP.send(cant)
}