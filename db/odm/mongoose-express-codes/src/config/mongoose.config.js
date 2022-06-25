const mongoose = require('mongoose');
const { mongo, env } = require('./vars.config');


// Exit application on error
mongoose.connection.on('error', (err) => {
  console.log(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (env === 'development') {
  // mongoose.set('debug', true);
}

// Connect to mongo db
exports.connect = () => {
  mongoose
    .connect(mongo.uri, {
      keepAlive: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('mongoDB connected...'));
  return mongoose.connection;
};
