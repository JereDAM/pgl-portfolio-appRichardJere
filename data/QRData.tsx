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
          styles.QRCode,
          { backgroundColor: QrDataBackgroundColor },
        ]}
      >
        <Ionicons
          name="arrow-back-outline"
          size={70}
          onPress={() => setModalVisible(false)}
          style ={
            styles.arrowPosition
          }
        />
      <View style={styles.CenterQRCode}>
        <QRCode value="https://github.com/JereDAM/pgl-portfolio-appRichardJere.git"/>
      </View>
      </View>
    </View>
  );
};

export default QRData;

const styles = StyleSheet.create({
  bodyStyles: {
    width: "100%",
    height: "100%",
  },
  QRCode: {
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  arrowPosition: {
    flex: 1
  },
  CenterQRCode: {
    flex: 2,
    marginLeft: '40%',
    marginTop: '30%'

  }
});
