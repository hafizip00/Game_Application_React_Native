import { StyleSheet, Text, View , TouchableOpacity , TouchableNativeFeedback , Platform } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'


const StartButton = (props) => {

    let ButtonComponent = TouchableOpacity;
    if(Platform.OS === "android" && Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback
    }
  return (
    <View style={styles.buttonContainer}>
    <ButtonComponent TouchableOpacity={.6} onPress={props.onStart}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </ButtonComponent>
    </View>
  )
}

export default StartButton

const styles = StyleSheet.create({
    buttonContainer:{
        borderRadius : 25,
        overflow : 'hidden'
    },
    button : {
        backgroundColor : Colors.primary,
        paddingVertical : 12,
        paddingHorizontal : 30,
        borderRadius : 25
    },
    buttonText : {
        color : "white",
        fontSize : 18
    }
})