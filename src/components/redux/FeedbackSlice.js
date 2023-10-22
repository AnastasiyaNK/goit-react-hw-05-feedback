const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const feedBackSlise = createSlice({
  name: 'feedBack',
  initialState: INITIAL_STATE,
  reducers: {
    setGood(state, action) {
      state.good = action.payload;
    },
    setNeutral(state, action) {
      state.neutral = action.payload;
    },
    setBad(state, action) {
      state.bad = action.payload;
    },
  },
});

export const { setGood, setNeutral, setBad } = feedBackSlise.actions;

export const feedBackReducer = feedBackSlise.reducer;
