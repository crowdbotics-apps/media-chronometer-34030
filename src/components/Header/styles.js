import { StyleSheet } from "react-native"
import { colors } from "../../theme/color"

export const styles = StyleSheet.create({
  headerContainer: {
    height: 59,
    backgroundColor: "#FFFBFE",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  firstIcon: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTextContainer: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    color: "#1C1B1F",
    fontSize: 18,
    fontWeight: "700"
  },
  secondIcon: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  }
})
