import { View, Text,Platform } from 'react-native'
import {StatusBar } from 'expo-status-bar'
import React from 'react'

const CartScreen = () => {
  return (
    <View>
      <Text>CartScreen</Text>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  )
}

export default CartScreen