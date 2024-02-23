import { StyleSheet, Text, View, SafeAreaView, Dimensions, Animated } from 'react-native'
import React, {useState, useRef} from 'react'
import OnboardingList from '../reusables/OnboardingList'
import Pagination from '../reusables/Pagination'
import Button from '../reusables/Button'
import { COLORS, ROUTES } from '../../constants'
import TextButton from '../reusables/TextButton'


const {width, height} = Dimensions.get('screen')


const Data = [
    {
    id: "1",
    logo: require('../../assets/whitelogo.png'),
    backgroundImage: require('../../assets/Onboarding.png'),
    title: "Fast and easy payments to anyone.",
    subTitle: "Receive funds sent to you in seconds."
    },
    {
        id: "2",
        logo: require('../../assets/bluelogo.png'),
        backgroundImage: require('../../assets/Onboarding 4.png'),
        title: "A super secure way to pay your bills",
        subTitle: "Pay your bills with the cheapest rates in town."
    },
    {
        id: "3",
        logo: require('../../assets/whitelogo.png'),
        backgroundImage: require('../../assets/Onboarding 5.png'),
        title: "Spend your money easily without any complications",
        subTitle: ""
    },
    

]
const Onboarding = ({navigation}) => {
    
    const [index, setIndex] = useState(0)
    const thisRef = useRef(null)
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnscroll = event =>{
        Animated.event([
          {
            nativeEvent : {
              contentOffset: {
                x: scrollX,
              }
            }
          }
        ], {
          useNativeDriver: false
        },
        ), (event);
        console.log(index)
    };

    const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
      setIndex(viewableItems[0].index);
    }).current;

    const viewabilityConfig = useRef({
      itemVisiblePercentThreshold: 50
    }).current;

    const handleSkip = ()=>{
        const prevSlide = Data.length - 1
        const offset = prevSlide * width;
        thisRef?.current?.scrollToOffset({offset})
        setIndex(prevSlide)
    }

    const handleNext = ()=>{
        const nextSlide = index + 1
        if (nextSlide !== Data.length){
            const offset = nextSlide * width
            thisRef?.current?.scrollToOffset({offset})
            setIndex(nextSlide)
        }
    }

    const handlePressed = ()=>{
      navigation.navigate(ROUTES.LOGIN)
    }

  return (
    <SafeAreaView style={styles.container}>
      <OnboardingList data={Data} thisRef={thisRef} handleOnscroll={handleOnscroll} handleOnViewableItemsChanged={handleOnViewableItemsChanged} viewabilityConfig={viewabilityConfig} />
      <Pagination data={[1,1,1]} scrollX={scrollX} index={index} />
      <View style={styles.buttonContainer}>
        {
          index === Data.length - 1 ?
          <Button buttontext={"Get Started"} handlePressed={handlePressed} width={"100%"} justifyContent={"center"} alignItems={"center"} color={COLORS.black} height={48} fontSize={14} fontWeight={'600'} backgroundColor={COLORS.white} borderRadius={8} />
          :
          <View style={styles.buttonnn}>
            <TextButton handlePressed={handleSkip} textButton={"Skip"} fontSize={15} color={COLORS.white} />
            <Button buttontext={"Next"} handlePressed={handleNext} width={width/3.33} justifyContent={"center"} alignItems={"center"} color={COLORS.black} height={48} fontSize={14} fontWeight={'600'} backgroundColor={COLORS.white} borderRadius={8} />
          </View>
        }
      </View>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    },
    buttonContainer: {
      position: 'absolute',
      bottom: height/17.39,
      left: 0,
      paddingHorizontal: 24,
      width
    },
    buttonnn: {
      flexDirection: 'row',
      width: "100%",
      alignItems: 'center',
      justifyContent: 'space-between'
    }
})