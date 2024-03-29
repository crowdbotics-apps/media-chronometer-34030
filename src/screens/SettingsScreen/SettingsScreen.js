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
  Pressable,
  NativeModules,
  Platform,
  ToastAndroid
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
import BackgroundJob from "react-native-background-job"
import BackgroundTask from "react-native-background-task"

const backgroundJob = {
  jobKey: "myJob",
  job: async () => {
    const submitStat = data1 => {
      Persistence.getUserProfileData().then(data2 => {
        if (data2?.study_id) {
          data1.map(data => {
            const payload = {
              study_id: data2.study_id,
              subject_id: data2.subject_id,
              first_timestamp: data.first_timestamp,
              last_timestamp: data.last_timestamp,
              is_game: data?.is_game,
              content_title: data.name
            }
            const onSuccess = async ({ data }) => {
              console.log("success background", data)
            }

            const onFailure = error => {
              console.log("error background", error.response.data)
            }

            APIKit.post("/api/v1/datalist/", payload)
              .then(onSuccess)
              .catch(onFailure)
          })
        }
      })
    }
    if (Platform.OS == "android") {
      if (NativeModules.UsageStat.init()) {
        NativeModules.UsageStat.loadStatistics()
          .then(submitStat)
          .catch(r => console.error("error", r))
      }
    }
  }
}

BackgroundJob.register(backgroundJob)

const SettingsScreen = ({ route }) => {
  const [remember, setRemember] = useState(false)
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { onChange, user } = useContext(UserContext)

  const [studies, setStudies] = useState([])
  const [selectedStudy, setSelectedStudy] = useState(user)

  const [isSelecting, setIsSelecting] = useState(false)

  useEffect(() => {
    async function fetchData() {
      if (Platform.OS == "android") {
        if (NativeModules.UsageStat.init()) {
          NativeModules.UsageStat.loadStatistics()
            .then(d => console.log("sasasa", d))
            .catch(r => console.error("error", r))
        }
      } else if (Platform.OS == "ios") {
        NativeModules.RNUsage.open()
      }
    }
    fetchData()
    var backgroundSchedule = {
      jobKey: "myJob",
      period: 3600000
    }

    if (Platform.OS == "ios") {
    } else {
      BackgroundJob.schedule(backgroundSchedule)
        .then(() => console.log("Success"))
        .catch(err => console.err(err))
    }
  }, [])

  // const submitStat = data => {
  //   data.map(data => {
  //     const payload = {
  //       study_id: user.study_id,
  //       subject_id: user.subject_id,
  //       first_timestamp: data.first_timestamp,
  //       last_timestamp: data.last_timestamp,
  //       content_title: data.name
  //     }
  //     const onSuccess = async ({ data }) => {
  //       setIsLoading(false)
  //       console.log(data)
  //     }

  //     const onFailure = error => {
  //       setIsLoading(false)
  //       console.log(error.response.data)
  //       error = error.response.data
  //       error = error[Object.keys(error)[0]]
  //       Alert.alert("Error", error[0])
  //     }

  //     // Show spinner when call is made
  //     setIsLoading(true)

  //     APIKit.post("/api/v1/datalist/", payload).then(onSuccess).catch(onFailure)
  //   })
  // }

  useEffect(() => {
    getSudyIds()
  }, [])

  const getSudyIds = () => {
    const onSuccess = async ({ data }) => {
      setIsLoading(false)
      console.log(data)
      setStudies(data)
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

  // https://github.com/ciitamjadibraheem/UsageStats/blob/master/app/src/main/java/at/ciit/usagestats/MainActivity.java
  // https://ciit.at/android-usagestatsmanager/
  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <View>
        <View
          style={{
            backgroundColor: "#fff",
            marginTop: 6,
            paddingHorizontal: 12,
            paddingVertical: 24,
            justifyContent: "center",
            marginBottom: isSelecting ? 200 : 6
          }}
        >
          <Pressable
            style={{
              height: 48,
              backgroundColor: "#fff",
              borderRadius: 8,
              borderWidth: 0.5,
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
        </View>
        <View style={{ backgroundColor: "#fff", paddingHorizontal: 12 }}>
          <Pressable
            style={{
              backgroundColor: "#fff",
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
            onPress={() =>
              navigationService.navigate(screenConstants.PrivacyScreen)
            }
          >
            <CustomText text="Privacy Policy" />

            <CustomImage
              source={require("../../assets/arrow-right.png")}
              style={{ width: 16, height: 16 }}
            />
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#fff",
              paddingVertical: 12,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
            onPress={() =>
              navigationService.navigate(screenConstants.TermsScreen)
            }
          >
            <CustomText text="Terms & Conditions" />

            <CustomImage
              source={require("../../assets/arrow-right.png")}
              style={{ width: 16, height: 16 }}
            />
          </Pressable>
        </View>
        {Platform.OS == "ios" && (
          <CustomText
            style={{ textAlign: "center" }}
            text="Please authorize Family Control and that's all"
          />
        )}
      </View>
    </View>
  )
}
export default SettingsScreen
