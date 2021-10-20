import { StatusBar } from 'expo-status-bar';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductComponent from "../component/ProductComponent";


export default function CartScreen(props) {
    const { prods, onAddCart, cart, onRemoveCart } = props;

    const checkInCart = (pro) => {
        let ind = cart.findIndex(
            (e) => { return pro.id == e.id }
        )
        return ind > -1;
    }

    return (
        <View style={styles.container}>

            {cart.length > 0 ? <FlatList
                data={cart}
                renderItem={data => <ProductComponent
                    onRemoveCart={onRemoveCart}
                    inCart={checkInCart(data.item)}
                    key={data.item.id}
                    onAddCart={onAddCart}
                    product={data.item} />}
                keyExtractor={item => item.id}
            /> : <Text style={styles.emptyText}>Your cart is empty</Text>}

            {cart.length > 0 && <Button containerStyle={styles.btnCheckout} title="Checkout" />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center"
    },
    emptyText: {
        fontSize: 26,
        color: 'grey',
        textAlign: "center"
    }
});

