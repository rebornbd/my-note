const path = require('path');


// import .env variables
require('dotenv').config({
  path: path.join(__dirname, '../../.env'),
});


module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,

  jwtSecret: process.env.JWT_SECRET,
  jwtExpirationInterval: process.env.JWT_ACCESS_EXPIRATION_MINUTES,
  jwtRefreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS,

  mongo: {
    uri: process.env.MONGO_URI,
  },
  
  logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
  
  emailConfig: {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    username: process.env.EMAIL_USERNAME,
    password: process.env.EMAIL_PASSWORD,
  },
};
