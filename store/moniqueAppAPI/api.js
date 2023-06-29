import axios from "axios"
const moniqueAppAPI = axios.create({
  baseURL: "https://media-chronometer-34030.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_admin_category_datalist_list(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_category_datalist/`)
}
function api_v1_admin_category_datalist_read(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_category_datalist/${payload.id}/`)
}
function api_v1_admin_contentlist_category_list(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_contentlist_category/`)
}
function api_v1_admin_contentlist_category_read(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_contentlist_category/${payload.id}/`)
}
function api_v1_admin_datalist_list(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_datalist/`)
}
function api_v1_admin_datalist_read(payload) {
  return moniqueAppAPI.get(`/api/v1/admin_datalist/${payload.id}/`)
}
function api_v1_admin_study_id_create(payload) {
  return moniqueAppAPI.post(`/api/v1/admin_study_id/`, payload.data)
}
function api_v1_admin_subject_id_create(payload) {
  return moniqueAppAPI.post(`/api/v1/admin_subject_id/`, payload.data)
}
function api_v1_adminlogin_create(payload) {
  return moniqueAppAPI.post(`/api/v1/adminlogin/`)
}
function api_v1_category_with_asc_or_desc_list(payload) {
  return moniqueAppAPI.get(`/api/v1/category_with_asc_or_desc/`)
}
function api_v1_category_with_asc_or_desc_read(payload) {
  return moniqueAppAPI.get(`/api/v1/category_with_asc_or_desc/${payload.id}/`)
}
function api_v1_datalist_list(payload) {
  return moniqueAppAPI.get(`/api/v1/datalist/`)
}
function api_v1_datalist_create(payload) {
  return moniqueAppAPI.post(`/api/v1/datalist/`, payload.data)
}
function api_v1_datalist_read(payload) {
  return moniqueAppAPI.get(`/api/v1/datalist/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return moniqueAppAPI.post(`/api/v1/login/`)
}
function api_v1_search_by_list(payload) {
  return moniqueAppAPI.get(`/api/v1/search_by/`)
}
function api_v1_search_by_read(payload) {
  return moniqueAppAPI.get(`/api/v1/search_by/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return moniqueAppAPI.post(`/api/v1/signup/`, payload.data)
}
function api_v1_studyid_list(payload) {
  return moniqueAppAPI.get(`/api/v1/studyid/`)
}
function api_v1_studyid_read(payload) {
  return moniqueAppAPI.get(`/api/v1/studyid/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_list(payload) {
  return moniqueAppAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/password/reset/confirm/`, payload.data)
}
function rest_auth_registration_create(payload) {
  return moniqueAppAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_registration_verify_email_create(payload) {
  return moniqueAppAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
function rest_auth_user_read(payload) {
  return moniqueAppAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return moniqueAppAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return moniqueAppAPI.patch(`/rest-auth/user/`, payload.data)
}
export const apiService = {
  api_v1_admin_category_datalist_list,
  api_v1_admin_category_datalist_read,
  api_v1_admin_contentlist_category_list,
  api_v1_admin_contentlist_category_read,
  api_v1_admin_datalist_list,
  api_v1_admin_datalist_read,
  api_v1_admin_study_id_create,
  api_v1_admin_subject_id_create,
  api_v1_adminlogin_create,
  api_v1_category_with_asc_or_desc_list,
  api_v1_category_with_asc_or_desc_read,
  api_v1_datalist_list,
  api_v1_datalist_create,
  api_v1_datalist_read,
  api_v1_login_create,
  api_v1_search_by_list,
  api_v1_search_by_read,
  api_v1_signup_create,
  api_v1_studyid_list,
  api_v1_studyid_read,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
