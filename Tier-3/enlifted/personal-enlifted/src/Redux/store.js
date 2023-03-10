import { configureStore } from '@reduxjs/toolkit'
import flowStepReducer from './reducers/flowStep.reducer'

const store = configureStore({
  reducer: { 
    flowStep: flowStepReducer,
  },
})

export default store;

