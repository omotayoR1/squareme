import { StyleSheet, View, Animated, Dimensions, Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const {width, height} = Dimensions.get('screen')

const Pagination = ({data, index, scrollX}) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        {data.map((_, idx)=>(
            <Animated.View key={idx.toString()} style={[styles.dot,
                idx === index && styles.dotActive,]} />
        ))}
      </View>
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
    container: {
        width,
        paddingHorizontal: 19,
        position: 'absolute',
        zIndex: 3,
        top: height/1.7,
        left: 0,
    },
    subContainer: {
        flexDirection: "row",
        alignItems: 'center'
    },
    dot: {
        width: 29,
        height: 5,
        marginHorizontal: 5,
        backgroundColor: COLORS.grey,
        borderRadius: 7
    },
    dotActive: {
        backgroundColor: COLORS.white
    }
})