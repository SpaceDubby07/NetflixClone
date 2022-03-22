import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useSelector } from "react-redux";
import colors from "../constants/colors";

const DetailsScreen = (props) => {
  // render individual movie data
  const movieId = props.navigation.getParam("movieId");
  const selectedMovie = useSelector((state) =>
    state.movies.availableMovies.find((mov) => mov.id === movieId)
  );

  return (
    <View style={styles.content}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedMovie.url }} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{selectedMovie.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.p5,
  },
  imageContainer: {
    height: 550,
    width: "100%",
    borderWidth: 6,
    padding: 8,
    backgroundColor: colors.p6,
    marginVertical: 10,
    borderRadius: 10,
  },
  image: {
    borderWidth: 4,
    borderColor: "black",
    height: "100%",
    width: "100%",
  },
  descriptionContainer: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  description: {
    fontFamily: "rob-reg",
    fontSize: 16,
    color: colors.p6,
  },
});

DetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam("movieTitle"),
  };
};

export default DetailsScreen;
