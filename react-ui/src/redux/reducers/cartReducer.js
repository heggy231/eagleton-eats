const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
const CHECKOUT = "CHECKOUT";

let defaultState = {
  cartItems: [],
  cartPrice: null,
  //   cart: [
  //     {
  //       item: "",
  //       price: "",
  //     },
  //   ],
};

export default function shoppingReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItem: state.cartItem.concat(action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      return state;
    case CHECKOUT:
      return state;
    default:
      return state;
  }
}
