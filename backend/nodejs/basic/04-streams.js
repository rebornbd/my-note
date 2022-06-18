/*
  Streams are a way to handle reading/writing files, network communications, 
  or any kind of end-to-end information exchange in an efficient way.

  Streams Types:
    Readable
    Writable
    Duplex
    Transform
*/

////////////////////
// read streams
////////////////////
const fs = require("fs");

const readStream  = fs.createReadStream("./data/input.txt");
const writeStream = fs.createWriteStream("./data/output.txt");

// readStream.on('data', (chunk) => {
//   const currChunkData = chunk.toString();
//   writeStream.write(currChunkData);
// })
readStream.pipe(writeStream);
