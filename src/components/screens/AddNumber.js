import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useRef } from "react";
import { COLORS, ROUTES } from '../../constants'
import HeaderText from '../reusables/HeaderText'
import Button from '../reusables/Button'
import TextButton from '../reusables/TextButton'
import PhoneInput from 'react-native-phone-number-input'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('screen')


const AddNumber = ({navigation}) => {

    const phoneInputRef = useRef(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [loaded] = useFonts({
      dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf'),
      dmSansRegular: require('../../../assets/fonts/DMSans-Regular.ttf')
    })

    const handleChange = (text) => {
        const newText = text.replace(/[.,]/g, '')
        setValue(newText);
        setFormattedValue("+"+phoneInputRef.current?.getCallingCode()+newText)
        if(phoneInputRef.current?.isValidNumber(text)){
          setValid(true)
        } else {
          setValid(false)
        }
    }

    const handlePressed = ()=>{
      navigation.navigate(ROUTES.VERIFYPHONENUMBER)
    }

    if (!loaded) {
      return null
    }
  return (
    <View style={styles.container}>
      <HeaderText headerText={"We\'ll send an SMS with a code to verify your phone number"} />
      <PhoneInput 
        ref={phoneInputRef}
        defaultValue={value}
        defaultCode="NG"
        layout="first"
        containerStyle={styles.inputcontainer}
        textInputProps={{
            keyboardType: 'numeric',
            value: value,
            onChangeText: handleChange,
            placeholder: '000-000-0000',
            placeholderTextColor: COLORS.darkGrey
        }}
        onChangeFormattedText={(value) => {
          setFormattedValue(value);
        }}
        countryPickerButtonStyle={{backgroundColor: "transparent", borderWidth: 1, borderRadius: 8, borderColor: COLORS.lightGrey, height: 48,}}
        textInputStyle={{fontSize: 14, color: '#000', height: 48,}}
        textContainerStyle={{backgroundColor: "transparent", marginLeft: 12, borderWidth: 1, borderRadius: 8, borderColor: COLORS.lightGrey,  height: 48, alignItems: 'center',  padding: 8}}
        codeTextStyle={{color: '#000', fontSize: 14}}
        autoFocus={false}
        />
        <TouchableOpacity style={styles.referral}>
          <Text style={styles.referralText}>Have a referral ID?</Text>
          <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M2.96149 14.2392V16.2053H17.0385V14.2392H2.96149ZM2.96149 4.87055H5.40624C5.34011 4.74555 5.28539 4.58984 5.24205 4.40342C5.19873 4.21699 5.17707 4.04631 5.17707 3.89138C5.17707 3.22223 5.41205 2.65345 5.88201 2.18505C6.35197 1.71663 6.91445 1.48242 7.56947 1.48242C8.00152 1.48242 8.40117 1.59089 8.76841 1.80784C9.13566 2.02477 9.42511 2.30156 9.63676 2.63821L10.0104 3.21476L10.3841 2.63821C10.6096 2.28767 10.8987 2.00741 11.2514 1.79742C11.6041 1.58742 11.9823 1.48242 12.3859 1.48242C13.0684 1.48242 13.6452 1.71361 14.1163 2.17598C14.5874 2.63835 14.8229 3.21321 14.8229 3.90057C14.8229 4.04722 14.8055 4.19777 14.7708 4.35221C14.7361 4.50666 14.684 4.67944 14.6146 4.87055H17.0385C17.4232 4.87055 17.7567 5.01178 18.0392 5.29423C18.3216 5.57668 18.4629 5.91024 18.4629 6.29492V16.2053C18.4629 16.5886 18.3216 16.921 18.0392 17.2024C17.7567 17.4839 17.4232 17.6246 17.0385 17.6246H2.96149C2.57817 17.6246 2.24577 17.4839 1.9643 17.2024C1.68284 16.921 1.54211 16.5886 1.54211 16.2053V6.29492C1.54211 5.91024 1.68284 5.57668 1.9643 5.29423C2.24577 5.01178 2.57817 4.87055 2.96149 4.87055ZM2.96149 11.8955H17.0385V6.29492H12.0004L14.014 9.11105L12.9592 9.89592L9.99999 5.76096L7.04076 9.89592L5.98595 9.11105L8.00949 6.29492H2.96149V11.8955ZM7.59103 4.99555C7.89659 4.99555 8.157 4.88791 8.37228 4.67263C8.58756 4.45735 8.6952 4.19694 8.6952 3.89138C8.6952 3.58916 8.58756 3.32957 8.37228 3.11263C8.157 2.89569 7.89659 2.78721 7.59103 2.78721C7.28548 2.78721 7.02506 2.89569 6.80978 3.11263C6.5945 3.32957 6.48686 3.58916 6.48686 3.89138C6.48686 4.19694 6.5945 4.45735 6.80978 4.67263C7.02506 4.88791 7.28548 4.99555 7.59103 4.99555ZM12.3881 4.99555C12.7069 4.99555 12.9741 4.88791 13.1897 4.67263C13.4053 4.45735 13.5131 4.19694 13.5131 3.89138C13.5131 3.58916 13.4053 3.32957 13.1897 3.11263C12.9741 2.89569 12.7069 2.78721 12.3881 2.78721C12.0964 2.78721 11.843 2.89569 11.6277 3.11263C11.4124 3.32957 11.3048 3.58916 11.3048 3.89138C11.3048 4.19694 11.4124 4.45735 11.6277 4.67263C11.843 4.88791 12.0964 4.99555 12.3881 4.99555Z" fill={COLORS.purple}/>
          </Svg>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Button handlePressed={handlePressed} buttontext={"Proceed"} width={"100%"} height={48} justifyContent={"center"} alignItems={"center"} backgroundColor={COLORS.primary} color={COLORS.white} borderRadius={8} />
          <View style={styles.textButton}>
            <Text style={styles.text}>Already have an account?</Text>
            <TextButton textButton={"Login Here"} fontSize={14} color={COLORS.purple} />
          </View>
        </View>
    </View>
  )
}

export default AddNumber

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        position: 'relative'
    },
    inputcontainer: {
      borderRadius: 20,
      width: '100%',
      backgroundColor: "transparent",
      marginTop: height/16
    },
    referral: {
      paddingHorizontal: 20,
      paddingVertical: 14,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: COLORS.lightGrey,
      backgroundColor: "transparent",
      marginTop: 20,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    referralText: {
      fontFamily: "dmSansMedium",
      fontSize: 13,
      color: COLORS.purple
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width,
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      padding: 24
    },
    textButton: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 15
    },
    text: {
      fontFamily: "dmSansRegular",
      fontSize: 14,
      color: COLORS.darkerGrey
    }
})