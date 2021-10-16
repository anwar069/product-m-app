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

  const onRemoveCart = (item) => {
    let ind = cart.findIndex(
      (e) => { return item.id == e.id }
    )
    if (ind != -1) {
      let newArr = [...cart];
      newArr.splice(ind, 1);
      setCart(newArr);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        leftComponent={<Icon iconStyle={styles.cartIcon} name='menu' color='#ffffff' />}
        centerComponent={<Text style={styles.headerText}> Taj Textiles Stores</Text>}
        rightComponent={<View>
          <Badge containerStyle={styles.headerBadge} value={cart.length} status="success" />
          <Icon iconStyle={styles.cartIcon} type='font-awesome' name='cart-plus' color='#ffffff' />
        </View>}
      />

      <StatusBar style="auto" />
      <HomeScreen
        cart={cart}
        onAddCart={onAddCart}
        onRemoveCart={onRemoveCart}
        prods={products} />
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
    fontSize: 25,
  },
  headerBadge: {
    marginBottom: -10,
    marginLeft: 20,
    zIndex: 1
  },
  cartIcon: {
    fontSize: 30
  }
});
