const { createStore, combineReducers } = require("redux");
const {
  getProducts,
  addProduct,
  productReducer,

  getCarts,
  addCart,
  cartReducer
} = require("../../redducer");


// rootReducer
const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer
});

// create store
const store = createStore(rootReducer);


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct("pen"));
store.dispatch(addProduct("book"));

store.dispatch(getCarts());
store.dispatch(addCart("bag"));
