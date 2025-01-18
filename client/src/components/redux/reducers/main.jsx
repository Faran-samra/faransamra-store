import { getProductReducer } from "./productReducer";
import { combineReducers } from 'redux';

const rootreducers = combineReducers({
    getProductdata: getProductReducer,
});

export default rootreducers;
