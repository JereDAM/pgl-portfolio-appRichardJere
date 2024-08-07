import {
  StyleSheet,
  Text,
  View,
  ImageProps,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";

const JereCard = (props: {
  avatar: ImageProps;
  title: string;
  body: string;
  imageBackground: ImageProps;
}) => {
  const { avatar, title, body, imageBackground } = props;
  return (
    <View style={styles.cardContainer}>
      <ImageBackground
        source={imageBackground}
        style={styles.BackImage}
        resizeMode="cover"
      >
        <View style={styles.cardContent}>
          <Image style={styles.avatar} source={avatar} />
          <Text style={styles.cardTitle}>{title}</Text>
        </View>
        <Text style={styles.bodyText}>{body}</Text>
      </ImageBackground>
    </View>
  );
};

export default JereCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: -9,
  },
  cardContent: {
    margin: 8,
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    width: "70%",
    flexDirection: "row",
  },
  cardTitle: {
    fontWeight: "900",
    fontSize: 30,
    fontStyle: "italic",
    color: "white",
    paddingTop: 20,
    paddingLeft: 25,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  BackImage: {
    padding: 15,
    width: 400,
  },
  bodyText: {
    color: "white",
    fontWeight: "700",
    paddingLeft: 30,
    paddingRight: 30,
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
