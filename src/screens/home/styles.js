import { StyleSheet } from "react-native"
import { colors } from "../../theme/color"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E4660"
  },
  title: {
    color: colors.primaryTextColor,
    fontWeight: "700",
    fontSize: 24
  },
  label: {
    color: colors.secondaryTextColor,
    fontWeight: "400",
    fontSize: 16
  },
  tabContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FBFBFB",
    borderRadius: 8,
    height: 32,
    marginTop: 20,
    marginBottom: 50,
    marginHorizontal: 10
  },
  tab: {
    height: "100%",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  floatingButton: {
    position: "absolute",
    height: 56,
    width: 56,
    borderRadius: 16,
    backgroundColor: "#CC5500",
    bottom: 40,
    right: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  postList: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 12,
    marginVertical: 5
  },
  imageContainer: {
    height: 40,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  data: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#6750A4",
    marginRight: 16
  },
  reaction: {
    marginVertical: 8,
    marginHorizontal: 16,
    width: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  footer: {
    marginVertical: 8,
    marginHorizontal: 16
  },
  commentsContainer: {
    marginHorizontal: 16
  }
})
