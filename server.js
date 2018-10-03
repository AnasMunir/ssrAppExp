const express = require('express');
const vhost = require('vhost');

const vader = require('./dist/vader/server.js');
const venom = require('./dist/venom/server.js');

// const venom = require('./dist/venom/server.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(vhost('vader.local.com', vader));
app.use(vhost('venom.local.com', venom));

let server = app.listen(PORT, () => {
  console.log(`Node server listening on http://localhost:${PORT}`);
});
server.on('connection', (socket) => {
  console.log('address object', socket.address());
  console.log('remote address', socket.remoteAddress);
});

// /* app.set('view engine', 'html');
// app.set('views',  __dirname, 'awesome.html'); */

// app.use(function (req, res) {
//   console.error('404 in main app')
//   res.status(404).send('Not Found')
// })

// // module.exports = app
// const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
// server.listen(port, () => console.log(`API running on: ${port}`));