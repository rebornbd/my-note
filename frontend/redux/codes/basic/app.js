const {
  createStore,
  combineReducers,
  applyMiddleware
} = require("redux");
const { logger } = require("redux-logger");
const {
  getProducts,
  addProduct,
  productReducer,

  getCarts,
  addCart,
  cartReducer
} = require("./redducer");


const rootReducer = combineReducers({
  cart: cartReducer,
  product: productReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

store.subscribe(() => console.log(store.getState()));

store.dispatch(addProduct("pen"));
store.dispatch(addProduct("book"));
