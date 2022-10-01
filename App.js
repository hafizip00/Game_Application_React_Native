import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";


import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber , setUserNumber] = useState()
  const [guessRounds , setGuessRouonds] = useState(0)


  const configureNewGameHandler = () =>{
    setGuessRouonds(0)
    setUserNumber(null)
  }

    const startGameHandler = (selectedNumber) =>{
      setUserNumber(selectedNumber)
    }

    const gameOverHandler = rounds =>{
      setGuessRouonds(rounds)
    }
      let content = <StartGameScreen onStartGame={startGameHandler}/> 

      if(userNumber && guessRounds <= 0){
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>
      }else if(guessRounds > 0){
        content = <GameOver rounds={guessRounds} userNumber={userNumber} onRestart={configureNewGameHandler}/>
      }



  return (
    <View style={styles.container}>
      <Header title={"Guess Number"} />
      {content}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
