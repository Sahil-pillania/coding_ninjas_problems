// define counter action constants here
export const INCREMENT = "increment";
export const DECREMENT = "decrement";
export const RESET_TIMER = "resetTimer";

// define counter action creators here

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const resetTimer = () => ({ type: RESET_TIMER });
