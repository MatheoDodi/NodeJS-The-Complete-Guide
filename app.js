const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page with NodeJS</title></head>');
  res.write('<body><h1>Hello NodeJS World!</h1></body>');
  res.write('</html>');
});

server.listen(3000);
