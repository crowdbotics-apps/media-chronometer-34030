import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_admin_study_id_create = createAsyncThunk(
  "studies/api_v1_admin_study_id_create",
  async payload => {
    const response = await apiService.api_v1_admin_study_id_create(payload)
    return response.data
  }
)
export const api_v1_studyid_list = createAsyncThunk(
  "studies/api_v1_studyid_list",
  async payload => {
    const response = await apiService.api_v1_studyid_list(payload)
    return response.data
  }
)
export const api_v1_studyid_read = createAsyncThunk(
  "studies/api_v1_studyid_read",
  async payload => {
    const response = await apiService.api_v1_studyid_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const studiesSlice = createSlice({
  name: "studies",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_admin_study_id_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_study_id_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_study_id_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studyid_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studyid_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_studyid_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_studyid_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_studyid_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_studyid_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_admin_study_id_create,
  api_v1_studyid_list,
  api_v1_studyid_read,
  slice: studiesSlice
}
