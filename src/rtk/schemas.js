import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../apis/apiClient";

const initialState = {
  loading: false,
  schemas: [],
  error: "",
};

export const fetchSchemas = createAsyncThunk(
  "schemas/fetchSchemas",
  async () => {
    const response = await apiClient.get("/catalog");
    return response.data;
  }
);

export const schemasSlice = createSlice({
  name: "schemas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSchemas.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSchemas.fulfilled, (state, action) => {
        state.loading = false;
        state.schemas = action.payload;
        state.error = "";
      })
      .addCase(fetchSchemas.rejected, (state, action) => {
        state.loading = false;
        state.schemas = [];
        state.error = action.error.message;
      });
  },
});


export default schemasSlice.reducer;
