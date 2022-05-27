import React, { useCallback, useEffect, useState } from "react"
import { useContext } from "react"
import {
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  Pressable,
  TouchableOpacity,
  FlatList,
  Modal,
  ImageBackground,
  SafeAreaView
} from "react-native"
import { CustomText } from "../../components/CustomText"
import { Header } from "../../components/Header/header.component"
import screenConstants from "../../constants/screen-constants"
import navigationService from "../../navigation/navigation-service"
import Icon from "react-native-vector-icons/FontAwesome"
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/EvilIcons"
import Icon3 from "react-native-vector-icons/Entypo"
import Icon4 from "react-native-vector-icons/Octicons"
import APIKit from "../../shared/APIKit"
import { UserContext } from "../../store/UserContext"
import { styles } from "./styles"
import { CustomImage } from "../../components/CustomImage"
import moment from "moment"
import { useFocusEffect } from "@react-navigation/native"
import { CustomButton } from "../../components/Button/buttonComponent"
import { SliderBox } from "react-native-image-slider-box"

const Home = props => {
  const [isLoading, setIsLoading] = useState(false)
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [isPopupModalVisible, setIsPopupModalVisible] = useState(false)
  const [isOptionModalVisible, setIsOptionModalVisible] = useState(false)
  const [isMultiModal, setIsMultiModal] = useState(false)

  const { user } = useContext(UserContext)

  const [activeTab, setActiveTab] = useState("community")
  const [community, setCommunity] = useState([])
  const [market, setMarket] = useState([])

  const [selectedItem, setSelectedItem] = useState({})
  const [selectedPopupImage, setSelectedPopupImage] = useState("")

  useFocusEffect(
    useCallback(() => {
      getCommunity()
      getMarket()
    }, [])
  )

  const getCommunity = () => {
    const onSuccess = async ({ data }) => {
      setIsLoading(false)
      setCommunity(data.results)
      console.log("my dash1", JSON.stringify(data))
    }

    const onFailure = error => {
      setIsLoading(false)
      console.log("my dash error", error.response)
      error = error.response.data
      error = error[Object.keys(error)[0]]
      Alert.alert("Community post", error[0])
    }

    // Show spinner when call is made
    setIsLoading(true)

    APIKit.get("/api/v1/community-post/").then(onSuccess).catch(onFailure)
  }

  const getMarket = () => {
    const onSuccess = async ({ data }) => {
      setIsLoading(false)
      setMarket(data.results)
      console.log("my dash2", JSON.stringify(data))
    }

    const onFailure = error => {
      setIsLoading(false)
      console.log("my dash error", error.response)
      error = error.response.data
      error = error[Object.keys(error)[0]]
      Alert.alert("Community post", error[0])
    }

    // Show spinner when call is made
    setIsLoading(true)

    APIKit.get("/api/v1/marketplace-post/").then(onSuccess).catch(onFailure)
  }

  const likePost = (id, flag) => {
    const payload = {
      post: id
    }
    const onSuccess = async ({ data }) => {
      console.log("react", data)
      setIsLoading(false)
      if (flag) {
        Alert.alert("Flag", "Post flagged by you!")
        setIsOptionModalVisible(false)
        if (isMultiModal) {
          setIsModalVisible(true)
          setIsMultiModal(false)
        }
      } else {
        if (activeTab == "community") {
          getCommunity()
        } else {
          getMarket()
        }
      }
    }

    const onFailure = error => {
      setIsLoading(false)
      console.log("my dash error", error.response)
      error = error.response.data
      error = error[Object.keys(error)[0]]
      Alert.alert("Like", error[0])
    }

    // Show spinner when call is made
    setIsLoading(true)

    APIKit.post(`/api/v1/${!flag ? "post/likes/" : "flag-post/"}`, payload)
      .then(onSuccess)
      .catch(onFailure)
  }

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab == "community"
              ? {
                  backgroundColor: "#CC5500",
                  borderTopRightRadius: 100,
                  borderBottomRightRadius: 100
                }
              : {}
          ]}
          onPress={() => setActiveTab("community")}
        >
          <CustomText
            style={
              activeTab == "community"
                ? { color: "#FBFBFB", fontWeight: "700" }
                : { color: "#2E4660B2" }
            }
            text="Community"
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab == "marketplace"
              ? {
                  backgroundColor: "#CC5500",
                  borderTopLeftRadius: 100,
                  borderBottomLeftRadius: 100
                }
              : {}
          ]}
          onPress={() => setActiveTab("marketplace")}
        >
          <CustomText
            style={
              activeTab == "marketplace"
                ? { color: "#FBFBFB", fontWeight: "700" }
                : { color: "#2E4660B2" }
            }
            text="Marketplace"
          />
        </TouchableOpacity>
      </View>
      <FlatList
        key={activeTab == "marketplace" ? 2 : 1}
        showsVerticalScrollIndicator={false}
        data={activeTab == "marketplace" ? market : community}
        numColumns={activeTab == "marketplace" ? 2 : 1}
        renderItem={({ item }) => {
          return activeTab == "marketplace" ? (
            <TouchableOpacity
              style={{
                width: "46%",
                height: 220,
                borderRadius: 6,
                margin: "2%",
                overflow: "hidden"
              }}
              onPress={() => {
                setSelectedItem(item)
                setIsModalVisible(true)
              }}
            >
              <CustomImage
                uri={item?.files.length !== 0 ? item?.files[0].file ?? "" : ""}
                resizeMode="center"
                style={{
                  width: "100%",
                  height: "100%"
                }}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.postList}>
              <View style={styles.imageContainer}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CustomImage
                    uri={item.user.profile_picture ?? ""}
                    resizeMode="contain"
                    style={styles.profileImage}
                  />
                  <CustomText text={item.user.name ?? "no_name"} />
                </View>
                <Icon3
                  name="dots-three-vertical"
                  onPress={() => {
                    setSelectedItem(item)
                    setIsOptionModalVisible(true)
                  }}
                  size={15}
                />
              </View>
              {/* <CustomImage
                uri={item?.files[0].file ?? ""}
                style={{ width: "100%", height: 146 }}
              /> */}
              <View
                style={{ height: 146, width: "100%", flexDirection: "row" }}
              >
                {item?.files.map((x, i) => (
                  <TouchableOpacity
                    style={{ flex: 1 }}
                    onPress={() => {
                      if (item?.files?.length > 1) {
                        setSelectedPopupImage(x.file)
                        console.log(x.file)
                        setIsPopupModalVisible(true)
                      }
                    }}
                  >
                    <CustomImage uri={x.file ?? ""} style={{ flex: 1 }} />
                  </TouchableOpacity>
                ))}
              </View>
              <View style={styles.data}>
                <CustomText
                  text={item?.title}
                  style={{ fontSize: 16, color: "#1C1B1F" }}
                />
                <CustomText
                  text={item?.description}
                  style={{ color: "#49454F", marginTop: 7 }}
                />
              </View>
              <View style={styles.reaction}>
                <TouchableOpacity
                  onPress={() => likePost(item.id)}
                  style={{ flexDirection: "row", alignItems: "center" }}
                >
                  <Icon1 name="like2" size={21} color="#333333" />
                  <CustomText text={item.likes_count} />
                </TouchableOpacity>
                <Icon2
                  name="comment"
                  size={21}
                  color="#333333"
                  onPress={() =>
                    navigationService.navigate(screenConstants.CommentScreen, {
                      item: item
                    })
                  }
                />
              </View>
              <View style={styles.commentsContainer}>
                <CustomText
                  style={{ color: "#49454F80", fontSize: 11.9 }}
                  text={`View all ${item?.comments.length} comments`}
                  onPress={() =>
                    navigationService.navigate(screenConstants.CommentScreen, {
                      item: item
                    })
                  }
                />
                {item?.comments.splice(0, 3).map((comment, i) => (
                  <View
                    key={i}
                    style={{ flexDirection: "row", alignItems: "center" }}
                  >
                    <CustomText
                      style={{
                        color: "#49454F",
                        fontWeight: "600",
                        marginRight: 6
                      }}
                      text={comment.user.name ?? "no_name"}
                    />
                    <CustomText
                      style={{ color: "#49454F", fontSize: 11.9 }}
                      text={comment.text}
                    />
                  </View>
                ))}
              </View>
              <View style={styles.footer}>
                <CustomText
                  text={moment(item?.created).fromNow()}
                  style={{ color: "#49454F80" }}
                />
              </View>
            </View>
          )
        }}
      />
      <TouchableOpacity
        onPress={() =>
          activeTab == "marketplace"
            ? navigationService.navigate(screenConstants.CreateMarketPostScreen)
            : navigationService.navigate(screenConstants.CreatePostScreen)
        }
        style={styles.floatingButton}
      >
        <Icon name="pencil" size={24} color="#fff" />
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "#00000080",
            alignItems: "center",
            justifyContent: "flex-end"
          }}
          onPress={() => {
            setIsModalVisible(false)
          }}
        >
          <Pressable
            style={{
              height: "70%",
              width: "95%",
              backgroundColor: "#FFFBFE",
              borderRadius: 12,
              overflow: "hidden"
            }}
          >
            <SliderBox
              images={
                selectedItem?.files &&
                selectedItem?.files.map(x => {
                  x = x.file
                  return x
                })
              }
              sliderBoxHeight={213}
              onCurrentImagePressed={index =>
                console.warn(`image ${index} pressed`)
              }
              dotColor="#FFEE58"
              inactiveDotColor="#90A4AE"
              paginationBoxVerticalPadding={20}
              autoplay
              circleLoop
              resizeMethod={"resize"}
              resizeMode={"cover"}
              paginationBoxStyle={{
                position: "absolute",
                bottom: 0,
                padding: 0,
                alignItems: "center",
                alignSelf: "center",
                justifyContent: "center",
                paddingVertical: 10
              }}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 0,
                padding: 0,
                margin: 0,
                backgroundColor: "#CC5500"
              }}
              ImageComponentStyle={{
                width: "100%"
              }}
              imageLoadingColor="#2196F3"
            />
            <TouchableOpacity
              style={{
                height: 32,
                width: 32,
                backgroundColor: "#2E4660",
                borderRadius: 16,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                left: 13,
                top: 17
              }}
              onPress={() => {
                setIsModalVisible(false)
              }}
            >
              <Icon name="arrow-left" color="#9CCED2" size={16} />
            </TouchableOpacity>

            <View style={styles.reaction}>
              <TouchableOpacity
                onPress={() => likePost(selectedItem?.id)}
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Icon1 name="like2" size={21} color="#333333" />
                <CustomText text={selectedItem?.likes_count} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flexDirection: "row", alignItems: "center" }}
              >
                <Icon name="bookmark-o" size={21} color="#333333" />
              </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <CustomImage
                  uri={selectedItem?.user?.profile_picture ?? ""}
                  resizeMode="contain"
                  style={styles.profileImage}
                />
                <CustomText text={selectedItem?.user?.name ?? "no_name"} />
              </View>

              <Icon3
                name="dots-three-vertical"
                size={15}
                onPress={() => {
                  setIsMultiModal(true)
                  setIsModalVisible(false)
                  setIsOptionModalVisible(true)
                }}
              />
            </View>
            <View style={styles.data}>
              <CustomText
                text={selectedItem?.title}
                style={{ fontSize: 24, color: "#2E4660" }}
              />
            </View>
            <View
              style={[
                styles.data,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "#646464"
                }
              ]}
            >
              <CustomText
                text="Description: "
                style={{ color: "#49454F", fontWeight: "700", fontSize: 16 }}
              />
              <CustomText
                text={selectedItem?.description}
                style={{ color: "#49454F", fontSize: 13 }}
              />
            </View>
            <View
              style={[
                styles.data,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  borderColor: "#646464"
                }
              ]}
            >
              <CustomText
                text="Condition: "
                style={{ fontWeight: "700", fontSize: 16 }}
              />
              <CustomText
                text={selectedItem?.condition}
                style={{ color: "#49454F", fontSize: 13 }}
              />
            </View>
            <View
              style={[
                styles.data,
                {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between"
                }
              ]}
            >
              <CustomText
                text={`$${selectedItem?.price}`}
                style={{ fontWeight: "700", fontSize: 24, color: "#CC5500" }}
              />
              <View style={{ width: "60%" }}>
                <CustomButton
                  onPress={() => {
                    setIsModalVisible(false)
                    navigationService.navigate(
                      screenConstants.CreateMessageScreen
                    )
                  }}
                  title="Send Message"
                />
              </View>
            </View>
          </Pressable>
        </Pressable>
      </Modal>

      <Modal visible={isPopupModalVisible} transparent={true}>
        <View style={{ flex: 1, backgroundColor: "rgba(0, 0, 0, 0.9)" }}>
          <SafeAreaView>
            <View style={{ height: "100%", width: "100%" }}>
              <View style={{ height: "85%", alignItems: "center" }}>
                <CustomImage
                  source={{ uri: selectedPopupImage ?? "" }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundColor: "purple",
                    borderRadius: 10
                  }}
                />
              </View>
              <View
                style={{
                  height: "15%",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "#fff"
                  }}
                  onPress={() => setIsPopupModalVisible(false)}
                >
                  CLOSE
                </Text>
              </View>
            </View>
          </SafeAreaView>
        </View>
      </Modal>

      <Modal visible={isOptionModalVisible} transparent={true}>
        <Pressable
          style={{
            height: "100%",
            width: "100%",
            backgroundColor: "#2E4660B8",
            justifyContent: "flex-end"
          }}
          onPress={() => {
            setIsOptionModalVisible(false)
            if (isMultiModal) {
              setIsModalVisible(true)
              setIsMultiModal(false)
            }
          }}
        >
          <View
            style={{
              height: 151,
              borderTopLeftRadius: 40,
              borderTopRightRadius: 40,
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                flex: 0.5,
                alignItems: "center"
              }}
              // onPress={onPressImagePicker}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 1,
                  borderColor: "#2E4660",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon1 name={"sharealt"} color="#2E4660" size={21} />
              </View>
              <CustomText
                text={`Share`}
                style={{ fontWeight: "500", color: "#2E4660", marginTop: 10 }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 0.5,
                alignItems: "center"
              }}
              onPress={() => likePost(selectedItem.id, true)}
            >
              <View
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 24,
                  borderWidth: 1,
                  borderColor: "#2E4660",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon4 name="report" color="#2E4660" size={21} />
              </View>
              <CustomText
                text={`Flag`}
                style={{ fontWeight: "500", color: "#2E4660", marginTop: 10 }}
              />
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  )
}
export default Home
