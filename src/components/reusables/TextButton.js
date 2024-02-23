import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import { useFonts } from 'expo-font'

const TextButton = ({handlePressed, textButton, color, fontSize}) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    if (!loaded) {
        return null
    }
  return (
    <TouchableOpacity onPress={handlePressed} style={{backgroundColor: "transparent", padding: 0}}>
      <Text style={{color: color, fontFamily: "dmSansMedium", fontSize: fontSize}}>{textButton}</Text>
    </TouchableOpacity>
  )
}

export default TextButton

const styles = StyleSheet.create({})