import React, { useState } from "react";
import { View, StyleSheet, FlatList, Button, Text, Image } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { items as initialItems } from "./Components/database";

const ShoppingCart = ({ navigation }) => {
    const [items, setItems] = useState(initialItems);

    const decreaseQuantity = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
    };

    const increaseQuantity = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity: Math.min(99,item.quantity + 1) } : item));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const getTotalValue = () => {
        return items.reduce((total, item) => total + item.value * item.quantity, 0);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>${item.value} x {item.quantity}</Text>
                <View style={styles.quantityContainer}>
                    <IconButton 
                        icon="minus" 
                        onPress={() => decreaseQuantity(item.id)} 
                        style={styles.quantityButton}
                    />
                    <Text style={styles.quantityText}>{item.quantity}</Text>
                    <IconButton 
                        icon="plus" 
                        onPress={() => increaseQuantity(item.id)} 
                        style={styles.quantityButton}
                    />
                </View>
                <IconButton 
                    icon="delete" 
                    onPress={() => removeItem(item.id)}
                    style={styles.deleteButton}
                />
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    <View style={styles.footer}>
                        <Text style={styles.total}>Valor total: ${getTotalValue()}</Text>
                        <Button 
                            onPress={() => navigation.navigate('PaymentBranch')}
                            title="Proceder al pago"
                            color="#7B1FA2"
                        />
                    </View>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F3F1F5',
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 8,
        backgroundColor: '#EDE7F6',
    },
    itemDetails: {
        flex: 1,
        marginLeft: 10,
    },
    itemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4A148C',
    },
    itemDescription: {
        fontSize: 14,
        color: '#757575',
        marginVertical: 4,
    },
    itemPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#7B1FA2',
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    quantityButton: {
        backgroundColor: '#EDE7F6',
    },
    quantityText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
        color: '#4A148C', 
    },
    deleteButton: {
        alignSelf: 'flex-end',
        marginTop: 5,
    },
    footer: {
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    total: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A148C',
        marginBottom: 10,
    },
});

export default ShoppingCart;