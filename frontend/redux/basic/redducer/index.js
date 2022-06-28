const {
  getProducts,
  addProduct,
  productReducer
} = require("./product.reducer");
const {
  getCarts,
  addCart,
  cartReducer
} = require("./cart.reducer");
const {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
  todosReducer
} = require("./todo.reducer");


module.exports = {
  getProducts,
  addProduct,
  productReducer,

  getCarts,
  addCart,
  cartReducer,

  getTodosRequest,
  getTodosSuccess,
  getTodosFailed,
  todosReducer
};
