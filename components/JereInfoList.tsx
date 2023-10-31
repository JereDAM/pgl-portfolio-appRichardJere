import { StyleSheet, Text, View, ScrollView, Modal, Alert } from "react-native";
import React, { useState } from "react";
import JereInfoData from "../data/JereInfoData";
import Ionicons from "@expo/vector-icons/Ionicons";
import QRData from "../data/QRData";
import appColors from "../assets/styles/appColors";

const JereInfoList = (props: {
  isCheckIcon: boolean;
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { isCheckIcon } = props;
  const infoListBackgroundColor = isCheckIcon ? appColors.principal : "black";
  const textColor = isCheckIcon ? "black" : "white";
  ;

  return (
    <View style={[styles.principalContainer , {backgroundColor: infoListBackgroundColor}]}>
      <Text style={[styles.infoTitle, { color: textColor }]}>Cosas que amo :</Text>
      <ScrollView style={styles.scrollStyle}>
        <JereInfoData  
        isCheckIcon={isCheckIcon}/>
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
          <QRData setModalVisible={setModalVisible}
          isCheckIcon={isCheckIcon} />
        </Modal>
        <Ionicons
          name="logo-github"
          color={textColor}
          size={80}
          onPress={() => setModalVisible(true)}
        ></Ionicons>
      </View>
    </View>
  );
};
export default JereInfoList;

const styles = StyleSheet.create({
  principalContainer: {
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
