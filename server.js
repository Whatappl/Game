const { PeerServer } = require('peer');
const http = require('http');

const port = process.env.PORT || 10000;

PeerServer({
  port: port,
  path: '/',
  proxied: true,
  key: 'peerjs'
});

console.log('Signaling server running on ' + port);

http.createServer((req, res) => {
  res.writeHead(200);
  res.end('ok');
}).listen(port + 1);
