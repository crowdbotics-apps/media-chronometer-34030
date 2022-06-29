import React from "react"
import { Image } from "react-native"
import propTypes from "prop-types"

export const CustomImage = props => {
  const { uri, resizeMode } = props
  console.log("we", uri)
  return (
    <>
      <Image source={{ uri }} resizeMode={resizeMode} {...props} />
    </>
  )
}

CustomImage.propTypes = {
  uri: propTypes.string.isRequired
}
