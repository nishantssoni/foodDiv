import { Image, View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'
import products from '@/assets/data/products'
import { defaultImage } from '@components/ProductListItem';
import { useState } from 'react';
import Button from '@components/Button';

const sizes = ['S', 'M', 'L', 'XL'];

const ProductDetails = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState(sizes[1]);

  const product = products.find(product => product.id.toString() == id);

  const addToCart = () => {
    console.log('Add to cart', selectedSize);
  }

  if(!product){
    return (
        <Text>Product not found</Text>
    )
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title:  product?.name}} />
      <Image source={{ uri: product?.image || defaultImage }} style={styles.image} resizeMode='contain' />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map(size => (
          <Pressable 
          style={[styles.size, {backgroundColor: selectedSize === size ? 'gainsboro' : 'white'}]} 
          onPress={() => setSelectedSize(size)}
          key={size}>
            <Text style={[styles.sizeText, {color: selectedSize === size ? 'black' : 'gray'}]}>{size}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button onPress={addToCart} text='Add to Cart' />
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 'auto',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  size: {
    width: 50,
    height: 30,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sizeText: {
    fontSize: 20,
  },
});
