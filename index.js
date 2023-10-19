const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log('Request received at ' + new Date().toISOString());
  console.log('Request body: ', req.body);
  next();
});

// Middleware to log responses
app.use((req, res, next) => {
  res.on('finish', () => {
    console.log('Response sent at ' + new Date().toISOString());
    console.log('Response status code: ', res.statusCode);
  });
  next();
});

app.use('/', createProxyMiddleware({ 
  target: 'http://localhost:8545', // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true, // proxy websockets
}));

app.listen(3000);