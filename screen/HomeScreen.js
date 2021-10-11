import { StatusBar } from 'expo-status-bar';
import { Card, ListItem, Button, Icon, SearchBar } from 'react-native-elements';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductComponent from "../component/ProductComponent";


export default function HomeScreen(props) {
    const { products } = props;
    const [search, setSearch] = useState('');
    const handleText = (val) => {
        setSearch(val);
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
                renderItem={data => <ProductComponent key={data.item.id} product={data.item} />}
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
