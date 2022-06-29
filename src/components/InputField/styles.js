import { StyleSheet } from "react-native"
import { colors } from "../../theme/color"
export const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#0000001F",
    height: 54
  },
  errorMessage: {
    position: "absolute",
    color: "#EE4137",
    paddingBottom: 10,
    fontSize: 13,
    bottom: -3
  },
  container: {
    paddingHorizontal: 0,
    borderRadius: 3,
    marginBottom: 3
  },
  main: {
    position: "relative",
    marginBottom: 10
  }
})
