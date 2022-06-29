import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { enableScreens } from "react-native-screens"
import { screenConstants } from "constants"

import LoginScreen from "../screens/LoginScreen/loginScreen"

import { UserContext } from "../store/UserContext"
import LoginScreen2 from "../screens/LoginScreen2/loginScreen2"
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen"
import PrivacyScreen from "../screens/PrivacyScreen/TermsScreen"
import TermsScreen from "../screens/TermsScreen/TermsScreen"

enableScreens()
const Stack = createStackNavigator()

const AppStack = () => {
  const [user, setUser] = useState({})

  const onChange = val => {
    console.log(val)
    setUser(val)
  }
  return (
    <UserContext.Provider value={{ user, onChange }}>
      <Stack.Navigator
        initialRouteName={screenConstants.SignUpScreen}
        screenOptions={{
          cardStyle: {
            backgroundColor: "#FFFFFF"
          }
        }}
      >
        <Stack.Screen
          name={screenConstants.SignInScreen}
          options={{
            headerShown: false
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name={screenConstants.SignInScreen2}
          options={{
            headerShown: false
          }}
          component={LoginScreen2}
        />
        <Stack.Screen
          name={screenConstants.TermsScreen}
          options={{
            title: "Terms & Conditions"
          }}
          component={TermsScreen}
        />
        <Stack.Screen
          name={screenConstants.PrivacyScreen}
          options={{
            title: "Privacy Policy"
          }}
          component={PrivacyScreen}
        />

        {/* Auth */}
        <Stack.Screen
          name={screenConstants.SettingsScreen}
          options={{
            title: "Settings"
          }}
          component={SettingsScreen}
        />
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

export default AppStack
