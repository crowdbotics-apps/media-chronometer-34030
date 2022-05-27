import React, { useState } from "react"
import {
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  TextInput
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
import { CustomImage } from "../../components/CustomImage"

const LoginScreen2 = ({ route }) => {
  const { selectedStudy } = route.params

  const [remember, setRemember] = useState(false)
  const navigation = useNavigation()
  const [study_id, setStudyId] = useState(`#bfdss - ${selectedStudy}`)
  const [subject_id, setSubjectId] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { onChange } = useContext(UserContext)

  const onLogin = () => {
    navigationService.replace(screenConstants.SettingsScreen)
    return
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
      style={{ flex: 1, paddingHorizontal: 12, justifyContent: "center" }}
    >
      <View>
        <View style={{ height: 100, marginBottom: 72 }}>
          <CustomText
            style={{
              color: "#fff",
              textAlign: "center",
              fontSize: 36,
              fontWeight: "700"
            }}
            text={`Media\nChronometer`}
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <CustomText
            style={{
              fontWeight: "700",
              color: "#fff",
              fontSize: 13,
              marginBottom: 12
            }}
            text="Subject ID"
          />
          <TextInput
            style={{
              height: 40,
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              color: "#000000BF",
              borderRadius: 8
            }}
            placeholderTextColor="#000000BF"
            placeholder="Subject ID"
            value={subject_id}
            onChangeText={setSubjectId}
          />
        </View>
        <View style={{ marginBottom: 25 }}>
          <CustomText
            style={{
              fontWeight: "700",
              color: "#fff",
              fontSize: 13,
              marginBottom: 12
            }}
            text="Subject ID"
          />
          <TextInput
            style={{
              height: 40,
              backgroundColor: "#fff",
              paddingHorizontal: 20,
              color: "#000000BF",
              borderRadius: 8
            }}
            placeholderTextColor="#000000BF"
            placeholder="Subject ID"
            value={study_id}
            onChangeText={setStudyId}
            editable={false}
          />
        </View>
        <CustomButton onPress={onLogin} title="Login to new Study" />
      </View>
    </ImageBackground>
    // <View style={styles.container}>
    //   <KeyboardAwareScrollView
    //     style={styles.containerWrapper}
    //   ></KeyboardAwareScrollView>
    // </View>
  )
}
export default LoginScreen2
