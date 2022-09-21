import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <Text>GameOver..!</Text>
      <Text>Number of Rounds : {props.rounds}</Text>
      <Text>The Number was : {props.userNumber}</Text>
      <Button title='New Game' onPress={props.onRestart}></Button>
    </View>
  )
}

export default GameOver

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : "center",
        alignItems : "center"

    }
})