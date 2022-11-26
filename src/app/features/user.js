import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  phoneNumber:'',
  firstName:'',
  lastName:'',
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setPhoneNumber, setFirstName, setLastName, } = userReducer.actions

export default userReducer.reducer