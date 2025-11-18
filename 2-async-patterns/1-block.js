const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end('Home Page');
  }
  if (req.url === '/about') {
    for(let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
        
      }
    }
    return res.end('About page');
  }
  return res.end('Error page')
})

server.listen(4000, () => {
  console.log("Server is listening on port 4000...")
});
