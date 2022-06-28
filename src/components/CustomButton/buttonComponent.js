import React, { Children } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator
} from "react-native"
import { colors } from "../../theme/color"

export const CustomButton = ({
  children,
  onPress = () => null,
  title,
  loading,
  ...props
}) => {
  return (
    <TouchableOpacity
      title={title}
      onPress={() => (props.disabled ? null : onPress())}
      style={styles(props).button}
    >
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles(props).buttonText}>{title ? title : children}</Text>
      )}
    </TouchableOpacity>
  )
}

const styles = props =>
  StyleSheet.create({
    button: {
      width: "100%",
      height: props.height ? props.height : 48,
      fontWeight: "500",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      borderRadius: 8,
      borderWidth: 1,
      borderColor: props.borderColor
        ? props.borderColor
        : props.backgroundColor
        ? props.backgroundColor
        : "#2E4660",
      backgroundColor: props.disabled
        ? "grey"
        : props.backgroundColor
        ? props.backgroundColor
        : "#fff"
    },
    buttonText: {
      color: props.color ? props.color : "#000000BF",
      fontWeight: "500"
    }
  })
