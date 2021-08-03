import { GET_ORDER } from "../actions/actionTypes";

const initialState = "";

export default function (state = initialState, action) {
  if (action.type == GET_ORDER) {
    return action.payload.orders;
  }
  return state;
}
