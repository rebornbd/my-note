// constant | action type
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// state
const initCartState = {
  items: [],
  count: 0
};

// action
const getCarts = () => {
  return {
    type: GET_CARTS,
  }
}

const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product
  }
}

// reducer
const cartReducer = (state=initCartState, action) => {
  switch (action.type) {
    case GET_CARTS:
      return {
        ...state,
      }
    
    case ADD_CART:
      return {
        items: [...state.items, action.payload],
        count: state.count + 1
      }
    
    default:
      return state
  }
}


module.exports = {
  getCarts,
  addCart,
  cartReducer
};
