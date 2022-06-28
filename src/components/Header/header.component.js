import React from "react"
import { View, Text, Pressable } from "react-native"
import { styles } from "./styles"
import { colors } from "../../theme/color"
import Menu from "react-native-vector-icons/FontAwesome"
import Back from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"
import screenConstants from "../../constants/screen-constants"

export const Header = ({ text, secondIcon, secondIconIcon, firstIcon }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.headerContainer}>
      <View style={styles.firstIcon}>
        {/* {firstIcon && navigation.canGoBack() ? (
          <Back
            name="chevron-back-outline"
            color={colors.primaryTextColor}
            size={22}
            onPress={navigation.goBack}
          />
        ) : (
          <Menu
            name="navicon"
            color={colors.primaryTextColor}
            size={22}
            onPress={navigation.openDrawer}
          />
        )} */}
      </View>

      <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>{text}</Text>
      </View>

      <View style={styles.secondIcon}>
        {/* {secondIcon ? (
          secondIconIcon ? (
            secondIconIcon
          ) : (
            <Menu
              onPress={() => navigation.navigate(screenConstants.ShopScreen)}
              name="shopping-bag"
              color={colors.primaryTextColor}
              size={22}
            />
          )
        ) : null} */}
      </View>
    </View>
  )
}
