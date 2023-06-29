import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_admin_contentlist_category_list = createAsyncThunk(
  "categoryDatalistserializers/api_v1_admin_contentlist_category_list",
  async payload => {
    const response = await apiService.api_v1_admin_contentlist_category_list(
      payload
    )
    return response.data
  }
)
export const api_v1_admin_contentlist_category_read = createAsyncThunk(
  "categoryDatalistserializers/api_v1_admin_contentlist_category_read",
  async payload => {
    const response = await apiService.api_v1_admin_contentlist_category_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const categoryDatalistserializersSlice = createSlice({
  name: "categoryDatalistserializers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_admin_contentlist_category_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_contentlist_category_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_contentlist_category_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_contentlist_category_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_contentlist_category_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_contentlist_category_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_admin_contentlist_category_list,
  api_v1_admin_contentlist_category_read,
  slice: categoryDatalistserializersSlice
}
