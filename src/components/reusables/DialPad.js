import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DigitButton from './DigitButton'

const DialPad = ({handleDigitPress, textColor}) => {
  return (
    <View style={styles.dialpad}>
        <DigitButton digit="1" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="2" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="3" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="4" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="5" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="6" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="7" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="8" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="9" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="." textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="0" textColor={textColor} onPress={handleDigitPress} />
        <DigitButton digit="<" textColor={textColor} onPress={handleDigitPress} />
      </View>
  )
}

export default DialPad

const styles = StyleSheet.create({
    dialpad: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})