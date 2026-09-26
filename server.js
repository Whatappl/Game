const { PeerServer } = require('peer');

const port = process.env.PORT || 10000;

PeerServer({
  port: port,
  path: '/',
  proxied: true,
  key: 'peerjs'
});

console.log('Signaling server running on ' + port);
