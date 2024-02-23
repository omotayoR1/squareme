import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, ROUTES } from '../../constants'
import Button from '../reusables/Button'

const {width, height} = Dimensions.get('screen')

const Login = ({navigation}) => {
    const handlePressed =()=>{
        navigation.navigate(ROUTES.ADDNUMBER)
    }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/whitelogo.png')} alt={"logo"} resizeMode='contain' style={styles.image} />
      </View>
      <View style={styles.buttonContainer}>
        <Button handlePressed={handlePressed} buttontext={"Create an account"} width={"100%"} height={48} backgroundColor={COLORS.white} justifyContent={"center"} alignItems={"center"} color={COLORS.primary} fontSize={14} fontWeight={'700'} borderRadius={8} />
        <Button buttontext={"I have an account"} width={"100%"} height={48} backgroundColor={"transparent"} justifyContent={"center"} alignItems={"center"} color={COLORS.white} fontSize={14} fontWeight={'700'} borderRadius={8} borderColor={COLORS.white} borderWidth={1} marginTop={14} />
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: "100%",
        height: "100%"
    },
    imageContainer: {
        width: width/1.5,
        height: height/25.8
    },
    buttonContainer: {
        position: 'absolute',
        width,
        padding: 24,
        bottom: 0,
        left: 0,
        flexDirection: 'column'
    }
})