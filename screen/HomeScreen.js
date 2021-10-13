import { StatusBar } from 'expo-status-bar';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductComponent from "../component/ProductComponent";


export default function HomeScreen(props) {
    const { prods, onAddCart } = props;
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(prods);
    const handleText = (val) => {
        setSearch(val);

        let filterProducts = prods.filter(e => e.name.toLowerCase().includes(val.toLowerCase()));
        setProducts(filterProducts);
    }
    return (
        <View style={styles.container}>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={handleText}
                value={search}
            />
            <FlatList
                data={products}
                renderItem={data => <ProductComponent key={data.item.id} onAddCart={onAddCart} product={data.item} />}
                keyExtractor={item => item.id}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rupeeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#21610B',
        margin: 10
    }
});
