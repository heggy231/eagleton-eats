export const ADD_ITEM_TO_CART = "ADD_ITEM_TO_CART";
export const REMOVE_ITEM_FROM_CART = "REMOVE_ITEM_FROM_CART";
export const CHECKOUT = "CHECKOUT";

export const addToCart = (itemId) => {
  return {
    type: ADD_ITEM_TO_CART,
    payload: itemId,
  };
};

export const removeFromCart = (chartItemId) => {
  return {
    type: REMOVE_ITEM_FROM_CART,
    payload: chartItemId,
  };
};
