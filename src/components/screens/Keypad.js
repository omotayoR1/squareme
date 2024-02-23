import { StyleSheet, Text, View, StatusBar, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { COLORS } from '../../constants'
import KeyTop from '../reusables/KeyTop'
import DialPad from '../reusables/DialPad'
import { useFonts } from 'expo-font'
import Button from '../reusables/Button'

const {width, height} = Dimensions.get('screen')

const Keypad = () => {
    const [otp, setOtp] = useState('');
    const [loaded]=useFonts({
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf')
    })
    const handleDigitPress = digit => {
        if (digit === '') {
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
            
          }
        }
    };

    if(!loaded){
        return null
    }
  return (
    <ScrollView style={styles.container}>
      <KeyTop />
      <View style={styles.numberContanier}>
        <Text style={styles.naira}>₦</Text>
        <Text style={styles.otp}>{otp}</Text>
      </View>
      <DialPad textColor={{color: COLORS.lighter}} handleDigitPress={handleDigitPress} />
      <View style={styles.buttonHolder}>
            <Button buttontext={"Request"} width={width/2.4} height={48} backgroundColor={"rgba(106,106,106,0.3)"} color={COLORS.ghb} alignItems={"center"} justifyContent={"center"} borderRadius={12}  />
            <Button buttontext={"Send"} width={width/2.4} height={48} backgroundColor={"rgba(106,106,106,0.3)"} color={COLORS.ghb} alignItems={"center"} justifyContent={"center"} borderRadius={12} />
      </View>
    </ScrollView>
  )
}

export default Keypad

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.keyPadBackground,
        paddingHorizontal: 24,
        paddingTop: StatusBar.currentHeight + 10
    },
    numberContanier: {
        marginVertical: 32,
        flexDirection: 'row',
        alignSelf: "center",
        alignItems: "center"
    },
    naira: {
        fontFamily: "dmSansBold",
        fontSize: 24,
        color: COLORS.white
    },
    otp: {
        fontFamily: "dmSansBold",
        fontSize: 32,
        color: COLORS.white,
        marginLeft: 3
    },
    buttonHolder: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 15,
        width: "100%"
    }
})