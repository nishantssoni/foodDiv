import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '@/src/types';
import { Link } from 'expo-router';

export const defaultImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png'

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({product}:ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
    <Pressable style={styles.container}>
      {/* display image from web */}
      <Image source={{ uri: product.image || defaultImage }} style={styles.image} resizeMode='contain' />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </Pressable>
    </Link>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    flex: 1,
    maxWidth: "50%",
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
