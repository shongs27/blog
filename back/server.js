const jsonServer = require('json-server');
const server = jsonServer.create();

const db = jsonServer.router('db.json');

// const middlewares = jsonServer.defaults();
// server.use(middlewares);

server.use(db);

server.listen(3000, () => {
  console.log('백서버 3000 실행 중');
});
