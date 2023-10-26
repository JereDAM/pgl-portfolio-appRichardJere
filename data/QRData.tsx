import { StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";

const QRData = () => {
  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQRCode}>
        <QRCode value="https://github.com/adhernea" />
      </View>
    </View>
  );
};

export default QRData;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "space-between",
    height: "85%",
  },
  centerQRCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
