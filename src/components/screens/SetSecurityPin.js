import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { COLORS, ROUTES } from '../../constants'
import HeaderText from '../reusables/HeaderText'
import DialPad from '../reusables/DialPad'
import { useFonts } from 'expo-font'

const {width, height} = Dimensions.get('screen')

const SetSecurityPin = ({navigation}) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    const [otp, setOtp] = useState('');
    const handleDigitPress = digit => {
        if (digit === '.') {
          // Clear OTP field
          setOtp('');
        } else if (digit === '<' && otp.length >= 0) {
          // Delete last digit
          setOtp(prevOtp => prevOtp.slice(0, -1));
        } else if (digit !== '') {
          // Append digit to OTP field
          setOtp(prevOtp => prevOtp.length < 6 ? prevOtp + digit : prevOtp);
    
          // Check if OTP length is 6
          if (otp.length === 5) {
            // Navigate or perform action when OTP length is 6
            console.log('OTP is complete:', otp + digit);
            navigation.navigate(ROUTES.CONFIRMPIN)
          }
        }
    };

    if (!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
      <HeaderText headerText={"Set a six digit PIN that you would use for all transactions"} />
      <View style={styles.inputFields}>
      <View style={styles.otpInput}>
        {[...Array(6)].map((_, index) => (
          <View key={index} style={styles.otpBox}>
            <Text style={styles.otpText}>{otp[index] || ' '}</Text>
          </View>
        ))}
      </View>
      <View />
      </View>
      <View style={styles.padContainer}>
            <DialPad handleDigitPress={handleDigitPress} />
      </View>
    </View>
  )
}

export default SetSecurityPin

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        position: 'relative'
    },
    inputFields: {
        flexDirection:"row",
        marginTop: height/11.59,
        justifyContent: "center",
        alignItems: "center"
    },
    otpBox: {
      width: 36,
      height: 44,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center", 
      backgroundColor: COLORS.skyBlue,
      marginHorizontal: 5
    },
    otpInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
      },
      otpText: {
        fontSize: 16,
        fontFamily: "dmSansMedium"
      },
      padContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width,
        alignItems: "center",
      }
})