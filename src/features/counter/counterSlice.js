import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    Increment: (state) => {
      state.value += 1
    },
    Decrement: (state) => {
      state.value -= 1
    },
    IncrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { Increment, Decrement, IncrementByAmount } = counterSlice.actions

export default counterSlice.reducer