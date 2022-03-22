import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";
import MainNavigator from "./navigation/navigation";
import movieReducers from "./store/reducers/reducers";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

enableScreens();

const rootReducer = combineReducers({
  movies: movieReducers,
});

// Create a store - this is a variable that holds a store of the reducers
// it also has ReduxThunk middleware applied to it so we can do asynchronous calls with redux thunk
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "rob-reg": require("./assets/fonts/Roboto-Regular.ttf"),
    "rob-bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });
};

export default function App() {
  // used for loading fonts, load them once data is loaded
  const [fontLoaded, setFontLoaded] = useState(false);

  // Data not loaded, then fetch fonts, when finished load data
  // otherwise log an error to console
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
