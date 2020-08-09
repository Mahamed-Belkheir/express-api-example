const Express = require('express');

let server = Express();



const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`server listening on port ${port}`))