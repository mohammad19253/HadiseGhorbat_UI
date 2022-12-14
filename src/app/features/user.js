import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: '',
  otp_id:'',
  phoneNumber:'09396380293',
  firstName:'mohammad',
  lastName:'mirzaei',
  id:'',
}

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
    setOtpId: (state, action) => {
      state.otp_id = action.payload
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
    setId: (state, action) => {
      state.id = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, setPhoneNumber, setFirstName, setLastName, setOtpId, setId} = userReducer.actions

export default userReducer.reducer