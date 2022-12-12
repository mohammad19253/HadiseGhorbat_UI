import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open:false,
}

export const modalReducer = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal: (state, action) => {
      state.open = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOpenModal } = modalReducer.actions

export default modalReducer.reducer