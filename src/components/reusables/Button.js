import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'

const Button = ({buttontext, handlePressed, width, height, backgroundColor, borderColor, borderRadius, borderWidth, justifyContent, fontWeight, alignItems, color, marginTop, fontSize}) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    if (!loaded) {
        return null
    }
  return (
    <TouchableOpacity onPress={handlePressed} style={{width: width, height: height,backgroundColor: backgroundColor, borderColor: borderColor, borderWidth: borderWidth, borderRadius: borderRadius, justifyContent: justifyContent, alignItems: alignItems, marginTop}}>
      <Text style={{fontSize: fontSize, color: color, fontFamily: "dmSansMedium"}}>{buttontext}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})