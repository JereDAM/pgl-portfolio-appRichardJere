import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import InfoData from "../data/InfoData";

const InfoList = () => {
  return (
    <View style={styles.prueba}>
      <Text style={styles.infoTitle}>Cosas que me gustan mucho :</Text>
      <ScrollView style={styles.scrollStyle}>
        <InfoData></InfoData>
      </ScrollView>
    </View>
  );
};

export default InfoList;

const styles = StyleSheet.create({
  prueba: {
    flex: 1,
    marginBottom: -64,
  },
  infoTitle: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
  },
  scrollStyle: {
    padding: 10,
  },
});
