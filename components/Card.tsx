import { StyleSheet, Text, View, Image, ImageProps } from "react-native";
import React from "react";

const Card = (props: { avatar: ImageProps; title: string; body: string }) => {
  const { avatar, title, body } = props;
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text>{body}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardContent: {
    margin: 8,
    backgroundColor: "lightgray",
    padding: 10,
    justifyContent: "center",
    borderRadius: 10,
    width: "70%",
  },
  cardTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
    marginLeft: 10,
  },
});
