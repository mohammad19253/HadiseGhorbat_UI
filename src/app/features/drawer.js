import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  open:false,
 
}

export const drawerReducer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    setOpenDrawer: (state, action) => {
      state.open = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setOpenDrawer } = drawerReducer.actions

export default drawerReducer.reducer