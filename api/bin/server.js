'use strict'

const app = require('../src/app')


const watson = require('watson-developer-cloud/assistant/v1');

const ASSISTANT_IAM_URL = 'https://gateway.watsonplatform.net/assistant/api';

const ASSISTANT_IAM_APIKEY = '';
const debug = require('debug')('nodestr:server');
const http = require('http')
const server = http.createServer(app);
const port = normalizePort(process.env.PORT || '3000');

var chatbot = new watson({
  'username':'d2b20928-8536-4d46-9f4a-86c0cf2dcf7f',
  'password':'MaadWhsaXdlw',
  'version': '2019-03-02',
  'url': ASSISTANT_IAM_URL,
  'iam_url': 'https://iam.bluemix.net/identity/token'

});

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log("API Rodando na porta: "+port)
function normalizePort(val){
    const port = parseInt(val, 10);

    if(isNaN(port)){
        return val;
    }

    if(port >= 0){
        return port
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    const bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

