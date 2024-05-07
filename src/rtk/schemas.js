import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import apiClient from '../apis/apiClient'

const initialState = {
    loading: false,
    users: [],
    error: ''
  }

//   createAsyncThunk('',async ()=>{
//     const response = await apiClient.get(userId)
//     return response.data
//   })

export const schemasSlice = createSlice({
  name: 'schemas',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = schemasSlice.actions

export default schemasSlice.reducer