const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");
const { counterReducer } = require("./redux/reducers/counterReducer");
import { combineReducers } from "redux";

// combine the reducer functions here

const reducers = combineReducers({
  counter: counterReducer,
  timer: timerReducer,
});

// add the root reducer function to store here
export const store = redux.createStore(reducers);
