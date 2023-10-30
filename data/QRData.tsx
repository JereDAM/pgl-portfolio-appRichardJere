import { StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import Ionicons from "@expo/vector-icons/Ionicons";
import appColors from "../assets/styles/appColors";

const QRData = (props: {
  setModalVisible: Function;
  isCheckIcon: boolean;
}) => {
  const { setModalVisible, isCheckIcon} = props;
  const QrDataBackgroundColor = isCheckIcon ? appColors.principal : "#3b3b3b";
  return (
    <View style={styles.bodyStyles}>
      <View
        style={[
          styles.centerQRCode,
          { backgroundColor: QrDataBackgroundColor },
        ]}
      >
        <QRCode value="https://github.com/JereDAM/pgl-portfolio-appRichardJere.git" />
        <Ionicons
          name="arrow-back-outline"
          size={50}
          onPress={() => setModalVisible(false)}
        />
      </View>
    </View>
  );
};

export default QRData;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    justifyContent: "space-between",
    height: "100%",
  },
  centerQRCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
