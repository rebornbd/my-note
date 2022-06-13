/*
  JS Asynchronous:
    (a) callback
    (b) promise
    (c) async & await
*/

const getRandom = (min=1, max=5) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const log = (str) => {
  console.log(str);
}

const logArr = (arr=[], str='') => {
  arr.forEach(a => {
    if (str.length > 0)
      log(`${str}: ${a}`);
    else log(`${a}`);
  })
}


// START callback
const takeOrder = (customer, callback) => {
  log(`take order from ${customer}`);
  callback(customer);
}
const processOrder = (customer, callback) => {
  log(`order processing for ${customer}\n`);
  setTimeout(() => {
    log(`cooking completed for ${customer}!`);
    callback(customer);
  }, getRandom()*1000);
}
const serveOrder = (customer) => {
  log(`order served ${customer}!`);
  log(`done\n`);
}
const order = (customer) => {
  takeOrder(customer, (customer) => {
    processOrder(customer, (customer) => {
      serveOrder(customer);
    })
  });
}

// order("customer 01");
// order("customer 02");
// order("customer 03");
// END callback


// START promise
const takeOrder1 = (customer) => {
  log(`take order from ${customer}`);
}
const processOrder1 = (customer) => {
  const seconds = getRandom();
  log(`${customer} order processing, please wait ${seconds}s\n`);
  
  return new Promise((res, rej) => {
    const flag = (seconds%2 !== 0)
      ? true
      : false;
    
    setTimeout(() => {
      if(flag)
        res(`${customer} cooking completed!`);
      else
        rej(`${customer} cooking can't processing`);
    }, seconds*1000);
  });
}
const serveOrder1 = (customer) => {
  log(`order served ${customer}!`);
  log(`done\n`);
}
const order1 = (customer) => {
  takeOrder1(customer);
  processOrder1(customer)
    .then(res => {
      log(res);
      serveOrder1(customer);
    })
    .catch(err => {
      log(`Error: ${err}\n`);
    })
}

order1('customer 1');
order1('customer 2');
order1('customer 3');
// END promise



// START async & await
const takeOrder2 = (customer) => {
  log(`take order from ${customer}`);
}
const processOrder2 = async (customer) => {
  const seconds = getRandom();
  log(`${customer} order processing, please wait ${seconds}s\n`);
  
  return new Promise((res, rej) => {
    const flag = (seconds%2 !== 0)
      ? true
      : false;
    
    setTimeout(() => {
      if(flag)
        res(`${customer} cooking completed!`);
      else
        rej(`${customer} cooking can't processing`);
    }, seconds*1000)
  });
}
const serveOrder2 = (customer) => {
  log(`order served ${customer}!`);
  log(`done\n`);
}
const order2 = async (customer) => {
  try {
    takeOrder2(customer);
    const processOrderData = await processOrder2(customer);
    log(processOrderData);
    serveOrder2(customer);
  } catch(err) {
    log(`Error: ${err}\n`);
  }
}

// order2('customer 1');
// order2('customer 2');
// order2('customer 3');
// END async & await
