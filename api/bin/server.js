/* Server Modules */
const http = require('http');

/* Server Scripts */
const app = require('app');

/* ERROR HANDLING */
/* Catch 404 and send not-found status */
app.use((req, res, next) => {
  res.status(404);
  res.send({ message: '\"Ho ho ho\".repeat(404)... wait, what? We cannot find your requested file.'})
})

/* Catch 500 error status: internal server error */
app.use((req, res, next) => {
  console.log('Error', req.method, req.path, err);

  if (!err.headersSent) {
    res.status(500);
    res.send({ message: 'It\'s not any holiday, our servers seems to not be drawing any friends. Come again later.' });
  }
})

/* SERVER INITIALIZATION */
let server = http.createServer(app)

server.listen(process.env.PORT, () => {
  console.log(`Servers are rocking on: http://localhost:${process.env.PORT}`);
})
