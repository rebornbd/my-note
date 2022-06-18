/*
  Core Module:
    assert            Provides a set of assertion tests
    buffer	          To handle binary data
    child_process	    To run a child process
    cluster	          To split a single Node process into multiple processes
    crypto	          To handle OpenSSL cryptographic functions
    dgram	            Provides implementation of UDP datagram sockets
    dns	              To do DNS lookups and name resolution functions
    domain	          Deprecated. To handle unhandled errors
    events	          To handle events
    fs	              To handle the file system
    http	            To make Node.js act as an HTTP server
    https	            To make Node.js act as an HTTPS server.
    net	              To create servers and clients
    os	              Provides information about the operation system
    path	            To handle file paths
    punycode	        Deprecated. A character encoding scheme
    querystring	      To handle URL query strings
    readline	        To handle readable streams one line at the time
    stream	          To handle streaming data
    string_decoder    To decode buffer objects into strings
    timers	          To execute a function after a given number of milliseconds
    tls	              To implement TLS and SSL protocols
    tty               Provides classes used by a text terminal
    url               To parse URL strings
    util	            To access utility functions
    v8	              To access information about V8 (the JavaScript engine)
    vm	              To compile JavaScript code in a virtual machine
    zlib	            To compress or decompress files
*/

////////////////////
// http
////////////////////
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


////////////////////
// fs | file-system
////////////////////
const fs = require('fs');
const data = "Demo text data";

fs.writeFile("data.txt", data, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  }
})

fs.readFile("data.txt", (err, data) => {
  if (!err) {
    console.log(data.toString());
  } else {
    console.log(err);
  }
})


////////////////////
// Events
////////////////////
const EventEmitter = require("events");

const eventEmitter = new EventEmitter();
const eventHandler = (...params) => {
  // do something
  console.log(params);
}

eventEmitter.on("EVENT_NAME", eventHandler);
eventEmitter.emit("EVENT_NAME", { param1: "item" });
