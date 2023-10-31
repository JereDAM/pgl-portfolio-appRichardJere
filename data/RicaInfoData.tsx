import { StyleSheet, Text, View } from "react-native";
import React from "react";
import appColors from "../assets/styles/appColors";

const RicaInfoData = (props: {
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
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        Las Mancuernas
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        Las Barras
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La Banca
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        Hacer Pecho
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        One Piece
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        El anime
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        BERSERK
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La hipertrofia muscular
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor, borderColor : infoDataBorderColor }]}
      >
        La Proteína Gorda
      </Text>
    </View>
  );
};

export default RicaInfoData;

const styles = StyleSheet.create({
  scrollStyle: {
    padding: 20,
  },
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
