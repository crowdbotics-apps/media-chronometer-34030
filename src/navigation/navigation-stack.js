import React, { useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { enableScreens } from "react-native-screens"
import { screenConstants } from "constants"

import LoginScreen from "../screens/LoginScreen/loginScreen"

import { UserContext } from "../store/UserContext"

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
          name={screenConstants.HomePageScreen}
          options={{
            headerShown: false
          }}
          component={HomePageBottom}
        />
      </Stack.Navigator>
    </UserContext.Provider>
  )
}

/**************************************************/
/************ Home Page Bottom Tab ************/
/**************************************************/

const HomePageBottom = () => {
  return (
    <UserContext.Consumer>
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
      </Stack.Navigator>
    </UserContext.Consumer>
  )
}

export default AppStack
