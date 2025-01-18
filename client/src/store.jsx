import { createStore, applyMiddleware } from "redux"; // Correctly import from redux
import { thunk } from 'redux-thunk'; // Use named import

import { composeWithDevTools } from "redux-devtools-extension"; // Ensure this import is correct
import rootReducers from "./components/redux/reducers/main"; // Adjust the path as necessary

const middleware = [thunk]; // Ensure middleware is defined correctly

const store = createStore(
    rootReducers,
    composeWithDevTools(applyMiddleware(...middleware)) // Correctly applying middleware
);

export default store; // Export the store
