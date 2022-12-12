import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   days:[],
   reservedDays:[]
}

export const reserveReducer = createSlice({
  name: 'reserves',
  initialState,
  reducers: {
    setDays: (state, action) => {
      state.days = action.payload
    },
    setReservedDays: (state, action) => {
      state.reservedDays = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setDays, setReservedDays} = reserveReducer.actions

export default reserveReducer.reducer