import React from "react";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Body from "./components/Body";

export default function App() {
  const [isCheckIcon, setIsCheckIcon] = React.useState(true);
  const [displayMyQR, setDisplayMyQR] = useState(true);
  const onClickIcon = () => {
    setIsCheckIcon(false);
  };

  const onClickDarkIcon = () => {
    setIsCheckIcon(true);
  };

  return (
    <View style={styles.container}>
      <Header
        setDisplayMyQR={setDisplayMyQR}
        isCheckIcon={isCheckIcon}
        onClickIcon={onClickIcon}
        onClickDarkIcon={onClickDarkIcon}
      />
      <Body
        displayTheQR={displayMyQR}
        isCheckIcon={isCheckIcon}
      />
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
