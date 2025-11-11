import http from 'http';

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Welcome to out home page');
  }
  if (request.url === '/about') {
    response.end("Welcome to the about page!!!!!")
  }
  response.end(`
    <h1>OOps!!!</h1>
    <p> We can't seem to find the page you're looking for!</p>
    <a href="/">back home</a>
    `);
})

server.listen(3000);

