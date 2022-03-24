const args= require('../utils/yargs')
const logger = require('../utils/logger')
const { cpus } = require ('os')
const { block } = args


module.exports = function serviceGetArgvInfo(req, res, next){
const data = [
    {desc: 'Argumentos de entrada: ', value: process.argv.length === 2 ?  'no arguments on command line': process.argv[2]},
    {desc: 'Path de Ejecucion: ', value: process.execPath},
    {desc: 'Sistema operativo: ', value: process.platform},
    {desc: 'Version de Node: ', value: process.version},
    {desc: 'Uso de CPU: ', value: process.memoryUsage.rss},
    {desc: 'Numero de CPUs: ', value: cpus().length},
    {desc: 'ID de Proceso: ', value:process.pid},
    {desc: 'Carpeta de Proyecto', value: process.cwd()},
  ]

  if (block){                          
    data.forEach(element => {
      console.log(element.desc, element.value)
    })
  }
    if (!block){                         
      data.forEach(element => {
        logger.getLogger('consola').info(element.desc, element.value)
      })
    }
    return data
}