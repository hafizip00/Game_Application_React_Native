import { Button, StyleSheet, Image, View , Text ,Dimensions , ScrollView, } from "react-native";
import React from "react";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/Colors";
import StartButton from "./StartButton";
import * as ScreenOrientation from 'expo-screen-orientation';
const GameOver = (props) => {
  return (
    <ScrollView>
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
      <StartButton onStart={props.onRestart}>
        New Game
      </StartButton>
    </View>
    </ScrollView>
  );
};

export default GameOver;

const styles = StyleSheet.create({
  screen: {
    marginTop : Dimensions.get("window").height > 600 ? 150 : 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical : 10
  },
  bofyText : {
    marginTop : 20,
  },
  imageContainer : {
    width : Dimensions.get("window").width * .7,
    height : Dimensions.get("window").width * .7,
    borderRadius : Dimensions.get("window").width * .7 / 2,
    marginVertical : Dimensions.get("window").height / 30,
    justifyContent : "center",
    alignItems : "center",
    overflow : "hidden"
  },
  image : {
    width : "100%",
    height : "100%"
  },
  text : {
    marginVertical : Dimensions.get("window").width /60,
    fontWeight : "bold",
    fontSize : Dimensions.get("window").height < 400 ? 16 : 20
  },
  answer : {
    color : Colors.green
  },
  rounds : {
    color : Colors.secondary
  }
});
