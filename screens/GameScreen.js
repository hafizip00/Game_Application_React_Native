import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Alert, ScrollView, FlatList } from "react-native";
import {Ionicons} from '@expo/vector-icons'

import Card from "../components/Card";
import DefaultStyles from "../constants/DefaultStyles";
import NumberContainer from "../components/NumberContainer";
import StartButton from "./StartButton";
import BodyText from "../components/BodyText";




const generateRandom = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNumber = Math.floor(Math.random() * (max - min)) + min;
  if (rndNumber === exclude) {
    return generateRandom(min, max, exclude);
  } else {
    return rndNumber;
  }
};

const renderListItem = (listLength , itemData)=>{
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
      </View>
  )
}

const GameScreen = (props) => {
  const initialGuess = generateRandom(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setpastGuesses] = useState([initialGuess.toString()]);

  const curretnLow = useRef(1);
  const currentHigh = useRef(100);

  const { onGameOver, userChoice } = props;
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) || // 55 27
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie !", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      curretnLow.current = currentGuess + 1;
    }
    const next = generateRandom(
      curretnLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(next);
    // setRounds((currentRounds) => currentRounds + 1);
    setpastGuesses(previousGuesses => [next.toString(),...previousGuesses ])
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <StartButton
          onStart={() => {
            nextGuessHandler("lower");
          }}
        >
          {/* <Ionicons name="md-remove" size={24} color="white"/> */}
          Lower
          </StartButton>
        <StartButton
          onStart={() => {
            nextGuessHandler("greater");
          }}
        >
          {/* <Ionicons name="md-add" size={24} color="white"/> */}
          Greater
        </StartButton>
      </Card>
      <View style={styles.listCotainer}>
      {/* <ScrollView contentContainerStyle={styles.list}>
        {pastGuesses.map((guess , index)=> renderListItem(guess ,pastGuesses.length - index))}
      </ScrollView> */}
      <FlatList data={pastGuesses}
      renderItem={renderListItem.bind(this , pastGuesses.length)}
      keyExtractor={(item)=> item}
      contentContainerStyle={styles.list}
      />
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  listItem:{
    borderColor : "#ccc",
    borderWidth : 1,
    padding : 15,
    marginVertical : 10,
    backgroundColor : "white",
    flexDirection : "row",
    justifyContent : "space-around",
    width : "100%"
  },
  listCotainer : {
    flex : 1,
    width : "60%"
  },
  list : {
    flexGrow : 1,
    justifyContent : "flex-end",
  }
});

export default GameScreen;
