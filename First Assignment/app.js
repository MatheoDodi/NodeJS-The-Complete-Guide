const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const body = [];
  const method = req.method;
  if (url === '/') {
    res.write('<h1>Hello</h1>');
    return res.end();
  }
  if (url === '/users') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/sent' && method === 'POST') {
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
    });
  }
});
server.listen(3000, () => console.log('App running on port 3000'));
