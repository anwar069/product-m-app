import { StatusBar } from 'expo-status-bar';
import { Button, Header, Icon, withBadge, Badge } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PRODUCT_DATA from './data/product-data.js';
import HomeScreen from "./screen/HomeScreen";
export default function App() {

  const [products, setProducts] = useState(PRODUCT_DATA);
  const [cart, setCart] = useState([]);
  // const BadgedIcon = withBadge(cart.length)(Icon);

  const onAddCart = (item) => {
    let arr = [item, ...cart];
    setCart(arr);
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={<Text style={styles.headerText}> Taj Textiles Stores</Text>}
        rightComponent={<View>
          <Badge value={cart.length} status="success" />
          <Icon type='font-awesome' name='cart-plus' color='#ffffff' />
        </View>}
      />

      <StatusBar style="auto" />
      <HomeScreen onAddCart={onAddCart} prods={products} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerText: {
    color: 'white',
    paddingTop: 5,
    fontSize: 25
  }
});
