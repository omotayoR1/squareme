import { ImageBackground, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Topcomp from './Topcomp'
import { useFonts } from 'expo-font'
import { COLORS } from '../../constants'
import Button from './Button'

const {width, height} = Dimensions.get('screen') 

const TopHome = () => {
    const [loaded]= useFonts({
        dmSansRegular: require('../../../assets/fonts/DMSans-Regular.ttf'),
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf')
    })
    if (!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/homeback.png')} alt='background' resizeMode='cover' style={styles.background} >
        <LinearGradient style={styles.gradient} colors={['rgba(0,198,251, 0.8)','rgba(0,198,251, 0.5)', 'rgba(0,198,251, 0.4)','rgba(0,198,251, 0.3)', 'rgba(0,198,251, 0.2)', 'rgba(0,198,251, 0.0)']} >
            <Topcomp />
            <Text style={styles.balance}>Wallet Balance</Text>
            <Text style={styles.amount}>₦XXXX</Text>
            <View style={styles.buttonHolder}>
                <Button buttontext={"Fund"} width={width/2.4} height={48} backgroundColor={COLORS.primary} color={COLORS.white} alignItems={"center"} justifyContent={"center"} borderRadius={12}  />
                <Button buttontext={"Withdraw"} width={width/2.4} height={48} backgroundColor={COLORS.withdraw} color={COLORS.app} alignItems={"center"} justifyContent={"center"} borderRadius={12} />
            </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default TopHome

const styles = StyleSheet.create({
    container: {
        width,
        height: height/2.5
    },
    background: {
        width: "100%",
        height: "100%"
    },
    gradient: {
        width: '100%',
        height: '100%',
        paddingTop: StatusBar.currentHeight + 10,
        paddingHorizontal: 24
    },
    balance: {
        alignSelf: "center",
        marginTop: height/25.8,
        fontFamily: "dmSansRegular",
        fontSize: 12,
        color: COLORS.darkGrey
    },
    amount: {
        fontSize: 24,
        color: COLORS.primary,
        alignSelf: "center",
        marginTop: height/28,
        fontFamily: "dmSansBold"
    },
    buttonHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: height/26.2
    }
})