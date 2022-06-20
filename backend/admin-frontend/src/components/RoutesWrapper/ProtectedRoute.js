import React from "react"
import { Redirect, Route } from "react-router-dom"
import { userHasValidToken } from "../../api/auth"

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const hasValidToken = userHasValidToken()
        //TODO: Uncommen the null sign
        if (hasValidToken) {
          // is logged in
          return <Component {...props} {...rest} />
        } else {
          return <Redirect to="/login" />
        }
      }}
    />
  )
}

export default ProtectedRoute
