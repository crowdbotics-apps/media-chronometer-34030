import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40
  },
  containerWrapper: {
    flex: 1,
    paddingTop: 25
  },
  innerContainer: {
    flex: 1,
    marginBottom: "auto",
    marginTop: "auto",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    height: 200,
    width: 110
  },
  loginText: {
    fontSize: 34,
    width: "100%",
    paddingTop: 40,
    color: "#2C2C2C",
    paddingLeft: 2,
    fontWeight: "700",
    height: 120
  },
  inputContainer: {
    width: "100%",
    justifyContent: "space-between"
  },
  rememberMeAndForgetpassword: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  checkBox: {
    width: "50%",
    alignItems: "flex-start",
    justifyContent: "flex-start"
  },
  forgetPassword: {
    marginTop: 30,
    color: "#2E4660",
    fontSize: 15
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14
  },
  button: {
    width: 150
  },
  createAccount: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    paddingBottom: 70
  },
  text: {
    color: "#A1A1A1",
    fontSize: 12
  },
  createAccountText: {
    color: "#EE4137",
    fontSize: 12
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
    marginBottom: 50
  },
  tab: {
    height: "100%",
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8
  },
  socialIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#79747E",
    marginVertical: 10
  }
})
