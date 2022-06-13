// PROMISE

function log(str) {
	console.log(str);
}

function getRandom(min=1, max=5) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ========================================================
function takeOrder(customer) {
	log(`Take order from ${customer}`);
}

function processingOrder(customer) {
	const waitTime = getRandom();
	log(`Take order from ${customer}, please wait ${waitTime}s.\n`);

  return new Promise((res, rej) => {
    setTimeout(() => {
      const flag = (waitTime%2 !== 0)
        ? true
        : false;
  
      if (flag) {
        res(`✓: ${customer} order ready.`);
      } else {
        rej(`✗: ${customer} order can't processing!`);
      }
    }, 1000*waitTime);
  })
}

function serveOrder(customer) {
	log(`✓: ${customer} order server.`);
  log('✓: done!!\n');
}

function serveOrderError(customer) {
	log(`✗: ${customer} order can't serve!`);
  log('✗: Error!!\n');
}
// =======================================================

const order = (customer) => {
  takeOrder(customer);
  processingOrder(customer)
    .then(res => {
      log(res);
      serveOrder(customer);
    })
    .catch(err => {
      log(err);
      serveOrderError(customer);
    })
}


order('customer 01');
order('customer 02');
order('customer 03');
order('customer 04');
