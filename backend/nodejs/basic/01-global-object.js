/*
  Global Objects are the objects that are available in all modules.
*/


////////////////////
// Global Objects
////////////////////
// setTimeout();
// clearTimeout();
// setInterval();
// clearInterval();

// global.setTimeout();
// global.clearTimeout();
// global.setInterval();
// global.clearInterval();

console.log(global);
global.setTimeout(() => { console.log("RUN!"); }, 1000);
