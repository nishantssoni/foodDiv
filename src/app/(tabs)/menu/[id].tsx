import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: 'Product details ' + id}} />
      <Text>Product details{id}</Text>
    </View>
  )
}

export default ProductDetails