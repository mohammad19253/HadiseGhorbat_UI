import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   days:[]
}

export const reserveReducer = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setDays: (state, action) => {
      state.days = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setDays,} = reserveReducer.actions

export default reserveReducer.reducer