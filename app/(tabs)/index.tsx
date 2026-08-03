import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ProductList from '../../components/ProductList';

export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ProductList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f7f7f9',
  },
});