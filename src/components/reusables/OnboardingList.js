import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import OnboardingItem from './OnboardingItem'

const OnboardingList = ({thisRef, data, viewabilityConfig,handleOnViewableItemsChanged,handleOnscroll}) => {
  return (
    <>
      <FlatList 
      ref={thisRef}
      data={data}
      keyExtractor={item=>item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      snapToAlignment='center'
      onScroll={handleOnscroll}
      onViewableItemsChanged={handleOnViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      renderItem={({item})=>(<OnboardingItem id={item.id} logo={item.logo} backgroundImage={item.backgroundImage} title={item.title} subTitle={item.subTitle} />)}
      />
    </>
  )
}

export default OnboardingList

const styles = StyleSheet.create({})