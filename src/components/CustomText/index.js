import React from "react"
import { Text, View } from "react-native"
import propTypes from "prop-types"

export const CustomText = props => {
  const { text, onPress } = props
  return (
    <>
      <Text
        onPress={onPress ? onPress : null}
        style={{ color: "#000" }}
        {...props}
      >
        {text}
      </Text>
    </>
  )
}

CustomText.propTypes = {
  text: propTypes.string.isRequired,
  onPress: propTypes.func
}
