// add counter action creators imports here
import { INCREMENT, DECREMENT, RESET_TIMER } from "../actions/counterActions";

const INITIAL_STATE = { count: 0 };

// define counter reducer function here
export const counterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return {
        count: state.count - 1,
      };
    case RESET_TIMER:
      return {
        count: 0,
      };
    default:
      return state;
  }
};
