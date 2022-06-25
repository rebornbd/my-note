const { port, env } = require('./config/vars.config');
const mongoose = require('./config/mongoose.config');
const app = require('./config/express.config');


// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => console.log(`server is running on port:${port} (${env})`));

// exports express
module.exports = app;
