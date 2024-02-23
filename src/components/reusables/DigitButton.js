import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { COLORS } from '../../constants'

const DigitButton = ({ digit, onPress, textColor={} }) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })
    if (!loaded) {
        return null
    }
  return (
    <TouchableOpacity
      style={styles.digitButton}
      onPress={() => onPress(digit)}
    >
      <Text style={[styles.digitText, textColor]}>{digit}</Text>
    </TouchableOpacity>
  )
}

export default DigitButton

const styles = StyleSheet.create({
    digitButton: {
        width: 80,
        height: 80,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "transparent",
      },
      digitText: {
        fontFamily: "dmSansMedium",
        fontSize: 21,
        color: COLORS.primary
      },
})