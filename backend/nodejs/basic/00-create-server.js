const http = require('http');

const port = 3000;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  switch(req.url) {
    case "/":
      res.end('<h1>Home Page</h1>');
      break;
    
    case "/about":
      res.end('<h1>About Page</h1>');
      break;
    
    default:
      res.end('<h1>404 - NOT FOUND!</h1>');
      break;
  }
});

server.listen(port, host, () => {
  console.log(`app is runing on http://${host}:${port}`);
});
