import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPreset } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS, ROUTES } from './constants';
import Onboarding from './components/screens/Onboarding';
import Login from './components/screens/Login';
import AddNumber from './components/screens/AddNumber';
import { useFonts } from 'expo-font'
import VerifyPhone from './components/screens/VerifyPhone';
import Successful from './components/screens/Successful';
import SetSecurityPin from './components/screens/SetSecurityPin';
import ConfirmPin from './components/screens/ConfirmPin';
import PinSuccessful from './components/screens/PinSuccessful';
import Home from './components/screens/Home';
import Svg, { Path } from 'react-native-svg';
import Keypad from './components/screens/Keypad';
import Profile from './components/screens/Profile';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();


const BottomTab = ()=>{
    return(
        <Tab.Navigator initialRouteName={ROUTES.HOME} screenOptions={{
            tabBarStyle: {
                backgroundColor: "transparent",
                position: 'absolute',
                bottom: 5,
                left: 0,
                zIndex: 1000,
                paddingTop: 10,
                borderTopWidth: 0,
                shadowOffset:{
                    width: 0,
                    height: 0
                },
                shadowColor: "transaparent",
                elevation: 0,
            }
        }}>
            <Tab.Screen
            name={ROUTES.HOME}
            component={Home}
            options={{
                headerShown: false,
                title: 'Home',
                tabBarLabel: "",
                tabBarIcon: ({size,color,focused})=>{
                    return (
                        <View style={styles.icon}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M20.04 6.81969L14.28 2.78969C12.71 1.68969 10.3 1.74969 8.78999 2.91969L3.77999 6.82969C2.77999 7.60969 1.98999 9.20969 1.98999 10.4697V17.3697C1.98999 19.9197 4.05999 21.9997 6.60999 21.9997H17.39C19.94 21.9997 22.01 19.9297 22.01 17.3797V10.5997C22.01 9.24969 21.14 7.58969 20.04 6.81969ZM12.75 17.9997C12.75 18.4097 12.41 18.7497 12 18.7497C11.59 18.7497 11.25 18.4097 11.25 17.9997V14.9997C11.25 14.5897 11.59 14.2497 12 14.2497C12.41 14.2497 12.75 14.5897 12.75 14.9997V17.9997Z" fill={focused ? COLORS.darkestGrey : COLORS.notFocused }/>
                            </Svg>
                        </View>
                    )
                }
            }} />
            <Tab.Screen
            name={ROUTES.KEYPAD}
            component={Keypad}
            options={{
                headerShown: false,
                title: 'Keypad',
                tabBarLabel: "",
                tabBarIcon: ({size,color,focused})=>{
                    return (
                        <View style={styles.icon}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M7.24 2H5.34C3.15 2 2 3.15 2 5.33V7.23C2 9.41 3.15 10.56 5.33 10.56H7.23C9.41 10.56 10.56 9.41 10.56 7.23V5.33C10.57 3.15 9.42 2 7.24 2Z" fill={focused?COLORS.white:COLORS.notFocused}/>
                                <Path d="M18.6699 2H16.7699C14.5899 2 13.4399 3.15 13.4399 5.33V7.23C13.4399 9.41 14.5899 10.56 16.7699 10.56H18.6699C20.8499 10.56 21.9999 9.41 21.9999 7.23V5.33C21.9999 3.15 20.8499 2 18.6699 2Z" fill={focused?COLORS.white:COLORS.notFocused}/>
                                <Path d="M18.6699 13.4297H16.7699C14.5899 13.4297 13.4399 14.5797 13.4399 16.7597V18.6597C13.4399 20.8397 14.5899 21.9897 16.7699 21.9897H18.6699C20.8499 21.9897 21.9999 20.8397 21.9999 18.6597V16.7597C21.9999 14.5797 20.8499 13.4297 18.6699 13.4297Z" fill={focused?COLORS.white:COLORS.notFocused}/>
                                <Path d="M7.24 13.4297H5.34C3.15 13.4297 2 14.5797 2 16.7597V18.6597C2 20.8497 3.15 21.9997 5.33 21.9997H7.23C9.41 21.9997 10.56 20.8497 10.56 18.6697V16.7697C10.57 14.5797 9.42 13.4297 7.24 13.4297Z" fill={focused?COLORS.white:COLORS.notFocused}/>
                            </Svg>
                        </View>
                    )
                }
            }} />

            <Tab.Screen
            name={ROUTES.PROFILE}
            component={Profile}
            options={{
                headerShown: false,
                title: 'Profile',
                tabBarLabel: "",
                tabBarIcon: ({size,color,focused})=>{
                    return (
                        <View style={styles.icon}>
                            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z" fill={focused ? COLORS.darkestGrey : COLORS.notFocused }/>
                                <Path d="M17.08 14.1499C14.29 12.2899 9.73996 12.2899 6.92996 14.1499C5.65996 14.9999 4.95996 16.1499 4.95996 17.3799C4.95996 18.6099 5.65996 19.7499 6.91996 20.5899C8.31996 21.5299 10.16 21.9999 12 21.9999C13.84 21.9999 15.68 21.5299 17.08 20.5899C18.34 19.7399 19.04 18.5999 19.04 17.3599C19.03 16.1299 18.34 14.9899 17.08 14.1499Z" fill={focused ? COLORS.darkestGrey : COLORS.notFocused }/>
                            </Svg>
                        </View>
                    )
                }
            }} />

        </Tab.Navigator>
    )
}


