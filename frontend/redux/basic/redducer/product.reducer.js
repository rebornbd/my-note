// constant | action type
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

// state
const initProductState = {
  products: [],
  count: 0
};

// action
const getProducts = () => {
  return {
    type: GET_PRODUCTS,
  }
}

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product
  }
}

// reducer
const productReducer = (state=initProductState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      }
    
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        count: state.count + 1
      }
    
    default:
      return state
  }
}


module.exports = {
  getProducts,
  addProduct,
  productReducer
};
