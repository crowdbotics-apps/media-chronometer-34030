import React, { useState } from "react"
import {
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground
} from "react-native"
import { styles } from "./styles"
import { InputField } from "../../components/InputField/inputField.component"
import { CheckBox } from "react-native-elements"
import { CustomButton } from "../../components/CustomButton/buttonComponent"
import { useNavigation } from "@react-navigation/native"
import screenConstants from "../../constants/screen-constants"
import APIKit, { setClientToken } from "../../shared/APIKit"
import Persistence from "../../helpers/persistence"
import { useContext } from "react"
import { UserContext } from "../../store/UserContext"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import getProfileData from "../../apis/profile"
import { CustomText } from "../../components/CustomText"
import navigationService from "../../navigation/navigation-service"

const LoginScreen = ({ route }) => {
  const [remember, setRemember] = useState(false)
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [is_password_visible, setPasswordVisible] = useState(false)
  const { onChange } = useContext(UserContext)

  signinButtonPressed = () => {
    const payload = {
      email,
      password
    }

    const onSuccess = async ({ data }) => {
      setIsLoading(false)
      console.log(data)
      // Set JSON Web Token on success
      setClientToken(data.token)
      var profile = data.user
      if (remember) {
        Persistence.setUserProfileData(profile)
        Persistence.setAccessToken(data.token)
      }

      onChange(profile)
      navigation.reset({
        index: 0,
        routes: [{ name: screenConstants.HomePageScreen }]
      })
    }

    const onFailure = error => {
      setIsLoading(false)
      console.log(error.response.data)
      error = error.response.data
      error = error[Object.keys(error)[0]]
      Alert.alert("Login", error[0])
      if (error[0] == "Email address not verified")
        navigationService.navigate(screenConstants.TokenScreen, { email })
    }

    // Show spinner when call is made
    setIsLoading(true)

    APIKit.post("/api/v1/login/", payload).then(onSuccess).catch(onFailure)
  }

  return (
    <ImageBackground
      source={require("../../assets/splash.png")}
      style={{ width: "100%", height: "100%" }}
    ></ImageBackground>
    // <View style={styles.container}>
    //   <KeyboardAwareScrollView
    //     style={styles.containerWrapper}
    //   ></KeyboardAwareScrollView>
    // </View>
  )
}
export default LoginScreen