const MyApp = ()=>{
    const [loaded] = useFonts({
        dmSansBold: require('../assets/fonts/DMSans-Bold.ttf')
    })
    if (!loaded) {
        return null
    }
    return (
        <Stack.Navigator initialRouteName={ROUTES.ONBOARDING}>
            <Stack.Screen 
            name={ROUTES.ONBOARDING}
            component={Onboarding}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}
            />
            <Stack.Screen 
            name={ROUTES.LOGIN}
            component={Login}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}
            />
            <Stack.Screen 
            name={ROUTES.ADDNUMBER}
            component={AddNumber}
            options={{
                headerShown: true,
                headerTitle: "Enter Your Phone Number",
                headerTitleAlign: "center",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontFamily: "dmSansBold",
                    fontSize: 18
                },
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}/>
            <Stack.Screen 
            name={ROUTES.VERIFYPHONENUMBER} 
            component={VerifyPhone}
            options={{
                headerShown: true,
                headerTitle: "Verify Phone Number",
                headerTitleAlign: "center",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontFamily: "dmSansBold",
                    fontSize: 18
                },
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}/>
            <Stack.Screen 
            name={ROUTES.SUCCESSFUL} 
            component={Successful}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}/>
            <Stack.Screen 
            name={ROUTES.SETSECURITYPIN} 
            component={SetSecurityPin}
            options={{
                headerShown: true,
                headerTitle: "Set Security Pin",
                headerTitleAlign: "center",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontFamily: "dmSansBold",
                    fontSize: 18
                },
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      opacity: progress,
                    },
                }),
            }}/>
            <Stack.Screen 
            name={ROUTES.CONFIRMPIN} 
            component={ConfirmPin}
            options={{
                headerShown: true,
                headerTitle: "Confirm Pin",
                headerTitleAlign: "center",
                headerTintColor: COLORS.primary,
                headerTitleStyle: {
                    fontFamily: "dmSansBold",
                    fontSize: 18
                },
                transitionSpec: {
                    open: { animation: 'spring', config: { stiffness: 1000, damping: 500, mass: 3, overshootClamping: true, restDisplacementThreshold: 0.01, restSpeedThreshold: 0.01 }},
                    close: { animation: 'timing', config: { duration: 500 }},
                },
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                      transform: [
                        {
                          translateY: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [300, 0], // Slide from bottom
                          }),
                        },
                      ],
                    },
                  }),
            }}/>
            <Stack.Screen 
            name={ROUTES.PINSUCCESSFUL} 
            component={PinSuccessful}
            options={{
                headerShown: false,
            }}/>
            <Stack.Screen 
            name="Dashboard"
            component={BottomTab}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}

const Routes = () => {
  return (
    <NavigationContainer>
      <MyApp />
    </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})