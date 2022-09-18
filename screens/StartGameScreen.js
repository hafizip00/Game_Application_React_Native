import React ,{useState}from "react";
import { 
  View, 
  Text, 
  StyleSheet, 
  Button ,
  TouchableWithoutFeedback , 
  Keyboard,
  Alert  } from "react-native";


import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {

  const [enteredValue , setEnteredValue] = useState("")
  const [confirm , setConfirm ] = useState(false)
  const [selectedNumber , setSelectedNumber] = useState("")

  const numberInput = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g , ""));
  }

  const resetInputHandler = ()=>{
    setEnteredValue("")
    setConfirm(false)
  }
  const confirmInputHandler = () =>{
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert("Invalid Number" , "Number Has to be between 1 and 99." ,
      [{text : "Okay" , style : "destructive" , onPress : resetInputHandler}])
      return;
    }
    setConfirm(true)
    setSelectedNumber(chosenNumber)
    setEnteredValue("")
    Keyboard.dismiss()
  }

  let confirmOutput;
  if(confirm){
    confirmOutput = <Card style={styles.summaryContainer}>
      <Text>Chosen Number : </Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title="START GAME" onPress={()=>props.onStartGame(selectedNumber)}/>
      </Card>
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
    <View style={styles.screen}>
      <Text style={styles.title}>Start A New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select Number</Text>
        <Input style={styles.input} 
        blurOnSubmit
        autoCapitalize='none' 
        autoCorrect={false} 
        keyboardType={'number-pad'} 
        maxLength={2}
        onChangeText = {numberInput}
        value ={enteredValue}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary} />
          </View>
        </View>
      </Card>
      {confirmOutput}
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input :{
    width : 50,
    textAlign : "center"
  },
  summaryContainer : {
    marginTop : 20,
    alignItems : "center",
  }
});

export default StartGameScreen;