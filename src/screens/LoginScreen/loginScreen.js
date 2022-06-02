import React, { useEffect, useState } from "react"
import {
  ScrollView,
  View,
  Text,
  Image,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  ImageBackground,
  Pressable
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

const LoginScreen = ({ route }) => {
  const [remember, setRemember] = useState(false)
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { onChange } = useContext(UserContext)

  const [studies, setStudies] = useState([{}, {}])
  const [selectedStudy, setSelectedStudy] = useState(null)

  const [isSelecting, setIsSelecting] = useState(false)

  useEffect(async () => {
    Persistence.getUserProfileData().then(data => {
      if (data?.study_id) {
        onChange(data)
        navigationService.replace(screenConstants.SettingsScreen)
      } else {
        getSudyIds()
      }
    })
  }, [])

  getSudyIds = () => {
    const onSuccess = async ({ data }) => {
      setIsLoading(false)
      console.log(data)
      setStudies(data)
      // Set JSON Web Token on success
      // setClientToken(data.token)
      // var profile = data.user
      // if (remember) {
      //   Persistence.setUserProfileData(profile)
      //   Persistence.setAccessToken(data.token)
      // }

      // onChange(profile)
    }

    const onFailure = error => {
      setIsLoading(false)
      console.log(error.response.data)
      error = error.response.data
      error = error[Object.keys(error)[0]]
      Alert.alert("Error", error[0])
    }

    // Show spinner when call is made
    setIsLoading(true)

    APIKit.get("/api/v1/studyid/").then(onSuccess).catch(onFailure)
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
        <Pressable
          style={{
            height: 48,
            backgroundColor: "#fff",
            borderRadius: 8,
            marginBottom: 48,
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 24,
            flexDirection: "row"
          }}
          onPress={() => setIsSelecting(!isSelecting)}
        >
          <CustomText
            text={!selectedStudy ? "Select Study ID" : selectedStudy.study_id}
            style={{ fontWeight: "500", fontSize: 16, color: "#000000BF" }}
          />
          {isSelecting ? (
            <CustomImage
              source={require("../../assets/chevron-up.png")}
              style={{ width: 28, height: 28 }}
            />
          ) : (
            <CustomImage
              source={require("../../assets/chevron-down.png")}
              style={{ width: 28, height: 28 }}
            />
          )}
          {isSelecting && (
            <ScrollView
              style={{
                width: "100%",
                maxHeight: 225,
                backgroundColor: "#fff",
                position: "absolute",
                borderTopWidth: 2,
                borderColor: "#C4C4C4BF",
                top: 48,
                left: 24,
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8
              }}
            >
              {studies.map((item, i) => (
                <Pressable
                  key={i}
                  style={{
                    height: 40,
                    width: "100%",
                    justifyContent: "center",
                    paddingLeft: 5
                  }}
                  onPress={() => {
                    setSelectedStudy(item)
                    setIsSelecting(!isSelecting)
                  }}
                >
                  <CustomText text={item.study_id} />
                </Pressable>
              ))}
            </ScrollView>
          )}
        </Pressable>
        {!isSelecting && (
          <CustomButton
            onPress={() => {
              selectedStudy &&
                navigationService.navigate(screenConstants.SignInScreen2, {
                  selectedStudy
                })
            }}
            title="Login to new Study"
          />
        )}
      </View>
    </ImageBackground>
    // <View style={styles.container}>
    //   <KeyboardAwareScrollView
    //     style={styles.containerWrapper}
    //   ></KeyboardAwareScrollView>
    // </View>
  )
}
export default LoginScreen
