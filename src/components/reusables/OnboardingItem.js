import { StyleSheet, Text, View, Dimensions, ImageBackground, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS } from '../../constants'
import { useFonts } from 'expo-font'

const {width, height} = Dimensions.get('screen')

const OnboardingItem = ({id, backgroundImage, logo, title, subTitle}) => {
    const [loaded] = useFonts({
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf'),
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf'),
        dmSansRegular: require('../../../assets/fonts/DMSans-Regular.ttf')
    })

    if (!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
       <ImageBackground source={backgroundImage} alt={id} resizeMode='cover' style={styles.background}>
          <View style={styles.image}>
                <Image source={logo} alt={title} resizeMode='contain' style={styles.imageIt} />
          </View>
          <LinearGradient style={styles.container2} colors={['rgba(0,0,0,0.05)','rgba(0,0,0,0.08)', 'rgba(0,0,0,0.1)', 'rgba(0,0,0,0.2)','rgba(0,0,0,0.4)', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)', 'rgba(0,0,0,1)','rgba(0,0,0,1)','rgba(0,0,0,1)', 'rgba(0,0,0,1)','rgba(0,0,0,1)', 'rgba(0,0,0,1)' ]}>
            <Text style={styles.header}>{title}</Text>
            <Text style={styles.subHeader}>{subTitle}</Text>
          </LinearGradient>
       </ImageBackground>
    </View>
  )
}

export default OnboardingItem

const styles = StyleSheet.create({
    container: {
        width,
        height,
        position: 'relative'
    },
    background: {
        width, height
    },
    image: {
        position: 'absolute',
        top: height/16,
        left: 22,
        height: height/40,
        width: width/2.33,
        zIndex: 2
    },
    imageIt: {
        width: '100%',
        height: '100%'
    },
    container2: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width, 
        height: height/2,
        flexDirection: 'column',
        paddingHorizontal: 24,
        zIndex: 2
    },
    header: {
        fontFamily: "dmSansBold",
        fontWeight: 'bold',
        fontSize: 24,
        color: COLORS.white,
        marginTop: height/6.5
    },
    subHeader: {
        fontSize: 14,
        marginTop: height/44.44,
        color: COLORS.white,
        fontFamily: "dmSansRegular"
    }
})