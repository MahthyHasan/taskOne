import { StyleSheet, Text, TouchableOpacity, } from 'react-native'
import React from 'react'

const ButtonN = ({title, onPress}) => {
  return (
    <TouchableOpacity style ={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonN

const styles = StyleSheet.create({
    button: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: "#FFD482",
        width: 150,
        height: 48,
        borderRadius: 80,
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