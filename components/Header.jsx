import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const Header = ({ setDisplayMyQR }) => {
  return (
    <View style={styles.topContainer}>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.tabGroup}>
        <Pressable onPress={() => setDisplayMyQR(true)}>
          <Text style={styles.textFormat}>MI INFO</Text>
        </Pressable>
        <Pressable onPress={() => setDisplayMyQR(false)}>
          <Text style={styles.textFormat}>MI REPO</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  tabGroup: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "space-around",
    alignItems: "center",
    height: "50%",
    width: "100%",
  },
  textFormat: {
    color: "white",
    fontWeight: "bold",
  },
});
