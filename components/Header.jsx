import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import appColors from "../assets/styles/appColors";

const Header = ({
  setDisplayMyQR,
  isCheckIcon,
  onClickIcon,
  onClickDarkIcon,
}) => {
  const titleBackgroundColor = isCheckIcon ? appColors.headerColor : "black";
  const tabBackgroundColor = isCheckIcon ? appColors.tabgroupColor : "#1f1f1e";

  return (
    <View style={styles.topContainer}>
      <Text style={[styles.title, { backgroundColor: titleBackgroundColor }]}>
        My Portfolio App |
        <Ionicons
          name={isCheckIcon ? "moon-outline" : "sunny-outline"}
          size={25}
          onPress={isCheckIcon ? onClickIcon : onClickDarkIcon}
        ></Ionicons>
        |
      </Text>

      <View style={[styles.tabGroup, { backgroundColor: tabBackgroundColor }]}>
        <Pressable onPress={() => setDisplayMyQR(true)}>
          <Text style={styles.textFormat}>RICARDO</Text>
        </Pressable>
        <Pressable onPress={() => setDisplayMyQR(false)}>
          <Text style={styles.textFormat}>JEREMY</Text>
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
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
    fontSize: 30,
  },
  tabGroup: {
    flexDirection: "row",
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
