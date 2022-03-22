import React from "react";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MainScreen from "../screens/MainScreen";
import SecondScreen from "../screens/SecondScreen";
import DetailsScreen from "../screens/DetailsScreen";
import colors from "../constants/colors";
import { createDrawerNavigator, DrawerItems } from "react-navigation-drawer";

// This will create a stack navigator for two screens, bottom tabs
const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: colors.p5,
    shadowColor: colors.p6,
  },
  headerTitleStyle: {
    fontFamily: "rob-bold",
    fontSize: 26,
  },
  headerBackTitleStyle: {
    fontFamily: "rob-reg",
  },
  headerTintColor: Platform.OS === "android" ? colors.p2 : colors.p6,
  headerTitle: "App name here",
};

const ScreenNavigator = createStackNavigator(
  {
    Home: MainScreen,
    Details: DetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);
const ContentNavigator = createStackNavigator(
  {
    Content: SecondScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      screen: ScreenNavigator,
      navigationOptions: {
        drawerLabel: "Home",
      },
    },
    Content: {
      screen: ContentNavigator,
      navigationOptions: {
        drawerLabel: "Content",
      },
    },
  },
  {
    hideStatusBar: true,
    statusBarAnimation: true,
    drawerWidth: 200,
    drawerBackgroundColor: colors.p5,
    contentOptions: {
      activeTintColor: colors.p6,
      inactiveTintColor: colors.p6,
      labelStyle: {
        fontFamily: "rob-reg",
        fontSize: 18,
      },
    },
  }
);

// const OtherNavigator = createStackNavigator(
//   {
//     Second: {
//       screen: SecondScreen,
//     },
//   },
//   {
//     defaultNavigationOptions: defaultStackNavOptions,
//   }
// );

// // tabScreenConfig is the configuration for the bottom navigator tab
// const tabScreenConfig = {
//   // navigationOptions only matters if the navigator is nested
//   Main: {
//     screen: MainNavigator,
//     navigationOptions: {
//       tabBarLabel: "Main Screen",
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="home" size={24} color={tabInfo.tintColor} />;
//       },
//     },
//   },

//   Second: {
//     screen: OtherNavigator,
//     navigationOptions: {
//       tabBarLabel: "Second Screen",
//       tabBarIcon: (tabInfo) => {
//         return <Ionicons name="cart" size={24} color={tabInfo.tintColor} />;
//       },
//     },
//   },
// };

// const BottomTabNavigator =
//   Platform.OS === "android"
//     ? createMaterialBottomTabNavigator(tabScreenConfig, {
//         labeled: true,
//         barStyle: {
//           backgroundColor: colors.p1,
//           shadowColor: "transparent",
//         },
//       })
//     : createMaterialBottomTabNavigator(tabScreenConfig, {
//         labeled: true,
//         barStyle: {
//           shadowColor: "transparent",
//           backgroundColor: colors.p1,
//           paddingBottom: 25,
//         },
//       });

// use the MainNavigator as the main navigator
export default createAppContainer(MainNavigator);
