 const redux = require('redux');

 const ADD_ITEM_TO_CART = "cart/add";
 const REMOVE_ITEM_FROM_CART = "cart/remove";
 const CHECKOUT = "checkout";

 let defaultState = {
     cartItems: [],
     cartPrice: null
 }

 function shoppingReducer(state = defaultState, actiong){
     switch (actiong.type){
         case ADD_ITEM_TO_CART:
             return{
                 ...state,
                 cartItem: state.cartItem.concat(action.payload)
             }
            case REMOVE_ITEM_FROM_CART:
                return state
            case CHECKOUT:
                return state
            default:
                return state
     }
 }

 let store = redux.createStore(shoppingReducer)