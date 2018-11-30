# NodeJS-The-Complete-Guide

The beautiful journey of learning how to build RESTful APIs and interacting with databases with the power of NodeJS. wow- that sounded like a commercial.

## Starting off simple

### Creating our Server

Might sound harder than it actually is, but 6 lines of code are enough to get our own server up and running. It will be a very simple one, but still, **The journey of a thousand commands begins one single line of Code**...or something like that.

```
const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```

And voilà, as if by magic, our own server is now running on port 3000.

### Sending responses to the browser

Now let's actually output something on the screen. Now there are a lot of ways of doing this, some easier than others. Let's go over a tedious one first, because why not.

```
const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My first page with NodeJS</title></head>');
  res.write('<body><h1>Hello NodeJS World!</h1></body>');
  res.write('</html>');
});

server.listen(3000);
```

Two things going on here. The `res.setHeader('Content-Type', 'text/html');` command basically tells the browser that _Hey, I'm about to send you some HTML now, okay? Get ready_. And `res.write()` sends everything we have in the parentheses over to the browser.

Now like I mentioned above, this is neither clean nor efficient. If only there was a better way... 🙊 Express.js 🙊
