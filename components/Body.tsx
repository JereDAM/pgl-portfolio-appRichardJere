import { StyleSheet, View } from "react-native";
import React from "react";
import { CardData, cardData } from "../data/CardData";
import JereInfoList from "./JereInfoList";
import JereCard from "./JereCard";
import RicaInfoList from "./RicaInfoList";
import RicaCard from "./RicaCard";

const Body = (props: {
  displayTheQR: Boolean;
  isCheckIcon: boolean;
}) => {
  const { displayTheQR, isCheckIcon } = props;

  const cardDataId1 = cardData.find((portafolios) => portafolios.id === 1);
  const cardDataId2 = cardData.find((portafolios) => portafolios.id === 2);
  return (
    <View>
      {displayTheQR ? (
        <View style={styles.bodyStyles}>
          {cardDataId1 ? (
            <RicaCard
              avatar={cardDataId1.image}
              title={cardDataId1.title}
              body={cardDataId1.body}
              imageBackground={cardDataId1.imageBackground}
            />
          ) : null}
          <RicaInfoList
            isCheckIcon={isCheckIcon}
          />
        </View>
      ) : (
        <View style={styles.bodyStyles}>
          {cardDataId2 ? (
            <JereCard
              avatar={cardDataId2.image}
              title={cardDataId2.title}
              body={cardDataId2.body}
              imageBackground={cardDataId2.imageBackground}
            />
          ) : null}
          <JereInfoList />
        </View>
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
    marginTop: 10,
  },
});
