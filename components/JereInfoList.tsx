import { StyleSheet, Text, View, ScrollView, Modal, Alert } from "react-native";
import React, { useState } from "react";
import JereInfoData from "../data/JereInfoData";
import Ionicons from "@expo/vector-icons/Ionicons";
import QRData from "../data/QRData";

const JereInfoList = () => {
  const [isCheckIcon, setIsCheckIcon] = React.useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const onClickIcon = () => {
    setIsCheckIcon(false);
  };
  return (
    <View style={styles.prueba}>
      <Text style={styles.infoTitle}>Cosas que amo :</Text>
      <ScrollView style={styles.scrollStyle}>
        <JereInfoData />
      </ScrollView>
      <View style={styles.icons}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <QRData setModalVisible={setModalVisible}></QRData>
        </Modal>
        <Ionicons
          name="logo-github"
          size={80}
          onPress={() => setModalVisible(true)}
        ></Ionicons>
      </View>
    </View>
  );
};
export default JereInfoList;

const styles = StyleSheet.create({
  prueba: {
    flex: 1,
    marginBottom: -100,
    width: 400,
    backgroundColor: "#2CC2B4",
  },
  infoTitle: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
  },
  scrollStyle: {
    padding: 10,
  },
  icons: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  QRdatas: {
    marginTop: -10,
  },
});
