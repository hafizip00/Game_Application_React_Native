import { StyleSheet, Text, View , TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'


const StartButton = (props) => {
  return (
    <TouchableOpacity TouchableOpacity={.6} onPress={props.onStart}>
        <View style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </View>
    </TouchableOpacity>
  )
}

export default StartButton

const styles = StyleSheet.create({
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