import { StyleSheet, Text, View, Dimensions, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { COLORS } from '../../constants'
import Svg, { Path } from 'react-native-svg';

const {width, height} = Dimensions.get('screen')

const RecentTransaction = () => {
    const [loaded] = useFonts({
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf'),
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    if (!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Recent Transaction</Text>
      <View style={styles.buttonContainer}>
        <View style={styles.imageContainer}>
            <Image source={require('../../assets/note.png')} alt='note' resizeMode='contain' style={styles.image} />
        </View>
        <Text style={styles.header}>No recent transaction</Text>
        <Text style={styles.subheader}>You have not performed any transaction, you can start sending and requesting money from your contacts.</Text>
      </View>
    </View>
  )
}

export default RecentTransaction

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width, 
        paddingHorizontal: 24,
        marginTop: 32
    },
    header1: {
        fontSize: 18,
        fontFamily: "dmSansBold",
        color: COLORS.acc,
    },
    buttonContainer: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    imageContainer: {
        width: 64,
        height: 64,
        alignSelf: 'center',
        marginTop: 16
    },
    image: {
        width: '100%',
        height: '100%'
    },
    header: {
        fontFamily: "dmSansBold",
        fontSize: 17, 
        color: COLORS.darkerGrey,
        marginTop: 5,
        alignSelf: 'center'
    },
    subheader: {
        fontFamily: "dmSansMedium",
        fontSize: 12,
        textAlign: "center",
        color: COLORS.light,
        marginTop: 8
    }
})