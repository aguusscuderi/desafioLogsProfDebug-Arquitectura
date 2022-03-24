
const { cpus } = require ('os');
const cluster = require('cluster');
const args = require('./utils/yargs')
const {appConfig} = require('./config/index')
const app = require('./server.js')
const logger = require('log4js')
require('./utils/autocannon')

let {mode, portCLI} = args

let port = portCLI ? portCLI : appConfig.port

if (mode ==='cluster' && cluster.isPrimary) {
  const numCPUs = cpus().length;
  logger.getLogger('consola').info(`Primary Process ${process.pid} is running on ${port} assigned by CLI`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  logger.getLogger('consola').info(cluster.worker)
  
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died at ${Date.now().toLocaleString()}`);
  });
} else {

    console.log();
    app().listen(port, () => logger.getLogger('consola').info(`New worker server ${process.pid} started by ${mode || "not specified"} mode on port ${port}`))
}