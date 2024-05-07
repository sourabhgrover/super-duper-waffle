import { configureStore } from '@reduxjs/toolkit'
import schemasReducer from './schemas'

const store = configureStore({
  reducer: {
    schemas: schemasReducer,
  }
})

export default store