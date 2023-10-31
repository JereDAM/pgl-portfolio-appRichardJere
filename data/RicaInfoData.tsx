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
  return (
    <View>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        Las Mancuernas
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        Las Barras
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        La Banca
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        Hacer Pecho
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        One Piece
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        El anime
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        BERSERK
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        La Proteína
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
      >
        La hipertrofia muscular
      </Text>
      <Text
        style={[styles.likedInfo, { backgroundColor: infoDataBackgroundColor }]}
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
