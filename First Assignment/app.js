const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const body = [];
  if (url === '/') {
    res.write('<h1>Hello</h1>');
    res.write(
      '<html><body><form name="message" action="/sent" method="post"><input name="input" /><button type="submit">Submit</button></form></body></html>'
    );
    return res.end();
  }
  if (url === '/sent') {
    req.on('data', chunk => body.push(chunk));
    req.on('end', () => {
      const message = Buffer.concat(body).toString();
      fs.writeFileSync('message.txt', message);
    });

    return res.end('<h1>done</h1>');
  }
});

server.listen(3000, () => console.log('Server running at port 3000'));
