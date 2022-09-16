import { configureStore } from '@reduxjs/toolkit'
import mainUserReducer from '../features/mainUser'
import randomUserReducer from '../features/randomUser'

export const store = configureStore({
  reducer: {
      mainUser: mainUserReducer,
      randomUser: randomUserReducer,
  },
})