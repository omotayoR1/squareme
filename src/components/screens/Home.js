import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import TopHome from '../reusables/TopHome'
import QuickAccess from '../reusables/QuickAccess'
import RecentTransaction from '../reusables/RecentTransaction'

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <TopHome />
      <QuickAccess />
      <RecentTransaction />
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
})