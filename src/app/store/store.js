import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import userReducer from '../features/user'
import stepperReducer from '../features/stepper'
import  reserveReducer from '../features/reserve'
// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, reducers)
const reducers = combineReducers({
  user: userReducer,
  stepper:stepperReducer,
  reserve:reserveReducer,
});

const masterReducer = (state, action) => {
  if (action.type === HYDRATE) {
      const nextState = {
          ...state, // use previous state
          counter: {
              count: state.counter.count + action.payload.counter.count,
          },
          users: {
              users: [...action.payload.users.users, ...state.users.users]
          }
      }
      return nextState;
  } else {
  return reducers(state, action)
}
}

export const makeStore = () =>
configureStore({
  reducer: masterReducer,
});

export const wrapper = createWrapper(makeStore);