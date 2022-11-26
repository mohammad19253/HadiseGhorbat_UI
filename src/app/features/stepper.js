import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    step:0,
    steps: ['تلفن همراه','کد تایید','نام و نام خانوادگی','انتخاب تاریخ', 'پایان']

}

export const stepperReducer = createSlice({
  name: 'stepper',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setSteps: (state, action) => {
        state.steps = action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { setStep, setSteps,} = stepperReducer.actions

export default stepperReducer.reducer