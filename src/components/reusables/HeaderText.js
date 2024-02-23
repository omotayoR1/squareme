import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { COLORS } from '../../constants'

const HeaderText = ({headerText}) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })
    if(!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{headerText}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "dmSansMedium",
        fontSize: 14,
        textAlign: "center",
        color: COLORS.darkGrey
    }
})