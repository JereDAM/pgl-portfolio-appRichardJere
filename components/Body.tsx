import { StyleSheet, View } from "react-native";
import React from "react";
import { CardData, cardData } from "../data/CardData";
import InfoList from "./InfoList";
import Card from "./Card";
import QRCode from "react-native-qrcode-svg";
import QRData from "../data/QRData";

const Body = (props: { displayTheQR: Boolean }) => {
  const { displayTheQR } = props;
  return (
    <View>
      {displayTheQR ? (
        <View style={styles.bodyStyles}>
          {cardData.map((card: CardData) => (
            <Card avatar={card.image} title={card.title} body={card.body} />
          ))}
          <InfoList />
        </View>
      ) : (
        <QRData />
      )}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "space-between",
    height: "85%",
  },
});
