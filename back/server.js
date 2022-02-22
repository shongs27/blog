const path = require('path');

const jsonServer = require('json-server');
const server = jsonServer.create();

const db = jsonServer.router(require('./db.js')());

// const middlewares = jsonServer.defaults();
// server.use(middlewares);

server.use(db);

server.listen(3000, () => {
  console.log('Backserver port:3000에서 실행 중');
});
