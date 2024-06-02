import { configureStore } from '@reduxjs/toolkit'
import schemasReducer from './schemas'
import tableListReducer from "./tableList"
import { schedDetails } from './schemaDetails'

const store = configureStore({
  reducer: {
    schemas: schemasReducer,
    tableList: tableListReducer,
    schedDetails: schedDetails.reducer
  }
})

export default store