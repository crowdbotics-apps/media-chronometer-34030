import axios from "axios"
import ApiConfig from "../apis/api-config"
import screenConstants from "../constants/screen-constants"
import Persistence from "../helpers/persistence"
import navigationService from "../navigation/navigation-service"

// Create axios client, pre-configured with baseURL
let APIKit = axios.create({
  baseURL: ApiConfig.apiBaseURL,
  timeout: 10000
})

let myInterceptor = undefined

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  myInterceptor = APIKit.interceptors.request.use(function (config) {
    config.headers.Authorization = `Token ${token}`
    return config
  })
  APIKit.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if (error.response && error.response.status === 401) {
        navigationService.replace(screenConstants.SignInScreen)
        Persistence.clearPersistence()
        ejectClientToken()
      }
      return Promise.reject(error)
    }
  )
}

// Set JSON Web Token in Client to be included in all calls
export const ejectClientToken = () => {
  APIKit.interceptors.request.eject(myInterceptor)
}

export default APIKit
