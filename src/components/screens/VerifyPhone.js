import { SafeAreaView, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, {useState, useEffect} from 'react'
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import HeaderText from '../reusables/HeaderText'
import { COLORS, ROUTES } from '../../constants'
import { useFonts } from 'expo-font';
import TextButton from '../reusables/TextButton';
import Button from '../reusables/Button';

const {width,height} = Dimensions.get('screen')
const CELL_COUNT = 5;

const VerifyPhone = ({navigation}) => {
    const [value, setValue] = useState('');
    const [count, setCount] = useState(60)
    const [resend, setResend] = useState(false)
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({value,setValue,});
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    const handleChange =(text) => {
        setValue(text.replace(/[^0-9]/g, ''))
        
        if (text.length === 5){
            navigation.navigate(ROUTES.SUCCESSFUL)
        }
    }
    useEffect(()=>{
        const interval = setInterval(() => {
          if (count > 0) {
            setCount(count - 1);
          } else {
            clearInterval(interval);
            setResend(true); 
          }
        }, 1000);
    
        return () => clearInterval(interval);
    
    },[count])
    
    if (!loaded) {
        return null
    }
  return (
    <SafeAreaView style={styles.container}>
       <HeaderText headerText={"Please input the five digit code that was sent to your phone number below"} />
       <CodeField 
          ref={ref}
          {...props}
          value={value}
          onChangeText={(text)=>handleChange(text)}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text style={styles.count}>{`0:${count}`}</Text>
        <View style={styles.resendContainer}>
            <Text style={styles.text}>Having trouble receiving SMS?</Text>
            <TextButton textButton={"Resend"} fontSize={13} color={COLORS.purple} />
        </View>
        <Text style={styles.text}>Or try other options</Text>
        <View style={styles.buttonContanier}>
            <Button buttontext={"Call me"} width={width/2.4} height={48} borderColor={resend?COLORS.primary:COLORS.disable} backgroundColor={"transparent"} color={resend?COLORS.primary:COLORS.disable} alignItems={"center"} justifyContent={"center"} borderRadius={12} borderWidth={1} />
            <Button buttontext={"Whatsapp"} width={width/2.4} height={48} backgroundColor={resend?COLORS.primary:COLORS.disable} color={COLORS.white} alignItems={"center"} justifyContent={"center"} borderRadius={12} />
        </View>
    </SafeAreaView>
  )
}

export default VerifyPhone

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 24,
        position: 'relative'
    },
    codeFieldRoot: {
        marginVertical: 32,
    },
    cell: {
      width: width/7,
      height: width/6.5,
      lineHeight: 38,
      fontWeight: '500',
      fontSize: 16,
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: COLORS.skyBlue,
      textAlign: 'center',
      marginHorizontal: 0,
      borderColor: "transparent"
    },
    focusCell: {
      borderColor: COLORS.primary,
    },
    count: {
        alignSelf: "center",
        color: COLORS.purple,
        fontSize: 14,
        fontFamily: "dmSansMedium"
    },
    text: {
        color: COLORS.darkerGrey,
        fontSize: 13,
        fontFamily: "dmSansMedium",
        alignSelf: "center"
    },
    resendContainer: {
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    },
    buttonContanier: {
        width,
        position: 'absolute',
        left: 0,
        bottom: height/16.67,
        paddingHorizontal: 24,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    }
})