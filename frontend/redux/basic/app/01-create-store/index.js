const { createStore } = require("redux");
const {
  getProducts,
  addProduct,
  productReducer
} = require("../../redducer");


// create store
const store = createStore(productReducer);


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("pen"));
store.dispatch(addProduct("book"));
