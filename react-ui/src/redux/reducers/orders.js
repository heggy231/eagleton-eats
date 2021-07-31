import { GET_ORDER } from '../actionTypes';

const initialState = '';

export default function(state=initialState, action){
    if (action.type == GET_ORDER){
        return action.payload.orders;
    }
    return state;
}