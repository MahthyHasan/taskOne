import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style ={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        paddingVertical: 12,
        paddingHorizontal: 77,
        backgroundColor: "#2A2A2A",
        width: 345,
        height: 48,
        borderRadius: 10,
        justifyContent: "center",
        textAlign: "center",
    },
    text: {
        color: "#2A2A2A",
        fontSize: 20,
        textAlign: "center",
        fontStyle: "Bold",
    }
})