import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font'
import { COLORS } from '../../constants'
import Svg, { Path } from 'react-native-svg';

const {width, height} = Dimensions.get('screen')

const QuickAccess = () => {

    const [loaded] = useFonts({
        dmSansBold: require('../../../assets/fonts/DMSans-Bold.ttf'),
        dmSansMedium: require('../../../assets/fonts/DMSans-Medium.ttf')
    })

    if (!loaded) {
        return null
    }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>QuickAccess</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
            <View style={styles.iconButton}>
            <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path opacity="0.4" d="M14.0331 1.66699H6.96646C4.66646 1.66699 3.83313 2.50033 3.83313 4.84199V15.1587C3.83313 17.5003 4.66646 18.3337 6.96646 18.3337H14.0248C16.3331 18.3337 17.1665 17.5003 17.1665 15.1587V4.84199C17.1665 2.50033 16.3331 1.66699 14.0331 1.66699Z" fill="#9F56D4"/>
                <Path d="M12.1665 5.20801H8.83313C8.49146 5.20801 8.20813 4.92467 8.20813 4.58301C8.20813 4.24134 8.49146 3.95801 8.83313 3.95801H12.1665C12.5081 3.95801 12.7915 4.24134 12.7915 4.58301C12.7915 4.92467 12.5081 5.20801 12.1665 5.20801Z" fill="#9F56D4"/>
                <Path d="M10.5002 16.0837C11.3056 16.0837 11.9585 15.4307 11.9585 14.6253C11.9585 13.8199 11.3056 13.167 10.5002 13.167C9.69479 13.167 9.04187 13.8199 9.04187 14.6253C9.04187 15.4307 9.69479 16.0837 10.5002 16.0837Z" fill="#9F56D4"/>
            </Svg>
            </View>
            <Text style={styles.iconText}>Pay Bills</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
            <View style={styles.iconButton}>
                <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M2.96149 14.2392V16.2053H17.0385V14.2392H2.96149ZM2.96149 4.87055H5.40624C5.34011 4.74555 5.28539 4.58984 5.24205 4.40342C5.19873 4.21699 5.17707 4.04631 5.17707 3.89138C5.17707 3.22223 5.41205 2.65345 5.88201 2.18505C6.35197 1.71663 6.91445 1.48242 7.56947 1.48242C8.00152 1.48242 8.40117 1.59089 8.76841 1.80784C9.13566 2.02477 9.42511 2.30156 9.63676 2.63821L10.0104 3.21476L10.3841 2.63821C10.6096 2.28767 10.8987 2.00741 11.2514 1.79742C11.6041 1.58742 11.9823 1.48242 12.3859 1.48242C13.0684 1.48242 13.6452 1.71361 14.1163 2.17598C14.5874 2.63835 14.8229 3.21321 14.8229 3.90057C14.8229 4.04722 14.8055 4.19777 14.7708 4.35221C14.7361 4.50666 14.684 4.67944 14.6146 4.87055H17.0385C17.4232 4.87055 17.7567 5.01178 18.0392 5.29423C18.3216 5.57668 18.4629 5.91024 18.4629 6.29492V16.2053C18.4629 16.5886 18.3216 16.921 18.0392 17.2024C17.7567 17.4839 17.4232 17.6246 17.0385 17.6246H2.96149C2.57817 17.6246 2.24577 17.4839 1.9643 17.2024C1.68284 16.921 1.54211 16.5886 1.54211 16.2053V6.29492C1.54211 5.91024 1.68284 5.57668 1.9643 5.29423C2.24577 5.01178 2.57817 4.87055 2.96149 4.87055ZM2.96149 11.8955H17.0385V6.29492H12.0004L14.014 9.11105L12.9592 9.89592L9.99999 5.76096L7.04076 9.89592L5.98595 9.11105L8.00949 6.29492H2.96149V11.8955ZM7.59103 4.99555C7.89659 4.99555 8.157 4.88791 8.37228 4.67263C8.58756 4.45735 8.6952 4.19694 8.6952 3.89138C8.6952 3.58916 8.58756 3.32957 8.37228 3.11263C8.157 2.89569 7.89659 2.78721 7.59103 2.78721C7.28548 2.78721 7.02506 2.89569 6.80978 3.11263C6.5945 3.32957 6.48686 3.58916 6.48686 3.89138C6.48686 4.19694 6.5945 4.45735 6.80978 4.67263C7.02506 4.88791 7.28548 4.99555 7.59103 4.99555ZM12.3881 4.99555C12.7069 4.99555 12.9741 4.88791 13.1897 4.67263C13.4053 4.45735 13.5131 4.19694 13.5131 3.89138C13.5131 3.58916 13.4053 3.32957 13.1897 3.11263C12.9741 2.89569 12.7069 2.78721 12.3881 2.78721C12.0964 2.78721 11.843 2.89569 11.6277 3.11263C11.4124 3.32957 11.3048 3.58916 11.3048 3.89138C11.3048 4.19694 11.4124 4.45735 11.6277 4.67263C11.843 4.88791 12.0964 4.99555 12.3881 4.99555Z" fill="#9F56D4"/>
                </Svg>
            </View>
            <Text style={styles.iconText}>Giftcards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
            <View style={styles.iconButton}>
                <Svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M18.8327 4.58398V15.4173C18.8327 15.7507 18.7077 16.0423 18.4577 16.2923C18.2077 16.5423 17.916 16.6673 17.5827 16.6673H3.41602C3.08268 16.6673 2.79102 16.5423 2.54102 16.2923C2.29102 16.0423 2.16602 15.7507 2.16602 15.4173V4.58398C2.16602 4.25065 2.29102 3.95898 2.54102 3.70898C2.79102 3.45898 3.08268 3.33398 3.41602 3.33398H17.5827C17.916 3.33398 18.2077 3.45898 18.4577 3.70898C18.7077 3.95898 18.8327 4.25065 18.8327 4.58398ZM3.41602 6.85482H17.5827V4.58398H3.41602V6.85482ZM3.41602 9.54232V15.4173H17.5827V9.54232H3.41602Z" fill="#9F56D4"/>
                </Svg>
            </View>
            <Text style={styles.iconText}>Cards</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QuickAccess

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width, 
        paddingHorizontal: 24
    },
    header: {
        fontSize: 18,
        fontFamily: "dmSansBold",
        color: COLORS.acc
    },
    buttonContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 16
    },
    button: {
        flexDirection: 'column',
        alignItems: "center"
    },
    button2: {
        flexDirection: 'column',
        alignItems: "center",
        marginLeft: 30
    },
    iconButton: {
        backgroundColor: COLORS.dsa,
        padding: 10,
        borderRadius: 16
    },
    iconText: {
        fontFamily: "dmSansMedium",
        fontSize: 14,
        color: COLORS.flick,
        marginTop: 8
    }
})