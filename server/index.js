const Express = require('express');
const { bootRoutes } = require('./boot');

let server = Express();

server.use(Express.json())

bootRoutes(server);

const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server listening on port ${port}`))