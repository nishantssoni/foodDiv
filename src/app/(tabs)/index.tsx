import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';
import ProductListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ScrollView>
      <ProductListItem product={products[0]} />
      <ProductListItem product={products[1]} />
      <ProductListItem product={products[2]} />
      <ProductListItem product={products[3]} />
      <ProductListItem product={products[4]} />
      <ProductListItem product={products[5]} />
      </ScrollView>
    </View>
  );
}