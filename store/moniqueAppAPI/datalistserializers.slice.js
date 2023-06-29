import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_admin_category_datalist_list = createAsyncThunk(
  "datalistserializers/api_v1_admin_category_datalist_list",
  async payload => {
    const response = await apiService.api_v1_admin_category_datalist_list(
      payload
    )
    return response.data
  }
)
export const api_v1_admin_category_datalist_read = createAsyncThunk(
  "datalistserializers/api_v1_admin_category_datalist_read",
  async payload => {
    const response = await apiService.api_v1_admin_category_datalist_read(
      payload
    )
    return response.data
  }
)
export const api_v1_admin_datalist_list = createAsyncThunk(
  "datalistserializers/api_v1_admin_datalist_list",
  async payload => {
    const response = await apiService.api_v1_admin_datalist_list(payload)
    return response.data
  }
)
export const api_v1_admin_datalist_read = createAsyncThunk(
  "datalistserializers/api_v1_admin_datalist_read",
  async payload => {
    const response = await apiService.api_v1_admin_datalist_read(payload)
    return response.data
  }
)
export const api_v1_category_with_asc_or_desc_list = createAsyncThunk(
  "datalistserializers/api_v1_category_with_asc_or_desc_list",
  async payload => {
    const response = await apiService.api_v1_category_with_asc_or_desc_list(
      payload
    )
    return response.data
  }
)
export const api_v1_category_with_asc_or_desc_read = createAsyncThunk(
  "datalistserializers/api_v1_category_with_asc_or_desc_read",
  async payload => {
    const response = await apiService.api_v1_category_with_asc_or_desc_read(
      payload
    )
    return response.data
  }
)
export const api_v1_datalist_list = createAsyncThunk(
  "datalistserializers/api_v1_datalist_list",
  async payload => {
    const response = await apiService.api_v1_datalist_list(payload)
    return response.data
  }
)
export const api_v1_datalist_create = createAsyncThunk(
  "datalistserializers/api_v1_datalist_create",
  async payload => {
    const response = await apiService.api_v1_datalist_create(payload)
    return response.data
  }
)
export const api_v1_datalist_read = createAsyncThunk(
  "datalistserializers/api_v1_datalist_read",
  async payload => {
    const response = await apiService.api_v1_datalist_read(payload)
    return response.data
  }
)
export const api_v1_search_by_list = createAsyncThunk(
  "datalistserializers/api_v1_search_by_list",
  async payload => {
    const response = await apiService.api_v1_search_by_list(payload)
    return response.data
  }
)
export const api_v1_search_by_read = createAsyncThunk(
  "datalistserializers/api_v1_search_by_read",
  async payload => {
    const response = await apiService.api_v1_search_by_read(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const datalistserializersSlice = createSlice({
  name: "datalistserializers",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_admin_category_datalist_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_category_datalist_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_category_datalist_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_category_datalist_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_category_datalist_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_category_datalist_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_datalist_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_datalist_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_datalist_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_datalist_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_admin_datalist_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_admin_datalist_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_category_with_asc_or_desc_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_category_with_asc_or_desc_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_category_with_asc_or_desc_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_category_with_asc_or_desc_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_category_with_asc_or_desc_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_category_with_asc_or_desc_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datalist_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datalist_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_datalist_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_datalist_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_search_by_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_search_by_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_search_by_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_search_by_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_search_by_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_search_by_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_admin_category_datalist_list,
  api_v1_admin_category_datalist_read,
  api_v1_admin_datalist_list,
  api_v1_admin_datalist_read,
  api_v1_category_with_asc_or_desc_list,
  api_v1_category_with_asc_or_desc_read,
  api_v1_datalist_list,
  api_v1_datalist_create,
  api_v1_datalist_read,
  api_v1_search_by_list,
  api_v1_search_by_read,
  slice: datalistserializersSlice
}
