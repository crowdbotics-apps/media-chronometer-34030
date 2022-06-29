import { CommonActions } from "@react-navigation/native";

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params) {
  navigator.dispatch(
    CommonActions.navigate({
      name: routeName,
      params: params,
    })
  );
}

function replace(routeName) {
  navigator.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name: routeName }],
    })
  );
}

function goBack(key) {
  navigator.dispatch(
    CommonActions.goBack()
    // CommonActions.back({
    //   key: key,
    // }),
  );
}

export default {
  navigate,
  goBack,
  setTopLevelNavigator,
  replace,
};
