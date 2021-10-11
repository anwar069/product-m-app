import { StatusBar } from 'expo-status-bar';
import { Button, Header } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PRODUCT_DATA from './data/product-data.js';
import HomeScreen from "./screen/HomeScreen";
export default function App() {

  const [products, setProducts] = useState(PRODUCT_DATA);

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Taj Textiles Stores', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      <StatusBar style="auto" />

      <HomeScreen products={products} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
