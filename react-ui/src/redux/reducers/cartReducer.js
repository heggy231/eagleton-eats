import { foods } from "../../data/food";

import {
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CHECKOUT,
} from "../actions/cartActions";

let defaultState = {
  items: foods,
  cartItems: [],
};

export const calculateCartTotal = (cartItems, items) => {
  let sum = 0;

  cartItems.forEach((id) => {
    const item = findItemById(id, items);
    sum += +item.price;
  });

  return sum;
};

export const findItemById = (id, items) => {
  return items[id];
};

export default function shoppingReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: state.cartItems.concat(action.payload),
      };
    case REMOVE_ITEM_FROM_CART:
      console.log("remove - before", state);
      state.cartItems.splice(action.payload, 1);
      console.log ('remove - after', state)
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case CHECKOUT:
      return state;
    default:
      return state;
  }
}
