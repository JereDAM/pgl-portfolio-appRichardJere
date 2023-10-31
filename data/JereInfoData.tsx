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
    const infoDataBorderColor = isCheckIcon
    ? "#00FFE5"
    : "white";
  return (
    <View>
      <View>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>Los videojuegos</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>Frontend</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>XenoSeries</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>El piano</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>Salir con mis amigos</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>El anime</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>El tennis</Text>
        <Text style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor , borderColor : infoDataBorderColor}]}>Los juegos de cartas</Text>
      </View>
    </View>
  );
};

export default JereInfoData;

const styles = StyleSheet.create({
  likedInfo: {
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
