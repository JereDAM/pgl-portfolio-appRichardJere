import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

const JereInfoData = () => {
  return (
    <View>
      <View>
        <Text style={styles.likedInfo}>Los videojuegos</Text>
        <Text style={styles.likedInfo}>Frontend</Text>
        <Text style={styles.likedInfo}>XenoSeries</Text>
        <Text style={styles.likedInfo}>El piano</Text>
        <Text style={styles.likedInfo}>Salir con mis amigos</Text>
        <Text style={styles.likedInfo}>El anime</Text>
        <Text style={styles.likedInfo}>El tennis</Text>
        <Text style={styles.likedInfo}>Los juegos de cartas</Text>
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
    backgroundColor: "#34A39A",
    color: "white",
  },
});
