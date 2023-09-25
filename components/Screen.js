import React from 'react'
import { SafeAreaView, View , StyleSheet } from 'react-native'
import Constants from 'expo-constants'

function Screen({children}) {
  return (
   <SafeAreaView style={styles.topSpace}>
    <View>{children}</View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    topSpace:{
        padding:Constants.statusBarHeight
    }
})
export default Screen