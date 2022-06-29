import React from "react"
import { Redirect, Route } from "react-router-dom"
import { userHasValidToken } from "../../api/auth"

const PublicOnlyRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const hasValidToken = userHasValidToken()
        if (hasValidToken) {
          // is logged in
          return <Redirect to={"dashboard"} />
        } else {
          return <Component {...props} {...rest} />
        }
      }}
    />
  )
}

export default PublicOnlyRoute
