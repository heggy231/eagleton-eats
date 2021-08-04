// import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { applyMiddleware, compose, createStore } from "redux";
// import App from "../App";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
import cartReducer from "../redux/reducers/cartReducer";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
// import { foodApi } from "./services/api";

// export const store = configureStore({
//   reducer: {
//     [foodApi.reducerPath]: foodApi.reducer,
//   },

//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(foodApi.middleware),
// });

export const store = createStore(cartReducer);

setupListeners(store.dispatch);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
