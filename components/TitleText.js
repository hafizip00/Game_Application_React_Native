import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TitleText = (props) => {
  return (
    <Text style={{ ...props.style, ...styles.title }}>{props.children}</Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});
