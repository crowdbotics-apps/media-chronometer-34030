import React from "react"
import { Input } from "react-native-elements"
import { Text, View } from "react-native"
import propTypes from "prop-types"
import { styles } from "./styles"
import EvilIcons from "react-native-vector-icons/EvilIcons"

// PLAIN INPUT WITHOUT FORMIK
export const InputField = props => {
  const {
    name,
    value,
    label,
    errorMsg,
    keyboardType,
    multiline,
    numberOfLines,
    containerStyles,
    inputContainerStyles,
    leftLabel,
    handleChange,
    rightIcon,
    LeftIcon,
    placeholder,
    disabled = false,
    isSecured,
    ...otherProps
  } = props

  return (
    <>
      <Input
        disabled={disabled}
        name={name}
        value={value}
        autoCapitalize={false}
        onChange={handleChange}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        placeholderTextColor="#00000066"
        keyboardType={keyboardType}
        secureTextEntry={isSecured}
        inputContainerStyle={{
          ...styles.inputContainer,
          ...inputContainerStyles
        }}
        containerStyle={{ ...styles.container, ...containerStyles }}
        errorStyle={{ color: "#EE4137", marginTop: 0 }}
        errorMessage={errorMsg}
        underlineColorAndroid="transparent"
        leftIcon={LeftIcon}
        rightIcon={rightIcon}
        labelStyle={{
          marginBottom: 8,
          fontSize: 14,
          fontWeight: "400",
          lineHeight: 24,
          letterSpacing: 0,
          color: "#2E4660"
        }}
        {...props}
        {...otherProps}
      />
    </>
  )
}

InputField.propTypes = {
  value: propTypes.string.isRequired,
  label: propTypes.string,
  isSecured: propTypes.string,
  keyboardType: propTypes.string,
  errorMsg: propTypes.string,
  containerStyles: propTypes.object,
  inputContainerStyles: propTypes.object
}
