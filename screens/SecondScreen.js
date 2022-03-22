import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import colors from "../constants/colors";
import { CLASS } from "../data/dummy";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/UI/HeaderButton";

const SecondScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.moviesHeader}>Entertainment</Text>
        <FlatList
          data={CLASS}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              // put everything, including views to style in the carousel
              <View style={styles.viewContainer}>
                {/* When pressed, go to information page! */}
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={styles.image}
                    source={{ uri: itemData.item.url }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
        <Text style={styles.moviesHeader}>Entertainment</Text>
        <FlatList
          data={CLASS}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={(itemData) => {
            return (
              // put everything, including views to style in the carousel
              <View style={styles.viewContainer}>
                {/* When pressed, go to information page! */}
                <TouchableOpacity onPress={() => {}}>
                  <Image
                    style={styles.image}
                    source={{ uri: itemData.item.url }}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.p5,
    flex: 1,
  },
  moviesHeader: {
    textAlign: "left",
    paddingLeft: 20,
    marginTop: 10,
    fontSize: 22,
    fontFamily: "rob-bold",
    color: colors.p3,
  },
  viewContainer: {
    height: 200,
    width: 125,
    marginVertical: 5,
    marginHorizontal: 3,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
});

SecondScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Netflix 2",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={
            Platform.OS === "android" ? "md-person" : "ios-person-outline"
          }
          onPress={() => {}}
        />
      </HeaderButtons>
    ),
  };
};

export default SecondScreen;
