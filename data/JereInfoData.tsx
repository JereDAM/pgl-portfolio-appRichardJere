import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const JereInfoData = (props: {
  isCheckIcon: boolean;
}) => {
  const { isCheckIcon } = props;
  const infoDataBackgroundColor = isCheckIcon
    ? appColors.infoDataColor
    : "#3b3b3b";
  return (
    <View>
      <View>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>Los videojuegos</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>Frontend</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>XenoSeries</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>El piano</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>Salir con mis amigos</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>El anime</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>El tennis</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}>Los juegos de cartas</Text>
      </View>
    </View>
  );
};

export default JereInfoData;

const styles = StyleSheet.create({
  likedInfo: {
    borderColor: "#00FFE5",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    color: "white",
  },
});
