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
