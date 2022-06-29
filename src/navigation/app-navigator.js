import React from "react"
import NavigationStack from "./navigation-stack"
import { NavigationContainer } from "@react-navigation/native"
import navigationService from "./navigation-service"

const AppNavigator = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        navigationService.setTopLevelNavigator(navigatorRef)
      }}
    >
      <NavigationStack />
    </NavigationContainer>
  )
}

export default AppNavigator
