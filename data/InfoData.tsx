import { StyleSheet, Text, ScrollView, View } from "react-native";
import React from "react";

const InfoData = () => {
  return (
    <View>
      <Text style={styles.likedInfo}>Salir a pasear</Text>
      <Text style={styles.likedInfo}>Senderismo</Text>
      <Text style={styles.likedInfo}>Ir a la playita</Text>
      <Text style={styles.likedInfo}>Domingos de misa</Text>
      <Text style={styles.likedInfo}>La guitarrita</Text>
      <Text style={styles.likedInfo}>El monte con lluvia</Text>
      <Text style={styles.likedInfo}>Viajar</Text>
      <Text style={styles.likedInfo}>Música variadita</Text>
      <Text style={styles.likedInfo}>Anime</Text>
      <Text style={styles.likedInfo}>Ducharme</Text>
      <Text style={styles.likedInfo}>Videojuegos</Text>
      <Text style={styles.likedInfo}>Ir de cena romántica</Text>
    </View>
  );
};

export default InfoData;

const styles = StyleSheet.create({
  scrollStyle: {
    padding: 20,
  },
  likedInfo: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
  },
});
