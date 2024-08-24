import React, { useState } from "react";
import { View, FlatList, Button, Text, Image, Pressable } from 'react-native';
import { items as initialItems } from "./Components/database";
import globalStyles from '../styles/globalStyles';
import screenStyles from "../styles/screenStyles";
import shoppingCartStyles from '../styles/shoppingCartStyles'

const ShoppingCart = ({ navigation }) => {
    const [items, setItems] = useState(initialItems);

    const decreaseQuantity = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item));
    };

    const increaseQuantity = (id) => {
        setItems(items.map(item => item.id === id ? { ...item, quantity: Math.min(99, item.quantity + 1) } : item));
    };

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const getTotalValue = () => {
        return items.reduce((total, item) => total + item.value * item.quantity, 0);
    };

    const renderItem = ({ item }) => (
        <View style={shoppingCartStyles.itemContainer}>
            <Image source={{ uri: item.image }} style={globalStyles.image} />
            <View style={globalStyles.itemDetails}>
                <Text style={globalStyles.itemName}>{item.name}</Text>
                <Text style={shoppingCartStyles.itemDescription}>{item.description}</Text>
                <Text style={globalStyles.itemPrice}>${item.value} x {item.quantity}</Text>
                <View style={shoppingCartStyles.quantityContainer}>
                    <Pressable onPress={() => decreaseQuantity(item.id)} style={shoppingCartStyles.quantityButton}>
                        <Text style={globalStyles.emoji}>➖</Text>
                    </Pressable>
                    <Text style={shoppingCartStyles.quantityText}>{item.quantity}</Text>
                    <Pressable onPress={() => increaseQuantity(item.id)} style={shoppingCartStyles.quantityButton}>
                        <Text style={globalStyles.emoji}>➕</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => removeItem(item.id)} style={shoppingCartStyles.deleteButton}>
                    <Text style={globalStyles.emoji}>🗑️</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <View style={globalStyles.container}>
            <View style={screenStyles.headerWave}>
                <Text style={globalStyles.headerText}>Carrito de compras</Text>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                ListFooterComponent={
                    <View style={shoppingCartStyles.footer}>
                        <Text style={shoppingCartStyles.total}>Valor total: ${getTotalValue()}</Text>
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

export default ShoppingCart;
