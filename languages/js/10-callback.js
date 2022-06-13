/*
  callback
*/


function log(str) {
	console.log(str);
}

function getRandom(min=1, max=5) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function takeOrder(customer, callback) {
	log(`Take order from ${customer}`);
	callback(customer);
}

function processingOrder(customer, successCB, errorCB) {
	const waitTime = getRandom();
	log(`Take order from ${customer}, please wait ${waitTime}s.\n`);

	setTimeout(() => {
		const flag = (waitTime%2 !== 0)
      ? true
      : false;

		if (flag) {
			log(`${customer} order ready.`);
			successCB(customer);
		} else {
			errorCB(`${customer} order can't process!\nError!!\n`);
		}
	}, 1000*waitTime);
}

function processingError(err) {
	log(err);
}

function serveOrder(customer) {
	log(`${customer} order server.\ndone!\n`);
}


const order = (customer) => {
	takeOrder(customer, (customer) => {
		processingOrder(customer,
			(customer) => {
				serveOrder(customer);
			}, (err) => {
			processingError(err);
		})
	})
}


order('customer 01');
order('customer 02');
order('customer 03');
order('customer 04');
