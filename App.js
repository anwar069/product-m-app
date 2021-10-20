import { StatusBar } from 'expo-status-bar';
import { Button, Header, Icon, withBadge, Badge } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PRODUCT_DATA from './data/product-data.js';
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

  const [products, setProducts] = useState(PRODUCT_DATA);
  const [cart, setCart] = useState([]);
  // const BadgedIcon = withBadge(cart.length)(Icon);

  const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          header: ({ navigation, scene }) => (
            <Header
              leftComponent={navigation.canGoBack() ? <Icon onPress={() => navigation.goBack()} iconStyle={styles.cartIcon} type="ionicons" name='arrow-back' color='#ffffff' /> : <Icon iconStyle={styles.cartIcon} name='menu' color='#ffffff' />}
              centerComponent={<Text onPress={() => navigation.navigate('Home')} style={styles.headerText}> {route.name}</Text>}
              rightComponent={
                <TouchableOpacity
                  onPress={() => navigation.push('Cart')}
                ><View>
                    <Badge containerStyle={styles.headerBadge} value={cart.length} status="success" />
                    <Icon iconStyle={styles.cartIcon} type='font-awesome' name='cart-plus' color='#ffffff' />
                  </View>
                </TouchableOpacity>
              }
            />
          )
        }}
      >
        <Stack.Screen name="Home" >
          {props => <HomeScreen
            {...props}
            cart={cart}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            prods={products} />}
        </Stack.Screen>

        <Stack.Screen
          name="Cart"
        >
          {props => <CartScreen {...props}
            cart={cart}
            onAddCart={onAddCart}
            onRemoveCart={onRemoveCart}
            prods={products}
          />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>

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
