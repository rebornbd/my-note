/*
  Modules are the blocks of encapsulated code that communicates with 
  an external application on the basis of their related functionality.

  Modules Types:
    (a) Core Modules
      http, url, path, fs, util, querystring
      etc...

      // loading core module
      const module = require('module_name');
    
    
    (b) Local Modules
      Local modules are modules created locally in your Node.js application.

      // loading local module
      const module = require('./path/module_name');
    
    
    (c) Third-party Modules
      The third party module can be install by npm or yarn.

      // loading third-party module
      const module = require('module_name');
  
  The module wrapper:
    (function(exports, require, module, __filename, __dirname) {
      // Module code actually lives in here

      // const http = require("http")
      // const add = (a, b) => a+b;
      // .....

      // module.exports = add; | module.exports = { add }; | module.exports.add = add;
    });
*/
