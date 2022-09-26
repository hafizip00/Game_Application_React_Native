import { Button, StyleSheet, Image, View , Text } from "react-native";
import React from "react";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>GameOver..!</TitleText>
      <View style={styles.imageContainer}>
      {/* <Image source={require('../assets/success.png')} style={styles.image} resizeMode="contain"/> */}
      <Image source={{uri : "https://thumbs.dreamstime.com/b/mount-everest-summit-21911750.jpg"}}
       style={styles.image}
        resizeMode="cover"
        fadeDuration={300}
        />
      </View>
      <BodyText style={styles.text}>Number of Rounds : <Text style={styles.rounds}>{props.rounds}</Text></BodyText>
      <BodyText style={styles.text}>The Number was : <Text style={styles.answer}>{props.userNumber}</Text></BodyText>
      <Button title="New Game" onPress={props.onRestart} color={Colors.green}></Button>
    </View>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bofyText : {
    marginTop : 20,
  },
  imageContainer : {
    width : 300,
    height : 300,
    borderRadius : 150,
    marginVertical : 20,
    justifyContent : "center",
    alignItems : "center",
    overflow : "hidden"
  },
  image : {
    width : "100%",
    height : "100%"
  },
  text : {
    marginVertical : 20,
    fontWeight : "bold",
    fontSize : 20
  },
  answer : {
    color : Colors.green
  },
  rounds : {
    color : Colors.secondary
  }
});
