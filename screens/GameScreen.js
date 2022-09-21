import React, {useState , useRef , useEffect} from 'react'
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
    const [rounds , setRounds] = useState(0)

    const curretnLow = useRef(1)
    const currentHigh = useRef(100)

    const {onGameOver , userChoice} = props
    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds)
        }
    }, [currentGuess , userChoice , onGameOver])

const nextGuessHandler = direction =>{
    if((direction === "lower" && currentGuess < props.userChoice) ||  // 55 27
    (direction === "greater" && currentGuess > props.userChoice)){
        Alert.alert("Don't lie !" , "You know that this is wrong...", [{text :'Sorry!' , style : "cancel"}])
        return;
    }
    if(direction === "lower"){
        currentHigh.current = currentGuess
    }else{
        curretnLow.current = currentGuess
    }
    const next = generateRandom(curretnLow.current , currentHigh.current , currentGuess);
    setCurrentGuess(next)
    setRounds(currentRounds => currentRounds + 1)
}


  return (
    <View style={styles.screen}>
        <Text>Opponent's Guess</Text>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card style={styles.buttonContainer}>
            <Button title='Lower' onPress={()=> {nextGuessHandler("lower")}}/>
            <Button title='Greater' onPress={()=>{nextGuessHandler("greater")}}/>
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