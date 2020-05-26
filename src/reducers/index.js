import counterReducer from './counter';
import loggedReducer from './logged';
import { combineReducers } from "redux";

const allReducer=combineReducers({
    counter:counterReducer, //counterReducer as counter is just alias name to access it
    isLogged:loggedReducer
})

export default allReducer;