const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.end('Bye');
  }
});

server.listen(3000);
