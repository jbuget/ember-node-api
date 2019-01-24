// Use the Node.js core HTTP implementation.
const server = require('./lib/server');

server.listen(3000, function () {
  console.log('Server is up at: http://localhost:3000')
});

