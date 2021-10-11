import { StatusBar } from 'expo-status-bar';
import { Card, ListItem, Button, Icon, Image } from 'react-native-elements';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProductComponent(props) {
    const { product } = props;
    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>{product.name}</Card.Title>
                <Card.Divider />
                <Image
                    source={{ uri: "http://lorempixel.com/400/200/" }}
                    style={{ width: '100%', height: 200 }}
                />
                <View style={styles.priceContainer}>

                    <Text style={styles.textPrice}>
                        In stock : {product.stock}
                    </Text>
                    <View style={styles.rupeeContainer}>
                        <Icon type='font-awesome' name='rupee' color='teal' />
                        <Text style={styles.textPrice}>{product.price}</Text>
                    </View>

                </View>
                <Button
                    icon={<Icon type='font-awesome' name='cart-plus' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='  Add to cart' />
            </Card>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 380,
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
