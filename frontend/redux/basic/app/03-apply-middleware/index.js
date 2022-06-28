////////////////////
// logger middleware | log store
////////////////////
const { createStore, combineReducers, applyMiddleware } = require("redux");
const { logger } = require("redux-logger");
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
const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);


store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getCarts());
store.dispatch(addCart("bag"));
