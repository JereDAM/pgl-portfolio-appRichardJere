import { StyleSheet, View } from "react-native";
import React from "react";
import QRCode from "react-native-qrcode-svg";
import Ionicons from '@expo/vector-icons/Ionicons';


const QRData = (props :{setIsCheckIcon : Function}) => {

  const {setIsCheckIcon} = props

  return (
    <View style={styles.bodyStyles}>
      <View style={styles.centerQRCode}>
        <QRCode value="https://github.com/JereDAM/pgl-portfolio-appRichardJere.git"/>
        <Ionicons name="arrow-back-outline" size={50} onPress={() => setIsCheckIcon(true)}/>
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
