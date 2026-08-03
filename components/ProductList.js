import { FlatList, StyleSheet, Text, View } from 'react-native';
import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Catálogo de Productos</Text>
        </View>
      }
      showsVerticalScrollIndicator={false}
      initialNumToRender={6}
      maxToRenderPerBatch={8}
      windowSize={7}
      removeClippedSubviews
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    backgroundColor: '#f7f7f9',
  },
  row: {
    justifyContent: 'space-between',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a1a1a',
  },
});