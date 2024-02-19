const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  let myUrl = './views/';
  if (req.url === '/') {
    myUrl += 'index.html';
    res.statusCode = 200;
  } else if (req.url === '/about') {
    myUrl += 'about.html';
    res.statusCode = 200;
  } else {
    myUrl += 'error.html';
    res.statusCode = 400;
  }

  fs.readFile(myUrl, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.write(data);
      res.end();
    }
  });

  // res.setHeader('Content-Type', 'text/html');
  // res.write('<h1>Hello World</h1>');
  // res.write('<p>I am Brian Vitualla</p>');
  // res.end();

  // console.log(req.url);
});

server.listen(3000, 'localhost', () => {
  console.log('listen');
});
