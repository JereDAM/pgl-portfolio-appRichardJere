import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import JereInfoData from "../data/JereInfoData";
import Ionicons from '@expo/vector-icons/Ionicons';
import QRData from "../data/QRData";

const JereInfoList = () => {
  
  const [isCheckIcon, setisCheckIcon] = React.useState(true)

  const onClickIcon = () => {
    setisCheckIcon(false)
  }
  return (
    <View style={styles.prueba}>
      <Text style={styles.infoTitle}>Cosas que amo :</Text>
      <ScrollView style={styles.scrollStyle}>
        <JereInfoData/>
      </ScrollView>
      <View style={styles.icons}>
      {isCheckIcon ? (
        <Ionicons name="logo-github" size={80} onPress={onClickIcon}></Ionicons>
      ) : <QRData setisCheckIcon={setisCheckIcon}/>}

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
    backgroundColor: '#2CC2B4'
  },
  infoTitle: {
    fontWeight: "900",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10
  },
  scrollStyle: {
    padding: 10,
  },
  icons: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9
  }
});
