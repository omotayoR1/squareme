import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { COLORS, ROUTES } from '../../constants'
import { useFonts } from 'expo-font'
import Button from '../reusables/Button'

const {width,height} = Dimensions.get('screen')

const Successful = ({navigation}) => {
    const [loaded] = useFonts({
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf'),
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    if (!loaded){
        return null
    }
    const handleNext = ()=>{
        navigation.navigate(ROUTES.SETSECURITYPIN)
    }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/successful.png')} alt="successful" resizeMode='contain' style={styles.image} />
      </View>
      <Text style={styles.header}>Verification successful!</Text>
      <Text style={styles.subHeader}>Your phone number has been verified successfully.</Text>
      <View style={styles.buttonContainer}>
      <Button handlePressed={handleNext} buttontext={"Okay!"} width={"100%"} height={48} backgroundColor={COLORS.primary} color={COLORS.white} alignItems={"center"} justifyContent={"center"} borderRadius={12} />
      </View>
    </View>
  )
}

export default Successful

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 24,
        position: 'relative'
    },
    imageContainer: {
        alignSelf: 'center',
        width: 124.45,
        height: 124.45,
        marginVertical: 32
    },
    image: {
        width: "100%",
        height: "100%"
    },
    header: {
        fontFamily: "dmSansBold",
        fontSize: 16,
        color: COLORS.black,
        alignSelf: "center"
    },
    subHeader: {
        fontFamily: "dmSansMedium",
        fontSize: 13,
        color: COLORS.thisGrey,
        alignSelf: "center",
        marginTop: 16
    },
    buttonContainer: {
        position: 'absolute',
        left: 0,
        bottom: height/16.67,
        width,
        paddingHorizontal: 24
    }
})