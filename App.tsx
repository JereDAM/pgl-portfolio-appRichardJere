import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header setDisplayMyQR={setDisplayMyQR} />
      <Body displayTheQR={displayMyQR} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
