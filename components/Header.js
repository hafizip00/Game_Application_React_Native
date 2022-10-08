import React from "react";
import { View, Text, StyleSheet , Platform } from "react-native";

import Colors from "../constants/Colors";
import TitleText from "./TitleText";
const Header = (props) => {
  return (
    <View style={{...styles.header , ...Platform.select({ios : styles.headerIOS , android : styles.headerAndroid})}}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Platform.OS === "android" ? Colors.secondary : Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor : Platform.OS === "android" ? Colors.accent : "#ccc",
    borderBottomWidth : Platform.OS === "android" ? 3 : 4 
  },
  headerIOS :{
    backgroundColor:  Colors.accent,
    borderBottomColor : Colors.primary,
    borderBottomWidth : 3
  },
  headerAndroid:{
    backgroundColor: Colors.secondary,
    borderBottomColor : Colors.accent ,
    borderBottomWidth : 3 
  }
});

export default Header;
