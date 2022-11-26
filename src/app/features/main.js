import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  userPhoneNumber:'',
}

export const mainReducer = createSlice({
  name: 'token',
  initialState,
  reducers: {
  
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setUserPhoneNumber} = mainReducer.actions

export default mainReducer.reducer