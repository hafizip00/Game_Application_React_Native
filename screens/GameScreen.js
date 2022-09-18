import React, {useState} from 'react'
import {View , Text , StyleSheet , Button , Alert} from 'react-native'
import Card from '../components/Card';


import NumberContainer from '../components/NumberContainer';

const generateRandom = (min , max , exclude ) =>{
    min = Math.ceil(min);
    max = Math.floor(max)
    const rndNumber = Math.floor(Math.random() * (max - min)) + min
    if(rndNumber === exclude){
        return generateRandom(min , max , exclude);
    }
    else{
        return rndNumber;
    }
}


const GameScreen = (props) => {
    const [currentGuess , setCurrentGuess] = useState(generateRandom(1, 100 , props.userChoice))


const nextGuessHandler = direction =>{
    console.log(direction)
    if((direction === "lower" && currentGuess < props.userChoice) || 
    (direction === "greater" && currentGuess > props.userChoice)){
        Alert.alert("Don't lie !" , "You know that this is wrong...", [{text :'Sorry!' , style : "cancel"}])
        return;
    }
}


  return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title='Lower' onPress={()=> {nextGuessHandler("lower")}}/>
            <Button title='Greater' onPress={()=>{}}/>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    screen : {
        flex : 1,
        padding : 10,
        alignItems : "center"
    },
    buttonContainer : {
        flexDirection : "row",
        justifyContent : "space-around",
        marginTop : 20,
        width : 300,
        maxWidth : "80%"
    }
})

export default GameScreen