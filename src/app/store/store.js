import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import userReducer from '../features/user'
import stepperReducer from '../features/stepper'
import reserveReducer from '../features/reserve'
import drawerReducer from '../features/drawer'
import modalReducer from '../features/modal'
const reducers = combineReducers({
  user: userReducer,
  stepper:stepperReducer,
  reserves:reserveReducer,
  drawer:drawerReducer,
  modal:modalReducer,
});

export const makeStore = () =>
configureStore({
  reducer: reducers,
});

export const wrapper = createWrapper(makeStore);