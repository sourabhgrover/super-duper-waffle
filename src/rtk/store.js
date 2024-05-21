import { configureStore } from '@reduxjs/toolkit'
import schemasReducer from './schemas'
import tableListReducer from "./tableList"

const store = configureStore({
  reducer: {
    schemas: schemasReducer,
    tableList: tableListReducer,
  }
})

export default store