const axios = require('axios');


const fetchData = async (id=1) => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = res?.data;

    return data;
  } catch(err) {
    return Promise.reject(err);
  }
}

const forEach = (items=[], callback) => {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}


module.exports = {
  fetchData,
  forEach
};
